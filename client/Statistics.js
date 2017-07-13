/**
 * Created by HuycongNguyen on 12/24/2016.
 */
// var userid = new ReactiveVar(Meteor.userId());
// var idUsers = Meteor.userId();
// console.log(idUsers);
//
// Tracker.autorun(function () {
//     // var userId = Meteor.userId();
//     if (!userid) {
//         Meteor.call('historyLogin',idUsers);
//         Router.go('/');  // go 'home' on logout
//     }
//     else {
//         idUsers=userId;
//     }
// });

Meteor.subscribe('all-users');
//filter ...............------------------------------
var filter = new ReactiveVar(0);
//-----------------------.............................

Template.statistic.helpers({

    timeLogin: function () {
        return Meteor.users.findOne({_id: Meteor.userId()}).dateLogin1;
    },
    customer: function () {
        var rawTour = Tour.find().fetch();
        var rawCustomers = [];
        rawTour.forEach(function (item) {
            if (item.peopleInTravel) {
                item.peopleInTravel.forEach(function (data) {
                    data.dateStart = item.tourDateStart.format('{Dow}, {dd}/{MM}/{yy} {hh}:{mm} {TT}');
                    data.idTour = item.trip;
                })
                rawCustomers.add(item.peopleInTravel);
            }
        })

        if (!filter.get()) {
            //Recent Customers

            return rawCustomers.sortBy(function (item) {
                return item.createdAt;
            }, true);
        }
        else if (filter.get() === 1) {
            //List of Customers this week

            return rawCustomers.sortBy(function (item) {
                return item.createdAt;
            }, true).filter(function (n) {
                return n.createdAt.isAfter(Date.create().beginningOfISOWeek());
            });


        }
        else if (filter.get() === 3) {
            return rawCustomers.sortBy(function (item) {
                return item.idTour;
            }, true)
        }

        else {
            // var timeLastLogin = Usershistory.find().fetch();
            return rawCustomers.sortBy(function (item) {
                return item.createdAt;
            }, true).filter(function (n) {
                return n.createdAt.isAfter(Meteor.users.findOne({_id: Meteor.userId()}).dateLogin1);
            });
        }
    },
    countCustomers: function (data) {
        return data + 1;
    },

    tourName: function (idTrip) {
        return Trip.findOne({_id: idTrip}).tourName;
    },

    dateCreate: function (data) {

        return data.format('{Dow}, {dd}/{MM}/{yy} {hh}:{mm} {TT}');
    },
    firstName: function (data) {
        if (data && Customers.findOne({_id: data})) {
            return Customers.findOne({_id: data}).firstname || '';
        }

    },
    lastName: function (data) {
        if (data && Customers.findOne({_id: data})) {
            return Customers.findOne({_id: data}).lastname || '';
        }

    },

    passport: function (data) {
        if (data) {
            return Customers.findOne({_id: data}).passportNo;
        }
        return ""
    },
    myPhone: function (data) {
        if (data) {
            return (Customers.findOne({_id: data})).phone;
        }
        return ""
    },


})


Template.statistic.events({
    'click #listCustomerOfWeek': function (e, t) {
        filter.set(1);
        $('#recentCustomer').removeClass().addClass('tab-link w-inline-block w-tab-link');
        $('#newCustomer').removeClass().addClass('tab-link w-inline-block w-tab-link');
        $('#customerTour').removeClass().addClass('tab-link w-inline-block w-tab-link');
        $('#listCustomerOfWeek').addClass(' w--current');


    },
    'click #recentCustomer': function (e, t) {
        filter.set(0);
        $('#listCustomerOfWeek').removeClass().addClass('tab-link w-inline-block w-tab-link');
        $('#newCustomer').removeClass().addClass('tab-link w-inline-block w-tab-link');
        $('#customerTour').removeClass().addClass('tab-link w-inline-block w-tab-link');
        $('#recentCustomer').addClass(' w--current');
    },
    'click #newCustomer': function (e, t) {
        filter.set(2);
        $('#recentCustomer').removeClass().addClass('tab-link w-inline-block w-tab-link');
        $('#listCustomerOfWeek').removeClass().addClass('tab-link w-inline-block w-tab-link');
        $('#customerTour').removeClass().addClass('tab-link w-inline-block w-tab-link');
        $('#newCustomer').addClass(' w--current');
    },
    'click #customerTour': function (e, t) {
        filter.set(3);
        $('#recentCustomer').removeClass().addClass('tab-link w-inline-block w-tab-link');
        $('#listCustomerOfWeek').removeClass().addClass('tab-link w-inline-block w-tab-link');
        $('#newCustomer').removeClass().addClass('tab-link w-inline-block w-tab-link');
        $('#customerTour').addClass(' w--current');
    },

})

