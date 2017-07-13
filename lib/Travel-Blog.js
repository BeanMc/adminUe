/**
 * Created by lvhln on 10/15/2016.
 */
Travel=new Mongo.Collection('travel');

Travel.attachSchema(new SimpleSchema({


    createdAt:{
        type:String,
        label:"Created At",
        autoform: {
            afFieldInput: {
                type: 'datetime-local',
                defaultValue:new Date(),
            }
        },
    },
    Title:{
        type:String,
        label:"Title ",
    },



}))