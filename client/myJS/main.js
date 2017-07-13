// Template.body.onRendered(function () {
//     // console.log( $(".main-sidebar").children())
//
//     $(".sidebar-menu").children().first().remove();
// })

var userid = new ReactiveVar(Meteor.userId());
var idUsers = Meteor.userId();
Meteor.startup(function () {
    if (Meteor.isClient) {
        idUsers = Meteor.userId();
        // if (Meteor.user()) {
        //     if(Meteor.user().emails[0].address !== "admin@gmail.com"){
        //         delete Template.AdminDashboardUsersEdit;
        //     }
        // }

        // if(!Meteor.user()){
        //     delete Template.AdminDashboardUsersEdit;
        // }
        if (!userid.get()) {
            console.log(Template.AdminDashboardUsersEdit);
        }
    }
});


Tracker.autorun(function () {
    // var userId = Meteor.userId();
    if (!userid.get()) {
        console.log("dasdas");
        Meteor.call('historyLogin', idUsers);
        Router.go('/');  // go 'home' on logout
    }
    else {
        // console.log(userid.get());
        // userid.set()
        // console.log("dasdas");
        idUsers = userid.get();
    }
});


// console.log(Template.AdminDashboardUsersEdit);


Router.onAfterAction(function () {
    if (Router.current().route.getName() === "adminDashboardUsersView" && Meteor.user().emails[0].address !== "admin@gmail.com") {
        window.history.back();
        this.redirect('/');
    }
});


//
UI.registerHelper("admin_collections", function () {
    var collections = {};
    if (typeof AdminConfig !== 'undefined' && typeof AdminConfig.collections === 'object')
        collections = AdminConfig.collections;

    // delete collections["Users"];
    return _.map(collections, function (obj, key) {
        obj = _.extend(obj, {name: key});
        obj = _.defaults(obj, {label: key, icon: 'plus', color: 'blue'});

        return _.extend(obj, {
            viewPath: Router.path("adminDashboard" + key + "View"),
            newPath: Router.path("adminDashboard" + key + "New")
        });


    });
});


Template.canceltour.events({

    'click .myModal': function () {
        var data = this;
        var doc = data['doc'];
        bootbox.prompt({
            title: "Reason to cancel this tour:",
            inputType: 'textarea',
            // value: cancelMessage.assign({date: doc.tourDateStart.short()}),
            callback: function (result) {
                if (result) {
                    Meteor.call('updateCancel', data['doc']['_id'], result);
                    if (data['doc']['peopleInTravel']) {
                        data['doc']['peopleInTravel'].forEach(function (item, index) {
                            Meteor.call('sendRefund', index, data['doc']['_id'], 'full', function (err, res) {
                            })
                        });


                        // Meteor.call('sendEmail', data['doc']['peopleInTravel'].forEach(function (item) {
                        //     return Customers.find({_id: item['idCustomer']}, {fields: {email: 1}}).fetch()[0];
                        // }), 'congkeonice@gmail.com', "CANCEL TOUR UNUSUALEXPEDITION.COM WEBSITE", data['doc'], result, function () {
                        //     alert("ok")
                        // })
                    }
                }
                else {
                    bootbox.alert("check reason");
                }
            }
        });
    },

    'click #continuetour': function (e, t) {
        var data = this;
        bootbox.confirm("System will send mail to ask for deposit", function (result) {
            if (result) {
                // result="hahahahahahahah"
                // Meteor.call('updateCancel', data['doc']['_id'], result)
                if (data['doc']['peopleInTravel']) {
                    Meteor.call('sendEmailToFullPayment', data['doc'], "CONTINUE TO FULL PAYMENT TOUR ", "deposit", function () {
                        alert("ok")
                    })
                }
            }
            else {
                bootbox.alert("check reason");
            }
        });
    },
    'mouseover #canceltour': function () {
        $('[data-toggle="tooltip"]').tooltip();
    }
})


Template.canceltour.helpers({
    earlybook: function () {
        if (this['doc']['fullPaymentDueDate'].isAfter('today')) {
            return true
        }
        return false
    },

    continueTour: function (e, t) {
        if (new Date().isAfter(this['doc']['earlyBookDueDate']) && new Date().isBefore(this['doc']['fullPaymentDueDate']) && (

                //check people in tour deposit and fullPayment, not none.
                this['doc']['peopleInTravel'] || [].count(function (item) {
                    return item.payment !== 'none';
                }) < this['doc']['minimum']
            )) {
            return true;
        }
        return false;
    },

    cancel: function () {
        if (Tour.findOne({_id: this['doc']['_id']})['cancelTour'] || (this['doc']['tourDateEnd'].isBefore('today'))) {
            return true
        }
        return false
    }

})


