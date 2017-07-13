/**
 * Created by HuycongNguyen on 1/7/2017.
 */
// var Sugar = Npm.require('sugar');
var pdfsPath = process.env.PWD + '/public/pdfs';
fs = Npm.require('fs');
Sugar = Npm.require('sugar');
// var cheerio = Npm.require('cheerio');
Picker.route('/listing', function (params, req, response, next) {


    var idTour = Object.fromQueryString(req['url']).id;
    var rawCustomers = Tour.findOne(idTour).peopleInTravel;
    var deposit1=(Tour.findOne(idTour)).depositPayable;
    console.log(deposit1);
    var json2csv = Npm.require('json2csv');
    var fields = ['firstname', 'lastname', 'email','dateOfBirth', 'gender', 'room', 'depositPaid', 'RawPrice','RawNote', 'optionalPrice','optionalNote', 'coupon','couponCode', 'PayablePrice', 'paymentMethod', 'paymentStatus','OrderID', 'request', 'meal', 'address1', 'address2',
        'city', 'zip', 'phoneCode', 'phone', 'agentCode', 'nationality', 'passportNo', 'passportIssue', 'passportExpiryDate', 'kinName', 'kinRelationship', 'kinPhoneNo'];
    var customers = (rawCustomers||[]).map(function (item) {
        var aboutCustomer = Customers.findOne(item.idCustomer);
        var setcoupong = '';
        var getcoupong = '';
        var discountCode='';
        var total = 0;

        var rawPrice = aboutCustomer.historyBook.findAll(function (item2) {
            return item2.idTour == idTour;
        }).last();
        if (rawPrice.discount) {
            setcoupong = Coupon.findOne(rawPrice.discount);
            discountCode = setcoupong.code;
            if (setcoupong) {
                getcoupong = setcoupong.discountValue + (setcoupong.discountType == 'percent' ? '%' : 'SGD');
                if (setcoupong.discountType == 'percent') {
                    total = rawPrice.mainPrice + rawPrice.optionalPrice - ((rawPrice.mainPrice + rawPrice.optionalPrice) * (setcoupong.discountValue / 100));
                    getcoupong =(rawPrice.mainPrice + rawPrice.optionalPrice) * (setcoupong.discountValue / 100);
                }
                else {
                    total = rawPrice.mainPrice + rawPrice.optionalPrice - setcoupong.discountValue;
                    getcoupong= setcoupong.discountValue;
                }
            }
            else {
                getcoupong=0;
                total = rawPrice.mainPrice + rawPrice.optionalPrice;
            }
        }
        else {
            getcoupong=0;
            total = rawPrice.mainPrice + rawPrice.optionalPrice;
        }


        return {
            firstname: aboutCustomer.firstname,
            lastname: aboutCustomer.lastname,
            email: item.email,
            dateOfBirth: aboutCustomer.dateofbird.format('{Dow}, {dd}/{MM}/{yyyy}'),
            gender: aboutCustomer.gender,
            room: item.room,
            depositPaid: deposit1,
            // depositPaid: item.firstPayment,
            // fullpaymentPaid:item.secondPayment||0,
            // totalPaid:item.firstPayment+(item.secondPayment||0),
            RawPrice: rawPrice.mainPrice,
            RawNote: rawPrice.room,
            optionalPrice: rawPrice.optionalPrice,
            optionalNote: rawPrice.optionalNote,
            coupon: getcoupong,
            couponCode: discountCode,
            PayablePrice: total,
            paymentMethod: item.paymentMethod,
            paymentStatus: item.paymentStatus,
            OrderID:item.order_number,
            request: item.request,
            meal: item.meal,
            address1: aboutCustomer.address1,
            address2: aboutCustomer.address2,
            city: aboutCustomer.city,
            zip: aboutCustomer.zip,
            phoneCode: aboutCustomer.phoneCode,
            phone: aboutCustomer.phone,
            agentCode: aboutCustomer.agentCode,
            nationality: aboutCustomer.nationality,
            passportNo: aboutCustomer.passportNo,
            passportIssue: aboutCustomer.passportIssue,
            // passportExpiryDate:Sugar.Date(aboutCustomer.passportExpiryDate).format('{Dow}  {dd}/{MM}/{yy}'),
            passportExpiryDate: aboutCustomer.passportExpiryDate,
            kinName: aboutCustomer.kinName,
            kinRelationship: aboutCustomer.kinRelationship,
            kinPhoneNo: aboutCustomer.kinPhoneNo,
        }
    });

    var csv = json2csv({data: customers, fields: fields});
    response.writeHead(200, {
        "Content-Type": "text/CSV",
        // "Content-Length": csv.length
    });
    response.write(csv);
    response.end();


    // url2pdf.renderFromHTML(gethtml.content, {
    //     paperSize: {format: "A3", orientation: 'landscape'}, //Pretty self explanatory, adjust as needed
    //     saveDir: pdfsPath,
    //     idLength: 30,
    // }).then(function (path) {
    //     console.log(path);
    //     fs.openSync(path,"r+");
    //     fs.readFile(path, function (err, data) {
    //         response.writeHead(200, {
    //             // "Content-Type": "application/pdf",
    //             "Content-Type": "application/CSV",
    //             "Content-Length": data.length,
    //         });
    //         response.write(data);
    //         response.end();
    //         fs.unlinkSync(path);
    //     });
    //
    // }).catch(function (err) {
    //     response.status(500).json(err);
    // })
});

