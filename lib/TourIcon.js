/**
 * Created by lvhln on 9/29/2016.
 */
Icon=new Mongo.Collection('icon')

Icon.attachSchema(new SimpleSchema({
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
    iconText:{
        type:String,
        label:'Icon Text',
    },

    iconImage:{
        type:String,
        label:'choose icon image',
        autoform:{
            afFieldInput:{
                type:"fileUpload",
                collection:"Image",
                label: 'Choose file'
                // selectFileBtnTemplate: 'mySelectFileBtn',
                // removeFileBtnTemplate: 'myRemoveFileBtn'
                // previewTemplate: 'myFilePreview',
            },
        },
    },
}))


