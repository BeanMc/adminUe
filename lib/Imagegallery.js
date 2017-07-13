/**
 * Created by lvhln on 10/4/2016.
 */

Imagehome=new Mongo.Collection('imagegallery')

Linkvideo=new Mongo.Collection('linkvideo')
Linkvideo.attachSchema(new SimpleSchema({
    linkVideo:{
        type:String,
        label:"link video ",
        autoform:{
            afFieldInput:{
                type:"text",
                placeholder:"Example: linksss....",
            },
        },
    },

}))

Imagehome.attachSchema(new SimpleSchema({
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
        label:'Button text',
    },
    redirectTo:{

        type:String,
        label:'link to redirect',
        defaultValue:" ",
        optional:true,
        autoform: {
            afFieldInput: {
                type: 'text',
                defaultValue:" ",

            }
        },
    },

    imageView:{
        type:[String],
        label:'choose image',
        optional:true,
        defaultValue:[],
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