Picker.route('/customers', function (params, req, response, next) {
    var rawCustomers = Customers.find().fetch();
    var json2csv = Npm.require('json2csv');
    var fields = ['firstname', 'lastname', 'email', 'gender', 'address1', 'address2',
        'city', 'zip', 'phoneCode', 'phone', 'nationality', 'passportNo', 'passportIssue', 'passportExpiryDate', 'kinName', 'kinRelationship', 'kinPhoneNo', 'agentCode'];
    var customers = rawCustomers.map(function (aboutCustomer) {
        return {
            firstname: aboutCustomer.firstname,
            lastname: aboutCustomer.lastname,
            email: aboutCustomer.email,
            gender: aboutCustomer.gender,
            address1: aboutCustomer.address1,
            address2: aboutCustomer.address2,
            city: aboutCustomer.city,
            zip: aboutCustomer.zip,
            phoneCode: aboutCustomer.phoneCode,
            phone: aboutCustomer.phone,
            nationality: aboutCustomer.nationality,
            passportNo: aboutCustomer.passportNo,
            passportIssue: aboutCustomer.passportIssue,
            // passportExpiryDate:Sugar.Date(aboutCustomer.passportExpiryDate).format('{Dow}  {dd}/{MM}/{yy}'),
            passportExpiryDate: aboutCustomer.passportExpiryDate,
            kinName: aboutCustomer.kinName,
            kinRelationship: aboutCustomer.kinRelationship,
            kinPhoneNo: aboutCustomer.kinPhoneNo,
            agentCode: aboutCustomer.agentCode

        }
    });


    var csv = json2csv({data: customers, fields: fields});
    response.writeHead(200, {
        // "Content-Type": "application/pdf",
        "Content-Type": "text/CSV",
        // "Content-Length": csv.length,
    });
    response.write(csv);
    response.end();
});
Picker.route('/pdf', function (params, req, response, next) {
    console.log("call");

    var idTour = Object.fromQueryString(req['url']).id;
    if(idTour){
        var dataTour = Tour.findOne({_id: idTour});
        var dataTrip = Trip.findOne({_id: dataTour.trip});

        HTTP.get(Meteor.absoluteUrl('/gethtml/trip-note.html'), function (err, res) {
            if (res) {
                SSR.compileTemplate('htmlPDF', res.content);
                //
                Template.htmlPDF.helpers({
                    tour: function () {
                        return dataTour;
                    },
                    trip: function () {
                        return dataTrip;
                    },
                    dateFomat1: function (time) {
                        if(time){
                            return time.format('{Dow}, {dd}/{MM}/{yyyy} ');
                        }
                    },
                    voltage: function (item) {
                        return {
                            text: Assets.getText("noteV/" + item + ".txt"),
                            image: Assets.getText("image/" + item + ".txt")
                        };
                    },


                    image: function () {
                        return Assets.getText("image/logo02.txt");
                    },
                    tourCode: function (tour, trip) {
                        return (tour.tourDateStart.format('{MM}')) + ((tour.tourDateStart.format('{yy}'))) + (tour.tourDateEnd.format('{dd}')) + trip.Location + tour.tourDateStart.daysAgo(tour.tourDateEnd) + 'D' + trip.Instructor;
                    }


                });

                var html = SSR.render('htmlPDF', {});

                //-------------------------------------

                var pdf = Npm.require('html-pdf');
                config = {

                    // "directory": "/tmp",       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp'
                    // "height": "10.5in",        // allowed units: mm, cm, in, px
                    // "width": "8in",            // allowed units: mm, cm, in, px
                    "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
                    "orientation": "portrait", // portrait or landscape
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
                    "footer": {
                        // "height": "28mm",
                        "contents": {
                            // first: 'Cover page',
                            // 2: 'Second page', // Any page number is working. 1-based index
                            default: '<div  style="display: inline-block;line-height: 14px;font-size: 10px;padding: 20px 50px;">UNUSUAL EXPEDITION PTE LTD<div style="float: right;font-size: 8px;font-weight: 700;text-align: right;">© Copyright. ALL RIGHTS RESERVED.</div><div style="  line-height: 10px;  font-size: 8px; color: #5c5c5c;  padding-bottom: 10px; display: inline-block;" ">TA License: 02513 Company Registration: 201400451K<br>1, Rochor Canal Road, #06‐34C, <br>Sim Lim Square, Singapore 188504<br>Tel: +65 6591 8811 Email: contact@unusualexpedition.com</div></div>' // fallback value
                            // last: 'Last Page'
                        }
                    }
                };

                // response.writeHeader(200, {"Content-Type": "text/html"});
                // response.end(html);
                // var filepath=process.env.PWD + '/server/pdfs';
                pdf.create(html, config).toBuffer(function (err, buffer) {
                    response.writeHeader(200, {"Content-Type": "application/pdf"});
                    response.end(buffer);
                });

            }



        })
    }

    else {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.end("Please take tour ID from admin and make link like this http://dev.eznetcafe.com:4500/htmlServer?id=KsAzvC4PBYkcnQ4bW");
    }

});

