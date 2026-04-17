// Maps TopoJSON world-atlas numeric ISO 3166-1 country IDs to the ISO alpha-3
// keys used in countries.js. Entries not present here will render as no-data.
// Note: Kosovo (KOS), Somaliland (SOL), Western Sahara (SAH), French Guiana (GUF),
// Greenland (GRL), New Caledonia (NCL), Puerto Rico (PRI), and Taiwan (TWN)
// may not appear as distinct features in world-atlas countries-110m.json.
export const isoNumericToAlpha3 = {
	4:   "AFG", // Afghanistan
	8:   "ALB", // Albania
	12:  "DZA", // Algeria
	24:  "AGO", // Angola
	32:  "ARG", // Argentina
	51:  "ARM", // Armenia
	36:  "AUS", // Australia
	40:  "AUT", // Austria
	31:  "AZE", // Azerbaijan
	44:  "BHS", // Bahamas
	50:  "BGD", // Bangladesh
	112: "BLR", // Belarus
	56:  "BEL", // Belgium
	84:  "BLZ", // Belize
	204: "BEN", // Benin
	64:  "BTN", // Bhutan
	68:  "BOL", // Bolivia
	70:  "BIH", // Bosnia and Herzegovina
	72:  "BWA", // Botswana
	76:  "BRA", // Brazil
	96:  "BRN", // Brunei Darussalam
	100: "BGR", // Bulgaria
	854: "BFA", // Burkina Faso
	108: "BDI", // Burundi
	116: "KHM", // Cambodia
	120: "CMR", // Cameroon
	124: "CAN", // Canada
	140: "CAF", // Central African Republic
	148: "TCD", // Chad
	152: "CHL", // Chile
	156: "CHN", // China
	170: "COL", // Colombia
	180: "COD", // Democratic Republic of the Congo
	178: "COG", // Republic of the Congo
	188: "CRI", // Costa Rica
	191: "HRV", // Croatia
	192: "CUB", // Cuba
	196: "CYP", // Cyprus
	203: "CZE", // Czech Republic
	384: "CIV", // Cote d'Ivoire
	208: "DNK", // Denmark
	262: "DJI", // Djibouti
	214: "DOM", // Dominican Republic
	218: "ECU", // Ecuador
	818: "EGY", // Egypt
	222: "SLV", // El Salvador
	226: "GNQ", // Equatorial Guinea
	232: "ERI", // Eritrea
	233: "EST", // Estonia
	231: "ETH", // Ethiopia
	242: "FJI", // Fiji
	246: "FIN", // Finland
	250: "FRA", // France
	254: "GUF", // French Guiana
	266: "GAB", // Gabon
	270: "GMB", // Gambia
	268: "GEO", // Georgia
	276: "DEU", // Germany
	288: "GHA", // Ghana
	624: "GNB", // Guinea-Bissau
	300: "GRC", // Greece
	304: "GRL", // Greenland
	320: "GTM", // Guatemala
	324: "GIN", // Guinea
	328: "GUY", // Guyana
	332: "HTI", // Haiti
	340: "HND", // Honduras
	348: "HUN", // Hungary
	352: "ISL", // Iceland
	356: "IND", // India
	360: "IDN", // Indonesia
	364: "IRN", // Iran
	368: "IRQ", // Iraq
	372: "IRL", // Ireland
	376: "ISR", // Israel
	380: "ITA", // Italy
	388: "JAM", // Jamaica
	392: "JPN", // Japan
	400: "JOR", // Jordan
	398: "KAZ", // Kazakhstan
	404: "KEN", // Kenya
	383: "KOS", // Kosovo (user-assigned code in some TopoJSON builds)
	414: "KWT", // Kuwait
	417: "KGZ", // Kyrgyzstan
	418: "LAO", // Laos
	428: "LVA", // Latvia
	422: "LBN", // Lebanon
	426: "LSO", // Lesotho
	430: "LBR", // Liberia
	434: "LBY", // Libya
	440: "LTU", // Lithuania
	442: "LUX", // Luxembourg
	807: "MKD", // North Macedonia
	450: "MDG", // Madagascar
	454: "MWI", // Malawi
	458: "MYS", // Malaysia
	466: "MLI", // Mali
	478: "MRT", // Mauritania
	484: "MEX", // Mexico
	498: "MDA", // Moldova
	496: "MNG", // Mongolia
	499: "MNE", // Montenegro
	504: "MAR", // Morocco
	508: "MOZ", // Mozambique
	104: "MMR", // Myanmar
	516: "NAM", // Namibia
	524: "NPL", // Nepal
	528: "NLD", // Netherlands
	540: "NCL", // New Caledonia
	554: "NZL", // New Zealand
	558: "NIC", // Nicaragua
	562: "NER", // Niger
	566: "NGA", // Nigeria
	408: "PRK", // North Korea
	578: "NOR", // Norway
	512: "OMN", // Oman
	586: "PAK", // Pakistan
	591: "PAN", // Panama
	598: "PNG", // Papua New Guinea
	600: "PRY", // Paraguay
	604: "PER", // Peru
	608: "PHL", // Philippines
	616: "POL", // Poland
	620: "PRT", // Portugal
	630: "PRI", // Puerto Rico
	634: "QAT", // Qatar
	642: "ROU", // Romania
	643: "RUS", // Russia
	646: "RWA", // Rwanda
	682: "SAU", // Saudi Arabia
	686: "SEN", // Senegal
	688: "SRB", // Serbia
	694: "SLE", // Sierra Leone
	703: "SVK", // Slovakia
	705: "SVN", // Slovenia
	90:  "SLB", // Solomon Islands
	706: "SOM", // Somalia
	710: "ZAF", // South Africa
	410: "KOR", // South Korea
	724: "ESP", // Spain
	144: "LKA", // Sri Lanka
	729: "SDN", // Sudan
	728: "SSD", // South Sudan
	740: "SUR", // Suriname
	748: "SWZ", // Eswatini (Swaziland)
	752: "SWE", // Sweden
	756: "CHE", // Switzerland
	760: "SYR", // Syria
	158: "TWN", // Taiwan
	762: "TJK", // Tajikistan
	834: "TZA", // Tanzania
	764: "THA", // Thailand
	626: "TLS", // Timor-Leste
	768: "TGO", // Togo
	780: "TTO", // Trinidad and Tobago
	788: "TUN", // Tunisia
	792: "TUR", // Turkey
	795: "TKM", // Turkmenistan
	800: "UGA", // Uganda
	804: "UKR", // Ukraine
	784: "ARE", // United Arab Emirates
	826: "GBR", // United Kingdom
	840: "USA", // United States of America
	858: "URY", // Uruguay
	860: "UZB", // Uzbekistan
	862: "VEN", // Venezuela
	704: "VNM", // Vietnam
	732: "SAH", // Western Sahara
	887: "YEM", // Yemen
	894: "ZMB", // Zambia
	716: "ZWE", // Zimbabwe
};
