/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import moment from 'moment';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from 'react-native-modal-datetime-picker';
// import listBank from '../../screens/listBank';
import DropDownPicker from 'react-native-dropdown-picker';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function CreditScreen({navigation, route}) {
  // const {item} = route.params
  //  const changeScreen = () => {
  //    navigation.navigate('UpdateInfor',{
  //      bankName: route.params.bankName,
  //      name: route.params.name,
  //      cardNb: route.params.cardNb,
  //      data: route.params.data,
  //      cvv: route.params.cvv,
  //    });
  //    console.log('err');
  //  };

  // const [countryOpen, setCountryOpen] = useState(false);
  // const [countryValue, setCountryValue] = useState(null);
  // const [country, setCountry] = useState(listBank);
  // console.log("Bank" + JSON.stringify(country));

  // const [bankname, setBankname] = useState('');

  const [yourname, setYourname] = useState('');
  const [cardnumber, setCardnumber] = useState('');
  const [date, setDate] = useState(route.params.date);
  const [cvv, setCvv] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    const datetime = moment(date).format('DD/MM/YYYY ');
    setDate(datetime);
    hideDatePicker();
  };
  const [bankOpen, setBankOpen] = useState(false);
  const [bankValue, setBankValue] = useState(null);
  const [bankname, setBankname] = useState([
    {
      //label: 'An Binh Commercial Joint stock  Bank',
      label: 'Ng??n h??ng An B??nh',
      bankId: '970425',
      atmBin: '970425',
      cardLength: 16,
      value: 'ABBank',
      bankCode: '323',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Asia Commercial Bank',
      label: 'Ng??n h??ng ?? Ch??u',
      bankId: '970416',
      atmBin: '970416',
      cardLength: 0,
      value: 'ACB',
      bankCode: '307',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Vienam Bank for Agriculture and Rural Development',
      label: 'Ng??n h??ng NN & PTNT VN',
      bankId: '970405',
      atmBin: '970499',
      cardLength: 16,
      value: 'Agribank, VBARD',
      bankCode: '204',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'ANZ Bank',
      label: 'Ng??n h??ng ANZ Vi???t Nam',
      cardLength: 0,
      value: 'ANZ',
      bankCode: '602',
      napasSupported: false,
    },
    {
      //label: 'BANGKOK  BANK',
      label: 'BANGKOK  BANK',
      cardLength: 0,
      value: 'BANGKOK  BANK',
      bankCode: '612',
      napasSupported: false,
    },
    {
      //label: 'VietNam national Financial switching Joint Stock Company',
      label: 'C??ng ty c??? ph???n chuy???n m???ch t??i ch??nh qu???c gia Vi???t Nam',
      cardLength: 0,
      value: 'Banknetvn',
      bankCode: '401',
      napasSupported: false,
    },
    {
      //label: 'Baoviet Joint Stock Commercial Bank',
      label: 'Ng??n h??ng TMCP B???o Vi???t',
      bankId: '970438',
      atmBin: '970438',
      cardLength: 20,
      value: 'Baoviet Bank',
      bankCode: '359',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'BANK OF CHINA',
      label: 'BANK OF CHINA',
      cardLength: 0,
      value: 'BC',
      bankCode: '620',
      napasSupported: false,
    },
    {
      //label: 'Bank for investment and development of Cambodia HCMC',
      label: 'NH ??T&PT Campuchia CN HCM',
      cardLength: 0,
      value: 'BIDC HCM',
      bankCode: '648',
      napasSupported: false,
    },
    {
      //label: 'Bank for investment and development of Cambodia HN',
      label: 'NH ??T&PT Campuchia CN H?? N???i',
      cardLength: 0,
      value: 'BIDC HN',
      bankCode: '638',
      napasSupported: false,
    },
    {
      //label: 'Bank for Investment and Development of Vietnam',
      label: 'Ng??n h??ng ?????u t?? v?? Ph??t tri???n Vi???t Nam',
      bankId: '970418',
      atmBin: '970418',
      cardLength: 16,
      value: 'BIDV',
      bankCode: '202',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Bank of Paris and the Netherlands HCMC',
      label: 'BNP Paribas Bank HCM',
      cardLength: 0,
      value: 'BNP Paribas HCM',
      bankCode: '614',
      napasSupported: false,
    },
    {
      //label: 'BNP Paribas Ha Noi',
      label: 'Ngan hang BNP Paribas CN Ha Noi',
      cardLength: 0,
      value: 'BNP Paribas HN',
      bankCode: '657',
      napasSupported: false,
    },
    {
      //label: 'Bank of Communications',
      label: 'Bank of Communications',
      cardLength: 0,
      value: 'BOC',
      bankCode: '615',
      napasSupported: false,
    },
    {
      //label: 'NH BPCEIOM HCMC',
      label: 'Ng??n h??ng BPCEIOM CN  TP H??? Ch?? Minh',
      cardLength: 0,
      value: 'BPCEICOM',
      bankCode: '601',
      napasSupported: false,
    },
    {
      //label: 'BANK OF TOKYO - MITSUBISHI UFJ - TP HCM',
      label: 'BANK OF TOKYO - MITSUBISHI UFJ - TP HCM',
      cardLength: 0,
      value: 'BTMU HCM',
      bankCode: '622',
      napasSupported: false,
    },
    {
      //label: 'BANK OF TOKYO - MITSUBISHI UFJ - HN',
      label: 'BANK OF TOKYO - MITSUBISHI UFJ - HN',
      cardLength: 0,
      value: 'BTMU HN',
      bankCode: '653',
      napasSupported: false,
    },
    {
      //label: 'Credit Agricole Corporate and Investment Bank',
      label: 'Credit Agricole Corporate and Investment Bank',
      cardLength: 0,
      value: 'CACIB',
      bankCode: '621',
      napasSupported: false,
    },
    {
      //label: 'Commonwealth Bank of Australia',
      label: 'Commonwealth Bank of Australia',
      cardLength: 0,
      value: 'CBA',
      bankCode: '643',
      napasSupported: false,
    },
    {
      //label: 'China Construction Bank Corporation',
      label: 'China Construction Bank Corporation',
      cardLength: 0,
      value: 'CCBC',
      bankCode: '611',
      napasSupported: false,
    },
    {
      //label: 'The Chase Manhattan Bank',
      label: 'The Chase Manhattan Bank',
      cardLength: 0,
      value: 'CHASE',
      bankCode: '627',
      napasSupported: false,
    },
    {
      //label: 'CIMB Bank Vietnam Limited',
      label: 'Ng??n h??ng TNHH MTV CIMB Vi???t Nam',
      bankId: '422589',
      atmBin: '422589',
      cardLength: 0,
      value: 'CIMB',
      bankCode: '661',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'CitiBank HCM',
      label: 'Citi Bank TP HCM',
      cardLength: 0,
      value: 'CitibankHCM',
      bankCode: '654',
      napasSupported: false,
    },
    {
      //label: 'Citibank Ha Noi',
      label: 'Citi Bank Ha Noi',
      cardLength: 0,
      value: 'CitibankHN',
      bankCode: '605',
      napasSupported: false,
    },
    {
      //label: 'Co-Operation Bank of Viet Nam',
      label: 'Ng??n h??ng H???p t??c Vi???t Nam',
      cardLength: 0,
      value: 'COOPBANK',
      bankCode: '901',
      napasSupported: false,
    },
    {
      //label: 'The ChinaTrust Commercial Bank HCMC',
      label: 'Ng??n h??ng CTBC CN TP H??? Ch?? Minh',
      cardLength: 0,
      value: 'CTBC',
      bankCode: '629',
      napasSupported: false,
    },
    {
      //label: 'Cathay United Bank',
      label: 'Ng??n h??ng Cathay',
      cardLength: 0,
      value: 'CTU',
      bankCode: '634',
      napasSupported: false,
    },
    {
      //label: 'DEUTSCHE BANK',
      label: 'DEUTSCHE BANK',
      cardLength: 0,
      value: 'DB',
      bankCode: '619',
      napasSupported: false,
    },
    {
      //label: 'DBS Bank Ltd',
      label: 'DBS Bank Ltd',
      cardLength: 0,
      value: 'DBS',
      bankCode: '650',
      napasSupported: false,
    },
    {
      //label: 'Dong A Commercial Joint stock Bank',
      label: 'Ng??n h??ng ????ng ??',
      bankId: '970406',
      atmBin: '970406',
      cardLength: 16,
      value: 'Dong A Bank, DAB',
      bankCode: '304',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Vietnam Export Import Commercial Joint Stock Bank',
      label: 'Ng??n h??ng Xu???t nh???p kh???u Vi???t Nam',
      bankId: '970431',
      atmBin: '970431',
      cardLength: 16,
      value: 'Eximbank, EIB',
      bankCode: '305',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'First Commercial Bank',
      label: 'First Commercial Bank',
      cardLength: 0,
      value: 'FCNB',
      bankCode: '630',
      napasSupported: false,
    },
    {
      //label: 'First Commercial Bank Ha Noi',
      label: 'First Commercial Bank Ha Noi',
      cardLength: 0,
      value: 'FCNB HN',
      bankCode: '608',
      napasSupported: false,
    },
    {
      //label: 'Global Petro Commercial Joint Stock Bank',
      label: 'Ng??n h??ng D???u kh?? To??n c???u',
      bankId: '970408',
      atmBin: '970408',
      cardLength: 20,
      value: 'GP Bank',
      bankCode: '320',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Housing Development Bank',
      label: 'Ng??n h??ng Ph??t tri???n TP HCM',
      bankId: '970437',
      atmBin: '970437',
      cardLength: 20,
      value: 'HDBank',
      bankCode: '321',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Hong Leong Bank Viet Nam',
      label: 'Ng??n h??ng Hong Leong Viet Nam',
      bankId: '970442',
      atmBin: '970442',
      cardLength: 20,
      value: 'HLO',
      bankCode: '603',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Hua Nan Commercial Bank',
      label: 'Hua Nan Commercial Bank',
      cardLength: 0,
      value: 'HNCB',
      bankCode: '640',
      napasSupported: false,
    },
    {
      //label: 'The HongKong and Shanghai Banking Corporation',
      label: 'NH TNHH M???t Th??nh Vi??n HSBC Vi???t Nam',
      cardLength: 0,
      value: 'HSBC',
      bankCode: '617',
      napasSupported: false,
    },
    {
      //label: 'NH The Hongkong and Shanghai',
      label: 'Ng??n h??ng The Hongkong v?? Th?????ng H???i',
      cardLength: 0,
      value: 'HSBC HN',
      bankCode: '645',
      napasSupported: false,
    },
    {
      //label: 'Industrial Bank of Korea',
      label: 'Industrial Bank of Korea',
      cardLength: 0,
      value: 'IBK',
      bankCode: '641',
      napasSupported: false,
    },
    {
      //label: 'ICB of China CN Ha Noi',
      label: 'ICB of China CN Ha Noi',
      cardLength: 0,
      value: 'ICB',
      bankCode: '649',
      napasSupported: false,
    },
    {
      //label: 'Indovina Bank',
      label: 'Indovina Bank',
      bankId: '970434',
      atmBin: '888999',
      cardLength: 0,
      value: 'IVB',
      bankCode: '502',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Kho Bac Nha Nuoc',
      label: 'Kho B???c Nh?? N?????c',
      cardLength: 0,
      value: 'KBNN',
      bankCode: '701',
      napasSupported: false,
    },
    {
      //label: 'Korea Exchange Bank',
      label: 'Korea Exchange Bank',
      cardLength: 0,
      value: 'KEB',
      bankCode: '626',
      napasSupported: false,
    },
    {
      //label: 'Kien Long Commercial Joint Stock Bank',
      label: 'Ng??n h??ng Ki??n Long',
      bankId: '970452',
      atmBin: '970452',
      cardLength: 16,
      value: 'Kienlongbank',
      bankCode: '353',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Kookmin Bank',
      label: 'Ng??n h??ng Kookmin',
      cardLength: 0,
      value: 'KMB',
      bankCode: '631',
      napasSupported: false,
    },
    {
      //label: 'Lien Viet Post Bank',
      label: 'Ngan h??ng TMCP B??u ??i???n Li??n Vi???t',
      bankId: '970449',
      atmBin: '970449',
      cardLength: 0,
      value: 'Lienvietbank,  LPB',
      bankCode: '357',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Maritime Bank',
      label: 'Ng??n h??ng H??ng H???i Vi???t Nam',
      bankId: '970426',
      atmBin: '970426',
      cardLength: 16,
      value: 'Maritime Bank, MSB',
      bankCode: '302',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Maybank',
      label: 'Malayan Banking Berhad',
      cardLength: 0,
      value: 'Maybank',
      bankCode: '609',
      napasSupported: false,
    },
    {
      //label: 'Military Commercial Joint stock Bank',
      label: 'Ng??n h??ng Qu??n ?????i',
      bankId: '970422',
      atmBin: '970422',
      cardLength: 16,
      value: 'MB',
      bankCode: '311',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Malayan Banking Berhad',
      label: 'Malayan Banking Berhad 2',
      cardLength: 0,
      value: 'MBB',
      bankCode: '635',
      napasSupported: false,
    },
    {
      //label: 'Mizuho Corporate Bank - TP HCM',
      label: 'Mizuho Corporate Bank - TP HCM',
      cardLength: 0,
      value: 'MCB_HCM',
      bankCode: '639',
      napasSupported: false,
    },
    {
      //label: 'Mega ICBC Bank',
      label: 'Mega ICBC Bank',
      cardLength: 0,
      value: 'MICB',
      bankCode: '623',
      napasSupported: false,
    },
    {
      //label: 'Mizuho Bank',
      label: 'Mizuho Corporate Bank',
      cardLength: 0,
      value: 'Mizuho Bank',
      bankCode: '613',
      napasSupported: false,
    },
    {
      //label: 'Nam A Commercial Joint stock Bank',
      label: 'Ng??n h??ng Nam ??',
      bankId: '970428',
      atmBin: '970428',
      cardLength: 0,
      value: 'Nam A Bank, NAB',
      bankCode: '306',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'North Asia Commercial Joint Stock Bank',
      label: 'Ng??n h??ng B???c ??',
      bankId: '970409',
      atmBin: '970409',
      cardLength: 0,
      value: 'NASBank, NASB',
      bankCode: '313',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'National Citizen Bank',
      label: 'Ng??n h??ng Quoc Dan',
      bankId: '970419',
      atmBin: '970419',
      cardLength: 16,
      value: 'NCB',
      bankCode: '352',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Oversea - Chinese Banking Corporation',
      label: 'Oversea - Chinese Bank',
      cardLength: 0,
      value: 'OCBC',
      bankCode: '625',
      napasSupported: false,
    },
    {
      //label: 'Ocean Bank',
      label: 'Ng??n h??ng ?????i D????ng',
      bankId: '970414',
      atmBin: '970414',
      cardLength: 20,
      value: 'Ocean Bank',
      bankCode: '319',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Orient Commercial Joint Stock Bank',
      label: 'Ng??n h??ng Ph????ng ????ng',
      bankId: '970448',
      atmBin: '970448',
      cardLength: 16,
      value: 'Oricombank, OCB, PhuongDong Bank',
      bankCode: '333',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Petrolimex group commercial Joint stock Bank',
      label: 'Ng??n h??ng X??ng d???u Petrolimex',
      bankId: '970430',
      atmBin: '970430',
      cardLength: 16,
      value: 'PG Bank',
      bankCode: '341',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'PVcombank',
      label: 'NH TMCP ?????i Ch??ng Viet Nam',
      bankId: '970412',
      atmBin: '970412',
      cardLength: 16,
      value: 'PVcombank',
      bankCode: '360',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Quy tin dung co so',
      label: 'Qu??? t??n d???ng c?? s???',
      cardLength: 0,
      value: 'QTDCS',
      bankCode: '902',
      napasSupported: false,
    },
    {
      //label: 'Saigon Thuong Tin Commercial Joint Stock Bank',
      label: 'Ng??n h??ng S??i G??n Th????ng T??n',
      bankId: '970403',
      atmBin: '970403',
      cardLength: 16,
      value: 'Sacombank',
      bankCode: '303',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Saigon Bank for Industry and Trade',
      label: 'Ng??n h??ng S??i G??n C??ng Th????ng',
      bankId: '970400',
      atmBin: '161087',
      cardLength: 16,
      value: 'Saigonbank',
      bankCode: '308',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'State Bank of Vietnam',
      label: 'Ng??n H??ng Nh?? N?????c',
      cardLength: 0,
      value: 'SBV',
      bankCode: '101',
      napasSupported: false,
    },
    {
      //label: 'Saigon Commercial Joint Stock Bank',
      label: 'Ng??n h??ng TMCP S??i G??n',
      bankId: '970429',
      atmBin: '970429',
      cardLength: 16,
      value: 'SCB',
      bankCode: '334',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Standard Chartered Bank',
      label: 'Ng??n h??ng Standard Chartered Bank Vi???t Nam',
      cardLength: 0,
      value: 'SCBank',
      bankCode: '604',
      napasSupported: false,
    },
    {
      //label: 'Standard Chartered Bank HN',
      label: 'Ng??n h??ng Standard Chartered Bank HN',
      cardLength: 0,
      value: 'SCBank HN',
      bankCode: '646',
      napasSupported: false,
    },
    {
      //label: 'The Shanghai Commercial & Savings Bank CN Dong Nai',
      label: 'The Shanghai Commercial & Savings Bank CN ?????ng Nai',
      cardLength: 0,
      value: 'SCSB',
      bankCode: '606',
      napasSupported: false,
    },
    {
      //label: 'South East Asia Commercial Joint stock  Bank',
      label: 'Ng??n h??ng TMCP ????ng Nam ??',
      bankId: '970440',
      atmBin: '970468',
      cardLength: 16,
      value: 'SeABank',
      bankCode: '317',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Saigon - Hanoi Commercial Joint Stock Bank',
      label: 'Ng??n h??ng S??i G??n - H?? N???i',
      bankId: '970443',
      atmBin: '970443',
      cardLength: 16,
      value: 'SHB',
      bankCode: '348',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Shinhan Bank',
      label: 'Ng??n h??ng TNHH MTV Shinhan Vi???t Nam',
      bankId: '970424',
      atmBin: '970424',
      cardLength: 0,
      value: 'Shinhan Bank',
      bankCode: '616',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'The Siam Commercial Public Bank',
      label: 'Ng??n h??ng The Siam Commercial Public',
      cardLength: 0,
      value: 'SIAM',
      bankCode: '600',
      napasSupported: false,
    },
    {
      //label: 'Sumitomo Mitsui Banking Corporation HCMC',
      label: 'Sumitomo Mitsui Banking Corporation HCM',
      cardLength: 0,
      value: 'SMBC',
      bankCode: '636',
      napasSupported: false,
    },
    {
      //label: 'Sumitomo Mitsui Banking Corporation HN',
      label: 'Sumitomo Mitsui Banking Corporation HN',
      cardLength: 0,
      value: 'SMBC HN',
      bankCode: '936',
      napasSupported: false,
    },
    {
      //label: 'SinoPac Bank',
      label: 'Ng??n h??ng SinoPac',
      cardLength: 0,
      value: 'SPB',
      bankCode: '632',
      napasSupported: false,
    },
    {
      //label: 'Vietnam Technological and Commercial Joint stock Bank',
      label: 'Ng??n h??ng K??? th????ng Vi???t Nam',
      bankId: '970407',
      atmBin: '970407',
      cardLength: 16,
      value: 'Techcombank, TCB',
      bankCode: '310',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Taipei Fubon Commercial Bank Ha Noi',
      label: 'Taipei Fubon Commercial Bank Ha Noi',
      cardLength: 0,
      value: 'TFCBHN',
      bankCode: '642',
      napasSupported: false,
    },
    {
      //label: 'Taipei Fubon Commercial Bank TP Ho Chi Minh',
      label: 'Taipei Fubon Commercial Bank TP Ho Chi Minh',
      cardLength: 0,
      value: 'TFCBTPHCM',
      bankCode: '651',
      napasSupported: false,
    },
    {
      //label: 'United Oversea Bank',
      label: 'United Oversea Bank',
      bankId: '970458',
      atmBin: '970458',
      cardLength: 0,
      value: 'UOB',
      bankCode: '618',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Vietnam Bank for Social Policies',
      label: 'Ng??n h??ng Ch??nh s??ch x?? h???i Vi???t Nam',
      cardLength: 0,
      value: 'VBSP',
      bankCode: '207',
      napasSupported: false,
    },
    {
      //label: 'Vietnam Development Bank',
      label: 'Ng??n h??ng Ph??t tri???n Vi???t Nam',
      cardLength: 0,
      value: 'VDB',
      bankCode: '208',
      napasSupported: false,
    },
    {
      //label: 'Vietnam International Commercial Joint Stock Bank',
      label: 'Ng??n h??ng Qu???c t???',
      bankId: '970441',
      atmBin: '970441',
      cardLength: 0,
      value: 'VIBank, VIB',
      bankCode: '314',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'VID public',
      label: 'Ng??n h??ng VID Public',
      bankId: '970439',
      atmBin: '970439',
      cardLength: 16,
      value: 'VID public',
      bankCode: '501',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Ngan hang Viet Hoa',
      label: 'Ng??n h??ng Vi???t Hoa',
      cardLength: 0,
      value: 'Viet Hoa Bank',
      bankCode: '324',
      napasSupported: false,
    },
    {
      //label: 'Viet A Commercial Joint Stock Bank',
      label: 'Ng??n h??ng Vi???t ??',
      bankId: '970427',
      atmBin: '970427',
      cardLength: 0,
      value: 'VietA Bank, VAB',
      bankCode: '355',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Vietnam Th????ng tin Commercial Joint Stock Bank',
      label: 'Ng??n h??ng Vi???t Nam Th????ng T??n',
      bankId: '970433',
      atmBin: '970433',
      cardLength: 16,
      value: 'Vietbank',
      bankCode: '356',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'BanViet Commercial Jont stock Bank',
      label: 'NHTMCP B???n Vi???t',
      bankId: '970454',
      atmBin: '970454',
      cardLength: 16,
      value: 'VietCapital Bank',
      bankCode: '327',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Joint Stock Commercial Bank for Foreign Trade of Vietnam',
      label: 'Ng??n h??ng TMCP Ngo???i Th????ng',
      bankId: '970436',
      atmBin: '970436',
      cardLength: 0,
      value: 'Vietcombank, VCB',
      bankCode: '203',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Vietnam Joint Stock Commercial Bank for Industry and Trade',
      label: 'Ng??n h??ng c??ng th????ng Vi???t Nam',
      bankId: '970415',
      atmBin: '970415',
      cardLength: 16,
      value: 'Vietinbank',
      bankCode: '201',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Vietnam Construction Bank',
      label: 'NH TMCP X??y d???ng Vi???t Nam',
      cardLength: 0,
      value: 'VNCB',
      bankCode: '339',
      napasSupported: false,
    },
    {
      //label: 'Vietnam prosperity Joint stock commercial Bank',
      label: 'Ng??n h??ng Th????ng m???i c??? ph???n Vi???t Nam Th???nh V?????ng',
      bankId: '970432',
      atmBin: '970432',
      cardLength: 16,
      value: 'VPBank',
      bankCode: '309',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Vietnam - Russia Bank',
      label: 'Ng??n h??ng Li??n doanh Vi???t Nga',
      bankId: '970421',
      atmBin: '970421',
      cardLength: 16,
      value: 'VRB',
      bankCode: '505',
      type: 'ACC',
      napasSupported: true,
    },
    {
      //label: 'Ngan hang Vung Tau',
      label: 'Ng??n h??ng V??ng T??u',
      cardLength: 0,
      value: 'Vung Tau',
      bankCode: '315',
      napasSupported: false,
    },
    {
      //label: 'Woori BANK HCMC',
      label: 'NH Woori HCM',
      cardLength: 0,
      value: 'WHHCM',
      bankCode: '637',
      napasSupported: false,
    },
    {
      //label: 'WOORI BANK Hanoi',
      label: 'WOORI BANK H?? N???i',
      bankId: '970457',
      atmBin: '970457',
      cardLength: 0,
      value: 'WHHN',
      bankCode: '624',
      type: 'ACC',
      napasSupported: true,
    },
  ]);
  const onAddCredit = () => {
    if ([bankname, yourname, cardnumber, date, cvv].some(el => el === '')) {
      Alert.alert(null, 'Th??ng tin ch??a ?????y ?????');
      return;
    } else {
      const newCredit = {
        bankname,
        yourname,
        cardnumber,
        date,
        cvv,
      };
      // setCredits([...credits,newCredit])
      // AsyncStorage.getItem('credit').then(accounts => {
      //   const listAccount = JSON.parse(accounts);

      //   if (accounts === null) {
      //     AsyncStorage.setItem('credit', JSON.stringify([newCredit]));
      //   } else {
      //     listAccount.push(newCredit);
      AsyncStorage.setItem('credit', JSON.stringify(newCredit));
      AsyncStorage.setItem('cardnb', cardnumber);
      AsyncStorage.setItem('bankname', bankValue);
      AsyncStorage.setItem('yourname', yourname);
      AsyncStorage.setItem('date', date);
      AsyncStorage.setItem('cvv', cvv);
      // }
      navigation.navigate('Payment', {cardnumber: cardnumber});
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
      <View>
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
            Add Credit Card
          </Text>
          <View />
        </View>
        <View
          style={{
            backgroundColor: '#C4C4C4',
            borderRadius: 30,
            marginHorizontal: 5,
            width: 354,
            height: 196,
            alignSelf: 'center',
          }}>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  left: 40,
                  top: 15,
                  color: 'white',
                  fontWeight: '700',
                  fontSize: 18,
                }}>
                {route.params.yourname}
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  right: 30,
                  top: 15,
                  color: 'white',
                  fontSize: 10,
                  // width:180
                }}>
                {route.params.bankname}
                {/* {route} */}
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  left: 40,
                  top: 100,
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 10,
                  // width:200
                }}>
                No {route.params.bankname}
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  left: 40,
                  top: 125,
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 12,
                }}>
                {route.params.cardnumber}
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  left: 40,
                  top: 150,
                  color: 'white',
                  fontWeight: '700',
                  fontSize: 14,
                }}>
                $12.999.999.99
              </Text>
              <Image
                source={require('../../assets/images/ccard2.png')}
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  right: 40,
                  top: 150,
                }}
              />
            </View>
          </View>

          <Image
            style={{borderRadius: 30, alignSelf: 'center'}}
            source={require('../../assets/images/ccard.png')}
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{alignSelf: 'center'}}>Location</Text>

            <View style={{width:'60%'}}>
              <DropDownPicker
              searchable={true}
                style={{width:'100%', marginLeft: 5, zIndex: 0}}
                placeholder={route.params.bankname}
                labelStyle={{fontSize: 8}}
                selectedItemLabelStyle={{fontSize: 8}}
                placeholderStyle={{fontSize: 8}}
                listParentLabelStyle={{fontSize: 8}}
                listItemLabelStyle={{fontSize: 8}}
                open={bankOpen}
                value={bankValue}
                items={bankname}
                setOpen={setBankOpen}
                setValue={setBankValue}
                setItems={setBankname}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              alignItems: 'center',
            }}>
            <Text style={{width: '35%'}}>Your name</Text>
            <TextInput
              onChangeText={setYourname}
              style={{borderBottomWidth: 1, width: '60%'}}
              placeholder={route.params.yourname}
              textAlign={'right'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              alignItems: 'center',
            }}>
            <Text style={{width: '35%'}}>Card number</Text>
            <TextInput
              onChangeText={setCardnumber}
              keyboardType="numeric"
              style={{borderBottomWidth: 1, width: '60%'}}
              placeholder={route.params.cardnumber}
              textAlign={'right'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              alignItems: 'center',
            }}>
            <Text style={{width: '35%'}}>Date</Text>
            {/* <TextInput onChangeText={setDate} style={{borderBottomWidth:1, width:'60%'}} placeholder={route.params.data} textAlign={'right'}/> */}
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

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              alignItems: 'center',
            }}>
            <Text style={{width: '35%'}}>CVV</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setCvv}
              style={{borderBottomWidth: 1, width: '60%'}}
              placeholder={route.params.cvv}
              textAlign={'right'}
            />
          </View>
        </View>
      </View>

      <View style={{marginBottom: 40}}>
        <TouchableOpacity
          // onPress={changeScreen}
          onPress={onAddCredit}
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
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