Picker.route('/invoice', function (params, req, response, next) {

    var idTour = Object.fromQueryString(req['url']).id;
    var rawCustomers = Tour.findOne(idTour).peopleInTravel;
    var deposit1=(Tour.findOne(idTour)).depositPayable;
    console.log(deposit1);
    var json2csv = Npm.require('json2csv');
    var fields = ['firstname', 'lastname', 'email','RawPrice','RawNote', 'optionalPrice','optionalNote', 'coupon','couponCode','OrderID','passportNo'];
    var customers = (rawCustomers||[]).map(function (item) {
        var aboutCustomer = Customers.findOne(item.idCustomer);
        var setcoupong = '';
        var getcoupong = '';
        var discountCode='';
        var total = 0;

        var rawPrice = aboutCustomer.historyBook.findAll(function (item2) {
            return item2.idTour == idTour;
        }).last();


        if (rawPrice.discount) {
            setcoupong = Coupon.findOne(rawPrice.discount);
            discountCode = setcoupong.code;
            if (setcoupong) {
                getcoupong = setcoupong.discountValue + (setcoupong.discountType == 'percent' ? '%' : 'SGD');
                if (setcoupong.discountType == 'percent') {
                    total = rawPrice.mainPrice + rawPrice.optionalPrice - ((rawPrice.mainPrice + rawPrice.optionalPrice) * (setcoupong.discountValue / 100));
                    getcoupong =(rawPrice.mainPrice + rawPrice.optionalPrice) * (setcoupong.discountValue / 100);
                }
                else {
                    total = rawPrice.mainPrice + rawPrice.optionalPrice - setcoupong.discountValue;
                    getcoupong= setcoupong.discountValue;
                }
            }
            else {
                getcoupong=0;
                total = rawPrice.mainPrice + rawPrice.optionalPrice;
            }
        }
        else {
            getcoupong=0;
            total = rawPrice.mainPrice + rawPrice.optionalPrice;
        }


        return {
            firstname: aboutCustomer.firstname,
            lastname: aboutCustomer.lastname,
            email: item.email,
            RawPrice: rawPrice.mainPrice,
            RawNote: rawPrice.room,
            optionalPrice: rawPrice.optionalPrice,
            optionalNote: rawPrice.optionalNote,
            coupon: getcoupong,
            couponCode: discountCode,
            OrderID:item.order_number,
            passportNo: aboutCustomer.passportNo,

        }
    });

    var csv = json2csv({data: customers, fields: fields});
    response.writeHead(200, {
        "Content-Type": "text/CSV",
        // "Content-Length": csv.length
    });
    response.write(csv);
    response.end();


    // url2pdf.renderFromHTML(gethtml.content, {
    //     paperSize: {format: "A3", orientation: 'landscape'}, //Pretty self explanatory, adjust as needed
    //     saveDir: pdfsPath,
    //     idLength: 30,
    // }).then(function (path) {
    //     console.log(path);
    //     fs.openSync(path,"r+");
    //     fs.readFile(path, function (err, data) {
    //         response.writeHead(200, {
    //             // "Content-Type": "application/pdf",
    //             "Content-Type": "application/CSV",
    //             "Content-Length": data.length,
    //         });
    //         response.write(data);
    //         response.end();
    //         fs.unlinkSync(path);
    //     });
    //
    // }).catch(function (err) {
    //     response.status(500).json(err);
    // })
});

