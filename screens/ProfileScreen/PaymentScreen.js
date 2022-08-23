/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowHeight = Dimensions.get('window').height;
export default function PaymentScreen({navigation, route}) {
  const [cardnumber, setCardnumber] = useState('');
  const [yourname, setYourname] = useState('');
  const [bankname, setBankname] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [listCredit, setListCredit] = useState([])
  useEffect(() => {
    AsyncStorage.getItem('credit').then(cre => setListCredit(cre));

    AsyncStorage.getItem('cardnb').then(card => setCardnumber(card));
    AsyncStorage.getItem('bankname').then(bank => setBankname(bank));
    AsyncStorage.getItem('yourname').then(name => setYourname(name));
    AsyncStorage.getItem('date').then(date => setDate(date));
    AsyncStorage.getItem('cvv').then(i => setCvv(i));
  });

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: '#E5E5E5',
        height: windowHeight,
      }}>
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
          Payment
        </Text>
        <View />
      </View>

      <View style={{marginHorizontal: 5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 40,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 5,
                backgroundColor: '#ECF0F1',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Paypal')}>
              <Image source={require('../../assets/images/paypal.png')} />
            </TouchableOpacity>
            <Text
              onPress={() => navigation.navigate('Paypal')}
              style={{marginLeft: 10}}>
              Paypal
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text onPress={() => navigation.navigate('Paypal')}>
              Itoh@gmail.com
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Paypal')}
              style={{alignSelf: 'center', marginLeft: 9}}>
              <Image source={require('../../assets/images/next.png')} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Credit */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Credit', {
              bankname: bankname,
              yourname: yourname,
              cardnumber: cardnumber,
              date: date,
              cvv: cvv,
            })
          }
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 5,
                backgroundColor: '#ECF0F1',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/images/credit.png')} />
            </TouchableOpacity>
            <Text style={{marginLeft: 10}}>Credit Card</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>{cardnumber}</Text>
            <TouchableOpacity style={{alignSelf: 'center', marginLeft: 9}}>
              <Image source={require('../../assets/images/next.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {/* Payment method */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() =>
              navigation.navigate('Credit', {
                bankname: bankname,
                yourname: yourname,
                cardnumber: cardnumber,
                date: date,
                cvv: cvv,
              })
            }>
            {/* <View style={{width:30,height:30,borderRadius:5,backgroundColor:'#ECF0F1',justifyContent:'center',alignItems:'center'}}> */}
            <Image
              style={{alignSelf: 'center'}}
              source={require('../../assets/images/payment.png')}
            />
            {/* </View> */}
            <Text style={{marginLeft: 10}}>Add new payment method</Text>
          </TouchableOpacity>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 5,
              backgroundColor: '#ECF0F1',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{alignSelf: 'center', width: 13, height: 13}}
              onPress={() => navigation.navigate('Voucher')}>
              <Image
                style={{width: 13, height: 13}}
                source={require('../../assets/images/plus.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
