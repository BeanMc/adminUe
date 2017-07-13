/**
 * Created by HuycongNguyen on 1/7/2017.
 */

Coupon = new Mongo.Collection('coupon');
Coupon.attachSchema(new SimpleSchema({

    'tourOn':{
        type:[String],
        label:"Coupon On Tour ",
        autoform: {
                    id: 'discount',
                    afFieldInput: {
                        defaultValue: true,
                        type: 'select-checkbox-inline',
                        options: function () {
                            return Tour.find().fetch().map(function (item) {
                                if(item.tourDateStart.isAfter(new Date()) &&!item.cancelTour){
                                    return {value:item._id,label:
                                        function () {
                                            return Trip.findOne({_id:item.trip}).tourName+" ( Date Start:"+item.tourDateStart.toString().substring(0,15)+" )";
                                        }
                                    }
                                }
                            }).remove(undefined)
                        }
                    }
                },

    },
   code: {
        type: String,
        label: 'code discount',
        optional:true,

    },
    'discountStartDate': {
        type: Date,
        label: 'Discount Start Date',
        optional:true,

    },
    'discountEndDate': {
        type: Date,
        label: 'Discount End Date',
        optional:true,

    },
    'discountType': {
        type: String,
        label: 'Discount Type',
        optional:true,

        autoform: {
            id: 'discount',
            afFieldInput: {
                defaultValue: 0,
                type: 'select-radio-inline',
                options: function () {
                    return [{label: "amount value in : SGD", value: 'flat'}, {
                        label: "percentage of the total value: %",
                        value: 'percent'
                    }]
                }
            }
        },
    },


    'discountValue': {
        type: Number,
        label: 'Discount Value',
        optional:true,

        autoform: {
            afFieldInput: {
                type: 'number',
                placeholder: function () {
                    return "warning amount value less than total price and percentage of the total value less than 100% ";
                }

            }
        },
    },


    'status': {
        type: Boolean,
        label: 'Discount Status',
        optional:true,

        autoform: {
            afFieldInput: {
                defaultValue: false,
                type: 'select',
                options: function () {
                    return [{label: "On", value: true}, {label: "Off", value: false}]
                }
            }
        },
    },





}))

