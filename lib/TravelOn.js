/**
 * Created by lvhln on 10/29/2016.
 */


Tour = new Mongo.Collection('tour');
var disCount = new ReactiveVar(false);
Tour.attachSchema(new SimpleSchema({
    trip: {
        type: String,
        label: "Trip on Tour",
        autoform: {
            afFieldInput: {
                type: 'select',
                options: function () {
                    return Trip.find().fetch().map(function (data) {
                        return {
                            value: data._id,
                            label: data.tourName + "  ,Location:" + data.Location,
                        }
                    })
                },
            },
        },
    },

    earlyBookDueDate: {
        type: Date,
        label: "Trip Closing Date"
    },
    fullPaymentDueDate: {
        type: Date,
        label: "Deposit Reminder Date"
    },

    tourDateStart: {
        type: Date,
        label: 'Tour Start Date ',
    },
    tourDateEnd: {
        type: Date,
        label: 'Tour End Date  ',
    },

    // status: {
    //     type: Date,
    //     label: 'Tour Status',
    //     autoform: {
    //         afFieldInput: {
    //             defaultValue: "closing",
    //             readonly: true,
    //             type: 'text',
    //         }
    //     },
    // },


    depositPayable: {
        type: Number,
        label: "Deposit Payable in SGD",
    },
    maximum: {
        type: Number,
        label: "maximum people",
    },
    minimum: {
        type: Number,
        label: "minimum people",
    },


    "tourPrice": {
        type: Object,
        label: 'Tour Price'
    },


    "tourPrice.Rate": {
        type: [Object],
        label: 'Main Tour Rate',
        // optional: true,
        // autoform: {
        //     afFieldInput: {
        //         label: "notice",
        //         type: 'text',
        //         placeholder: "Example: RATE: $10500 per person (Based on Twin Sharing)",
        //         defaultValue: " RATE: $10500 per person (Based on Twin Sharing)",
        //     }
        // },
    },
    "tourPrice.Rate.$.tourRateIn": {
        type: Number,
        label: 'Tour Rate in SGD',
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'number',
                placeholder: "Example: RATE: $10500 ",
            }
        },
    },

    "tourPrice.Rate.$.room": {
        type: String,
        autoform: {
            label: "Tour Rate Note",
            type: 'select',
            options: function () {
                return [{label: "Single room", value: "Single room"},
                    {label: "Twin room sharing", value: "Twin room sharing"},
                    {label: "Triple room", value: "Triple room"},
                    {label: "Sharing dometry", value: "Sharing dometry"},
                    {label: "Single berth", value: "Single berth"}
                ]
            },

        },
    },

    "tourPrice.optionalTour": {
        type: [Object],
        optional: true,
    },
    "tourPrice.optionalTour.$.optionalTourRateIn": {
        type: Number,
        label: "Optional Tour Rate in SGD ",
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'number',
                placeholder: "Example:  S$2800",
                // defaultValue: " nothing",
            }
        },
    },

    "tourPrice.optionalTour.$.optionalTourRateInNote": {
        type: String,
        label: "Optional Tour Rate Note",
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                // placeholder: "Example:  S$2800",
                // defaultValue: " nothing",
            }
        },
    },


    meal: {
        type: [String],
        label: "meal options",
    },
    extraFields: {
        type: [String],
        label: "Extra Fields Questions"
    },


    flightDetails: {
        type: Object,
        label: "flight Details",
    },


    'flightDetails.notice': {
        type: [String],
        label: "flightDetails Notice  ",
        optional: true,
    },

    'flightDetails.notice.$': {
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "Example: International Flight Arrival on First Day - Before 3:30pm...",
                defaultValue: "International Flight Arrival on First Day - Before 3:30pm...",
                class: 'formadmin'
            }
        },
    },


    //Suggested Departure Flight:
    'flightDetails.SuggestedDepartureFlight': {
        type: [Object],
        label: "Suggested Departure Flight",
    },

    'flightDetails.SuggestedDepartureFlight.$.airlinesbranch': {
        type: String,
        label: "airlines branch and time flight",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "| QATAR AIRWAYS | QR-945, QR-1355...",
                defaultValue: "| QATAR AIRWAYS | QR-945, QR-1355...",
            }
        },

    },


    'flightDetails.SuggestedDepartureFlight.$.departurefrom': {
        type: String,
        label: "departure from",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "SIN ",
                defaultValue: "SIN "
            }
        },

    },
    'flightDetails.SuggestedDepartureFlight.$.departureFromDetails': {
        type: String,
        label: "Departure From Details",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
                placeholder: "Singapore   ",
                // placeholder: "Kilimanjaro | JRO  ",
                defaultValue: "Singapore   "
            }
        },
    },


    'flightDetails.SuggestedDepartureFlight.$.departurefromdatetime': {
        type: Date,
        label: "departure  date   flight",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'date',
                placeholder: " 17 : 40",
            }
        },

    },

    'flightDetails.SuggestedDepartureFlight.$.departurefromtime': {
        type: String,
        label: "departure time flight",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'time',

            }
        },

    },
    'flightDetails.SuggestedDepartureFlight.$.arrival': {
        type: String,
        label: "arrival",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
                placeholder: "JRO  ",
                // placeholder: "Kilimanjaro | JRO  ",
                defaultValue: "JRO  "
            }
        },
    },
    'flightDetails.SuggestedDepartureFlight.$.arrivalDetails': {
        type: String,
        label: "Arrival Details",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
                placeholder: "Kilimanjaro   ",
                // placeholder: "Kilimanjaro | JRO  ",
                defaultValue: "Kilimanjaro   "
            }
        },
    },
    'flightDetails.SuggestedDepartureFlight.$.arrivaltime': {
        type: String,
        label: "arrival time flight",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'time',
                placeholder: "14 : 25 ...",
            }
        },
    },

    'flightDetails.SuggestedDepartureFlight.$.totalflighttime': {
        type: String,
        label: "total flight time ",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
                placeholder: "17 Hrs 00 Mins",
            }
        },
    },


    'flightDetails.SuggestedReturnFlight': {
        type: [Object],
        label: "Suggested Return Flight",
    },


    'flightDetails.SuggestedReturnFlight.$.airlinesbranch': {
        type: String,
        label: "airlines branch and time flight",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "QR-1355",
                defaultValue: " QR-1355"
            }
        },

    },

    'flightDetails.SuggestedReturnFlight.$.departurefrom': {
        type: String,
        label: "departure from",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "JRO",
                defaultValue: "JRO"
            }
        },

    },
    'flightDetails.SuggestedReturnFlight.$.departureFromDetails': {
        type: String,
        label: "Departure From Details",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
                placeholder: "Kilimanjaro  ",
                // placeholder: "Kilimanjaro | JRO  ",
                defaultValue: "Kilimanjaro  "
            }
        },
    },

    'flightDetails.SuggestedReturnFlight.$.departurefromdatetime': {
        type: Date,
        label: "departure  date     flight",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'date',
                placeholder: " 17 : 40",
            }
        },

    },

    'flightDetails.SuggestedReturnFlight.$.departurefromtime': {
        type: String,
        label: "departure  time flight",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'time',
                placeholder: " 17 : 40",
            }
        },

    },
    'flightDetails.SuggestedReturnFlight.$.arrival': {
        type: String,
        label: "arrival and time ",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
                placeholder: "SIN",
                defaultValue: "SIN"
            }
        },
    },
    'flightDetails.SuggestedReturnFlight.$.arrivalDetails': {
        type: String,
        label: "Arrival Details",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
                placeholder: "Singapore  ",
                // placeholder: "Kilimanjaro | JRO  ",
                defaultValue: "Singapore  "
            }
        },
    },

    'flightDetails.SuggestedReturnFlight.$.arrivaltime': {
        type: String,
        label: "arrival time flight ",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'time',
                placeholder: "02 : 25 ",
            }
        },
    },

    'flightDetails.SuggestedReturnFlight.$.totalflighttime': {
        type: String,
        label: "total flight time ",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'text',
                placeholder: "17 Hrs 00 Mins",
                defaultValue: "17 Hrs 00 Mins"
            }
        },
    },

    estimatedRevenue: {
        type: Object,
        label: "Estimated Revenue",
        optional: true,
    },
    'estimatedRevenue.estimatedBudgetPerPax': {
        type: Number,
        label: "Estimated Budget per pax",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'number',
            }
        },
    },
    'estimatedRevenue.personalAirfare': {
        type: Number,
        label: "Personal Airfare",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'number',
            }
        },
    },
    'estimatedRevenue.totalGuideCostingBudget': {
        type: Number,
        label: "Total Guide Costing Budget",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'number',
            }
        },
    },
    // 'peopleInTravel.$.refund': {
    //     type: String,
    //     optional: true,
    // },

    // homePage:{
    //     label:"Each view-tour page",
    //     type:Object,
    // },
    // "homePage.title":{
    //     type: String,
    //     label: "Set title to the page.",
    //     optional: true,
    //     autoform: {
    //         afFieldInput: {
    //             type: 'text',
    //         }
    //     },
    // },
    //
    // "homePage.metaInfo":{
    //     type: [Object],
    //     label: "Add a Meta tag.",
    //     optional: true,
    //     // autoform: {
    //     //     afFieldInput: {
    //     //         type: 'text',
    //     //     }
    //     // },
    // },
    // "homePage.metaInfo.$.name":{
    //     type: String,
    //     label: "name (description).",
    //     optional: true,
    //     autoform: {
    //         afFieldInput: {
    //             type: 'text',
    //         }
    //     },
    // },
    // "homePage.metaInfo.$.content":{
    //     type: String,
    //     label: "content.",
    //     optional: true,
    //     autoform: {
    //         afFieldInput: {
    //             type: 'text',
    //         }
    //     },
    // },
    //


    // peopleInTravel: {
    //     type: [Object],
    //     label: "Customers In",
    //     optional: true,
    //     // defaultValue:[],
    //     autoform: {
    //         id: "people",
    //
    //         afFieldInput: {
    //             // readonly:true,
    //         }
    //
    //     },
    //     defaultValue: [],
    // },
    //
    // //
    // 'peopleInTravel.$': {
    //     type: Object,
    //     optional: true,
    //     autoform: {
    //         type:'hidden',
    //         id: "people",
    //         // type: "hidden",
    //         afFieldInput: {
    //
    //             // readonly:true,
    //         }
    //
    //     },
    // },
    //

    //
    //
    // 'peopleInTravel.$.request': {
    //     type: String,
    //     optional: true,
    // },
    // 'peopleInTravel.$.email': {
    //     type: String,
    //     optional: true,
    // },
    // 'peopleInTravel.$.rate': {
    //     type: String,
    //     optional: true,
    // },
    // 'peopleInTravel.$.meal': {
    //     type: String,
    //     optional: true,
    // },
    // 'peopleInTravel.$.extra': {
    //     type: String,
    //     optional: true,
    // },
    // 'peopleInTravel.$.payment': {
    //     type: String,
    //     optional: true,
    // },
    //
    // 'peopleInTravel.$.createdAt': {
    //     type: Date,
    //     optional: true
    //
    // },

    // buttontest:{
    //     type:String,
    //     label:"dsds",
    //     autoform:{
    //         meteormethod:"log",
    //         afFieldInput: {
    //             type:"button",
    //             label:"ajskfha",
    //             options:function () {
    //                 return "ds"
    //             }
    //
    //         }
    //
    //     }
    // }

    cancelTour: {
        type: Boolean,
        optional: true,
        defaultValue: false,
        autoform: {
            afFieldInput: {
                defaultValue: false,
                readonly: true,
                type: 'text',
            }
        },
    },

    reason: {
        type: String,
        optional: true,
        defaultValue: '',
        autoform: {
            afFieldInput: {
                defaultValue: '',
                readonly: true,
                type: 'text',
            }
        },
    },
    status: {
        type: String,
        optional: true,
        defaultValue: '',
        autoform: {
            afFieldInput: {
                defaultValue: '',
                readonly: true,
                type: 'text',
            }
        },
    },

    cancelAt: {
        type: Date,
        optional: true,
        // defaultValue:false,
        autoform: {
            afFieldInput: {
                defaultValue: false,
                readonly: true,
                type: 'text',
            }
        },
    },


}))


