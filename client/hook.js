/**
 * Created by HuycongNguyen on 2/21/2017.
 */
AutoForm.addHooks(null, {
    onSuccess: function(operation, result, template) {

    },
    onError: function(operation, result, template) {

    },
    formToModifier: function(modifier) {
        console.log(modifier);
        if (modifier.$set) {
            modifier.$set.comments = _.compact(modifier.$set.comments);
            // modifier.$set['DayPlan.planNumberDay'].forEach(function(item){
            //     console.log(typeof item.Daydescriptions);
            //     console.log(item.Daydescriptions[1]);
            //     // item['Daydescriptions'][0]="dsadas";
            // });
        }



        return modifier;
    }
});