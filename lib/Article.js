/**
 * Created by lvhln on 10/12/2016.
 */

Article=new Mongo.Collection('article');

Article.attachSchema(new SimpleSchema({

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

    Author:{
        type:String,
        label:"Author Name ",
        optional:true,
        autoform: {
            afFieldInput: {
                type: 'text',

              placeholder:"Joseph Mar"

            }
        },
    },
    Title:{
        type:String,
        label:"Title ",
        optional:true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "Example: Bla Bla...",
            }
        },
    },

     Thumbnail:{
         type: [String],
         label: 'choose image',
         optional: true,
     },

    "Thumbnail.$":{
        autoform: {
            afFieldInput: {
                type: "fileUpload",
                collection: "Image",
                label: 'Choose file'
                // selectFileBtnTemplate: 'mySelectFileBtn',
                // removeFileBtnTemplate: 'myRemoveFileBtn'
                // previewTemplate: 'myFilePreview',
            },
        },
    },

    Synopsis:{
        type:String,
        label:"synopsis of content",
        autoform: {
            afFieldInput: {
                type: 'text',
                placeholder:"Example: my girl is so beautifullllll",
                // settings: // summernote options goes here
            }
        }
    },

    Content: {
        type: String,
        label: "Content",
        autoform: {
            afFieldInput: {
                type: 'summernote',
                class: 'editor',
                // settings: // summernote options goes here
            }
        }
    },


    homePage:{
        label:"Each page",
        type:Object,
    },
    "homePage.title":{
        type: String,
        label: "Set title to the page.",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        },
    },

    "homePage.metaInfo":{
        type: [Object],
        label: "Add a Meta tag.",
        optional: true,
        // autoform: {
        //     afFieldInput: {
        //         type: 'text',
        //     }
        // },
    },
    "homePage.metaInfo.$.name":{
        type: String,
        label: "name (description).",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        },
    },
    "homePage.metaInfo.$.content":{
        type: String,
        label: "content.",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        },
    },




}))












