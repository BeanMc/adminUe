/**
 * Created by HuycongNguyen on 11/10/2016.
 */

Meteor.startup(function () {

    process.env.ROOT_URL = "http://dev.chord:4200";
    process.env.CLIENT_URL = "http://localhost:4500";
});
Meteor.methods({
    "manualPayment": function (idCustomer, idTour, paymentStatus, index) {
        // http://dev.eznetcafe.com:4500/rdp?mid=0000021474&order_number=web&result=Paid&error_code=9967&merchant_reference=RDP&currency_code=SGD&amount=1523.00&merchant_data1=NRMBEzMopjJ2zujvY&merchant_data4=MoNjggFpcr5czWYmA&signature=6c1f80237471ec4e5b421b06fad2be21
        // if(paymentStatus==="REFUND"){
        //     // this.unblock();
        //     var getTour = Tour.findOne(idTour);
        //     var getTrip = Trip.findOne(getTour.trip);
        //     var peopleInTravel = getTour['peopleInTravel'][index];
        //     var aboutCustomer = Customers.findOne(peopleInTravel.idCustomer);
        //
        //     var add = {};
        //     add['peopleInTravel.' + index + '.paymentStatus'] = paymentStatus;
        //     Tour.update(
        //         {_id: idTour},
        //         {
        //             $set: add
        //         }
        //     );
        //     return "DONE!";
        // }


        var obj = {
            amount: 0,
            currency_code: "SGD",
            merchant_data1: idCustomer,
            merchant_data4: idTour,
            merchant_reference: "RDP",
            mid: 21474,
            order_number: Random.id(5),
            result: "Paid",
            signature: "6c1f80237471ec4e5b421b06fad2be21",
        };
        //CHECK PEOPLE PAYMENT STATUS
        var tourCustomer = Tour.findOne({_id: idTour}).peopleInTravel[index];
        console.log(tourCustomer);
        if (tourCustomer.payment === "none" && paymentStatus === "DEPOSIT ACCEPTED") {
            obj.amount = Tour.findOne({_id: idTour}).depositPayable;
        }

        else if (tourCustomer.payment === "deposit" && paymentStatus == "FULLY PAID ACCEPTED") {
            obj.amount = tourCustomer.totalPrice;
        }
        else if (tourCustomer.payment === "none" && paymentStatus === "FULLY PAID ACCEPTED") {
            return "PLEASE CHOSE DEPOSIT AFTER CHOSE FULLY PAYMENT";
        }

        else {
            return "CANNOT DONE SYSTEM ERROR";
        }
        var rootUrl = process.env.ROOT_URL;
        console.log(process.env.ROOT_URL);
        //http://unusualexpedition.com
        HTTP.call("GET", process.env.CLIENT_URL + "/rdp?" + Object.toQueryString(obj),
            function (error, result) {
                if (!error) {
                    return "ok";
                }

                console.log(process.env.CLIENT_URL + "/rdp?" + Object.toQueryString(obj));
                return error;
            });
        return "DONE";

    },
    "log": function () {
        return SyncedCron['_entries']['test']['job']()
    },
    "confirm": function (data) {
        Tour.update({_id: data["_id"]}, {
            $set: {
                status: 'confirm',
            }
        });
    },
    "delete": function (id) {
        Tour.remove({_id: id});
    },
    'historyLogin': function (id) {
        if (id) {
            Meteor.users.update({_id: id}, {
                $set: {
                    dateLogin1: new Date(),
                }

            }, {upsert: true})
        }


    },


    'lastLogin': function (id) {
        return Meteor.users.find({_id: id}).fetch()[0];
    },


    "sendEmail": function (to, from, subject, data, text) {

        var aboutTour = Trip.findOne({_id: data.trip});
        if (to[0]) {

            check([to.map(function (item) {
                return item['email']
            })[0], from, subject, text], [String]);
            to.map(function (item) {
                // Email.send({
                //     to: item['email'],
                //     from: from,
                //     subject: subject,
                //     text: text
                // })

                Assets.getText('result.html', function (err, res) {
                    if (res) {
                        SSR.compileTemplate('emailText', res);
                        var html = SSR.render('emailText', {
                            date: data.tourDateStart,
                            reason: text,
                            tourName: aboutTour.tourName,
                            image: Meteor.absoluteUrl('cfs/files/image/QmFjhuPLnDJzZBLYY')

                        });
                        process.env.MAIL_URL = "smtps://unusualexpeditionsingapore%40gmail.com:admin1234@@smtp.gmail.com:465/";
                        Email.send({
                            to: item['email'],
                            cc: 'unusualexpeditionsingapore@gmail.com',
                            from: 'unusualexpeditionsingapore@gmail.com',
                            subject: 'UNUNUSUAL EXPEDITION',
                            // text: text,
                            html: html,
                            // attachments: attachments
                        });
                    }
                })
            })

        }


    },
    "sendEmailToFullPayment": function (data, subject, type) {
        this.unblock();
        var aboutTour = Trip.findOne({_id: data.trip});
        if (type === 'fullPayment') {
            data['peopleInTravel'].forEach(function (item) {
                if (!item.secondPayment) {
                    console.log("s");
                    process.env.MAIL_URL = "smtps://unusualexpeditionsingapore%40gmail.com:admin1234@@smtp.gmail.com:465/";
                    Assets.getText('fullPayment.html', function (err, res) {
                        if (res) {
                            SSR.compileTemplate('emailText', res);
                            var html = SSR.render('emailText', {
                                linkFullPayment: item.linkFullPayment,
                                tourName: aboutTour.tourName,
                                dayPlan: aboutTour.DayPlan.planNumberDay
                            });
                            Email.send({
                                to: Customers.findOne(item.idCustomer).email,
                                cc: 'unusualexpeditionsingapore@gmail.com',
                                from: 'unusualexpeditionsingapore@gmail.com',
                                subject: 'UNUNUSUAL EXPEDITION',
                                // text: text,
                                html: html,
                            });
                        }
                    })
                }
                // return Customers.find({_id: item['idCustomer']}, {fields: {email: 1}}).fetch()[0];
            })
        }
        else {
            data['peopleInTravel'].forEach(function (item) {
                if (!item.firstPayment) {
                    process.env.MAIL_URL = "smtps://unusualexpeditionsingapore%40gmail.com:admin1234@@smtp.gmail.com:465/";
                    Assets.getText('fullPayment.html', function (err, res) {
                        if (res) {
                            SSR.compileTemplate('emailText', res);
                            var html = SSR.render('emailText', {
                                linkFullPayment: item.linkFullPayment,
                                linkdeposit: item.linkdeposit || "",
                                tourName: aboutTour.tourName,
                                dayPlan: aboutTour.DayPlan.planNumberDay
                            });
                            Email.send({
                                to: Customers.find({_id: item['idCustomer']}, {fields: {email: 1}}).fetch()[0],
                                cc: 'unusualexpeditionsingapore@gmail.com',
                                from: 'unusualexpeditionsingapore@gmail.com',
                                subject: 'UNUNUSUAL EXPEDITION',
                                // text: text,
                                html: html,
                            });
                        }
                    })
                }
                // return Customers.find({_id: item['idCustomer']}, {fields: {email: 1}}).fetch()[0];
            })
        }

    },


    "updateCancel": function (id, reason) {
        Tour.update({_id: id}, {
            $set: {
                reason: reason,
                cancelAt: new Date(),
                cancelTour: true
            }
        })
    },
    "sendTripNote": function (email, id) {
        this.unblock();


        // console.log(         HTTP.get(Meteor.absoluteUrl('pdf?id=' + id)));
        var cid_value = Date.now() + '.image.jpg';
        var attachments = [
            {
                filename: 'unusual-expedition-TripNote.pdf',
                // filePath: Meteor.absoluteUrl('pdf?id=' + id),
                path: Meteor.absoluteUrl('/pdf?id=' + id),
                cid: cid_value
            }
        ];

        console.log(attachments);
        process.env.MAIL_URL = "smtps://unusualexpeditionsingapore%40gmail.com:admin1234@@smtp.gmail.com:465/";
        Email.send({
            to: email,
            // cc: 'unusualexpeditionsingapore@gmail.com',
            from: 'unusualexpeditionsingapore@gmail.com',
            subject: 'Unusual-Expedition',
            text: "Trip note",
            attachments: attachments
        });
        // Meteor.call("sendEmail2", email);
        return "OK"
    },
    'sendInvoice': function (index, idTour, type) {
        this.unblock();
        var getTour = Tour.findOne(idTour);
        var getTrip = Trip.findOne(getTour.trip);
        var peopleInTravel = getTour['peopleInTravel'][index];
        var aboutCustomer = Customers.findOne(peopleInTravel.idCustomer);
        var rawPrice = aboutCustomer.historyBook.findAll(function (item) {
            return item.idTour === idTour;
        }).last();

        var gethtml = '';
        if (type === 'deposit') {
            gethtml = '/gethtml/depositInvoice.html';
            if (!peopleInTravel.firstPayment) {
                return "Client haven deposit"
            }
        }
        else {
            gethtml = '/gethtml/reInvoice.html';
            if (!peopleInTravel.secondPayment) {
                return "this customer is not full payment ";
            }
        }


        var couponPrice = 0;
        if (rawPrice.discount) {
           var  coupon = Coupon.findOne({_id: rawPrice.discount});
            if (coupon.discountType === 'flat') {
                couponPrice = coupon.discountValue;
            }
            else {
                couponPrice = ((rawPrice.mainPrice + rawPrice.optionalPrice) * (coupon.discountValue / 100));
            }
        }

        HTTP.get(Meteor.absoluteUrl(gethtml), {}, function (err, res) {
            if (res) {
                SSR.compileTemplate('htmlPDF', res.content);
                //
                if (type === "deposit") {
                    Template.htmlPDF.helpers({
                        invoiceNumber: function () {
                            return peopleInTravel.order_number;
                        },
                        paymentMethod: function () {
                            if (peopleInTravel.paymentMethod === "bookviavisa") {
                                return "via VISA/MASTERCARD";
                            }
                            else {
                                return "via BANK/CHEQUE ";
                            }
                        },
                        date: function () {
                            return (new Date()).format('{dd}/{MM}/{yyyy}');
                        },
                        firstPayment: function () {

                            return peopleInTravel.firstPayment;
                        },

                        secondPayment: function () {
                            return peopleInTravel.secondPayment;
                        },

                        fullName: function () {
                            return aboutCustomer.firstname + "     " + aboutCustomer.lastname
                        },
                        passport: function () {
                            return aboutCustomer.passportNo;
                        },
                        email: function () {
                            return aboutCustomer.email;
                        },
                        address: function () {
                            return aboutCustomer.address1;
                        },
                        phone: function () {
                            return "+" + aboutCustomer.phoneCode + "  " + aboutCustomer.phone;
                        },
                        name: function () {
                            return getTrip.tourName;
                        },
                        tourPrice: function () {
                            return rawPrice.mainPrice;
                        },
                        option: function () {
                            return rawPrice;
                        },
                        // options:function () {
                        //
                        // },
                        discount: function () {
                            return couponPrice;
                        },
                        dayPlan: function () {
                            return getTrip['DayPlan']['planNumberDay'];
                        },

                        inclusion: function () {
                            return getTrip['tripInclusion'];
                        },
                        exclusion: function () {
                            return getTrip['tripExclusion'];
                        },

                        total: function () {
                            return rawPrice.mainPrice + rawPrice.optionalPrice;
                        },

                        deposit: function () {
                            return getTour['depositPayable'];
                        },

                        image: function () {
                            return Assets.getText("image/logo02.txt");
                        },
                        tourCode: function () {
                            return (getTour.tourDateStart.format('{MM}')) + ((getTour.tourDateStart.format('{yy}'))) + (getTour.tourDateEnd.format('{dd}')) + getTrip.Location + getTour.tourDateStart.daysAgo(getTour.tourDateEnd) + 'D' + getTrip.Instructor;
                        },
                        calculator: function (total, deposit) {
                            return total - deposit - couponPrice;
                        },
                        totalAll: function (total, discount) {
                            return total - discount;
                        },
                        totalAmount: function (total, deposit) {
                            return total - deposit - couponPrice;
                        },

                    });
                }
                else {
                    Template.htmlPDF.helpers({
                        invoiceNumber: function () {
                            return peopleInTravel.order_number;
                        },
                        paymentMethod: function () {
                            if (peopleInTravel.paymentMethod === "bookviavisa") {
                                return "via VISA/MASTERCARD";
                            }
                            else {
                                return "via BANK/CHEQUE ";
                            }
                        },
                        depositAt: function () {
                            if (peopleInTravel.depositAt) {
                                return (peopleInTravel.depositAt).format('{dd}/{MM}/{yyyy}');

                            }
                        },
                        fullPaymentAt: function () {
                            if (peopleInTravel.fullPaymentAt) {
                                return (peopleInTravel.fullPaymentAt).format('{dd}/{MM}/{yyyy}');
                            }
                        },
                        date: function () {
                            return (new Date()).format('{dd}/{MM}/{yyyy}');
                        },
                        balance: function () {
                            return peopleInTravel.firstPayment || 0;
                        },

                        secondPayment: function () {
                            return peopleInTravel.secondPayment;
                        },

                        fullName: function () {
                            return aboutCustomer.firstname + "     " + aboutCustomer.lastname
                        },
                        passport: function () {
                            return aboutCustomer.passportNo;
                        },
                        email: function () {
                            return aboutCustomer.email;
                        },
                        address: function () {
                            return aboutCustomer.address1;
                        },
                        phone: function () {
                            return "+" + aboutCustomer.phoneCode + "  " + aboutCustomer.phone;
                        },
                        name: function () {
                            return getTrip.tourName;
                        },
                        tourPrice: function () {
                            return rawPrice.mainPrice;
                        },
                        option: function () {
                            return rawPrice;
                        },
                        // options:function () {
                        //
                        // },
                        discount: function () {
                            return couponPrice;
                        },
                        dayPlan: function () {
                            return getTrip['DayPlan']['planNumberDay'];
                        },

                        inclusion: function () {
                            return getTrip['tripInclusion'];
                        },
                        exclusion: function () {
                            return getTrip['tripExclusion'];
                        },

                        total: function () {
                            return rawPrice.mainPrice + rawPrice.optionalPrice;
                        },

                        deposit: function () {
                            return getTour['depositPayable'];
                        },

                        image: function () {
                            return Assets.getText("image/logo02.txt");
                        },
                        tourCode: function () {
                            return (getTour.tourDateStart.format('{MM}')) + ((getTour.tourDateStart.format('{yy}'))) + (getTour.tourDateEnd.format('{dd}')) + getTrip.Location + getTour.tourDateStart.daysAgo(getTour.tourDateEnd) + 'D' + getTrip.Instructor;
                        },
                        calculator: function (total, deposit) {
                            return total - deposit - couponPrice;
                        },
                        totalAll: function (balance, firstPayment) {
                            return (firstPayment || 0) + parseInt(balance);
                        },
                        totalAmount: function (total) {
                            return total  - couponPrice;
                        },
                        firstPayment: function () {
                            return peopleInTravel.firstPayment;
                        },
                        checkFirstPayment: function (firstPayment) {
                            if (firstPayment === 0 || !firstPayment) {
                                return false;
                            }
                            return true
                        }
                    });
                }


                var html1 = SSR.render('htmlPDF', {});
                //-------------------------------------
                var pdf = Npm.require('html-pdf');
                var pdfsPath = process.env.PWD + '/server/pdfs/' + Random.id(8) + '.pdf';
                config = {
                    "directory": pdfsPath,
                    // "directory": "/tmp",       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp'
                    // "height": "10.5in",        // allowed units: mm, cm, in, px
                    // "width": "8in",            // allowed units: mm, cm, in, px
                    "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
                    "orientation": "landscape", // portrait or landscape
                    // Page options
                    // "border": "0",
                    // default is 0, units: mm, cm, in, px
                    "border": {
                        "top": "0.1in",            // default is 0, units: mm, cm, in, px
                        "right": "0.1in",
                        "bottom": "0.5in",
                        "left": "0.1in"
                    },

                    "header": {
                        "height": "20mm",
                        // first:'<div class="tripnote-header-text">TRIP NOTE</div>',
                        // // "contents": '<div class="tripnote-header w-clearfix"><div class="tripnote-header-text">TRIP NOTE</div><img style="height: 25px;margin-top: 20px;float: right;" sizes="165.703125px" src="'+ Assets.getText("image/TypeA.txt")+ '"></div>'
                        // "contents": '<img style="height: 50px; float: right;" sizes="165.703125px" src="'+ Assets.getText("image/logo02.txt")+ '">'
                    },
                    // "footer": {
                    //     // "height": "28mm",
                    //     "contents": {
                    //         // first: 'Cover page',
                    //         // 2: 'Second page', // Any page number is working. 1-based index
                    //         default: '<div  style="display: inline-block;line-height: 14px;font-size: 10px;padding: 20px 50px;">UNUSUAL EXPEDITION PTE LTD<div style="float: right;font-size: 8px;font-weight: 700;text-align: right;">© Copyright. ALL RIGHTS RESERVED.</div><div style="  line-height: 10px;  font-size: 8px; color: #5c5c5c;  padding-bottom: 10px; display: inline-block;" ">TA License: 02513 Company Registration: 201400451K<br>1, Rochor Canal Road, #06‐34C, <br>Sim Lim Square, Singapore 188504<br>Tel: +65 6591 8811 Email: contact@unusualexpedition.com</div></div>' // fallback value
                    //         // last: 'Last Page'
                    //     }
                    // }
                };
                pdf.create(html1, config).toFile(pdfsPath, Meteor.bindEnvironment(function (err, resq) {
                    var cid_value = Date.now() + '.image.jpg';
                    var attachments = [];
                    var attachments2 = [];
                    // process.env.MAIL_URL = "smtp://unusualexpeditionsingapore%40gmail.com:admin123@@smtp.gmail.com:465/";


                    attachments = [
                        {
                            filename: 'unusual-expedition-TripInvoice.pdf',
                            path: resq.filename,
                            // contentType: 'application/pdf',
                            cid: cid_value,
                        },
                    ];


                    // attachments2 = [
                    //     {
                    //         fileName: 'unusual-expedition-TripInvoice.pdf',
                    //         filePath: 'http://dev.chord:4500/htmlServer?id=aGtkJPvhxv4KzFocu',
                    //         cid: cid_value
                    //     },
                    // ];
                    // Meteor.call('sendEmail',customer, 'unusualexpeditionsingapore@gmail.com',subject,html,attachments);
                    process.env.MAIL_URL = "smtps://unusualexpeditionsingapore%40gmail.com:admin1234@@smtp.gmail.com:465/";
                    Email.send({
                        to: aboutCustomer.email,
                        cc: 'unusualexpeditionsingapore@gmail.com',
                        from: 'unusualexpeditionsingapore@gmail.com',
                        subject: 'Unusual-Expedition -' + getTrip.tourName + '- ' + (getTour.tourDateStart.format('{MM}')) + ((getTour.tourDateStart.format('{yy}'))) + (getTour.tourDateEnd.format('{dd}')) + getTrip.Location + getTour.tourDateStart.daysAgo(getTour.tourDateEnd) + 'D' + getTrip.Instructor,
                        text: "Trip Invoice ",
                        // html: html,
                        attachments: attachments
                    });
                    var fs = Npm.require('fs');
                    fs.unlink(pdfsPath, function (err) {
                        if (err) return console.log(err);
                        console.log('file deleted successfully');
                    });
                }));
            }
        });
        return "DONE"


    },

    'sendRefund': function (index, idTour, type) {
        this.unblock();
        var getTour = Tour.findOne(idTour);
        var getTrip = Trip.findOne(getTour.trip);
        var peopleInTravel = getTour['peopleInTravel'][index];
        if(peopleInTravel.paymentStatus==="REFUND"){
            return "this customer is refund";
        }
        var gethtml = '';
        var amountRefund= 0;
        if (type === 'full') {
            gethtml = '/gethtml/refundFull.html';
            amountRefund= peopleInTravel.secondPayment +(peopleInTravel.firstPayment||0)
        }
        else {
            gethtml = '/gethtml/refundBalance.html';
            amountRefund= peopleInTravel.secondPayment
            if (!peopleInTravel.secondPayment) {
                return "this customer is not full payment ";
            }
        }
        if (peopleInTravel.paymentStatus !== "REFUND" && peopleInTravel.payment !== "none") {
            var aboutCustomer = Customers.findOne(peopleInTravel.idCustomer);
            var rawPrice = aboutCustomer.historyBook.findAll(function (item) {
                return item.idTour === idTour;
            }).last();



            // var add = {};
            // add['peopleInTravel.' + index + '.refund'] = true;
            // Travel.update(
            //     {_id: idTour},
            //     {
            //         $set: add
            //     }
            // );

            var couponPrice = 0;
            if (rawPrice.discount) {
                var  coupon = Coupon.findOne({_id: rawPrice.discount});
                if (coupon.discountType === 'flat') {
                    couponPrice = coupon.discountValue;
                }
                else {
                    couponPrice = ((rawPrice.mainPrice + rawPrice.optionalPrice) * (coupon.discountValue / 100));
                }
            }


            HTTP.post(process.env.CLIENT_URL + '/refund?index=' + index + '&idTour=' + idTour+ '&amount=' + amountRefund);
            var pdfsPath = process.env.PWD + '/server/pdfs/' + Random.id(8) + '.pdf';
            HTTP.get(Meteor.absoluteUrl(gethtml), {}, function (err, res) {
                if (res) {
                    SSR.compileTemplate('htmlPDF', res.content);
                    //
                    Template.htmlPDF.helpers({
                        totalAmount: function (total) {
                            return total -couponPrice;
                        },

                        invoiceNumber: function () {
                            return peopleInTravel.order_number;
                        },
                        date: function () {
                            return (new Date()).format('{dd}/{MM}/{yyyy}');
                        },
                        firstPayment: function () {
                            return peopleInTravel.firstPayment;
                        },
                        balance: function () {
                            return peopleInTravel.firstPayment;
                        },
                        secondPayment: function () {
                            return peopleInTravel.secondPayment || false;
                        },
                        paymentMethod: function () {
                            if (peopleInTravel.paymentMethod === "bookviavisa") {
                                return "via VISA/MASTERCARD";
                            }
                            else {
                                return "via BANK/CHEQUE ";
                            }
                        },
                        depositAt: function () {
                            if (peopleInTravel.depositAt) {
                                return (peopleInTravel.depositAt).format('{dd}/{MM}/{yyyy}');
                            }
                        },
                        fullPaymentAt: function () {
                            return (peopleInTravel.fullPaymentAt).format('{dd}/{MM}/{yyyy}');
                        },

                        fullName: function () {
                            return aboutCustomer.firstname + "     " + aboutCustomer.lastname
                        },
                        passport: function () {
                            return aboutCustomer.passportNo;
                        },
                        email: function () {
                            return aboutCustomer.email;
                        },
                        address: function () {
                            return aboutCustomer.address1;
                        },
                        phone: function () {
                            return "+" + aboutCustomer.phoneCode + "  " + aboutCustomer.phone;
                        },
                        name: function () {
                            return getTrip.tourName;
                        },
                        tourPrice: function () {
                            return rawPrice.mainPrice;
                        },
                        option: function () {
                            return rawPrice;
                        },
                        // options:function () {
                        //
                        // },
                        discount: function () {
                            return couponPrice;
                        },
                        dayPlan: function () {
                            return getTrip['DayPlan']['planNumberDay'];
                        },

                        inclusion: function () {
                            return getTrip['tripInclusion'];
                        },
                        exclusion: function () {
                            return getTrip['tripExclusion'];
                        },

                        total: function () {
                            return rawPrice.mainPrice + rawPrice.optionalPrice;
                        },

                        deposit: function () {
                            return getTour['depositPayable'];
                        },

                        image: function () {
                            return Assets.getText("image/logo02.txt");
                        },
                        tourCode: function () {
                            return (getTour.tourDateStart.format('{MM}')) + ((getTour.tourDateStart.format('{yy}'))) + (getTour.tourDateEnd.format('{dd}')) + getTrip.Location + getTour.tourDateStart.daysAgo(getTour.tourDateEnd) + 'D' + getTrip.Instructor;
                        },
                        calculator: function (total, deposit) {
                            return total - deposit - couponPrice;
                        },
                        refundFull: function (first, second) {
                            return first + (second || 0);
                        },

                        totalAll: function (second, first) {
                            return second + (first||0);
                        }


                    });

                    var html1 = SSR.render('htmlPDF', {});
                    //-------------------------------------
                    var pdf = Npm.require('html-pdf');
                    config = {
                        "directory": pdfsPath,
                        // "directory": "/tmp",       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp'
                        // "height": "10.5in",        // allowed units: mm, cm, in, px
                        // "width": "8in",            // allowed units: mm, cm, in, px
                        "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
                        "orientation": "landscape", // portrait or landscape
                        // Page options
                        // "border": "0",
                        // default is 0, units: mm, cm, in, px
                        "border": {
                            "top": "0.1in",            // default is 0, units: mm, cm, in, px
                            "right": "0.1in",
                            "bottom": "0.5in",
                            "left": "0.1in"
                        },

                        "header": {
                            "height": "20mm",
                            // first:'<div class="tripnote-header-text">TRIP NOTE</div>',
                            // // "contents": '<div class="tripnote-header w-clearfix"><div class="tripnote-header-text">TRIP NOTE</div><img style="height: 25px;margin-top: 20px;float: right;" sizes="165.703125px" src="'+ Assets.getText("image/TypeA.txt")+ '"></div>'
                            // "contents": '<img style="height: 50px; float: right;" sizes="165.703125px" src="'+ Assets.getText("image/logo02.txt")+ '">'
                        },
                        // "footer": {
                        //     // "height": "28mm",
                        //     "contents": {
                        //         // first: 'Cover page',
                        //         // 2: 'Second page', // Any page number is working. 1-based index
                        //         default: '<div  style="display: inline-block;line-height: 14px;font-size: 10px;padding: 20px 50px;">UNUSUAL EXPEDITION PTE LTD<div style="float: right;font-size: 8px;font-weight: 700;text-align: right;">© Copyright. ALL RIGHTS RESERVED.</div><div style="  line-height: 10px;  font-size: 8px; color: #5c5c5c;  padding-bottom: 10px; display: inline-block;" ">TA License: 02513 Company Registration: 201400451K<br>1, Rochor Canal Road, #06‐34C, <br>Sim Lim Square, Singapore 188504<br>Tel: +65 6591 8811 Email: contact@unusualexpedition.com</div></div>' // fallback value
                        //         // last: 'Last Page'
                        //     }
                        // }
                    };
                    pdf.create(html1, config).toFile(pdfsPath, Meteor.bindEnvironment(function (err, resq) {
                        var cid_value = Date.now() + '.image.jpg';
                        var attachments = [];
                        var attachments2 = [];
                        // process.env.MAIL_URL = "smtp://unusualexpeditionsingapore%40gmail.com:admin123@@smtp.gmail.com:465/";


                        attachments = [
                            {
                                filename: 'unusual-expedition-TripInvoice.pdf',
                                path: resq.filename,
                                // contentType: 'application/pdf',
                                cid: cid_value,
                            },
                        ];

                        process.env.MAIL_URL = "smtps://unusualexpeditionsingapore%40gmail.com:admin1234@@smtp.gmail.com:465/";
                        Email.send({
                            to: aboutCustomer.email,
                            cc: 'unusualexpeditionsingapore@gmail.com',
                            from: 'unusualexpeditionsingapore@gmail.com',
                            subject: 'Unusual-Expedition -' + getTrip.tourName + '- ' + (getTour.tourDateStart.format('{MM}')) + ((getTour.tourDateStart.format('{yy}'))) + (getTour.tourDateEnd.format('{dd}')) + getTrip.Location + getTour.tourDateStart.daysAgo(getTour.tourDateEnd) + 'D' + getTrip.Instructor,
                            text: "Refund Invoice ",
                            // html: html,
                            attachments: attachments
                        });

                        var fs = Npm.require('fs');
                        fs.unlink(pdfsPath, function (err) {
                            if (err) return console.log(err);
                            console.log('file deleted successfully');

                        });
                    }));
                }
            });

            return "DONE";

        }

    },
    'sendlinkfullpayment': function (index, idTour, type) {
        this.unblock();
        var getTour = Tour.findOne(idTour);
        var getTrip = Trip.findOne(getTour.trip);
        var peopleInTravel = getTour['peopleInTravel'][index];
        var aboutCustomer = Customers.findOne(peopleInTravel.idCustomer);
        var rawPrice = aboutCustomer.historyBook.findAll(function (item) {
            return item.idTour === idTour;
        }).last();


        var gethtml = '/gethtml/linkFullPayment.html';
        if (peopleInTravel.firstPayment) {
            var couponPrice = 0;
            if (peopleInTravel.coupon) {
                if (peopleInTravel.discountType === 'flat') {
                    couponPrice = peopleInTravel.discountValue;
                }
                else {
                    couponPrice = ((rawPrice.mainPrice + rawPrice.optionalPrice) * (peopleInTravel.discountValue / 100));
                }
            }
            HTTP.get(Meteor.absoluteUrl(gethtml), {}, function (err, res) {
                if (res) {
                    SSR.compileTemplate('htmlPDF', res.content);
                    //
                    Template.htmlPDF.helpers({
                        firstname: function () {
                            return aboutCustomer.firstname;
                        },
                        lastname: function () {
                            return aboutCustomer.lastname;
                        },
                        onlinefullpayment: function () {
                            return peopleInTravel.linkFullPayment;
                        },
                        totalAmount: function (total, discount) {
                            return total - discount;
                        },

                        invoiceNumber: function () {
                            return peopleInTravel.order_number;
                        },
                        date: function () {
                            return (new Date()).format('{dd}/{MM}/{yyyy}');
                        },
                        balance: function () {
                            return peopleInTravel.firstPayment;
                        },
                        secondPayment: function () {
                            return peopleInTravel.secondPayment;
                        },
                        paymentMethod: function () {
                            if (peopleInTravel.paymentMethod === "bookviavisa") {
                                return "via VISA/MASTERCARD";
                            }
                            else {
                                return "via BANK/CHEQUE ";
                            }
                        },
                        depositAt: function () {
                            return (peopleInTravel.depositAt).format('{dd}/{MM}/{yyyy}');
                        },
                        fullPaymentAt: function () {
                            return (peopleInTravel.fullPaymentAt).format('{dd}/{MM}/{yyyy}');
                        },

                        fullName: function () {
                            return aboutCustomer.firstname + "     " + aboutCustomer.lastname
                        },

                        passport: function () {
                            return aboutCustomer.passportNo;
                        },
                        email: function () {
                            return aboutCustomer.email;
                        },
                        address: function () {
                            return aboutCustomer.address1;
                        },
                        phone: function () {
                            return "+" + aboutCustomer.phoneCode + "  " + aboutCustomer.phone;
                        },
                        name: function () {
                            return getTrip.tourName;
                        },
                        tourPrice: function () {
                            return rawPrice.mainPrice;
                        },
                        option: function () {
                            return rawPrice;
                        },
                        // options:function () {
                        //
                        // },
                        discount: function () {
                            return couponPrice;
                        },
                        dayPlan: function () {
                            return getTrip['DayPlan']['planNumberDay'];
                        },

                        inclusion: function () {
                            return getTrip['tripInclusion'];
                        },
                        exclusion: function () {
                            return getTrip['tripExclusion'];
                        },

                        total: function () {
                            return rawPrice.mainPrice + rawPrice.optionalPrice;
                        },

                        deposit: function () {
                            return getTour['depositPayable'];
                        },

                        image: function () {
                            return Assets.getText("image/logo02.txt");
                        },
                        tourCode: function () {
                            return (getTour.tourDateStart.format('{MM}')) + ((getTour.tourDateStart.format('{yy}'))) + (getTour.tourDateEnd.format('{dd}')) + getTrip.Location + getTour.tourDateStart.daysAgo(getTour.tourDateEnd) + 'D' + getTrip.Instructor;
                        },
                        calculator: function (total, deposit) {
                            return total - deposit - couponPrice;
                        },
                        refundFull: function (first, second) {
                            return first + (second || 0);
                        },
                        firstPayment: function () {
                            return peopleInTravel.firstPayment;
                        },
                        totalAll: function (second, first) {
                            return second + first;
                        }


                    });

                    var html1 = SSR.render('htmlPDF', {});

                    //-------------------------------------


                    // Meteor.call('sendEmail',customer, 'unusualexpeditionsingapore@gmail.com',subject,html,attachments);
                    process.env.MAIL_URL = "smtps://unusualexpeditionsingapore%40gmail.com:admin1234@@smtp.gmail.com:465/";
                    Email.send({
                        to: aboutCustomer.email,
                        cc: 'unusualexpeditionsingapore@gmail.com',
                        from: 'unusualexpeditionsingapore@gmail.com',
                        subject: 'Unusual-Expedition -' + getTrip.tourName + '- ' + (getTour.tourDateStart.format('{MM}')) + ((getTour.tourDateStart.format('{yy}'))) + (getTour.tourDateEnd.format('{dd}')) + getTrip.Location + getTour.tourDateStart.daysAgo(getTour.tourDateEnd) + 'D' + getTrip.Instructor,
                        text: "Link FullPayment",
                        html: html1,
                        // attachments: attachments
                    });

                }
            });
            return "DONE";


        }
        else {
            return "this customer not deposit";
        }


    },
    "sendEmail2": function (to) {
        console.log(to);
    },
    "test": function () {
        console.log(process.env.ROOT_URL);
    },
})

