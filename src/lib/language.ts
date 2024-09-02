"use client";

type LangType = {
  [index: string]: string;
};

const language: LangType = {
  "am-ET": "Amharic",
  "ar-SA": "Arabic",
  "be-BY": "Bielarus",
  "bem-ZM": "Bemba",
  "bi-VU": "Bislama",
  "bjs-BB": "Bajan",
  "bn-IN": "Bengali",
  "bo-CN": "Tibetan",
  "br-FR": "Breton",
  "bs-BA": "Bosnian",
  "ca-ES": "Catalan",
  "cop-EG": "Coptic",
  "cs-CZ": "Czech",
  "cy-GB": "Welsh",
  "da-DK": "Danish",
  "dz-BT": "Dzongkha",
  "de-DE": "German",
  "dv-MV": "Maldivian",
  "el-GR": "Greek",
  "et-EE": "Estonian",
  "eu-ES": "Basque",
  "fa-IR": "Persian",
  "fi-FI": "Finnish",
  "fn-FNG": "Fanagalo",
  "fo-FO": "Faroese",
  "fr-FR": "French",
  "gl-ES": "Galician",
  "gu-IN": "Gujarati",
  "ha-NE": "Hausa",
  "he-IL": "Hebrew",
  "hi-IN": "Hindi",
  "hr-HR": "Croatian",
  "hu-HU": "Hungarian",
  "id-ID": "Indonesian",
  "is-IS": "Icelandic",
  "it-IT": "Italian",
  "ja-JP": "Japanese",
  "kk-KZ": "Kazakh",
  "km-KM": "Khmer",
  "kn-IN": "Kannada",
  "ko-KR": "Korean",
  "ku-TR": "Kurdish",
  "ky-KG": "Kyrgyz",
  "la-VA": "Latin",
  "lo-LA": "Lao",
  "lv-LV": "Latvian",
  "men-SL": "Mende",
  "mg-MG": "Malagasy",
  "mi-NZ": "Maori",
  "ms-MY": "Malay",
  "mt-MT": "Maltese",
  "my-MM": "Burmese",
  "ne-NP": "Nepali",
  "niu-NU": "Niuean",
  "nl-NL": "Dutch",
  "no-NO": "Norwegian",
  "ny-MW": "Nyanja",
  "ur-PK": "Pakistani",
  "pau-PW": "Palauan",
  "pa-IN": "Panjabi",
  "ps-PK": "Pashto",
  "pis-SB": "Pijin",
  "pl-PL": "Polish",
  "pt-PT": "Portuguese",
  "rn-BI": "Kirundi",
  "ro-RO": "Romanian",
  "ru-RU": "Russian",
  "sg-CF": "Sango",
  "si-LK": "Sinhala",
  "sk-SK": "Slovak",
  "sm-WS": "Samoan",
  "sn-ZW": "Shona",
  "so-SO": "Somali",
  "sq-AL": "Albanian",
  "sr-RS": "Serbian",
  "sv-SE": "Swedish",
  "sw-SZ": "Swahili",
  "ta-LK": "Tamil",
  "te-IN": "Telugu",
  "tet-TL": "Tetum",
  "tg-TJ": "Tajik",
  "th-TH": "Thai",
  "ti-TI": "Tigrinya",
  "tk-TM": "Turkmen",
  "tl-PH": "Tagalog",
  "tn-BW": "Tswana",
  "to-TO": "Tongan",
  "tr-TR": "Turkish",
  "uk-UA": "Ukrainian",
  "uz-UZ": "Uzbek",
  "vi-VN": "Vietnamese",
  "wo-SN": "Wolof",
  "xh-ZA": "Xhosa",
  "yi-YD": "Yiddish",
  "zu-ZA": "Zulu",
  "en-GB": "English",
  "es-Es": "Spanish",
  "af-ZA": "Afrikaans",
"ak-GH": "Akan",
"an-ES": "Aragonese",
"as-IN": "Assamese",
"av-RU": "Avar",
"ay-BO": "Aymara",
"az-AZ": "Azerbaijani",
"bm-ML": "Bambara",
"bg-BG": "Bulgarian",
"ce-RU": "Chechen",
"chr-US": "Cherokee",
"ck-US": "Chinuk Wawa",
"co-FR": "Corsican",
"cr-CA": "Cree",
"csb-PL": "Kashubian",
"cv-RU": "Chuvash",
"kw-GB": "Cornish",
"lt-LT": "Lithuanian",
"mk-MK": "Macedonian",
"mn-MN": "Mongolian",
"na-NR": "Nauru",
"nb-NO": "Norwegian Bokmål",
"nd-ZW": "North Ndebele",
"ng-NA": "Ndonga",
"nn-NO": "Norwegian Nynorsk",
"oc-FR": "Occitan",
"om-ET": "Oromo",
"or-IN": "Oriya",
"os-RU": "Ossetian",
"ph-PH": "Filipino",
"prg-DE": "Prussian",
"qu-BO": "Quechua",
"qu-EC": "Quechua",
"qu-PE": "Quechua",
"rm-CH": "Romansh",
"ro-MD": "Romanian",
"ru-UA": "Russian",
"sah-RU": "Sakha",
"sc-IT": "Sardinian",
"sd-IN": "Sindhi",
"se-NO": "Northern Sami",
"ga-IE": "Irish",
"gd-GB": "Scottish Gaelic",
"gv-IM": "Manx",
"ho-ID": "Hokkien",
"hsb-DE": "Upper Sorbian",
"ht-HT": "Haitian",
"hz-NA": "Herero",
"ia-ES": "Interlingua",
"ie-DE": "Interlingue",
"ig-NG": "Igbo",
"ii-CN": "Sichuan Yi",
"ik-US": "Inupiaq",
"io-ES": "Ido",
"it-CH": "Italian",
"iu-CA": "Inuktitut",
"jam-JM": "Jamaican Patois",
"jv-ID": "Javanese",
"ka-GE": "Georgian",
"kg-CG": "Kongo",
"ki-KE": "Kikuyu",
"kj-NA": "Kuanyama",
"kl-GL": "Kalaallisut",
"ko-KP": "Korean",
"kr-NG": "Kanuri",
"ks-IN": "Kashmiri",
"kv-RU": "Komi",
"lb-LU": "Luxembourgish",
"lg-UG": "Luganda",
"li-NL": "Limburgish",
"ln-CD": "Lingala",
"lu-CD": "Luba-Katanga",
"mh-MH": "Marshallese",
"ml-IN": "Malayalam",
};
const languageArray: [string, string][] = Object.entries(language).sort(
  (a, b) => a[1].localeCompare(b[1])
);

export default languageArray;
