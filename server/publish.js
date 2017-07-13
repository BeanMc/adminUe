/**
 * Created by HuycongNguyen on 12/30/2016.
 */
Meteor.publish('all-users', function () {
    return Meteor.users.find({},
        {
            fields: {
                'emails': 1,
                dateLogin1: 1,
                dateLogin2: 1,
            }
        });
});