/**
 * Created by lvhln on 9/29/2016.
 */


Imagegallery=new Mongo.Collection('imagehome')


Imagegallery.attachSchema(new SimpleSchema({
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
    imageText:{
        type:String,
        label:'Image Text',
    },

    imageView:{
        type:[String],
        label:'choose image',
        optional:true,
        defaultValue :[],
    },

    "imageView.$":{
        autoform:{
            afFieldInput:{
                type:"fileUpload",
                collection:"Image",
                label: 'Choose file'

            },
        },
    },



}))


