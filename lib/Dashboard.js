/**
 * Created by lvhln on 9/15/2016.
 */


AdminDashboard.addSidebarItem('Statistics', {
    icon: 'line-chart',

    urls: [
        {title: 'Statistics', url: AdminDashboard.path('/statistic')},
    ]
});
//
//


AdminDashboard.addSidebarItem('User', {
    icon: 'user-circle',
    urls: [
        {title: 'New', url: AdminDashboard.path('/Users/new')},
        {title: 'View All', url: AdminDashboard.path('/Users')},
    ]
});




AdminConfig = {
    name: function () {

        return "Admin"
    },
    userSchema: new SimpleSchema({
        'myAdminRoles': {
            type: [String],
            autoform: {
                type: "universe-select",
                afFieldInput: {
                    multiple: true,
                    options: function () {
                        return (Object.keys(AdminConfig.collections)).concat(["statistic","customerInTourSheet"]).map(function (item) {
                            return {
                                value: item,
                                label: item,
                            }
                        })
                    },
                }
            }
        }
    }),
    adminEmails: ['admin@gmail.com'],
    collections: {


        Tour: {
            routes: {
                view: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Tour")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                edit: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Tour")===-1)) {
                            return window.history.back();
                        }
                         return Meteor.subscribe('all-users');
                    }
                },
                new: {
                    waitOn: function () {
                        if ( Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Tour")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                }



                ,
            },


            // icon:"paper-plane-o",
            icon: "map-marker",
            color: 'red',
            tableColumns: [

                {label: "Name", name: 'trip', template: "trip"},
                {label: "Start Date", name: 'tourDateStart', template: 'showdate'},
                {label: "End Date", name: 'tourDateEnd', template: 'showdate'},
                {label: "Deposit Reminder Date", name: 'fullPaymentDueDate', template: 'showdate'},
                {label: "Customers", name: '_id', template: "customerInTour"},

                // {label:"people sign tour", name:' peopleInTravel',template:'peopleInTravel'},
                {label: "Booked", name: "peopleInTravel", template: "customers"},
                {label: "Minimum", name: 'minimum'},

                // {label: "Deposit Reminder Date", name: "_id", template: "canceltour"},
                // {label: "Trip Closing Date", name: "fullPaymentDueDate", template: "fullbooked"},
                {label: "Status", name: "fullPaymentDueDate", template: "fullbooked"},
            ],
            showDelColumn: false,
        },

        Trip: {
            routes: {
                view: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Trip")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                edit: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Trip")===-1)) {
                            return window.history.back();
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                new: {
                    waitOn: function () {
                        if ( Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Trip")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                }



                ,
            },

            icon: 'map',
            color: 'red',
            tableColumns: [
                {label: 'Trip Name ', name: 'tourName'},
                // {label: 'Trip Price ', name: 'tourPrice',template:'tourprice'},
                // {label: 'Trip start', name: 'tourDateStart'},
                // {label: 'Trip end ', name: 'tourDateEnd'},
                // {label: 'tourOverfview', name: 'tourOverView',template:'showimages'},
                {label: 'Trip Plan', name: 'DayPlan', template: 'totalday'},
                // {label:"image", name:'image',template:'showimage'},
            ],
            showDelColumn: false,
        },
        Coupon: {
            routes: {
                view: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Coupon")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                edit: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Coupon")===-1)) {
                            return window.history.back();
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                new: {
                    waitOn: function () {
                        if ( Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Coupon")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                }



                ,
            },
            icon: "ticket",
            color: 'teal',
            tableColumns: [
                {label: 'Discount Code ', name: 'code'},
                {label: 'Discount Start Date ', name: 'discountStartDate'},
                {label: 'Discount End Date ', name: 'discountEndDate'},
            ],
        },

        Seo:{
            label: "Seo",
            icon: "newspaper-o",
            color: "green",
        },

        Customers: {
            routes: {
                view: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Customers")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                edit: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Customers")===-1)) {
                            return window.history.back();
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                new: {
                    waitOn: function () {
                        if ( Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Customers")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                }



                ,
            },
            icon: "address-book",
            id: 'customer',
            color: "yellow",
            tableColumns: [
                {label: "Email", name: 'email'},
                {label: "Passport No", name: 'passportNo'},
                {label: "First Name", name: 'firstname'},
                {label: "Last Name", name: 'lastname'},
                {label: "DOB", name: 'dateofbird',template:'dob'},
                {label: "Gender", name: 'gender'},
                {label: "Phone", name: 'phone'},
                {label: "download", name: 'email',template:'downloadInfo'},
            ]
        },


        Imagegallery: {
            routes: {
                view: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Imagegallery")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                edit: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Imagegallery")===-1)) {
                            return window.history.back();
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                new: {
                    waitOn: function () {
                        if ( Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Imagegallery")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                }



                ,
            },
            label: "Image Gallery",
            icon: "image",
            tableColumns: [
                {label: 'Title', name: 'imageText'},
                {label: 'image', name: 'imageView', template: 'showimages'},
            ]
        },

        Article: {
            routes: {
                view: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Article")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                edit: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Article")===-1)) {
                            return window.history.back();
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                new: {
                    waitOn: function () {
                        if ( Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Article")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                }



                ,
            },

            icon: "newspaper-o",
            color: "green",
            tableColumns: [
                {label: 'Created At', name: "createdAt", template: 'showdate'},
                {label: 'Author', name: "Author"},
                {label: 'Title', name: "Title"},

                {label: 'Thumbnail', name: "Thumbnail", template: "showimages"},
                {label: 'Synopsis of Content', name: "Synopsis"},

            ]
        },

        Imagehome: {
            routes: {
                view: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Imagehome")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                edit: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Imagehome")===-1)) {
                            return window.history.back();
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                new: {
                    waitOn: function () {
                        if ( Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Imagehome")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                }



                ,
            },
            label: "Home Slider Images",
            icon: "image",
            color: "purple",
            tableColumns: [
                {label: 'Title', name: 'imageText'},
                {label: 'image', name: 'imageView', template: 'showimages'},
            ]
        },
        Linkvideo: {
            routes: {
                view: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Linkvideo")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                edit: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Linkvideo")===-1)) {
                            return window.history.back();
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                new: {
                    waitOn: function () {
                        if ( Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Linkvideo")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                }



                ,
            },
            label: "Home Video Link",
            color: "purple",
            icon: "video-camera",
            tableColumns: [
                {label: 'links', name: 'linkVideo'},
            ]
        },
        Icon: {
            routes: {
                view: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Icon")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                edit: {
                    waitOn: function () {
                        if (Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Icon")===-1)) {
                            return window.history.back();
                        }
                        return Meteor.subscribe('all-users');
                    }
                },
                new: {
                    waitOn: function () {
                        if ( Meteor.user() && (Meteor.user().emails[0].address!=="admin@gmail.com" && (Meteor.user().myAdminRoles||[]).findIndex("Icon")===-1)) {
                            bootbox.alert("CANNOT TO DONE BECAUSE NOT SUPER ADMIN",function () {
                                return window.history.back();
                            });
                            return;
                        }
                        return Meteor.subscribe('all-users');
                    }
                }



                ,
            },
            icon: "cube",
            color: "purple",
            tableColumns: [
                {label: 'Title', name: 'iconText'},
                {label: 'Icon', name: 'iconImage', template: 'showimage'}
            ],
        },





    },

}

