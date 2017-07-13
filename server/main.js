Later = Npm.require('later');
Sugar = Npm.require('sugar');
Sugar.Date.extend();
url2pdf = require("url2pdf");
var ElementQueries = require('css-element-queries/src/ElementQueries');
console.log((new Date()).relativeTo(new Date('2017-01-20T00:00:00.000Z')));
if (Meteor.isServer) {
    Meteor.startup(function () {
        process.env.MAIL_URL = "smtp://unusualexpeditionsingapore%40gmail.com:admin123@@smtp.gmail.com:465/";
        SyncedCron.add({
            name: 'test',
            schedule: function (parser) {
                // return Later.parse.recur().every(20).second();
                return Later.parse.recur().on('01:00:00').time();
            },
            job: function () {
                //TH1
                var tourEnough = [];
                var tourNotEnough = [];
                var sendEmail = function (to, from, subject, text) {
                    check([to, from, subject, text], [String]);
                    // this.unblock();
                    Email.send({
                        to: to,
                        from: from,
                        subject: subject,
                        html: text
                    });
                }


                //Tour enough customers and Early book due date
                var tourReadyDueBookedDate = [];
                var tourReadyDueFullBooked = [];
                //&& (item['peopleInTravel'] || []).count() >= item['minimum']
                (Tour.find().fetch() || []).forEach(function (item) {
                    if ((item['earlyBookDueDate'].is('today'))) {
                        tourReadyDueBookedDate.push(item);
                    }
                    else {

                    }
                    if (item['fullPaymentDueDate'].is('today') && (item['cancelTour'] || '') !== true) {
                        if ((item['peopleInTravel'] || []).count(function (customer) {
                                return customer['payment'] === 'fullPayment';
                            }) >= item['minimum']) {
                            tourReadyDueFullBooked.push(item);
                        }
                        else {

                        }

                    }
                })

                // var tourReadyDueBookedDate1 = (tourReadyDueBookedDate.map(function (item) {
                //     if (item) {
                //         return "<b>name </b>:   " + Trip.findOne({_id: item.trip}, {fields: {tourName: 1}})['tourName']
                //             + "      Early Book Due Date:  " + item['earlyBookDueDate'] + "<br>"
                //     }
                //     return ''
                // })).remove('')
                // var tourReadyDueFullBooked1 = (tourReadyDueFullBooked.map(function (item) {
                //     if (item) {
                //         return "<b> name </b>:   " + Trip.findOne({_id: item.trip}, {fields: {tourName: 1}})['tourName']
                //             + "      Full Pay Due Date Due Date:    "
                //             + item['fullPaymentDueDate'] + " <br>";
                //     }
                //     return ''
                // })).remove('')

                // SEND eMAIL


                tourReadyDueFullBooked.forEach(function (item) {
                    Meteor.call('sendEmailToFullPayment', item, "CONTINUE TO FULL PAYMENT TOUR ", "fullPayment", function () {
                        // alert("ok")
                    });
                });
                // tourReadyDueBookedDate.forEach(function (item) {
                //     Meteor.call('sendEmailToFullPayment', item, "CONTINUE TO FULL PAYMENT TOUR ", "deposit", function () {
                //         // alert("ok")
                //     });
                // });





                return {
                    tourEnough: tourEnough,
                    tourNotEnough: tourNotEnough
                }

            }
        });
        SyncedCron.start();
    })


}
