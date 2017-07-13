/**
 * Created by HuycongNguyen on 12/24/2016.
 */
Router.route('/', function () {
    this.render('login');
});
// Router.route (adminDashboardUsersView

Router.route('statistic', {
    path: AdminDashboard.path('statistic'),
    controller: 'AdminController',
    onAfterAction: function () {
        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("statistic")===-1)) {
            console.log(Meteor.user() && Meteor.user().emails[0].address);
            window.history.back();
        }
        Session.set('admin_title', 'Statistics');
    }
});

Router.route('customerInTourSheet', {
    path: AdminDashboard.path('customerInTourSheet'),
    controller: 'AdminController',
    onAfterAction: function () {
        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("customerInTourSheet")===-1)) {
            console.log(Meteor.user() && Meteor.user().emails[0].address);
            window.history.back();
        }
        Session.set('admin_title', 'Statistics');
        Session.set('admin_title', 'Customers in Tour');
    }
});
// Router.route('adminDashboardUsersView', {
//
// });









