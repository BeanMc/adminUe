Trip = new Mongo.Collection('trip');
//
Image = new FS.Collection('image', {
    stores: [new FS.Store.GridFS('image', {})]
});

//
Trip.attachSchema(new SimpleSchema({
    createdAt: {
        type: String,
        label: "Created At",
        autoform: {
            afFieldInput: {
                type: 'datetime-local',
                defaultValue: new Date(),
                readonly: true,
                class: 'form-admin',

            }
        },
    },
    tourName: {
        type: String,
        label: 'Trip Name ',
        autoform: {
            afFieldInput: {
                label: "notice",
                type: "text",
                placeholder: "Example: Joseph Mak",
                defaultValue: " Joseph Mak",
                // rows: 1,
                class: 'form-admin',


            }
        },
    },


    Instructor: {
        type: String,
        label: "Guide ",
        optional: true,
        autoform: {
            id: "cong",
            afFieldInput: {
                label: "notice",
                type: "text",
                placeholder: "Example: Joseph Mak",
                defaultValue: " Joseph Mak",
                // rows: 1,

                class: 'form-admin',


            }
        },
    },
    Difficulty: {
        type: String,
        label: "Difficulty ",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "Example: Easy",
                defaultValue: " Easy",
                class: 'form-admin',

            }
        },
    },
    Weather: {
        type: String,
        label: "Weather ",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "Example: 15 - 30 C",
                defaultValue: " 15 - 30 C",
                class: 'form-admin',

            }
        },
    },
    Map: {
        type: String,
        label: "Map (use google embed code (key: AIzaSyCDN8Q2efVhQFGbVUFaqN9WYv-XBQ2asT4)    link: https://developers.google.com/maps/documentation/embed/start) ",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "Map",
                type: 'text',
                // placeholder: "Example: 808 French Road, Xinh-ga-po 200808 ...",
                // defaultValue: " 808 French Road, Xinh-ga-po 200808 ...",
            }
        },
    },
    Location: {
        type: String,
        label: "Location ",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'select',
                placeholder: "Example: 808 French Road, Singapore, 200808",
                defaultValue: " 808 French Road, Singapore 200808",
                options: function () {
                    return [{
                        "label": "Afghanistan-AFG",
                        "alpha-2": "AF",
                        "value": "AFG",
                        "country-code": "004",
                        "iso_3166-2": "ISO 3166-2:AF",
                        "region": "Asia",
                        "sub-region": "Southern Asia",
                        "region-code": "142",
                        "sub-region-code": "034"
                    }, {
                        "label": "Åland Islands-ALA",
                        "alpha-2": "AX",
                        "value": "ALA",
                        "country-code": "248",
                        "iso_3166-2": "ISO 3166-2:AX",
                        "sub-region-code": "154",
                        "region-code": "150",
                        "sub-region": "Northern Europe",
                        "region": "Europe"
                    }, {
                        "label": "Albania-ALB",
                        "alpha-2": "AL",
                        "value": "ALB",
                        "country-code": "008",
                        "iso_3166-2": "ISO 3166-2:AL",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Algeria-DZA",
                        "alpha-2": "DZ",
                        "value": "DZA",
                        "country-code": "012",
                        "iso_3166-2": "ISO 3166-2:DZ",
                        "region": "Africa",
                        "sub-region": "Northern Africa",
                        "region-code": "002",
                        "sub-region-code": "015"
                    }, {
                        "label": "American Samoa-ASM",
                        "alpha-2": "AS",
                        "value": "ASM",
                        "country-code": "016",
                        "iso_3166-2": "ISO 3166-2:AS",
                        "region": "Oceania",
                        "sub-region": "Polynesia",
                        "region-code": "009",
                        "sub-region-code": "061"
                    }, {
                        "label": "Andorra-AND",
                        "alpha-2": "AD",
                        "value": "AND",
                        "country-code": "020",
                        "iso_3166-2": "ISO 3166-2:AD",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Angola-AGO",
                        "alpha-2": "AO",
                        "value": "AGO",
                        "country-code": "024",
                        "iso_3166-2": "ISO 3166-2:AO",
                        "region": "Africa",
                        "sub-region": "Middle Africa",
                        "region-code": "002",
                        "sub-region-code": "017"
                    }, {
                        "label": "Anguilla-AIA",
                        "alpha-2": "AI",
                        "value": "AIA",
                        "country-code": "660",
                        "iso_3166-2": "ISO 3166-2:AI",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Antarctica-ATA",
                        "alpha-2": "AQ",
                        "value": "ATA",
                        "country-code": "010",
                        "iso_3166-2": "ISO 3166-2:AQ",
                        "sub-region-code": null,
                        "region-code": null,
                        "sub-region": null,
                        "region": null
                    }, {
                        "label": "Antigua and Barbuda-ATG",
                        "alpha-2": "AG",
                        "value": "ATG",
                        "country-code": "028",
                        "iso_3166-2": "ISO 3166-2:AG",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Argentina-ARG",
                        "alpha-2": "AR",
                        "value": "ARG",
                        "country-code": "032",
                        "iso_3166-2": "ISO 3166-2:AR",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "Armenia-ARM",
                        "alpha-2": "AM",
                        "value": "ARM",
                        "country-code": "051",
                        "iso_3166-2": "ISO 3166-2:AM",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Aruba-ABW",
                        "alpha-2": "AW",
                        "value": "ABW",
                        "country-code": "533",
                        "iso_3166-2": "ISO 3166-2:AW",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Australia-AUS",
                        "alpha-2": "AU",
                        "value": "AUS",
                        "country-code": "036",
                        "iso_3166-2": "ISO 3166-2:AU",
                        "region": "Oceania",
                        "sub-region": "Australia and New Zealand",
                        "region-code": "009",
                        "sub-region-code": "053"
                    }, {
                        "label": "Austria-AUT",
                        "alpha-2": "AT",
                        "value": "AUT",
                        "country-code": "040",
                        "iso_3166-2": "ISO 3166-2:AT",
                        "region": "Europe",
                        "sub-region": "Western Europe",
                        "region-code": "150",
                        "sub-region-code": "155"
                    }, {
                        "label": "Azerbaijan-AZE",
                        "alpha-2": "AZ",
                        "value": "AZE",
                        "country-code": "031",
                        "iso_3166-2": "ISO 3166-2:AZ",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Bahamas-BHS",
                        "alpha-2": "BS",
                        "value": "BHS",
                        "country-code": "044",
                        "iso_3166-2": "ISO 3166-2:BS",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Bahrain-BHR",
                        "alpha-2": "BH",
                        "value": "BHR",
                        "country-code": "048",
                        "iso_3166-2": "ISO 3166-2:BH",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Bangladesh-BGD",
                        "alpha-2": "BD",
                        "value": "BGD",
                        "country-code": "050",
                        "iso_3166-2": "ISO 3166-2:BD",
                        "region": "Asia",
                        "sub-region": "Southern Asia",
                        "region-code": "142",
                        "sub-region-code": "034"
                    }, {
                        "label": "Barbados-BRB",
                        "alpha-2": "BB",
                        "value": "BRB",
                        "country-code": "052",
                        "iso_3166-2": "ISO 3166-2:BB",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Belarus-BLR",
                        "alpha-2": "BY",
                        "value": "BLR",
                        "country-code": "112",
                        "iso_3166-2": "ISO 3166-2:BY",
                        "region": "Europe",
                        "sub-region": "Eastern Europe",
                        "region-code": "150",
                        "sub-region-code": "151"
                    }, {
                        "label": "Belgium-BEL",
                        "alpha-2": "BE",
                        "value": "BEL",
                        "country-code": "056",
                        "iso_3166-2": "ISO 3166-2:BE",
                        "region": "Europe",
                        "sub-region": "Western Europe",
                        "region-code": "150",
                        "sub-region-code": "155"
                    }, {
                        "label": "Belize-BLZ",
                        "alpha-2": "BZ",
                        "value": "BLZ",
                        "country-code": "084",
                        "iso_3166-2": "ISO 3166-2:BZ",
                        "region": "Americas",
                        "sub-region": "Central America",
                        "region-code": "019",
                        "sub-region-code": "013"
                    }, {
                        "label": "Benin-BEN",
                        "alpha-2": "BJ",
                        "value": "BEN",
                        "country-code": "204",
                        "iso_3166-2": "ISO 3166-2:BJ",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Bermuda-BMU",
                        "alpha-2": "BM",
                        "value": "BMU",
                        "country-code": "060",
                        "iso_3166-2": "ISO 3166-2:BM",
                        "region": "Americas",
                        "sub-region": "Northern America",
                        "region-code": "019",
                        "sub-region-code": "021"
                    }, {
                        "label": "Bhutan-BTN",
                        "alpha-2": "BT",
                        "value": "BTN",
                        "country-code": "064",
                        "iso_3166-2": "ISO 3166-2:BT",
                        "region": "Asia",
                        "sub-region": "Southern Asia",
                        "region-code": "142",
                        "sub-region-code": "034"
                    }, {
                        "label": "Bolivia (Plurinational State of)-BOL",
                        "alpha-2": "BO",
                        "value": "BOL",
                        "country-code": "068",
                        "iso_3166-2": "ISO 3166-2:BO",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "Bonaire, Sint Eustatius and Saba-BES",
                        "alpha-2": "BQ",
                        "value": "BES",
                        "country-code": "535",
                        "iso_3166-2": "ISO 3166-2:BQ",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Bosnia and Herzegovina-BIH",
                        "alpha-2": "BA",
                        "value": "BIH",
                        "country-code": "070",
                        "iso_3166-2": "ISO 3166-2:BA",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Botswana-BWA",
                        "alpha-2": "BW",
                        "value": "BWA",
                        "country-code": "072",
                        "iso_3166-2": "ISO 3166-2:BW",
                        "region": "Africa",
                        "sub-region": "Southern Africa",
                        "region-code": "002",
                        "sub-region-code": "018"
                    }, {
                        "label": "Bouvet Island-BVT",
                        "alpha-2": "BV",
                        "value": "BVT",
                        "country-code": "074",
                        "iso_3166-2": "ISO 3166-2:BV",
                        "sub-region-code": null,
                        "region-code": null,
                        "sub-region": null,
                        "region": null
                    }, {
                        "label": "Brazil-BRA",
                        "alpha-2": "BR",
                        "value": "BRA",
                        "country-code": "076",
                        "iso_3166-2": "ISO 3166-2:BR",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "British Indian Ocean Territory-IOT",
                        "alpha-2": "IO",
                        "value": "IOT",
                        "country-code": "086",
                        "iso_3166-2": "ISO 3166-2:IO",
                        "sub-region-code": null,
                        "region-code": null,
                        "sub-region": null,
                        "region": null
                    }, {
                        "label": "Brunei Darussalam-BRN",
                        "alpha-2": "BN",
                        "value": "BRN",
                        "country-code": "096",
                        "iso_3166-2": "ISO 3166-2:BN",
                        "region": "Asia",
                        "sub-region": "South-Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "035"
                    }, {
                        "label": "Bulgaria-BGR",
                        "alpha-2": "BG",
                        "value": "BGR",
                        "country-code": "100",
                        "iso_3166-2": "ISO 3166-2:BG",
                        "region": "Europe",
                        "sub-region": "Eastern Europe",
                        "region-code": "150",
                        "sub-region-code": "151"
                    }, {
                        "label": "Burkina Faso-BFA",
                        "alpha-2": "BF",
                        "value": "BFA",
                        "country-code": "854",
                        "iso_3166-2": "ISO 3166-2:BF",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Burundi-BDI",
                        "alpha-2": "BI",
                        "value": "BDI",
                        "country-code": "108",
                        "iso_3166-2": "ISO 3166-2:BI",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Cambodia-KHM",
                        "alpha-2": "KH",
                        "value": "KHM",
                        "country-code": "116",
                        "iso_3166-2": "ISO 3166-2:KH",
                        "region": "Asia",
                        "sub-region": "South-Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "035"
                    }, {
                        "label": "Cameroon-CMR",
                        "alpha-2": "CM",
                        "value": "CMR",
                        "country-code": "120",
                        "iso_3166-2": "ISO 3166-2:CM",
                        "region": "Africa",
                        "sub-region": "Middle Africa",
                        "region-code": "002",
                        "sub-region-code": "017"
                    }, {
                        "label": "Canada-CAN",
                        "alpha-2": "CA",
                        "value": "CAN",
                        "country-code": "124",
                        "iso_3166-2": "ISO 3166-2:CA",
                        "region": "Americas",
                        "sub-region": "Northern America",
                        "region-code": "019",
                        "sub-region-code": "021"
                    }, {
                        "label": "Cabo Verde-CPV",
                        "alpha-2": "CV",
                        "value": "CPV",
                        "country-code": "132",
                        "iso_3166-2": "ISO 3166-2:CV",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Cayman Islands-CYM",
                        "alpha-2": "KY",
                        "value": "CYM",
                        "country-code": "136",
                        "iso_3166-2": "ISO 3166-2:KY",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Central African Republic-CAF",
                        "alpha-2": "CF",
                        "value": "CAF",
                        "country-code": "140",
                        "iso_3166-2": "ISO 3166-2:CF",
                        "region": "Africa",
                        "sub-region": "Middle Africa",
                        "region-code": "002",
                        "sub-region-code": "017"
                    }, {
                        "label": "Chad-TCD",
                        "alpha-2": "TD",
                        "value": "TCD",
                        "country-code": "148",
                        "iso_3166-2": "ISO 3166-2:TD",
                        "region": "Africa",
                        "sub-region": "Middle Africa",
                        "region-code": "002",
                        "sub-region-code": "017"
                    }, {
                        "label": "Chile-CHL",
                        "alpha-2": "CL",
                        "value": "CHL",
                        "country-code": "152",
                        "iso_3166-2": "ISO 3166-2:CL",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "China-CHN",
                        "alpha-2": "CN",
                        "value": "CHN",
                        "country-code": "156",
                        "iso_3166-2": "ISO 3166-2:CN",
                        "region": "Asia",
                        "sub-region": "Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "030"
                    }, {
                        "label": "Christmas Island-CXR",
                        "alpha-2": "CX",
                        "value": "CXR",
                        "country-code": "162",
                        "iso_3166-2": "ISO 3166-2:CX",
                        "sub-region-code": null,
                        "region-code": null,
                        "sub-region": null,
                        "region": null
                    }, {
                        "label": "Cocos (Keeling) Islands-CCK",
                        "alpha-2": "CC",
                        "value": "CCK",
                        "country-code": "166",
                        "iso_3166-2": "ISO 3166-2:CC",
                        "sub-region-code": null,
                        "region-code": null,
                        "sub-region": null,
                        "region": null
                    }, {
                        "label": "Colombia-COL",
                        "alpha-2": "CO",
                        "value": "COL",
                        "country-code": "170",
                        "iso_3166-2": "ISO 3166-2:CO",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "Comoros-COM",
                        "alpha-2": "KM",
                        "value": "COM",
                        "country-code": "174",
                        "iso_3166-2": "ISO 3166-2:KM",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Congo-COG",
                        "alpha-2": "CG",
                        "value": "COG",
                        "country-code": "178",
                        "iso_3166-2": "ISO 3166-2:CG",
                        "region": "Africa",
                        "sub-region": "Middle Africa",
                        "region-code": "002",
                        "sub-region-code": "017"
                    }, {
                        "label": "Congo (Democratic Republic of the)-COD",
                        "alpha-2": "CD",
                        "value": "COD",
                        "country-code": "180",
                        "iso_3166-2": "ISO 3166-2:CD",
                        "region": "Africa",
                        "sub-region": "Middle Africa",
                        "region-code": "002",
                        "sub-region-code": "017"
                    }, {
                        "label": "Cook Islands-COK",
                        "alpha-2": "CK",
                        "value": "COK",
                        "country-code": "184",
                        "iso_3166-2": "ISO 3166-2:CK",
                        "region": "Oceania",
                        "sub-region": "Polynesia",
                        "region-code": "009",
                        "sub-region-code": "061"
                    }, {
                        "label": "Costa Rica-CRI",
                        "alpha-2": "CR",
                        "value": "CRI",
                        "country-code": "188",
                        "iso_3166-2": "ISO 3166-2:CR",
                        "region": "Americas",
                        "sub-region": "Central America",
                        "region-code": "019",
                        "sub-region-code": "013"
                    }, {
                        "label": "Côte d'Ivoire-CIV",
                        "alpha-2": "CI",
                        "value": "CIV",
                        "country-code": "384",
                        "iso_3166-2": "ISO 3166-2:CI",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Croatia-HRV",
                        "alpha-2": "HR",
                        "value": "HRV",
                        "country-code": "191",
                        "iso_3166-2": "ISO 3166-2:HR",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Cuba-CUB",
                        "alpha-2": "CU",
                        "value": "CUB",
                        "country-code": "192",
                        "iso_3166-2": "ISO 3166-2:CU",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Curaçao-CUW",
                        "alpha-2": "CW",
                        "value": "CUW",
                        "country-code": "531",
                        "iso_3166-2": "ISO 3166-2:CW",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Cyprus-CYP",
                        "alpha-2": "CY",
                        "value": "CYP",
                        "country-code": "196",
                        "iso_3166-2": "ISO 3166-2:CY",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Czech Republic-CZE",
                        "alpha-2": "CZ",
                        "value": "CZE",
                        "country-code": "203",
                        "iso_3166-2": "ISO 3166-2:CZ",
                        "region": "Europe",
                        "sub-region": "Eastern Europe",
                        "region-code": "150",
                        "sub-region-code": "151"
                    }, {
                        "label": "Denmark-DNK",
                        "alpha-2": "DK",
                        "value": "DNK",
                        "country-code": "208",
                        "iso_3166-2": "ISO 3166-2:DK",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "Djibouti-DJI",
                        "alpha-2": "DJ",
                        "value": "DJI",
                        "country-code": "262",
                        "iso_3166-2": "ISO 3166-2:DJ",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Dominica-DMA",
                        "alpha-2": "DM",
                        "value": "DMA",
                        "country-code": "212",
                        "iso_3166-2": "ISO 3166-2:DM",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Dominican Republic-DOM",
                        "alpha-2": "DO",
                        "value": "DOM",
                        "country-code": "214",
                        "iso_3166-2": "ISO 3166-2:DO",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Ecuador-ECU",
                        "alpha-2": "EC",
                        "value": "ECU",
                        "country-code": "218",
                        "iso_3166-2": "ISO 3166-2:EC",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "Egypt-EGY",
                        "alpha-2": "EG",
                        "value": "EGY",
                        "country-code": "818",
                        "iso_3166-2": "ISO 3166-2:EG",
                        "region": "Africa",
                        "sub-region": "Northern Africa",
                        "region-code": "002",
                        "sub-region-code": "015"
                    }, {
                        "label": "El Salvador-SLV",
                        "alpha-2": "SV",
                        "value": "SLV",
                        "country-code": "222",
                        "iso_3166-2": "ISO 3166-2:SV",
                        "region": "Americas",
                        "sub-region": "Central America",
                        "region-code": "019",
                        "sub-region-code": "013"
                    }, {
                        "label": "Equatorial Guinea-GNQ",
                        "alpha-2": "GQ",
                        "value": "GNQ",
                        "country-code": "226",
                        "iso_3166-2": "ISO 3166-2:GQ",
                        "region": "Africa",
                        "sub-region": "Middle Africa",
                        "region-code": "002",
                        "sub-region-code": "017"
                    }, {
                        "label": "Eritrea-ERI",
                        "alpha-2": "ER",
                        "value": "ERI",
                        "country-code": "232",
                        "iso_3166-2": "ISO 3166-2:ER",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Estonia-EST",
                        "alpha-2": "EE",
                        "value": "EST",
                        "country-code": "233",
                        "iso_3166-2": "ISO 3166-2:EE",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "Ethiopia-ETH",
                        "alpha-2": "ET",
                        "value": "ETH",
                        "country-code": "231",
                        "iso_3166-2": "ISO 3166-2:ET",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Falkland Islands (Malvinas)-FLK",
                        "alpha-2": "FK",
                        "value": "FLK",
                        "country-code": "238",
                        "iso_3166-2": "ISO 3166-2:FK",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "Faroe Islands-FRO",
                        "alpha-2": "FO",
                        "value": "FRO",
                        "country-code": "234",
                        "iso_3166-2": "ISO 3166-2:FO",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "Fiji-FJI",
                        "alpha-2": "FJ",
                        "value": "FJI",
                        "country-code": "242",
                        "iso_3166-2": "ISO 3166-2:FJ",
                        "region": "Oceania",
                        "sub-region": "Melanesia",
                        "region-code": "009",
                        "sub-region-code": "054"
                    }, {
                        "label": "Finland-FIN",
                        "alpha-2": "FI",
                        "value": "FIN",
                        "country-code": "246",
                        "iso_3166-2": "ISO 3166-2:FI",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "France-FRA",
                        "alpha-2": "FR",
                        "value": "FRA",
                        "country-code": "250",
                        "iso_3166-2": "ISO 3166-2:FR",
                        "region": "Europe",
                        "sub-region": "Western Europe",
                        "region-code": "150",
                        "sub-region-code": "155"
                    }, {
                        "label": "French Guiana-GUF",
                        "alpha-2": "GF",
                        "value": "GUF",
                        "country-code": "254",
                        "iso_3166-2": "ISO 3166-2:GF",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "French Polynesia-PYF",
                        "alpha-2": "PF",
                        "value": "PYF",
                        "country-code": "258",
                        "iso_3166-2": "ISO 3166-2:PF",
                        "region": "Oceania",
                        "sub-region": "Polynesia",
                        "region-code": "009",
                        "sub-region-code": "061"
                    }, {
                        "label": "French Southern Territories-ATF",
                        "alpha-2": "TF",
                        "value": "ATF",
                        "country-code": "260",
                        "iso_3166-2": "ISO 3166-2:TF",
                        "sub-region-code": null,
                        "region-code": null,
                        "sub-region": null,
                        "region": null
                    }, {
                        "label": "Gabon-GAB",
                        "alpha-2": "GA",
                        "value": "GAB",
                        "country-code": "266",
                        "iso_3166-2": "ISO 3166-2:GA",
                        "region": "Africa",
                        "sub-region": "Middle Africa",
                        "region-code": "002",
                        "sub-region-code": "017"
                    }, {
                        "label": "Gambia-GMB",
                        "alpha-2": "GM",
                        "value": "GMB",
                        "country-code": "270",
                        "iso_3166-2": "ISO 3166-2:GM",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Georgia-GEO",
                        "alpha-2": "GE",
                        "value": "GEO",
                        "country-code": "268",
                        "iso_3166-2": "ISO 3166-2:GE",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Germany-DEU",
                        "alpha-2": "DE",
                        "value": "DEU",
                        "country-code": "276",
                        "iso_3166-2": "ISO 3166-2:DE",
                        "region": "Europe",
                        "sub-region": "Western Europe",
                        "region-code": "150",
                        "sub-region-code": "155"
                    }, {
                        "label": "Ghana-GHA",
                        "alpha-2": "GH",
                        "value": "GHA",
                        "country-code": "288",
                        "iso_3166-2": "ISO 3166-2:GH",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Gibraltar-GIB",
                        "alpha-2": "GI",
                        "value": "GIB",
                        "country-code": "292",
                        "iso_3166-2": "ISO 3166-2:GI",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Greece-GRC",
                        "alpha-2": "GR",
                        "value": "GRC",
                        "country-code": "300",
                        "iso_3166-2": "ISO 3166-2:GR",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Greenland-GRL",
                        "alpha-2": "GL",
                        "value": "GRL",
                        "country-code": "304",
                        "iso_3166-2": "ISO 3166-2:GL",
                        "region": "Americas",
                        "sub-region": "Northern America",
                        "region-code": "019",
                        "sub-region-code": "021"
                    }, {
                        "label": "Grenada-GRD",
                        "alpha-2": "GD",
                        "value": "GRD",
                        "country-code": "308",
                        "iso_3166-2": "ISO 3166-2:GD",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Guadeloupe-GLP",
                        "alpha-2": "GP",
                        "value": "GLP",
                        "country-code": "312",
                        "iso_3166-2": "ISO 3166-2:GP",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Guam-GUM",
                        "alpha-2": "GU",
                        "value": "GUM",
                        "country-code": "316",
                        "iso_3166-2": "ISO 3166-2:GU",
                        "region": "Oceania",
                        "sub-region": "Micronesia",
                        "region-code": "009",
                        "sub-region-code": "057"
                    }, {
                        "label": "Guatemala-GTM",
                        "alpha-2": "GT",
                        "value": "GTM",
                        "country-code": "320",
                        "iso_3166-2": "ISO 3166-2:GT",
                        "region": "Americas",
                        "sub-region": "Central America",
                        "region-code": "019",
                        "sub-region-code": "013"
                    }, {
                        "label": "Guernsey-GGY",
                        "alpha-2": "GG",
                        "value": "GGY",
                        "country-code": "831",
                        "iso_3166-2": "ISO 3166-2:GG",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "Guinea-GIN",
                        "alpha-2": "GN",
                        "value": "GIN",
                        "country-code": "324",
                        "iso_3166-2": "ISO 3166-2:GN",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Guinea-Bissau-GNB",
                        "alpha-2": "GW",
                        "value": "GNB",
                        "country-code": "624",
                        "iso_3166-2": "ISO 3166-2:GW",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Guyana-GUY",
                        "alpha-2": "GY",
                        "value": "GUY",
                        "country-code": "328",
                        "iso_3166-2": "ISO 3166-2:GY",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "Haiti-HTI",
                        "alpha-2": "HT",
                        "value": "HTI",
                        "country-code": "332",
                        "iso_3166-2": "ISO 3166-2:HT",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Heard Island and McDonald Islands-HMD",
                        "alpha-2": "HM",
                        "value": "HMD",
                        "country-code": "334",
                        "iso_3166-2": "ISO 3166-2:HM",
                        "sub-region-code": null,
                        "region-code": null,
                        "sub-region": null,
                        "region": null
                    }, {
                        "label": "Holy See-VAT",
                        "alpha-2": "VA",
                        "value": "VAT",
                        "country-code": "336",
                        "iso_3166-2": "ISO 3166-2:VA",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Honduras-HND",
                        "alpha-2": "HN",
                        "value": "HND",
                        "country-code": "340",
                        "iso_3166-2": "ISO 3166-2:HN",
                        "region": "Americas",
                        "sub-region": "Central America",
                        "region-code": "019",
                        "sub-region-code": "013"
                    }, {
                        "label": "Hong Kong-HKG",
                        "alpha-2": "HK",
                        "value": "HKG",
                        "country-code": "344",
                        "iso_3166-2": "ISO 3166-2:HK",
                        "region": "Asia",
                        "sub-region": "Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "030"
                    }, {
                        "label": "Hungary-HUN",
                        "alpha-2": "HU",
                        "value": "HUN",
                        "country-code": "348",
                        "iso_3166-2": "ISO 3166-2:HU",
                        "region": "Europe",
                        "sub-region": "Eastern Europe",
                        "region-code": "150",
                        "sub-region-code": "151"
                    }, {
                        "label": "Iceland-ISL",
                        "alpha-2": "IS",
                        "value": "ISL",
                        "country-code": "352",
                        "iso_3166-2": "ISO 3166-2:IS",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "India-IND",
                        "alpha-2": "IN",
                        "value": "IND",
                        "country-code": "356",
                        "iso_3166-2": "ISO 3166-2:IN",
                        "region": "Asia",
                        "sub-region": "Southern Asia",
                        "region-code": "142",
                        "sub-region-code": "034"
                    }, {
                        "label": "Indonesia-IDN",
                        "alpha-2": "ID",
                        "value": "IDN",
                        "country-code": "360",
                        "iso_3166-2": "ISO 3166-2:ID",
                        "region": "Asia",
                        "sub-region": "South-Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "035"
                    }, {
                        "label": "Iran (Islamic Republic of)-IRN",
                        "alpha-2": "IR",
                        "value": "IRN",
                        "country-code": "364",
                        "iso_3166-2": "ISO 3166-2:IR",
                        "region": "Asia",
                        "sub-region": "Southern Asia",
                        "region-code": "142",
                        "sub-region-code": "034"
                    }, {
                        "label": "Iraq-IRQ",
                        "alpha-2": "IQ",
                        "value": "IRQ",
                        "country-code": "368",
                        "iso_3166-2": "ISO 3166-2:IQ",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Ireland-IRL",
                        "alpha-2": "IE",
                        "value": "IRL",
                        "country-code": "372",
                        "iso_3166-2": "ISO 3166-2:IE",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "Isle of Man-IMN",
                        "alpha-2": "IM",
                        "value": "IMN",
                        "country-code": "833",
                        "iso_3166-2": "ISO 3166-2:IM",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "Israel-ISR",
                        "alpha-2": "IL",
                        "value": "ISR",
                        "country-code": "376",
                        "iso_3166-2": "ISO 3166-2:IL",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Italy-ITA",
                        "alpha-2": "IT",
                        "value": "ITA",
                        "country-code": "380",
                        "iso_3166-2": "ISO 3166-2:IT",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Jamaica-JAM",
                        "alpha-2": "JM",
                        "value": "JAM",
                        "country-code": "388",
                        "iso_3166-2": "ISO 3166-2:JM",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Japan-JPN",
                        "alpha-2": "JP",
                        "value": "JPN",
                        "country-code": "392",
                        "iso_3166-2": "ISO 3166-2:JP",
                        "region": "Asia",
                        "sub-region": "Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "030"
                    }, {
                        "label": "Jersey-JEY",
                        "alpha-2": "JE",
                        "value": "JEY",
                        "country-code": "832",
                        "iso_3166-2": "ISO 3166-2:JE",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "Jordan-JOR",
                        "alpha-2": "JO",
                        "value": "JOR",
                        "country-code": "400",
                        "iso_3166-2": "ISO 3166-2:JO",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Kazakhstan-KAZ",
                        "alpha-2": "KZ",
                        "value": "KAZ",
                        "country-code": "398",
                        "iso_3166-2": "ISO 3166-2:KZ",
                        "region": "Asia",
                        "sub-region": "Central Asia",
                        "region-code": "142",
                        "sub-region-code": "143"
                    }, {
                        "label": "Kenya-KEN",
                        "alpha-2": "KE",
                        "value": "KEN",
                        "country-code": "404",
                        "iso_3166-2": "ISO 3166-2:KE",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Kiribati-KIR",
                        "alpha-2": "KI",
                        "value": "KIR",
                        "country-code": "296",
                        "iso_3166-2": "ISO 3166-2:KI",
                        "region": "Oceania",
                        "sub-region": "Micronesia",
                        "region-code": "009",
                        "sub-region-code": "057"
                    }, {
                        "label": "Korea (Democratic People's Republic of)-PRK",
                        "alpha-2": "KP",
                        "value": "PRK",
                        "country-code": "408",
                        "iso_3166-2": "ISO 3166-2:KP",
                        "region": "Asia",
                        "sub-region": "Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "030"
                    }, {
                        "label": "Korea (Republic of)-KOR",
                        "alpha-2": "KR",
                        "value": "KOR",
                        "country-code": "410",
                        "iso_3166-2": "ISO 3166-2:KR",
                        "region": "Asia",
                        "sub-region": "Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "030"
                    }, {
                        "label": "Kuwait-KWT",
                        "alpha-2": "KW",
                        "value": "KWT",
                        "country-code": "414",
                        "iso_3166-2": "ISO 3166-2:KW",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Kyrgyzstan-KGZ",
                        "alpha-2": "KG",
                        "value": "KGZ",
                        "country-code": "417",
                        "iso_3166-2": "ISO 3166-2:KG",
                        "region": "Asia",
                        "sub-region": "Central Asia",
                        "region-code": "142",
                        "sub-region-code": "143"
                    }, {
                        "label": "Lao People's Democratic Republic-LAO",
                        "alpha-2": "LA",
                        "value": "LAO",
                        "country-code": "418",
                        "iso_3166-2": "ISO 3166-2:LA",
                        "region": "Asia",
                        "sub-region": "South-Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "035"
                    }, {
                        "label": "Latvia-LVA",
                        "alpha-2": "LV",
                        "value": "LVA",
                        "country-code": "428",
                        "iso_3166-2": "ISO 3166-2:LV",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "Lebanon-LBN",
                        "alpha-2": "LB",
                        "value": "LBN",
                        "country-code": "422",
                        "iso_3166-2": "ISO 3166-2:LB",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Lesotho-LSO",
                        "alpha-2": "LS",
                        "value": "LSO",
                        "country-code": "426",
                        "iso_3166-2": "ISO 3166-2:LS",
                        "region": "Africa",
                        "sub-region": "Southern Africa",
                        "region-code": "002",
                        "sub-region-code": "018"
                    }, {
                        "label": "Liberia-LBR",
                        "alpha-2": "LR",
                        "value": "LBR",
                        "country-code": "430",
                        "iso_3166-2": "ISO 3166-2:LR",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Libya-LBY",
                        "alpha-2": "LY",
                        "value": "LBY",
                        "country-code": "434",
                        "iso_3166-2": "ISO 3166-2:LY",
                        "region": "Africa",
                        "sub-region": "Northern Africa",
                        "region-code": "002",
                        "sub-region-code": "015"
                    }, {
                        "label": "Liechtenstein-LIE",
                        "alpha-2": "LI",
                        "value": "LIE",
                        "country-code": "438",
                        "iso_3166-2": "ISO 3166-2:LI",
                        "region": "Europe",
                        "sub-region": "Western Europe",
                        "region-code": "150",
                        "sub-region-code": "155"
                    }, {
                        "label": "Lithuania-LTU",
                        "alpha-2": "LT",
                        "value": "LTU",
                        "country-code": "440",
                        "iso_3166-2": "ISO 3166-2:LT",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "Luxembourg-LUX",
                        "alpha-2": "LU",
                        "value": "LUX",
                        "country-code": "442",
                        "iso_3166-2": "ISO 3166-2:LU",
                        "region": "Europe",
                        "sub-region": "Western Europe",
                        "region-code": "150",
                        "sub-region-code": "155"
                    }, {
                        "label": "Macao-MAC",
                        "alpha-2": "MO",
                        "value": "MAC",
                        "country-code": "446",
                        "iso_3166-2": "ISO 3166-2:MO",
                        "region": "Asia",
                        "sub-region": "Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "030"
                    }, {
                        "label": "Macedonia (the former Yugoslav Republic of)-MKD",
                        "alpha-2": "MK",
                        "value": "MKD",
                        "country-code": "807",
                        "iso_3166-2": "ISO 3166-2:MK",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Madagascar-MDG",
                        "alpha-2": "MG",
                        "value": "MDG",
                        "country-code": "450",
                        "iso_3166-2": "ISO 3166-2:MG",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Malawi-MWI",
                        "alpha-2": "MW",
                        "value": "MWI",
                        "country-code": "454",
                        "iso_3166-2": "ISO 3166-2:MW",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Malaysia-MYS",
                        "alpha-2": "MY",
                        "value": "MYS",
                        "country-code": "458",
                        "iso_3166-2": "ISO 3166-2:MY",
                        "region": "Asia",
                        "sub-region": "South-Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "035"
                    }, {
                        "label": "Maldives-MDV",
                        "alpha-2": "MV",
                        "value": "MDV",
                        "country-code": "462",
                        "iso_3166-2": "ISO 3166-2:MV",
                        "region": "Asia",
                        "sub-region": "Southern Asia",
                        "region-code": "142",
                        "sub-region-code": "034"
                    }, {
                        "label": "Mali-MLI",
                        "alpha-2": "ML",
                        "value": "MLI",
                        "country-code": "466",
                        "iso_3166-2": "ISO 3166-2:ML",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Malta-MLT",
                        "alpha-2": "MT",
                        "value": "MLT",
                        "country-code": "470",
                        "iso_3166-2": "ISO 3166-2:MT",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Marshall Islands-MHL",
                        "alpha-2": "MH",
                        "value": "MHL",
                        "country-code": "584",
                        "iso_3166-2": "ISO 3166-2:MH",
                        "region": "Oceania",
                        "sub-region": "Micronesia",
                        "region-code": "009",
                        "sub-region-code": "057"
                    }, {
                        "label": "Martinique-MTQ",
                        "alpha-2": "MQ",
                        "value": "MTQ",
                        "country-code": "474",
                        "iso_3166-2": "ISO 3166-2:MQ",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Mauritania-MRT",
                        "alpha-2": "MR",
                        "value": "MRT",
                        "country-code": "478",
                        "iso_3166-2": "ISO 3166-2:MR",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Mauritius-MUS",
                        "alpha-2": "MU",
                        "value": "MUS",
                        "country-code": "480",
                        "iso_3166-2": "ISO 3166-2:MU",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Mayotte-MYT",
                        "alpha-2": "YT",
                        "value": "MYT",
                        "country-code": "175",
                        "iso_3166-2": "ISO 3166-2:YT",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Mexico-MEX",
                        "alpha-2": "MX",
                        "value": "MEX",
                        "country-code": "484",
                        "iso_3166-2": "ISO 3166-2:MX",
                        "region": "Americas",
                        "sub-region": "Central America",
                        "region-code": "019",
                        "sub-region-code": "013"
                    }, {
                        "label": "Micronesia (Federated States of)-FSM",
                        "alpha-2": "FM",
                        "value": "FSM",
                        "country-code": "583",
                        "iso_3166-2": "ISO 3166-2:FM",
                        "region": "Oceania",
                        "sub-region": "Micronesia",
                        "region-code": "009",
                        "sub-region-code": "057"
                    }, {
                        "label": "Moldova (Republic of)-MDA",
                        "alpha-2": "MD",
                        "value": "MDA",
                        "country-code": "498",
                        "iso_3166-2": "ISO 3166-2:MD",
                        "region": "Europe",
                        "sub-region": "Eastern Europe",
                        "region-code": "150",
                        "sub-region-code": "151"
                    }, {
                        "label": "Monaco-MCO",
                        "alpha-2": "MC",
                        "value": "MCO",
                        "country-code": "492",
                        "iso_3166-2": "ISO 3166-2:MC",
                        "region": "Europe",
                        "sub-region": "Western Europe",
                        "region-code": "150",
                        "sub-region-code": "155"
                    }, {
                        "label": "Mongolia-MNG",
                        "alpha-2": "MN",
                        "value": "MNG",
                        "country-code": "496",
                        "iso_3166-2": "ISO 3166-2:MN",
                        "region": "Asia",
                        "sub-region": "Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "030"
                    }, {
                        "label": "Montenegro-MNE",
                        "alpha-2": "ME",
                        "value": "MNE",
                        "country-code": "499",
                        "iso_3166-2": "ISO 3166-2:ME",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Montserrat-MSR",
                        "alpha-2": "MS",
                        "value": "MSR",
                        "country-code": "500",
                        "iso_3166-2": "ISO 3166-2:MS",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Morocco-MAR",
                        "alpha-2": "MA",
                        "value": "MAR",
                        "country-code": "504",
                        "iso_3166-2": "ISO 3166-2:MA",
                        "region": "Africa",
                        "sub-region": "Northern Africa",
                        "region-code": "002",
                        "sub-region-code": "015"
                    }, {
                        "label": "Mozambique-MOZ",
                        "alpha-2": "MZ",
                        "value": "MOZ",
                        "country-code": "508",
                        "iso_3166-2": "ISO 3166-2:MZ",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Myanmar-MMR",
                        "alpha-2": "MM",
                        "value": "MMR",
                        "country-code": "104",
                        "iso_3166-2": "ISO 3166-2:MM",
                        "region": "Asia",
                        "sub-region": "South-Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "035"
                    }, {
                        "label": "Namibia-NAM",
                        "alpha-2": "NA",
                        "value": "NAM",
                        "country-code": "516",
                        "iso_3166-2": "ISO 3166-2:NA",
                        "region": "Africa",
                        "sub-region": "Southern Africa",
                        "region-code": "002",
                        "sub-region-code": "018"
                    }, {
                        "label": "Nauru-NRU",
                        "alpha-2": "NR",
                        "value": "NRU",
                        "country-code": "520",
                        "iso_3166-2": "ISO 3166-2:NR",
                        "region": "Oceania",
                        "sub-region": "Micronesia",
                        "region-code": "009",
                        "sub-region-code": "057"
                    }, {
                        "label": "Nepal-NPL",
                        "alpha-2": "NP",
                        "value": "NPL",
                        "country-code": "524",
                        "iso_3166-2": "ISO 3166-2:NP",
                        "region": "Asia",
                        "sub-region": "Southern Asia",
                        "region-code": "142",
                        "sub-region-code": "034"
                    }, {
                        "label": "Netherlands-NLD",
                        "alpha-2": "NL",
                        "value": "NLD",
                        "country-code": "528",
                        "iso_3166-2": "ISO 3166-2:NL",
                        "region": "Europe",
                        "sub-region": "Western Europe",
                        "region-code": "150",
                        "sub-region-code": "155"
                    }, {
                        "label": "New Caledonia-NCL",
                        "alpha-2": "NC",
                        "value": "NCL",
                        "country-code": "540",
                        "iso_3166-2": "ISO 3166-2:NC",
                        "region": "Oceania",
                        "sub-region": "Melanesia",
                        "region-code": "009",
                        "sub-region-code": "054"
                    }, {
                        "label": "New Zealand-NZL",
                        "alpha-2": "NZ",
                        "value": "NZL",
                        "country-code": "554",
                        "iso_3166-2": "ISO 3166-2:NZ",
                        "region": "Oceania",
                        "sub-region": "Australia and New Zealand",
                        "region-code": "009",
                        "sub-region-code": "053"
                    }, {
                        "label": "Nicaragua-NIC",
                        "alpha-2": "NI",
                        "value": "NIC",
                        "country-code": "558",
                        "iso_3166-2": "ISO 3166-2:NI",
                        "region": "Americas",
                        "sub-region": "Central America",
                        "region-code": "019",
                        "sub-region-code": "013"
                    }, {
                        "label": "Niger-NER",
                        "alpha-2": "NE",
                        "value": "NER",
                        "country-code": "562",
                        "iso_3166-2": "ISO 3166-2:NE",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Nigeria-NGA",
                        "alpha-2": "NG",
                        "value": "NGA",
                        "country-code": "566",
                        "iso_3166-2": "ISO 3166-2:NG",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Niue-NIU",
                        "alpha-2": "NU",
                        "value": "NIU",
                        "country-code": "570",
                        "iso_3166-2": "ISO 3166-2:NU",
                        "region": "Oceania",
                        "sub-region": "Polynesia",
                        "region-code": "009",
                        "sub-region-code": "061"
                    }, {
                        "label": "Norfolk Island-NFK",
                        "alpha-2": "NF",
                        "value": "NFK",
                        "country-code": "574",
                        "iso_3166-2": "ISO 3166-2:NF",
                        "region": "Oceania",
                        "sub-region": "Australia and New Zealand",
                        "region-code": "009",
                        "sub-region-code": "053"
                    }, {
                        "label": "Northern Mariana Islands-MNP",
                        "alpha-2": "MP",
                        "value": "MNP",
                        "country-code": "580",
                        "iso_3166-2": "ISO 3166-2:MP",
                        "region": "Oceania",
                        "sub-region": "Micronesia",
                        "region-code": "009",
                        "sub-region-code": "057"
                    }, {
                        "label": "Norway-NOR",
                        "alpha-2": "NO",
                        "value": "NOR",
                        "country-code": "578",
                        "iso_3166-2": "ISO 3166-2:NO",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "Oman-OMN",
                        "alpha-2": "OM",
                        "value": "OMN",
                        "country-code": "512",
                        "iso_3166-2": "ISO 3166-2:OM",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Pakistan-PAK",
                        "alpha-2": "PK",
                        "value": "PAK",
                        "country-code": "586",
                        "iso_3166-2": "ISO 3166-2:PK",
                        "region": "Asia",
                        "sub-region": "Southern Asia",
                        "region-code": "142",
                        "sub-region-code": "034"
                    }, {
                        "label": "Palau-PLW",
                        "alpha-2": "PW",
                        "value": "PLW",
                        "country-code": "585",
                        "iso_3166-2": "ISO 3166-2:PW",
                        "region": "Oceania",
                        "sub-region": "Micronesia",
                        "region-code": "009",
                        "sub-region-code": "057"
                    }, {
                        "label": "Palestine, State of-PSE",
                        "alpha-2": "PS",
                        "value": "PSE",
                        "country-code": "275",
                        "iso_3166-2": "ISO 3166-2:PS",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Panama-PAN",
                        "alpha-2": "PA",
                        "value": "PAN",
                        "country-code": "591",
                        "iso_3166-2": "ISO 3166-2:PA",
                        "region": "Americas",
                        "sub-region": "Central America",
                        "region-code": "019",
                        "sub-region-code": "013"
                    }, {
                        "label": "Papua New Guinea-PNG",
                        "alpha-2": "PG",
                        "value": "PNG",
                        "country-code": "598",
                        "iso_3166-2": "ISO 3166-2:PG",
                        "region": "Oceania",
                        "sub-region": "Melanesia",
                        "region-code": "009",
                        "sub-region-code": "054"
                    }, {
                        "label": "Paraguay-PRY",
                        "alpha-2": "PY",
                        "value": "PRY",
                        "country-code": "600",
                        "iso_3166-2": "ISO 3166-2:PY",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "Peru-PER",
                        "alpha-2": "PE",
                        "value": "PER",
                        "country-code": "604",
                        "iso_3166-2": "ISO 3166-2:PE",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "Philippines-PHL",
                        "alpha-2": "PH",
                        "value": "PHL",
                        "country-code": "608",
                        "iso_3166-2": "ISO 3166-2:PH",
                        "region": "Asia",
                        "sub-region": "South-Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "035"
                    }, {
                        "label": "Pitcairn-PCN",
                        "alpha-2": "PN",
                        "value": "PCN",
                        "country-code": "612",
                        "iso_3166-2": "ISO 3166-2:PN",
                        "region": "Oceania",
                        "sub-region": "Polynesia",
                        "region-code": "009",
                        "sub-region-code": "061"
                    }, {
                        "label": "Poland-POL",
                        "alpha-2": "PL",
                        "value": "POL",
                        "country-code": "616",
                        "iso_3166-2": "ISO 3166-2:PL",
                        "region": "Europe",
                        "sub-region": "Eastern Europe",
                        "region-code": "150",
                        "sub-region-code": "151"
                    }, {
                        "label": "Portugal-PRT",
                        "alpha-2": "PT",
                        "value": "PRT",
                        "country-code": "620",
                        "iso_3166-2": "ISO 3166-2:PT",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Puerto Rico-PRI",
                        "alpha-2": "PR",
                        "value": "PRI",
                        "country-code": "630",
                        "iso_3166-2": "ISO 3166-2:PR",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Qatar-QAT",
                        "alpha-2": "QA",
                        "value": "QAT",
                        "country-code": "634",
                        "iso_3166-2": "ISO 3166-2:QA",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Réunion-REU",
                        "alpha-2": "RE",
                        "value": "REU",
                        "country-code": "638",
                        "iso_3166-2": "ISO 3166-2:RE",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Romania-ROU",
                        "alpha-2": "RO",
                        "value": "ROU",
                        "country-code": "642",
                        "iso_3166-2": "ISO 3166-2:RO",
                        "region": "Europe",
                        "sub-region": "Eastern Europe",
                        "region-code": "150",
                        "sub-region-code": "151"
                    }, {
                        "label": "Russian Federation-RUS",
                        "alpha-2": "RU",
                        "value": "RUS",
                        "country-code": "643",
                        "iso_3166-2": "ISO 3166-2:RU",
                        "region": "Europe",
                        "sub-region": "Eastern Europe",
                        "region-code": "150",
                        "sub-region-code": "151"
                    }, {
                        "label": "Rwanda-RWA",
                        "alpha-2": "RW",
                        "value": "RWA",
                        "country-code": "646",
                        "iso_3166-2": "ISO 3166-2:RW",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Saint Barthélemy-BLM",
                        "alpha-2": "BL",
                        "value": "BLM",
                        "country-code": "652",
                        "iso_3166-2": "ISO 3166-2:BL",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Saint Helena, Ascension and Tristan da Cunha-SHN",
                        "alpha-2": "SH",
                        "value": "SHN",
                        "country-code": "654",
                        "iso_3166-2": "ISO 3166-2:SH",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Saint Kitts and Nevis-KNA",
                        "alpha-2": "KN",
                        "value": "KNA",
                        "country-code": "659",
                        "iso_3166-2": "ISO 3166-2:KN",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Saint Lucia-LCA",
                        "alpha-2": "LC",
                        "value": "LCA",
                        "country-code": "662",
                        "iso_3166-2": "ISO 3166-2:LC",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Saint Martin (French part)-MAF",
                        "alpha-2": "MF",
                        "value": "MAF",
                        "country-code": "663",
                        "iso_3166-2": "ISO 3166-2:MF",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Saint Pierre and Miquelon-SPM",
                        "alpha-2": "PM",
                        "value": "SPM",
                        "country-code": "666",
                        "iso_3166-2": "ISO 3166-2:PM",
                        "region": "Americas",
                        "sub-region": "Northern America",
                        "region-code": "019",
                        "sub-region-code": "021"
                    }, {
                        "label": "Saint Vincent and the Grenadines-VCT",
                        "alpha-2": "VC",
                        "value": "VCT",
                        "country-code": "670",
                        "iso_3166-2": "ISO 3166-2:VC",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Samoa-WSM",
                        "alpha-2": "WS",
                        "value": "WSM",
                        "country-code": "882",
                        "iso_3166-2": "ISO 3166-2:WS",
                        "region": "Oceania",
                        "sub-region": "Polynesia",
                        "region-code": "009",
                        "sub-region-code": "061"
                    }, {
                        "label": "San Marino-SMR",
                        "alpha-2": "SM",
                        "value": "SMR",
                        "country-code": "674",
                        "iso_3166-2": "ISO 3166-2:SM",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Sao Tome and Principe-STP",
                        "alpha-2": "ST",
                        "value": "STP",
                        "country-code": "678",
                        "iso_3166-2": "ISO 3166-2:ST",
                        "region": "Africa",
                        "sub-region": "Middle Africa",
                        "region-code": "002",
                        "sub-region-code": "017"
                    }, {
                        "label": "Saudi Arabia-SAU",
                        "alpha-2": "SA",
                        "value": "SAU",
                        "country-code": "682",
                        "iso_3166-2": "ISO 3166-2:SA",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Senegal-SEN",
                        "alpha-2": "SN",
                        "value": "SEN",
                        "country-code": "686",
                        "iso_3166-2": "ISO 3166-2:SN",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Serbia-SRB",
                        "alpha-2": "RS",
                        "value": "SRB",
                        "country-code": "688",
                        "iso_3166-2": "ISO 3166-2:RS",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Seychelles-SYC",
                        "alpha-2": "SC",
                        "value": "SYC",
                        "country-code": "690",
                        "iso_3166-2": "ISO 3166-2:SC",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Sierra Leone-SLE",
                        "alpha-2": "SL",
                        "value": "SLE",
                        "country-code": "694",
                        "iso_3166-2": "ISO 3166-2:SL",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Singapore-SGP",
                        "alpha-2": "SG",
                        "value": "SGP",
                        "country-code": "702",
                        "iso_3166-2": "ISO 3166-2:SG",
                        "region": "Asia",
                        "sub-region": "South-Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "035"
                    }, {
                        "label": "Sint Maarten (Dutch part)-SXM",
                        "alpha-2": "SX",
                        "value": "SXM",
                        "country-code": "534",
                        "iso_3166-2": "ISO 3166-2:SX",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Slovakia-SVK",
                        "alpha-2": "SK",
                        "value": "SVK",
                        "country-code": "703",
                        "iso_3166-2": "ISO 3166-2:SK",
                        "region": "Europe",
                        "sub-region": "Eastern Europe",
                        "region-code": "150",
                        "sub-region-code": "151"
                    }, {
                        "label": "Slovenia-SVN",
                        "alpha-2": "SI",
                        "value": "SVN",
                        "country-code": "705",
                        "iso_3166-2": "ISO 3166-2:SI",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Solomon Islands-SLB",
                        "alpha-2": "SB",
                        "value": "SLB",
                        "country-code": "090",
                        "iso_3166-2": "ISO 3166-2:SB",
                        "region": "Oceania",
                        "sub-region": "Melanesia",
                        "region-code": "009",
                        "sub-region-code": "054"
                    }, {
                        "label": "Somalia-SOM",
                        "alpha-2": "SO",
                        "value": "SOM",
                        "country-code": "706",
                        "iso_3166-2": "ISO 3166-2:SO",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "South Africa-ZAF",
                        "alpha-2": "ZA",
                        "value": "ZAF",
                        "country-code": "710",
                        "iso_3166-2": "ISO 3166-2:ZA",
                        "region": "Africa",
                        "sub-region": "Southern Africa",
                        "region-code": "002",
                        "sub-region-code": "018"
                    }, {
                        "label": "South Georgia and the South Sandwich Islands-SGS",
                        "alpha-2": "GS",
                        "value": "SGS",
                        "country-code": "239",
                        "iso_3166-2": "ISO 3166-2:GS",
                        "sub-region-code": null,
                        "region-code": null,
                        "sub-region": null,
                        "region": null
                    }, {
                        "label": "South Sudan-SSD",
                        "alpha-2": "SS",
                        "value": "SSD",
                        "country-code": "728",
                        "iso_3166-2": "ISO 3166-2:SS",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Spain-ESP",
                        "alpha-2": "ES",
                        "value": "ESP",
                        "country-code": "724",
                        "iso_3166-2": "ISO 3166-2:ES",
                        "region": "Europe",
                        "sub-region": "Southern Europe",
                        "region-code": "150",
                        "sub-region-code": "039"
                    }, {
                        "label": "Sri Lanka-LKA",
                        "alpha-2": "LK",
                        "value": "LKA",
                        "country-code": "144",
                        "iso_3166-2": "ISO 3166-2:LK",
                        "region": "Asia",
                        "sub-region": "Southern Asia",
                        "region-code": "142",
                        "sub-region-code": "034"
                    }, {
                        "label": "Sudan-SDN",
                        "alpha-2": "SD",
                        "value": "SDN",
                        "country-code": "729",
                        "iso_3166-2": "ISO 3166-2:SD",
                        "region": "Africa",
                        "sub-region": "Northern Africa",
                        "region-code": "002",
                        "sub-region-code": "015"
                    }, {
                        "label": "Surilabel-SUR",
                        "alpha-2": "SR",
                        "value": "SUR",
                        "country-code": "740",
                        "iso_3166-2": "ISO 3166-2:SR",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "Svalbard and Jan Mayen-SJM",
                        "alpha-2": "SJ",
                        "value": "SJM",
                        "country-code": "744",
                        "iso_3166-2": "ISO 3166-2:SJ",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "Swaziland-SWZ",
                        "alpha-2": "SZ",
                        "value": "SWZ",
                        "country-code": "748",
                        "iso_3166-2": "ISO 3166-2:SZ",
                        "region": "Africa",
                        "sub-region": "Southern Africa",
                        "region-code": "002",
                        "sub-region-code": "018"
                    }, {
                        "label": "Sweden-SWE",
                        "alpha-2": "SE",
                        "value": "SWE",
                        "country-code": "752",
                        "iso_3166-2": "ISO 3166-2:SE",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "Switzerland-CHE",
                        "alpha-2": "CH",
                        "value": "CHE",
                        "country-code": "756",
                        "iso_3166-2": "ISO 3166-2:CH",
                        "region": "Europe",
                        "sub-region": "Western Europe",
                        "region-code": "150",
                        "sub-region-code": "155"
                    }, {
                        "label": "Syrian Arab Republic-SYR",
                        "alpha-2": "SY",
                        "value": "SYR",
                        "country-code": "760",
                        "iso_3166-2": "ISO 3166-2:SY",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Taiwan, Province of China-TWN",
                        "alpha-2": "TW",
                        "value": "TWN",
                        "country-code": "158",
                        "iso_3166-2": "ISO 3166-2:TW",
                        "region": "Asia",
                        "sub-region": "Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "030"
                    }, {
                        "label": "Tajikistan-TJK",
                        "alpha-2": "TJ",
                        "value": "TJK",
                        "country-code": "762",
                        "iso_3166-2": "ISO 3166-2:TJ",
                        "region": "Asia",
                        "sub-region": "Central Asia",
                        "region-code": "142",
                        "sub-region-code": "143"
                    }, {
                        "label": "Tanzania, United Republic of-TZA",
                        "alpha-2": "TZ",
                        "value": "TZA",
                        "country-code": "834",
                        "iso_3166-2": "ISO 3166-2:TZ",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Thailand-THA",
                        "alpha-2": "TH",
                        "value": "THA",
                        "country-code": "764",
                        "iso_3166-2": "ISO 3166-2:TH",
                        "region": "Asia",
                        "sub-region": "South-Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "035"
                    }, {
                        "label": "Timor-Leste-TLS",
                        "alpha-2": "TL",
                        "value": "TLS",
                        "country-code": "626",
                        "iso_3166-2": "ISO 3166-2:TL",
                        "region": "Asia",
                        "sub-region": "South-Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "035"
                    }, {
                        "label": "Togo-TGO",
                        "alpha-2": "TG",
                        "value": "TGO",
                        "country-code": "768",
                        "iso_3166-2": "ISO 3166-2:TG",
                        "region": "Africa",
                        "sub-region": "Western Africa",
                        "region-code": "002",
                        "sub-region-code": "011"
                    }, {
                        "label": "Tokelau-TKL",
                        "alpha-2": "TK",
                        "value": "TKL",
                        "country-code": "772",
                        "iso_3166-2": "ISO 3166-2:TK",
                        "region": "Oceania",
                        "sub-region": "Polynesia",
                        "region-code": "009",
                        "sub-region-code": "061"
                    }, {
                        "label": "Tonga-TON",
                        "alpha-2": "TO",
                        "value": "TON",
                        "country-code": "776",
                        "iso_3166-2": "ISO 3166-2:TO",
                        "region": "Oceania",
                        "sub-region": "Polynesia",
                        "region-code": "009",
                        "sub-region-code": "061"
                    }, {
                        "label": "Trinidad and Tobago-TTO",
                        "alpha-2": "TT",
                        "value": "TTO",
                        "country-code": "780",
                        "iso_3166-2": "ISO 3166-2:TT",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Tunisia-TUN",
                        "alpha-2": "TN",
                        "value": "TUN",
                        "country-code": "788",
                        "iso_3166-2": "ISO 3166-2:TN",
                        "region": "Africa",
                        "sub-region": "Northern Africa",
                        "region-code": "002",
                        "sub-region-code": "015"
                    }, {
                        "label": "Turkey-TUR",
                        "alpha-2": "TR",
                        "value": "TUR",
                        "country-code": "792",
                        "iso_3166-2": "ISO 3166-2:TR",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Turkmenistan-TKM",
                        "alpha-2": "TM",
                        "value": "TKM",
                        "country-code": "795",
                        "iso_3166-2": "ISO 3166-2:TM",
                        "region": "Asia",
                        "sub-region": "Central Asia",
                        "region-code": "142",
                        "sub-region-code": "143"
                    }, {
                        "label": "Turks and Caicos Islands-TCA",
                        "alpha-2": "TC",
                        "value": "TCA",
                        "country-code": "796",
                        "iso_3166-2": "ISO 3166-2:TC",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Tuvalu-TUV",
                        "alpha-2": "TV",
                        "value": "TUV",
                        "country-code": "798",
                        "iso_3166-2": "ISO 3166-2:TV",
                        "region": "Oceania",
                        "sub-region": "Polynesia",
                        "region-code": "009",
                        "sub-region-code": "061"
                    }, {
                        "label": "Uganda-UGA",
                        "alpha-2": "UG",
                        "value": "UGA",
                        "country-code": "800",
                        "iso_3166-2": "ISO 3166-2:UG",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Ukraine-UKR",
                        "alpha-2": "UA",
                        "value": "UKR",
                        "country-code": "804",
                        "iso_3166-2": "ISO 3166-2:UA",
                        "region": "Europe",
                        "sub-region": "Eastern Europe",
                        "region-code": "150",
                        "sub-region-code": "151"
                    }, {
                        "label": "United Arab Emirates-ARE",
                        "alpha-2": "AE",
                        "value": "ARE",
                        "country-code": "784",
                        "iso_3166-2": "ISO 3166-2:AE",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "United Kingdom of Great Britain and Northern Ireland-GBR",
                        "alpha-2": "GB",
                        "value": "GBR",
                        "country-code": "826",
                        "iso_3166-2": "ISO 3166-2:GB",
                        "region": "Europe",
                        "sub-region": "Northern Europe",
                        "region-code": "150",
                        "sub-region-code": "154"
                    }, {
                        "label": "United States of America-USA",
                        "alpha-2": "US",
                        "value": "USA",
                        "country-code": "840",
                        "iso_3166-2": "ISO 3166-2:US",
                        "region": "Americas",
                        "sub-region": "Northern America",
                        "region-code": "019",
                        "sub-region-code": "021"
                    }, {
                        "label": "United States Minor Outlying Islands-UMI",
                        "alpha-2": "UM",
                        "value": "UMI",
                        "country-code": "581",
                        "iso_3166-2": "ISO 3166-2:UM",
                        "sub-region-code": null,
                        "region-code": null,
                        "sub-region": null,
                        "region": null
                    }, {
                        "label": "Uruguay-URY",
                        "alpha-2": "UY",
                        "value": "URY",
                        "country-code": "858",
                        "iso_3166-2": "ISO 3166-2:UY",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "Uzbekistan-UZB",
                        "alpha-2": "UZ",
                        "value": "UZB",
                        "country-code": "860",
                        "iso_3166-2": "ISO 3166-2:UZ",
                        "region": "Asia",
                        "sub-region": "Central Asia",
                        "region-code": "142",
                        "sub-region-code": "143"
                    }, {
                        "label": "Vanuatu-VUT",
                        "alpha-2": "VU",
                        "value": "VUT",
                        "country-code": "548",
                        "iso_3166-2": "ISO 3166-2:VU",
                        "region": "Oceania",
                        "sub-region": "Melanesia",
                        "region-code": "009",
                        "sub-region-code": "054"
                    }, {
                        "label": "Venezuela (Bolivarian Republic of)-VEN",
                        "alpha-2": "VE",
                        "value": "VEN",
                        "country-code": "862",
                        "iso_3166-2": "ISO 3166-2:VE",
                        "region": "Americas",
                        "sub-region": "South America",
                        "region-code": "019",
                        "sub-region-code": "005"
                    }, {
                        "label": "Viet Nam-VNM",
                        "alpha-2": "VN",
                        "value": "VNM",
                        "country-code": "704",
                        "iso_3166-2": "ISO 3166-2:VN",
                        "region": "Asia",
                        "sub-region": "South-Eastern Asia",
                        "region-code": "142",
                        "sub-region-code": "035"
                    }, {
                        "label": "Virgin Islands (British)-VGB",
                        "alpha-2": "VG",
                        "value": "VGB",
                        "country-code": "092",
                        "iso_3166-2": "ISO 3166-2:VG",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Virgin Islands (U.S.)-VIR",
                        "alpha-2": "VI",
                        "value": "VIR",
                        "country-code": "850",
                        "iso_3166-2": "ISO 3166-2:VI",
                        "region": "Americas",
                        "sub-region": "Caribbean",
                        "region-code": "019",
                        "sub-region-code": "029"
                    }, {
                        "label": "Wallis and Futuna-WLF",
                        "alpha-2": "WF",
                        "value": "WLF",
                        "country-code": "876",
                        "iso_3166-2": "ISO 3166-2:WF",
                        "region": "Oceania",
                        "sub-region": "Polynesia",
                        "region-code": "009",
                        "sub-region-code": "061"
                    }, {
                        "label": "Western Sahara-ESH",
                        "alpha-2": "EH",
                        "value": "ESH",
                        "country-code": "732",
                        "iso_3166-2": "ISO 3166-2:EH",
                        "region": "Africa",
                        "sub-region": "Northern Africa",
                        "region-code": "002",
                        "sub-region-code": "015"
                    }, {
                        "label": "Yemen-YEM",
                        "alpha-2": "YE",
                        "value": "YEM",
                        "country-code": "887",
                        "iso_3166-2": "ISO 3166-2:YE",
                        "region": "Asia",
                        "sub-region": "Western Asia",
                        "region-code": "142",
                        "sub-region-code": "145"
                    }, {
                        "label": "Zambia-ZMB",
                        "alpha-2": "ZM",
                        "value": "ZMB",
                        "country-code": "894",
                        "iso_3166-2": "ISO 3166-2:ZM",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }, {
                        "label": "Zimbabwe-ZWE",
                        "alpha-2": "ZW",
                        "value": "ZWE",
                        "country-code": "716",
                        "iso_3166-2": "ISO 3166-2:ZW",
                        "region": "Africa",
                        "sub-region": "Eastern Africa",
                        "region-code": "002",
                        "sub-region-code": "014"
                    }];
                }
            }
        },
    },
    homePage:{
        label:"Seo Key and Descriptions",
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



    tourOverView: {
        type: [String],
        label: 'Trip OverView',
        autoform: {
            // type: "universe-select",
            afFieldInput: {
                type: 'select-checkbox-inline',
                multiple: true,
                // options:[{label:'1',value:"option1"},{label:'2',value:"option2"},{label:'3',value:"option3"},{label:'4',value:"option4"}],
                options: function () {
                    return (Icon.find().fetch()).map(function (item) {
                        return {label: item['iconText'], value: item['iconImage']};
                    });
                }
            }
        }
    },

    Prelude: {
        type: [Object],
        label: "Prelude ",
    },
    "Prelude.$": {
        type: Object,
        label: "Prelude ",
    },

    "Prelude.$.title": {
        type: String,
        label: "Title",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "Example: Tuscany Rolling Hills",
            }
        },
    },
    "Prelude.$.preludeshow": {
        type: String,
        label: "Prelude show",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'textarea',
                placeholder: "Tuscany's rolling hills ",
                defaultValue: "Example: One of Italy’s most romanticised regions, Tuscany’s rolling hills, varied coastline and postcard-ready towns. The stunning landscapes of rolling hills lined with cypress trees, where vineyards alternate with olive groves to create a patchwork of incomparable natural beauty that will leave you in awe.",

            }
        },
    },

    DayPlan: {
        type: Object,
        label: "Day Plan",
        autoform: {
            afFieldInput: {
                id: 'hello',
                type: 'text'
            }
        }


    },

    'DayPlan.planNumberDay': {
        type: [Object],
        label: 'Total Number of Day',
    },

    'DayPlan.planNumberDay.$.DayNumber': {
        type: [String],
        label: "Day Number",
    },
    'DayPlan.planNumberDay.$.Daytitle': {
        type: String,
        label: "Day Title"
    },
    'DayPlan.planNumberDay.$.plan': {
        type: String,
        label: "Plan Detail"
    },
    "DayPlan.planNumberDay.$.Daydescriptions": {
        type: [String],
        label: 'Choose Image',
        // defaultValue: [],
        optional: true,
    },

    "DayPlan.planNumberDay.$.Daydescriptions.$": {
        autoform: {
            id:"dayDescriptions",
            afFieldInput: {
                type: "fileUpload",
                collection: "Image",
                label: 'Choose Image'
            },
        },
    },


    tripInclusion: {
        type: [String],
        label: "Trip Inclusion"
    },
    'tripInclusion.$': {
        type: String,
        label: "Trip Inclusion",
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "Fully private 4WD Vehicle transfer...",
                defaultValue: "Fully private 4WD Vehicle transfer",
            }
        },

    },


    tripExclusion: {
        type: [String],
        label: "Trip Exclusion"
    },
    'tripExclusion.$': {
        type: String,
        label: "Trip Exclusion",
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "Return International Air Ticket...",
                defaultValue: "Return International Air Ticket",
            }
        },

    },

    Accommondation: {
        type: [String],
        label: "Accommodation"
    },
    'Accommondation.$': {
        type: String,
        label: "Trip Exclusion",
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "Serengeti Serena Lodge...",
                defaultValue: "Serengeti Serena Lodge",
            }
        },

    },

    signatureDining: {
        type: [String],
        label: "Signature Dining"
    },
    'signatureDining.$': {
        type: String,
        label: "Trip Exclusion",
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "All Meals Inclusive...",
                defaultValue: "All Meals Inclusive",
            }
        },

    },
    'tripNoteWelcome': {
        type: String,
        label: "TRIP NOTE Welcome",
        optional: true,

        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "TRIP NOTE WELCOME..",
                defaultValue: "A Warm Welcome to Unusual Expedition Travel. Please kindly take note of the following for your packing and preparation for the trip. Thanks for joining us in this trip.",
            }
        },

    },
    'itineraryDisclaimer': {
        type: String,
        label: "Itinerary Disclaimer",
        optional: true,

        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "TRIP NOTE WELCOME..",
                defaultValue: "Early Morning drive in the grassland to the photographic locations. It will depends on the weather to decide where is the best location for the day. Climbing of hill for about 30 mins is required for some locations. After Morning Shooting, we will proceed for lunch before heading back to hotel for a short rest break. Continue with the afternoon sunset shoot before returning to hotel for dinner and Overnight at the hotel",
            }
        },

    },

    'includedActivities': {
        type: String,
        label: "Included Activities",
        optional: true,

        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "INCLUDED ACTIVITIES..",
                defaultValue: "Included activities are listed in the day-to- day itinerary, all other activities are optional and at your own expense. If you choose not to participate in the included activities on this itinerary, the cost will not be refunded.",
            }
        },

    },
    'whatToPack': {
        type: String,
        label: "What To Pack",
        optional: true,

        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "What To Pack..",
                defaultValue: "What you need to bring will vary according to the trip style you have chosen, the countries you are visiting and when you are travelling. Generally speaking you should pack as lightly as possible. On the vast majority of our trips you are expected to carry your own luggage and although you won't be required to walk long distances with your luggage (max 30minutes), we recommend keeping the weight under 20kg. ",
            }
        },

    },


    physicalLevel: {
        type: [String],
        label: "Physical Level",
        optional: true,
    },

    'physicalLevel.$': {
        type: String,
        label: "Physical Level",
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "PHYSICAL LEVEL..",
                defaultValue: "A fair bit of Walking and climbing is required",
            }
        },

    },


    weatherCondition: {
        type: [String],
        label: "Weather Condition",
        optional: true,
    },

    'weatherCondition.$': {
        type: String,
        label: "Weather Condition",
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: "weather Condition..",
                defaultValue: "Feels like 4 - 20 C Degree",
            }
        },

    },

    timeDifference: {
        type: [String],
        label: "Time Difference",
        optional: true,
    },

    'timeDifference.$': {
        type: String,
        label: "Time Difference",
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " Time Difference..",
                defaultValue: "No Time Difference",
            }
        },

    },


    photographicGears: {
        type: [String],
        label: "Photographic Gears",
        optional: true,
    },

    'photographicGears.$': {
        type: String,
        label: "Photographic Gears",
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " Photographic Gears..",
                defaultValue: "Compulsory Standard equipment: 16-35mm, 24-70mm, 70-200mm with Tripod and cable release, 1.4 and 2x Extender. (Focal Length Up to 400mm is preferred)",
            }
        },

    },


    climateClothing: {
        type: [String],
        label: "Climate Clothing",
        optional: true,
    },

    'climateClothing.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " Photographic Gears..",
                defaultValue: ["Warm clothing is recommended for this season of the year, especially in the autumn months of September to October when it can get very cold and windy. It's recommended to wear fleece jacket or down jacket with insulated long pant and proper covered hiking shoes, as we are expected to walk and climb uphill for early sunrise shoot. Temperature will rise and it will be warm in the afternoon so layering of clothing is preferred",
                    "Rain coat (Compulsory)", "Warm Clothing(Compulsory)", "Long pant and proper trekking shoes (Preferably Waterproof)", "Basic Toiletries – Shampoo and Body Wash (Hotel provides basic amenities)"
                ]
            }
        },

    },

    luggageRestrictions: {
        type: [String],
        label: "Luggage Restrictions",
        optional: true,
    },

    'luggageRestrictions.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " LUGGAGE RESTRICTIONS..",
                defaultValue: "Please note International / Domestic Airlines allow a maximum of 20kg check in luggage and 7kg hand luggage. Any excess luggage expense will be your own responsibility."
            }
        },

    },
    health: {
        type: [String],
        label: "Health",
        optional: true,
    },

    'health.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " HEALTH..",
                defaultValue: "What you need to bring will vary according to the trip style you have chosen, the countries you are visiting and when you are travelling. Generally speaking you should pack as lightly as possible. On the vast majority of our trips you are expected to carry your own luggage and although you won't be required to walk long distances with your luggage (max 30minutes), we recommend keeping the weight under 20kg.",
            }
        },

    },

    currency: {
        type: [String],
        label: "Currency",
        optional: true,
    },

    'currency.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " CURRENCY..",
                defaultValue: "China Renminbi (CNY)",
            }
        },

    },

    spendingMoney: {
        type: [String],
        label: "Spending Money",
        optional: true,
    },

    'spendingMoney.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " SPENDING MONEY..",
                defaultValue: "Every traveller is different and therefore spending money requirements will vary. Some travellers may drink more than others while other travellers like to purchase more souvenirs than most. Please consider your own spending habits when it comes to allowing for drinks, shopping, participating in optional activities, and tipping. Please also remember the following specific recommendations when planning your trip.",
            }
        },

    },

    phone: {
        type: [String],
        label: "Phone",
        optional: true,
    },

    'phone.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " SPENDING MONEY..",
                defaultValue: "You can buy the Local SIM Card for phone access. There is no facebook access using China Sim Card.If you are using Data-Roaming from Singapore, about $15 per day. (You are able to access Facebook with data roaming)",
            }
        },

    },


    electricalVoltage: {
        type: [String],
        // label: "Electrical Voltage",
        optional: true,
        autoform: {
            afFieldInput: {
                label: "notice",
                type:'universe-select',
                multiple:true,
                options: function () {
                    return [
                        {label:"Type A- USA, Canada,-100 – 127 V - 2 pins",value:"TypeA"},
                        {label:"Type B- USA, Canada,-100 – 127 V - 3 pins",value:"TypeB"},
                        {label:"Type C- Europe, South America & Asia - 220 – 240 V - 2 pins",value:"TypeC"},
                        {label:"Type D -  India- 220 – 240 V - 3 pins",value:"TypeD"},
                        {label:"Type E- France, Belgium, Poland, Slovakia & the Czech Republic - 220 – 240 V - 2 pins",value:"TypeE"},
                        {label:"Type F- Europe & Russia, except for the UK & Ireland- 220 – 240 V- 2 pins",value:"TypeF"},
                        {label:"Type G- United Kingdom, Ireland, Malta, Malaysia & Singapore- 220 – 240 V -3 pins",value:"TypeG"},
                        {label:"Type H- Israel, the West Bank & the Gaza Strip- 220 – 240 V - 3 pins",value:"TypeH"},
                        {label:"Type I- Australia, New Zealand, China & Argentina - 220 – 240 V- 2 or 3 pins",value:"TypeI"},
                        {label:"Type J- Switzerland, Liechtenstein & Rwanda- 220 – 240 V- 3 pins",value:"TypeJ"},
                        {label:"Type K- Denmark & Greenland- 220 – 240 V - 3 pins",value:"TypeK"},
                        {label:"Type L- Italy & Chile - 220 – 240 V- 3 pins",value:"TypeL"},
                        {label:"Type M- South Africa- 220 – 240 V- 3 pins",value:"TypeM"},
                        {label:"Type N-  Brazil - 100 – 240 V - 3 pins",value:"TypeN"},
                        {label:"Type O- Thailand- 220 – 240 V - 3 pins",value:"TypeO"},
                    ]
                },
            }
        },



    },

    // 'electricalVoltage.$': {
    //     type: [String],
    //     autoform: {
    //         afFieldInput: {
    //             label: "notice",
    //             type:'universe-select',
    //             multiple:true,
    //             options: function () {
    //                 return [
    //                     {label:"Type A",value:"Type A"},
    //                     {label:"Type B",value:"Type B"},
    //                     {label:"Type C",value:"Type C"},
    //                     {label:"Type D",value:"Type D"},
    //                     {label:"Type E",value:"Type E"},
    //                     {label:"Type F",value:"Type F"},
    //                     {label:"Type G",value:"Type G"},
    //                     {label:"Type H",value:"Type H"},
    //                     {label:"Type I",value:"Type I"},
    //                     {label:"Type J",value:"Type J"},
    //                     {label:"Type K",value:"Type K"},
    //                     {label:"Type L",value:"Type L"},
    //                     {label:"Type M",value:"Type M"},
    //                     {label:"Type N",value:"Type N"},
    //                     {label:"Type O",value:"Type O"},
    //                 ]
    //             },
    //         }
    //     },
    //
    // },


    mealsIntroduction: {
        type: [String],
        label: "MEALS INTRODUCTION",
        optional: true,
    },

    'mealsIntroduction.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " MEALS INTRODUCTION..",
                defaultValue: "While travelling with us you'll experience the vast array of wonderful food available in the world. We are expected to dine together as a group in a table of 10. We will try our best to accommodate within our means for any Special meals to be requested beforehand, and it will be subjected to availability to serve.",
            }
        },

    },

    transport: {
        type: [String],
        label: "Transport",
        optional: true,
    },

    'transport.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " TRANSPORT..",
                defaultValue: "Minivan Jeep We will use a 1 Minivan for return transfer from Beijing to Inner Mongolia. During our trip in Inner Mongolia, we will use a Jeep to accommodate 3 persons, so as to ensure that we have enough space and comfort for everyone.",
            }
        },

    },
    emergency: {
        type: [String],
        label: "Emergency contact",
        optional: true,
    },

    'emergency.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " EMERGENCY CONTACT..",
                defaultValue: "In the case of a genuine crisis or emergency, please contact Unusual Expedition's local ground representative for China on Tel: +65 6591 8811 +86 135 1003 3001",
            }
        },

    },

    visas: {
        type: [String],
        label: "VISAS",
        optional: true,
    },

    'visas.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " VISAS..",
                defaultValue: "Visas are the responsibility of the individual traveller’s. The visa requirements for your trip vary depending on where you are from and where you are going. As a general rule most countries expect that you will have at least 6 months validity on your passport. On arrival visitors may be asked to present return tickets and evidence of means to cover your intended stay. We keep the following information up to date as much as possible, but rules do change - it's important that you check for yourself. Residents from other countries must consult the relevant embassies or your travel agent.",
            }
        },

    },
    localContact: {
        type: [String],
        label: "Local Contact",
        optional: true,
    },

    'localContact.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " Local Contact..",
                defaultValue: "Tour Leader: Joseph Mak Tour leader Phone No.1: +65 9101 8626 Tour leader Phone No.2: +86 135 1003 3001",
            }
        },

    },
    importantNotes: {
        type: Object,
        label: "Important Notes",
        optional: true,
    },


    'importantNotes.travelInsurance': {
        type: [String],
        label: "Travel Insurance",
        optional: true,
    },
    'importantNotes.travelInsurance.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " TRAVEL INSURANCE..",
                defaultValue: "Unusual Expedition REQUIRES all participants to purchase their own Travel Insurance with a Minimum Coverage of S$250,000.",
            }
        },
    },

    'importantNotes.minimumAge': {
        type: [String],
        label: "Minimum Age",
        optional: true,
    },
    'importantNotes.minimumAge.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " MINIMUM AGE..",
                defaultValue: "The minimum age for this trip is 18 at the time of travel. Any travellers under the age of 18 must be accompanied by a legal guardian, or in lieu of a legal guardian, by an escort over the age of 18, appointed by their legal guardian. The legal guardian or their designee will be responsible for the traveller under the age of 18 day to day’s care. If a legal guardian elects to designate an escort in their lieu, they will be required to complete and sign a relevant document, to delegate their authority.",
            }
        },
    },

    'importantNotes.weatherContingencies': {
        type: [String],
        label: "Weather Contingencies",
        optional: true,
    },
    'importantNotes.weatherContingencies.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " WEATHER CONTINGENCIES..",
                defaultValue: "Please note that Autumn Season is around September to October. We cannot guarantee that the season will come in time. But base on our experience, this is the best timing to visit as the Changing of leaves during the Autumn season lasts for only 1 week.",
            }
        },
    },
    'importantNotes.itineraryChange': {
        type: [String],
        label: "Itinerary Change",
        optional: true,
    },
    'importantNotes.itineraryChange.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " ITINERARY CHANGE..",
                defaultValue: "Due to operational issues outside Unusual Expedition's control this itinerary may sometimes be required to run in reverse.",
            }
        },
    },
    'importantNotes.groupSize': {
        type: [String],
        label: "Group Size",
        optional: true,
    },
    'importantNotes.groupSize.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " GROUP SIZE..",
                defaultValue: "Maximum of 10 travellers per group.",
            }
        },
    },
    'importantNotes.roomSharing': {
        type: [String],
        label: "Room Sharing",
        optional: true,
    },
    'importantNotes.roomSharing.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " ROOM SHARING..",
                defaultValue: "Should you be pair up with another traveller for Room Sharing. Please ensure that you have good etiquette to create a fair use of space in the room, to be tidy and to clean up the bathroom after use. If you have snoring causes or sleep disorder, please do opt for Single Room option so as to reduce inconvenience to others.",
            }
        },
    },

    'importantNotes.yourFollowTraveller': {
        type: [String],
        label: "Your fellow Traveller",
        optional: true,
    },
    'importantNotes.yourFollowTraveller.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " YOUR FELLOW TRAVELLER..",
                defaultValue: "As you travel on a group trip you will be exposed to all the pleasures and maybe some of the frustrations of travelling in a group. Your fellow travellers will probably come from all corners of the world and likely a range of age groups too. We ask you to be understanding of the various needs and preferences of your group - patience with your fellow travellers is sometimes required for the benefit of everyone's travel experience. Remember too that you have responsibilities to the group. If you are requested to be at a place at a certain time, ensure that you don't keep the rest of the group waiting. We have found time and time again that the very best trips we operate are those where the dynamics within the group work well - this takes just a little effort on your part.Due to privacy reasons we are unable to provide you with contact details and any personal information about your fellow travellers booked on your trip prior to departure.",
            }
        },
    },
    'importantNotes.issuesOnTrip': {
        type: [String],
        label: "Issues on Trip",
        optional: true,
    },
    'importantNotes.issuesOnTrip.$': {
        type: String,
        autoform: {
            afFieldInput: {
                label: "notice",
                type: 'text',
                placeholder: " ISSUES ON TRIP..",
                defaultValue: "While we always endeavour to provide the best possible holiday experience, due to the nature of travel and the areas we visit sometimes things can and do go wrong. Should any issue occur while you are on your trip, it is imperative that you discuss this with your group leader or our local representative straight away so that they can do their best to rectify the problem and save any potential negative impact on the rest of your trip. We recognise that there may be times when your group leader/local partner may not be able to resolve a situation to your satisfaction - if this is the case, please ask the leader to speak to their direct manager. You may also choose to provide details in your online feedback, which we ask you to complete within 30 days of the end of your trip. But we do ask you to be aware that it is very difficult for us to provide any practical help after the trip is complete.",
            }
        },
    },


}))




