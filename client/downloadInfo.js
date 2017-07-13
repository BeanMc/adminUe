/**
 * Created by CongNguyen on 4/24/2017.
 */

Template.downloadInfo.events({
   'click .downloadInfo':function (e, t) {
       window.location.assign(window.location.origin + '/customers');
   }
});

