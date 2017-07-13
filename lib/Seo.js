/**
 * Created by HuycongNguyen on 2/13/2017.
 */
Seo=new Mongo.Collection('mySeo');
Seo.attachSchema(new SimpleSchema({
    homePage:{
        label:"home page",
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

    upcomingtour:{
        label:"upcoming tour page",
        type:Object,
    },
    "upcomingtour.title":{
        type: String,
        label: "Set title to the page.",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        },
    },

    "upcomingtour.metaInfo":{
        type: [Object],
        label: "Add a Meta tag.",
        optional: true,
        // autoform: {
        //     afFieldInput: {
        //         type: 'text',
        //     }
        // },
    },
    "upcomingtour.metaInfo.$.name":{
        type: String,
        label: "name .",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        },
    },
    "upcomingtour.metaInfo.$.content":{
        type: String,
        label: "content.(description)",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        },
    },


    portfolio:{
        label:"portfolio page",
        type:Object,
    },
    "portfolio.title":{
        type: String,
        label: "Set title to the page.",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        },
    },

    "portfolio.metaInfo":{
        type: [Object],
        label: "Add a Meta tag.",
        optional: true,
        // autoform: {
        //     afFieldInput: {
        //         type: 'text',
        //     }
        // },
    },
    "portfolio.metaInfo.$.name":{
        type: String,
        label: "name .",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        },
    },
    "portfolio.metaInfo.$.content":{
        type: String,
        label: "content.(description)",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        },
    },


    travelBlog:{
        label:"Travel Blog page",
        type:Object,
    },
    "travelBlog.title":{
        type: String,
        label: "Set title to the page.",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        },
    },

    "travelBlog.metaInfo":{
        type: [Object],
        label: "Add a Meta tag.",
        optional: true,
        // autoform: {
        //     afFieldInput: {
        //         type: 'text',
        //     }
        // },
    },
    "travelBlog.metaInfo.$.name":{
        type: String,
        label: "name .",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        },
    },
    "travelBlog.metaInfo.$.content":{
        type: String,
        label: "content.(description)",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
            }
        },
    },




    // "homePage.linkTag":{
    //     type: [Object],
    //     label: "Add a Link tag",
    //     optional: true,
    //     autoform: {
    //         afFieldInput: {
    //             type: 'text',
    //         }
    //     },
    // },
    // "homePage.linkTag.$.name":{
    //     type: String,
    //     label: "name (description).",
    //     optional: true,
    //     autoform: {
    //         afFieldInput: {
    //             type: 'text',
    //         }
    //     },
    // },
    // "homePage.linkTag.$.content":{
    //     type: String,
    //     label: "content.",
    //     optional: true,
    //     autoform: {
    //         afFieldInput: {
    //             type: 'text',
    //         }
    //     },
    // },





}));






