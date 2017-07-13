/**
 * Created by HuycongNguyen on 12/30/2016.
 */
Template.customerInTour.helpers({
    idTour: function () {
        var all = this;
        return all.value;
    },
});

Template.customerInTour.events({
    'click #downloadPdf': function (e, t) {
        // console.log(this)
        //--------------------link download pdf---------------------------------
        window.location.replace(window.location.origin + '/listing?id=' + this.value);
    }
});

Template.customerInTourSheet.helpers({
    sum: function (a, b) {
        return a + b;
    },
    tourCode: function () {
        var tour = Tour.findOne({_id: Router.current().params.query.id});
        var trip = Trip.findOne({_id: tour.trip});
        return (tour.tourDateStart.getMonth() + 1) + ((tour.tourDateStart.getYear()).toString().substring(1, 4)) + (tour.tourDateStart.getDate()) + trip.Location + tour.tourDateStart.daysAgo(tour.tourDateEnd) + 'D' + trip.Instructor
    },

    tourPrice: function () {
        var tour = Tour.findOne({_id: Router.current().params.query.id});
        return tour.tourPrice.Rate.map(function (item) {
            return item.tourRateIn;
        })
    },
    estimatedRevenue1: function () {
        var tour = Tour.findOne({_id: Router.current().params.query.id});
        console.log(tour.estimatedRevenue);
        return tour.estimatedRevenue;
    },
    fullPaymentPeople: function () {
        var tour = Tour.findOne({_id: Router.current().params.query.id});
        return (tour.peopleInTravel || []).count(function (item) {
            return item.payment === 'fullPayment';
        })
    },
    depositPeople: function () {
        var tour = Tour.findOne({_id: Router.current().params.query.id});
        return (tour.peopleInTravel || []).count(function (item) {
            return item.payment === 'deposit';
        })
    },
    refundPeople:function () {
        var tour = Tour.findOne({_id: Router.current().params.query.id});
        return (tour.peopleInTravel || []).count(function (item) {
            return item.paymentStatus === 'REFUND';
        })
    },
    estimatedBudget: function () {
        var tour = Tour.findOne({_id: Router.current().params.query.id});
        var fullPaymentPeople = (tour.peopleInTravel || []).count(function (item) {
            return item.payment === 'fullPayment'&&item.paymentStatus !== 'REFUND';
        });
        return (tour.estimatedRevenue.estimatedBudgetPerPax * fullPaymentPeople ) + tour.estimatedRevenue.personalAirfare + tour.estimatedRevenue.totalGuideCostingBudget;
    },
    estimatedRevenue: function () {
        var tour = Tour.findOne({_id: Router.current().params.query.id});
        return (tour.peopleInTravel || []).sum(function (item) {
            if (item.payment === 'fullPayment'&&item.paymentStatus !== 'REFUND') {
                return item.totalPrice;
            }
            return 0;

        })
    },
    estimatedProfit: function (estimatedBudget, estimatedRevenue) {
        return estimatedRevenue - estimatedBudget;
    },


    myCustomers: function () {
        return Tour.findOne({_id: Router.current().params.query.id});
    },
    setDark: function (data) {
        if (data % 2 !== 0) {
            return 'darken-row';
        }
    },
    myPhone: function (data) {
        if (data) {
            return (Customers.findOne({_id: data})).phone;
        }
        return ""
    },
    firstName: function (data) {
        if (data && Customers.findOne({_id: data}).name) {
            return Customers.findOne({_id: data}).name.split(" ")[0];
        }
        return Customers.findOne({_id: data}).firstname;
    },
    lastName: function (data) {
        if (data && Customers.findOne({_id: data}).name) {

            return Customers.findOne({_id: data}).name.split(" ")[1];
        }
        return Customers.findOne({_id: data}).lastname;
        ;
    },
    passport: function (data) {
        if (data) {
            return Customers.findOne({_id: data}).passportNo;
        }
        return ""
    },
    gender: function (data) {
        if (data) {
            return Customers.findOne({_id: data}).gender;
        }
        return ""
    },
    meal: function (data) {
        if (data) {
            return Customers.findOne({_id: data}).meal;
        }
        return ""
    },
    nationality: function (data) {
        if (data) {
            return Customers.findOne({_id: data}).nationality;
        }
        return ""
    },
    room: function (data) {
        if (data) {
            var index = data.indexOf(' ')
            return data.substring(index, data.length);
        }

    },
    name: function () {
        var tripid = Tour.findOne({_id: Router.current().params.query.id}).trip;
        return Trip.findOne({_id: tripid}).tourName;
    },
    idTour: function () {
        return Tour.findOne({_id: Router.current().params.query.id});
    },
});

Template.customerInTourSheet.events({
    'click .editButton': function (e, t) {
        var customer = this;
        $("#" + customer.idCustomer + "editButton").css({"display": "none"});
        $("#" + customer.idCustomer + "saveButton").css({"display": "block"});
        $("#" + customer.idCustomer + "paymentStatus").css({"display": "block"});
        // $("#"+customer.idCustomer+"bookingStatus").css({"display":"block"});
    },
    'click .saveButton': function (e, t) {
        var customer = this;
        $("#" + customer.idCustomer + "editButton").css({"display": "block"});
        $("#" + customer.idCustomer + "saveButton").css({"display": "none"});
        $("#" + customer.idCustomer + "paymentStatus").css({"display": "none"});
        // $("#"+customer.idCustomer+"bookingStatus").css({"display":"none"});
        // console.log($("#"+customer.idCustomer+"saveButton").val());
        console.log($("#" + customer.idCustomer + "paymentStatus form option:selected").text());
        Meteor.call("manualPayment", customer.idCustomer, Router.current().params.query.id, $("#" + customer.idCustomer + "paymentStatus form option:selected").text(), $("#" + customer.idCustomer + "saveButton").val(), function (err, res) {
            bootbox.alert(res);
        })
    },

    'click .tripnote': function (e, t) {
        console.log(($(e.target)).attr("id"));
        var email = ($(e.target)).attr("id");
        var id = Router.current().params.query.id;
        Meteor.call('sendTripNote', email, id, function (err, res) {
            alert(res);
        });
    },
    'click .deposit': function (e, t) {
        console.log(($(e.target)).attr("id"));
        var index = ($(e.target)).val();
        var id = Router.current().params.query.id;
        Meteor.call('sendInvoice', index, id, 'deposit', function (err, res) {
            alert(res);
        });
    },
    'click .fullpayment': function (e, t) {
        console.log(($(e.target)).attr("id"));
        var index = ($(e.target)).val();
        var id = Router.current().params.query.id;
        Meteor.call('sendInvoice', index, id, 'fullpayment', function (err, res) {
            alert(res);
        });
    },



    'click .full': function (e, t) {
        console.log(($(e.target)).attr("id"));
        var index = ($(e.target)).val();
        var id = Router.current().params.query.id;
        Meteor.call('sendRefund', index, id, 'full', function (err, res) {
            alert(res);
        });
    },
    'click .balance': function (e, t) {
        console.log(($(e.target)).attr("id"));
        var index = ($(e.target)).val();
        var id = Router.current().params.query.id;
        Meteor.call('sendRefund', index, id, 'balance', function (err, res) {
            alert(res);
        });
    },
    'click .linkfullpayment': function (e, t) {
        console.log(($(e.target)).attr("id"));
        var index = ($(e.target)).val();
        var id = Router.current().params.query.id;
        Meteor.call('sendlinkfullpayment', index, id, '', function (err, res) {
            alert(res);
        });
    },


});