Template.fullbooked.events({
    'click .myModalReasonFull': function (e, t) {
        var data = this;
        var doc = data['doc'];
        bootbox.prompt({
            title: "Reason to cancel this tour:",
            inputType: 'textarea',
            // value: cancelMessage.assign({date: doc.tourDateStart.short()}),
            callback: function (result) {
                if (result) {
                    Meteor.call('updateCancel', data['doc']['_id'], result);
                    if (data['doc']['peopleInTravel']) {
                        data['doc']['peopleInTravel'].forEach(function (item, index) {
                            Meteor.call('sendRefund', index, data['doc']['_id'], 'full', function (err, res) {
                            })
                        });
                        // Meteor.call('sendEmail', data['doc']['peopleInTravel'].forEach(function (item) {
                        //     return Customers.find({_id: item['idCustomer']}, {fields: {email: 1}}).fetch()[0];
                        // }), 'congkeonice@gmail.com', "CANCEL TOUR UNUSUALEXPEDITION.COM WEBSITE", data['doc'], result, function () {
                        //     alert("ok")
                        // })
                    }
                }
                else {
                    bootbox.alert("check reason");
                }
            }
        });
    },
    'click #continuetour': function (e, t) {
        var data = this;
        bootbox.confirm("System will send mail to ask for full payment", function (result) {
            if (result) {
                // result="hahahahahahahah"
                // Meteor.call('updateCancel', data['doc']['_id'], result)
                if (data['doc']['peopleInTravel']) {
                    //--------------------------------------------------------------------------
                    Meteor.call('sendEmailToFullPayment', data['doc'], "CONTINUE TO FULL PAYMENT TOUR ", "fullPayment", function () {
                        alert("ok")
                    })
                }
                Meteor.call("confirm",data['doc'],function (err, res) {

                });
            }
            else {
                bootbox.alert("check reason");
            }
        });
    },
    'mouseover #canceltourfulltool': function () {
        $('[data-toggle="tooltip"]').tooltip();
    },
});


Template.fullbooked.helpers({
    fullbook: function () {
        if (this['doc']['fullPaymentDueDate'].isBefore('today')) {
            return true
        }
        return false
    },
    id: function () {
        return this.value
    },
    continueTour: function (e, t) {
        if (new Date().isAfter(this['doc']['earlyBookDueDate']) && new Date().isAfter(this['doc']['fullPaymentDueDate']) && ((Tour.findOne({_id: this['doc']['_id']})['peopleInTravel'] || []).count() < this['doc']['minimum'])) {
            return true;
        }
        return false;
    },

    cancel: function () {
        if (this['doc']['_id']) {
            if (Tour.findOne({_id: this['doc']['_id']})['cancelTour'] || (this['doc']['tourDateEnd'].isBefore('today'))) {
                return true
            }
            return false
        }
    }
});


Template.showimage.helpers({
    image: function (image) {
        return this.value;
    }
})


Template.showimages.helpers({
    image: function () {
        return this.value;
    }
});

Template.totalday.helpers({
    day: function () {
        return this.value['planNumberDay'].map(function (item) {
            return 'DAY' + item['DayNumber'] + ':' + item['Daytitle'] + '     ';
        });
    }
})


Template.showdate.helpers({
    datetime: function () {
        return new Date(this.value).format('{Dow}, {dd}/{MM}/{yy} {hh}:{mm} {TT}');
    },
})
Template.dob.helpers({
    date: function () {
        return new Date(this.value).format('{Dow}, {dd}/{MM}/{yy}');
    },
})


Template.tourprice.helpers({
    price: function () {
        return this['value']['totalPrice'];
    },
})

Template.trip.helpers({
    name: function () {
        return Trip.find({_id: this['doc']['trip']}).fetch()[0];
    }
})
Template.customers.helpers({
    people: function () {
        return (Tour.findOne({_id: this['doc']['_id']})['peopleInTravel'] || []).count();
    }
})


