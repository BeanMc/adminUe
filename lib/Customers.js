/**
 * Created by HuycongNguyen on 11/7/2016.
 */

Customers=new Mongo.Collection('customers')
Customers.attachSchema(new SimpleSchema({
    email:{
        type:String,
        label:'email',
    },
    firstname:{
        type:String,
        label:'first name',
    },
    lastname:{
        type:String,
        label:'last name',
    },
    dateofbird:{
        type:Date,
        optional:true,
    },
    gender:{
        type:String,
        label:'gender',
    },
    nationality:{
        type:String,
        label:'nationality',
    },
    address1:{
        type:String,
        label:'address1',
    },
    address2:{
        type:String,
        label:'address2',
    },
    city:{
        type:String,
        label:'city',
    },
    zip:{
        type:String,
        label:'zip',
    },
    phone:{
        type:String,
        label:'phone',
    },
    passportNo:{
        type:String,
        label:'passport No',
    },
    passportIssue:{
        type:String,
        label:'passport Issue',
    },
    passportExpiryDate:{
        type:String,
        label:'passport Expiry Date',
    },
    meal:{
        type:String,
        label:'meal',
    },
    request:{
        type:String,
        label:'request',
    },
    extra: {
        type: String,
        optional: true,
    },

    // meal:{},

}))