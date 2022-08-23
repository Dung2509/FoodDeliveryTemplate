/* eslint-disable prettier/prettier */
/* eslint-disable no-sparse-arrays */
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useRef} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowHeight = Dimensions.get('window').height;

export default function EditProfileScreen({navigation, route}) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  //Picker country
  const [countryOpen, setCountryOpen] = useState(false);
  const [countryValue, setCountryValue] = useState(null);
  const [country, setCountry] = useState([
    {label: 'Afghanistan', value: 'AF'},
    {label: 'Åland Islands', value: 'AX'},
    {label: 'Albania', value: 'AL'},
    {label: 'Algeria', value: 'DZ'},
    {label: 'American Samoa', value: 'AS'},
    {label: 'AndorrA', value: 'AD'},
    {label: 'Angola', value: 'AO'},
    {label: 'Anguilla', value: 'AI'},
    {label: 'Antarctica', value: 'AQ'},
    {label: 'Antigua and Barbuda', value: 'AG'},
    {label: 'Argentina', value: 'AR'},
    {label: 'Armenia', value: 'AM'},
    {label: 'Aruba', value: 'AW'},
    {label: 'Australia', value: 'AU'},
    {label: 'Austria', value: 'AT'},
    {label: 'Azerbaijan', value: 'AZ'},
    {label: 'Bahamas', value: 'BS'},
    {label: 'Bahrain', value: 'BH'},
    {label: 'Bangladesh', value: 'BD'},
    {label: 'Barbados', value: 'BB'},
    {label: 'Belarus', value: 'BY'},
    {label: 'Belgium', value: 'BE'},
    {label: 'Belize', value: 'BZ'},
    {label: 'Benin', value: 'BJ'},
    {label: 'Bermuda', value: 'BM'},
    {label: 'Bhutan', value: 'BT'},
    {label: 'Bolivia', value: 'BO'},
    {label: 'Bosnia and Herzegovina', value: 'BA'},
    {label: 'Botswana', value: 'BW'},
    {label: 'Bouvet Island', value: 'BV'},
    {label: 'Brazil', value: 'BR'},
    {label: 'British Indian Ocean Territory', value: 'IO'},
    {label: 'Brunei Darussalam', value: 'BN'},
    {label: 'Bulgaria', value: 'BG'},
    {label: 'Burkina Faso', value: 'BF'},
    {label: 'Burundi', value: 'BI'},
    {label: 'Cambodia', value: 'KH'},
    {label: 'Cameroon', value: 'CM'},
    {label: 'Canada', value: 'CA'},
    {label: 'Cape Verde', value: 'CV'},
    {label: 'Cayman Islands', value: 'KY'},
    {label: 'Central African Republic', value: 'CF'},
    {label: 'Chad', value: 'TD'},
    {label: 'Chile', value: 'CL'},
    {label: 'China', value: 'CN'},
    {label: 'Christmas Island', value: 'CX'},
    {label: 'Cocos (Keeling) Islands', value: 'CC'},
    {label: 'Colombia', value: 'CO'},
    {label: 'Comoros', value: 'KM'},
    {label: 'Congo', value: 'CG'},
    {label: 'Congo, The Democratic Republic of the', value: 'CD'},
    {label: 'Cook Islands', value: 'CK'},
    {label: 'Costa Rica', value: 'CR'},
    {label: "Cote D'Ivoire", value: 'CI'},
    {label: 'Croatia', value: 'HR'},
    {label: 'Cuba', value: 'CU'},
    {label: 'Cyprus', value: 'CY'},
    {label: 'Czech Republic', value: 'CZ'},
    {label: 'Denmark', value: 'DK'},
    {label: 'Djibouti', value: 'DJ'},
    {label: 'Dominica', value: 'DM'},
    {label: 'Dominican Republic', value: 'DO'},
    {label: 'Ecuador', value: 'EC'},
    {label: 'Egypt', value: 'EG'},
    {label: 'El Salvador', value: 'SV'},
    {label: 'Equatorial Guinea', value: 'GQ'},
    {label: 'Eritrea', value: 'ER'},
    {label: 'Estonia', value: 'EE'},
    {label: 'Ethiopia', value: 'ET'},
    {label: 'Falkland Islands (Malvinas)', value: 'FK'},
    {label: 'Faroe Islands', value: 'FO'},
    {label: 'Fiji', value: 'FJ'},
    {label: 'Finland', value: 'FI'},
    {label: 'France', value: 'FR'},
    {label: 'French Guiana', value: 'GF'},
    {label: 'French Polynesia', value: 'PF'},
    {label: 'French Southern Territories', value: 'TF'},
    {label: 'Gabon', value: 'GA'},
    {label: 'Gambia', value: 'GM'},
    {label: 'Georgia', value: 'GE'},
    {label: 'Germany', value: 'DE'},
    {label: 'Ghana', value: 'GH'},
    {label: 'Gibraltar', value: 'GI'},
    {label: 'Greece', value: 'GR'},
    {label: 'Greenland', value: 'GL'},
    {label: 'Grenada', value: 'GD'},
    {label: 'Guadeloupe', value: 'GP'},
    {label: 'Guam', value: 'GU'},
    {label: 'Guatemala', value: 'GT'},
    {label: 'Guernsey', value: 'GG'},
    {label: 'Guinea', value: 'GN'},
    {label: 'Guinea-Bissau', value: 'GW'},
    {label: 'Guyana', value: 'GY'},
    {label: 'Haiti', value: 'HT'},
    {label: 'Heard Island and Mcdonald Islands', value: 'HM'},
    {label: 'Holy See (Vatican City State)', value: 'VA'},
    {label: 'Honduras', value: 'HN'},
    {label: 'Hong Kong', value: 'HK'},
    {label: 'Hungary', value: 'HU'},
    {label: 'Iceland', value: 'IS'},
    {label: 'India', value: 'IN'},
    {label: 'Indonesia', value: 'ID'},
    {label: 'Iran, Islamic Republic Of', value: 'IR'},
    {label: 'Iraq', value: 'IQ'},
    {label: 'Ireland', value: 'IE'},
    {label: 'Isle of Man', value: 'IM'},
    {label: 'Israel', value: 'IL'},
    {label: 'Italy', value: 'IT'},
    {label: 'Jamaica', value: 'JM'},
    {label: 'Japan', value: 'JP'},
    {label: 'Jersey', value: 'JE'},
    {label: 'Jordan', value: 'JO'},
    {label: 'Kazakhstan', value: 'KZ'},
    {label: 'Kenya', value: 'KE'},
    {label: 'Kiribati', value: 'KI'},
    {label: "Korea, Democratic People'S Republic of", value: 'KP'},
    {label: 'Korea, Republic of', value: 'KR'},
    {label: 'Kuwait', value: 'KW'},
    {label: 'Kyrgyzstan', value: 'KG'},
    {label: "Lao People'S Democratic Republic", value: 'LA'},
    {label: 'Latvia', value: 'LV'},
    {label: 'Lebanon', value: 'LB'},
    {label: 'Lesotho', value: 'LS'},
    {label: 'Liberia', value: 'LR'},
    {label: 'Libyan Arab Jamahiriya', value: 'LY'},
    {label: 'Liechtenstein', value: 'LI'},
    {label: 'Lithuania', value: 'LT'},
    {label: 'Luxembourg', value: 'LU'},
    {label: 'Macao', value: 'MO'},
    {label: 'Macedonia, The Former Yugoslav Republic of', value: 'MK'},
    {label: 'Madagascar', value: 'MG'},
    {label: 'Malawi', value: 'MW'},
    {label: 'Malaysia', value: 'MY'},
    {label: 'Maldives', value: 'MV'},
    {label: 'Mali', value: 'ML'},
    {label: 'Malta', value: 'MT'},
    {label: 'Marshall Islands', value: 'MH'},
    {label: 'Martinique', value: 'MQ'},
    {label: 'Mauritania', value: 'MR'},
    {label: 'Mauritius', value: 'MU'},
    {label: 'Mayotte', value: 'YT'},
    {label: 'Mexico', value: 'MX'},
    {label: 'Micronesia, Federated States of', value: 'FM'},
    {label: 'Moldova, Republic of', value: 'MD'},
    {label: 'Monaco', value: 'MC'},
    {label: 'Mongolia', value: 'MN'},
    {label: 'Montserrat', value: 'MS'},
    {label: 'Morocco', value: 'MA'},
    {label: 'Mozambique', value: 'MZ'},
    {label: 'Myanmar', value: 'MM'},
    {label: 'Namibia', value: 'NA'},
    {label: 'Nauru', value: 'NR'},
    {label: 'Nepal', value: 'NP'},
    {label: 'Netherlands', value: 'NL'},
    {label: 'Netherlands Antilles', value: 'AN'},
    {label: 'New Caledonia', value: 'NC'},
    {label: 'New Zealand', value: 'NZ'},
    {label: 'Nicaragua', value: 'NI'},
    {label: 'Niger', value: 'NE'},
    {label: 'Nigeria', value: 'NG'},
    {label: 'Niue', value: 'NU'},
    {label: 'Norfolk Island', value: 'NF'},
    {label: 'Northern Mariana Islands', value: 'MP'},
    {label: 'Norway', value: 'NO'},
    {label: 'Oman', value: 'OM'},
    {label: 'Pakistan', value: 'PK'},
    {label: 'Palau', value: 'PW'},
    {label: 'Palestinian Territory, Occupied', value: 'PS'},
    {label: 'Panama', value: 'PA'},
    {label: 'Papua New Guinea', value: 'PG'},
    {label: 'Paraguay', value: 'PY'},
    {label: 'Peru', value: 'PE'},
    {label: 'Philippines', value: 'PH'},
    {label: 'Pitcairn', value: 'PN'},
    {label: 'Poland', value: 'PL'},
    {label: 'Portugal', value: 'PT'},
    {label: 'Puerto Rico', value: 'PR'},
    {label: 'Qatar', value: 'QA'},
    {label: 'Reunion', value: 'RE'},
    {label: 'Romania', value: 'RO'},
    {label: 'Russian Federation', value: 'RU'},
    {label: 'RWANDA', value: 'RW'},
    {label: 'Saint Helena', value: 'SH'},
    {label: 'Saint Kitts and Nevis', value: 'KN'},
    {label: 'Saint Lucia', value: 'LC'},
    {label: 'Saint Pierre and Miquelon', value: 'PM'},
    {label: 'Saint Vincent and the Grenadines', value: 'VC'},
    {label: 'Samoa', value: 'WS'},
    {label: 'San Marino', value: 'SM'},
    {label: 'Sao Tome and Principe', value: 'ST'},
    {label: 'Saudi Arabia', value: 'SA'},
    {label: 'Senegal', value: 'SN'},
    {label: 'Serbia and Montenegro', value: 'CS'},
    {label: 'Seychelles', value: 'SC'},
    {label: 'Sierra Leone', value: 'SL'},
    {label: 'Singapore', value: 'SG'},
    {label: 'Slovakia', value: 'SK'},
    {label: 'Slovenia', value: 'SI'},
    {label: 'Solomon Islands', value: 'SB'},
    {label: 'Somalia', value: 'SO'},
    {label: 'South Africa', value: 'ZA'},
    {label: 'South Georgia and the South Sandwich Islands', value: 'GS'},
    {label: 'Spain', value: 'ES'},
    {label: 'Sri Lanka', value: 'LK'},
    {label: 'Sudan', value: 'SD'},
    {label: 'Suriname', value: 'SR'},
    {label: 'Svalbard and Jan Mayen', value: 'SJ'},
    {label: 'Swaziland', value: 'SZ'},
    {label: 'Sweden', value: 'SE'},
    {label: 'Switzerland', value: 'CH'},
    {label: 'Syrian Arab Republic', value: 'SY'},
    {label: 'Taiwan, Province of China', value: 'TW'},
    {label: 'Tajikistan', value: 'TJ'},
    {label: 'Tanzania, United Republic of', value: 'TZ'},
    {label: 'Thailand', value: 'TH'},
    {label: 'Timor-Leste', value: 'TL'},
    {label: 'Togo', value: 'TG'},
    {label: 'Tokelau', value: 'TK'},
    {label: 'Tonga', value: 'TO'},
    {label: 'Trinidad and Tobago', value: 'TT'},
    {label: 'Tunisia', value: 'TN'},
    {label: 'Turkey', value: 'TR'},
    {label: 'Turkmenistan', value: 'TM'},
    {label: 'Turks and Caicos Islands', value: 'TC'},
    {label: 'Tuvalu', value: 'TV'},
    {label: 'Uganda', value: 'UG'},
    {label: 'Ukraine', value: 'UA'},
    {label: 'United Arab Emirates', value: 'AE'},
    {label: 'United Kingdom', value: 'GB'},
    {label: 'United States', value: 'US'},
    {label: 'United States Minor Outlying Islands', value: 'UM'},
    {label: 'Uruguay', value: 'UY'},
    {label: 'Uzbekistan', value: 'UZ'},
    {label: 'Vanuatu', value: 'VU'},
    {label: 'Venezuela', value: 'VE'},
    {label: 'Viet Nam', value: 'VN'},
    {label: 'Virgin Islands, British', value: 'VG'},
    {label: 'Virgin Islands, U.S.', value: 'VI'},
    {label: 'Wallis and Futuna', value: 'WF'},
    {label: 'Western Sahara', value: 'EH'},
    {label: 'Yemen', value: 'YE'},
    {label: 'Zambia', value: 'ZM'},
    {label: 'Zimbabwe', value: 'ZW'},
  ]);

  //Picker location
  const [locationOpen, setLocationOpen] = useState(false);
  const [locationValue, setLocationValue] = useState(null);
  const [location, setLocation] = useState([
    {
      label: 'Cần Thơ',
      value: 'Cần Thơ',
      area: '1,408.9',
      population: '1,248,000',
    },
    {
      label: 'Đà Nẵng',
      value: 'Đà Nẵng',
      area: '1,285.4',
      population: '1,028,000',
    },
    {
      label: 'Hải Phòng',
      value: 'Hải Phòng',
      area: '1,527.4',
      population: '1,963,300',
    },
    {
      label: 'Hà Nội',
      value: 'Hà Nội',
      area: '3,324.5',
      population: '7,216,000',
    },
    {
      label: 'Hồ Chí Minh',
      value: 'Hồ Chí Minh',
      area: '2,095.5',
      population: '8,146,300',
    },
    {
      label: 'Bà Rịa',
      value: 'Bà Rịa–Vũng Tàu',
      area: '91.46',
      population: '122,424',
    },
    {
      label: 'Bạc Liêu',
      value: 'Bạc Liêu',
      area: '175.4',
      population: '188,863',
    },
    {
      label: 'Bắc Giang',
      value: 'Bắc Giang',
      area: '32.21',
      population: '126,810',
    },
    {
      label: 'Bắc Ninh',
      value: 'Bắc Ninh',
      area: '80.28',
      population: '272,634',
    },
    {
      label: 'Bảo Lộc',
      value: 'Bảo Lộc',
      area: '232.56',
      population: '153,362',
    },
    {
      label: 'Biên Hòa',
      value: 'Đồng Nai',
      area: '264.07',
      population: '1,104,495',
    },
    {
      label: 'Bến Tre',
      value: 'Bến Tre',
      area: '67.48',
      population: '143,312',
    },
    {
      label: 'Buôn Ma Thuột',
      value: 'Đắk Lắk',
      area: '370.00',
      population: '340,000',
    },
    {
      label: 'Cà Mau',
      value: 'Cà Mau',
      area: '250.3',
      population: '204,895',
    },
    {
      label: 'Cẩm Phả',
      value: 'Quảng Ninh',
      area: '486.4',
      population: '195,800',
    },
    {
      label: 'Cao Lãnh',
      value: 'Đồng Tháp',
      area: '107.195',
      population: '149,837',
    },
    {
      label: 'Châu Đốc',
      value: 'Châu Đốc',
      area: '105.290',
      population: '157,298',
    },
    {
      label: 'Đà Lạt',
      value: 'Lâm Đồng',
      area: '393.29',
      population: '256,393',
    },
    {
      label: 'Điện Biên Phủ',
      value: 'Điện Biên',
      area: '60.09',
      population: '70,639',
    },
    {
      label: 'Đông Hà',
      value: 'Quảng Trị',
      area: '73.06',
      population: '93,756',
    },
    {
      label: 'Đồng Hới',
      value: 'Quảng Bình',
      area: '155.54',
      population: '160,325',
    },
    {
      label: 'Hà Tĩnh',
      value: 'Hà Tĩnh',
      area: '56.19',
      population: '117,546',
    },
    {
      label: 'Hạ Long',
      value: 'Hạ Long',
      area: '208.7',
      population: '203,731',
    },
    {
      label: 'Hải Dương',
      value: 'Hải Dương',
      area: '71.39',
      population: '187,405',
    },
    {
      label: 'Hòa Bình',
      value: 'Hòa Bình',
      area: '148.2',
      population: '93,409',
    },
    {
      label: 'Hội An',
      value: 'Quảng Nam',
      area: '61.47',
      population: '121,716',
    },
    {
      label: 'Huế',
      value: 'Thừa Thiên–Huế',
      area: '83.3',
      population: '333,715',
    },
    {
      label: 'Hưng Yên',
      value: 'Hưng Yên',
      area: '46.8',
      population: '121,486',
    },
    {
      label: 'Kon Tum',
      value: 'Kon Tum',
      area: '432.98',
      population: '137,662',
    },
    {
      label: 'Lạng Sơn',
      value: 'Lạng Sơn',
      area: '79.0',
      population: '148,000',
    },
    {
      label: 'Lào Cai',
      value: 'Lào Cai',
      area: '221.5',
      population: '94,192',
    },
    {
      label: 'Long Xuyên',
      value: 'An Giang',
      area: '106.87',
      population: '280,300',
    },
    {
      label: 'Móng Cái',
      value: 'Móng Cái',
      area: '518.28',
      population: '108,016',
    },
    {
      label: 'Mỹ Tho',
      value: 'Tiền Giang',
      area: '79.8',
      population: '215,000',
    },
    {
      label: 'Nam Định',
      value: 'Nam Định',
      area: '46.4',
      population: '191,900',
    },
    {
      label: 'Ninh Bình',
      value: 'Ninh Bình',
      area: '48.3',
      population: '130,517',
    },
    {
      label: 'Nha Trang',
      value: 'Nha Trang',
      area: '251.0',
      population: '392,279',
    },
    {
      label: 'Cam Ranh',
      value: 'Khánh Hòa',
      area: '325.0',
      population: '128,358',
    },
    {
      label: 'Phan Rang–Tháp Chàm',
      value: 'Ninh Thuận',
      area: '79.37',
      population: '102,941',
    },
    {
      label: 'Phan Thiết',
      value: 'Bình Thuận',
      area: '206.0',
      population: '255,000',
    },
    {
      label: 'Phủ Lý',
      value: 'Hà Nam',
      area: '34.27',
      population: '121,350',
    },
    {
      label: 'Pleiku',
      value: 'Gia Lai',
      area: '260.61',
      population: '186,763',
    },
    {
      label: 'Quảng Ngãi',
      value: 'Quảng Ngãi',
      area: '37.12',
      population: '134,400',
    },
    {
      label: 'Quy Nhơn',
      value: 'Bình Định',
      area: '284.28',
      population: '311,000',
    },
    {
      label: 'Rạch Giá',
      value: 'Kiên Giang',
      area: '97.75',
      population: '228,360',
    },
    {
      label: 'Sa Đéc',
      value: 'Đồng Tháp',
      area: '59.81',
      population: '152,237',
    },
    {
      label: 'Sóc Trăng',
      value: 'Sóc Trăng',
      area: '76.15',
      population: '173,922',
    },
    {
      label: 'Sơn La',
      value: 'Sơn La',
      area: '324.93',
      population: '107,282',
    },
    {
      label: 'Tam Kỳ',
      value: 'Quảng Nam',
      area: '92.63',
      population: '120,256',
    },
    {
      label: 'Tân An',
      value: 'Long An',
      area: '81.79',
      population: '166,419',
    },
    {
      label: 'Thái Bình',
      value: 'Thái Bình',
      area: '67.7',
      population: '270,000',
    },
    {
      label: 'Thái Nguyên',
      value: 'Thái Nguyên',
      area: '189.70',
      population: '330,000',
    },
    {
      label: 'Thanh Hóa',
      value: 'Thanh Hóa',
      area: '57.8',
      population: '197,551',
    },
    {
      label: 'Trà Vinh',
      value: 'Trà Vinh',
      area: '68.03',
      population: '131,360',
    },
    {
      label: 'Tuy Hòa',
      value: 'Phú Yên',
      area: '212.62',
      population: '167,174',
    },
    {
      label: 'Tuyên Quang',
      value: 'Tuyên Quang',
      area: '119.17',
      population: '110,119',
    },
    {
      label: 'Uông Bí',
      value: 'Uông Bí',
      area: '256.3',
      population: '170,000',
    },
    {
      label: 'Việt Trì',
      value: 'Phú Thọ',
      area: '110.99',
      population: '277,539',
    },
    {
      label: 'Vinh',
      value: 'Nghệ An',
      area: '104.98',
      population: '282,981',
    },
    {
      label: 'Vĩnh Yên',
      value: 'Vĩnh Phúc',
      area: '50.80',
      population: '122,568',
    },
    {
      label: 'Vĩnh Long',
      value: 'Vĩnh Long',
      area: '48.01',
      population: '147,039',
    },
    {
      label: 'Vũng Tàu',
      value: 'Bà Rịa–Vũng Tàu',
      area: '141.1',
      population: '327,000',
    },
    {
      label: 'Yên Bái',
      value: 'Yên Bái',
      area: '108.155',
      population: '95,892',
    },
    {
      label: 'Cao Bằng',
      value: 'Cao Bằng',
      area: '107.6',
      population: '84,421',
    },
    ,
  ]);

  const log = location.filter(i => i.label);
  console.log('LOG Location ' + log);
  //Picker gender
  const [gender, setGender] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'},
  ]);

  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(route.params.date);
  console.log('Date' + route.params.date);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (newDate: any) => {
    const datetime = moment(newDate).format('DD/MM/YYYY ');
    setDate(datetime);
    hideDatePicker();
  };

  const AddProfile = () => {
    if (
      fname == '' ||
      lname == '' ||
      date == '' ||
      genderValue == null ||
      phoneNumber == '' ||
      countryValue == null ||
      locationValue == null
    ) {
      Alert.alert(null, 'Thong tin chua day du');
      return;
    } else {
      const newProfile = {
        fname,
        lname,
        date,
        genderValue,
        phoneNumber,
        locationValue,
        countryValue,
      };
      // setProfile([...profile, newProfile]);
      // AsyncStorage.getItem('profile').then(pf => {
      //   const listProfile = JSON.parse(pf);
      //   if (listProfile === null) {
      //     AsyncStorage.setItem('profile', JSON.stringify([newProfile]));
      //   } else {
      //     listProfile.push(newProfile);
      AsyncStorage.setItem('profile', JSON.stringify(newProfile));
      // console.log('List profile' + JSON.stringify(new));
      AsyncStorage.setItem('fname', fname);
      AsyncStorage.setItem('lname', lname);
      AsyncStorage.setItem('date', date);
      AsyncStorage.setItem('gender', genderValue);
      AsyncStorage.setItem('phone', phoneNumber);
      AsyncStorage.setItem('location', locationValue);
      AsyncStorage.setItem('country', countryValue);
      // }
      navigation.navigate('MyProfile', {
        fname: fname,
        lname: lname,
        date: date,
        gender: genderValue,
        phone: phoneNumber,
        location: locationValue,
        country: countryValue,
      });
      // });
    }
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: windowHeight,
      }}>
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            margin: 20,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
            }}
            onPress={() => navigation.goBack()}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/images/back.png')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
            Edit Profile
          </Text>
          <View style={{}} />
        </View>

        <View style={{marginHorizontal: 20}}>
          <View
            style={{
              width: 150,
              height: 150,
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <Image
              style={{width: 150, height: 150, borderRadius: 75}}
              source={require('../../assets/images/avatar.png')}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 1,
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{width: '35%'}}>First name</Text>
            <TextInput
              onChangeText={setFname}
              placeholder={route.params.fname}
              style={{borderBottomWidth: 1, width: '65%'}}
              textAlign={'left'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
              alignItems: 'center',
            }}>
            <Text style={{width: '35%'}}>Last name</Text>
            {/* {
              lname === '' ? (<TextInput
                placeholder={route.params.lname}
                onChangeText={setLname}
                style={{borderBottomWidth: 1, width: '65%'}}
                textAlign={'left'}
              />) : lname === route.params.lname ? (<TextInput  ref={ref => ref.lname} value={lname} onChangeText={setLname}/>) : null
            } */}
            <TextInput
              placeholder={route.params.lname}
              onChangeText={setLname}
              style={{borderBottomWidth: 1, width: '65%'}}
              textAlign={'left'}
            />
          </View>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
              alignItems: 'center',
            }}
            onPress={showDatePicker}>
            <Text style={{width: '35%'}}>Birthday</Text>
            <View style={{width: '45%', flexDirection: 'column'}}>
              <Text style={{fontSize: 15}} onPress={showDatePicker}>
                {date}
              </Text>

              <DateTimePicker
                isVisible={isDatePickerVisible}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                mode={'date'}
                
                maximumDate={new Date()}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
              alignItems: 'center',
            }}>
            <Text style={{width: '35%'}}>Gender</Text>
            <View style={{width: '65%', zIndex: 10}}>
              <DropDownPicker
                style={{zIndex: 10}}
                placeholder={route.params.gender}
                selectedItemLabelStyle={{fontSize: 10}}
                placeholderStyle={{fontSize: 10}}
                open={genderOpen}
                value={genderValue}
                items={gender}
                setOpen={setGenderOpen}
                setValue={setGenderValue}
                setItems={setGender}
                // listMode="MODAL"
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
              alignItems: 'center',
            }}>
            <Text style={{width: '35%'}}>Phone</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setPhoneNumber}
              placeholder={route.params.phone}
              style={{borderBottomWidth: 1, width: '65%'}}
              textAlign={'left'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
              alignItems: 'center',
            }}>
            <Text style={{alignSelf: 'center'}}>Location</Text>

            <View
              style={{
                // width: '65%',
                // height: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <DropDownPicker
                  style={{width: 100, zIndex: 0}}
                  placeholder={route.params.location}
                  searchable={true}
                  open={locationOpen}
                  value={locationValue}
                  items={location}
                  setOpen={setLocationOpen}
                  setValue={setLocationValue}
                  setItems={setLocation}
                  selectedItemLabelStyle={{fontSize: 8}}
                  placeholderStyle={{fontSize: 8}}
                  listParentLabelStyle={{fontSize: 8}}
                  listItemLabelStyle={{fontSize: 8}}
                  labelStyle={{fontSize: 8}}
                />
              </View>
              <View>
                <DropDownPicker
                  searchable={true}
                  style={{width: 111, marginLeft: 5, zIndex: 0}}
                  placeholder={route.params.country}
                  labelStyle={{fontSize: 8}}
                  selectedItemLabelStyle={{fontSize: 8}}
                  placeholderStyle={{fontSize: 8}}
                  listParentLabelStyle={{fontSize: 8}}
                  listItemLabelStyle={{fontSize: 8}}
                  open={countryOpen}
                  value={countryValue}
                  items={country}
                  setOpen={setCountryOpen}
                  setValue={setCountryValue}
                  setItems={setCountry}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{}}>
        <TouchableOpacity
          // onPress={changeScreen}
          onPress={AddProfile}
          style={{
            backgroundColor: '#D35400',
            marginHorizontal: 20,
            borderRadius: 30,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 18,
              color: 'white',
              paddingVertical: 12,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
