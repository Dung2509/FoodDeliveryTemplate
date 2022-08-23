/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProfileScreen({navigation, route}) {
  // const [checkUser, setCheckUser] = useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [date, setDate] = useState('');
  const [genderValue, setGenderValue] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [locationValue, setLocationValue] = useState(null);
  const [countryValue, setCountryValue] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('fname').then(fname => setFname(fname));
    AsyncStorage.getItem('lname').then(lname => setLname(lname));
    AsyncStorage.getItem('date').then(date => setDate(date));
    AsyncStorage.getItem('gender').then(gender => setGenderValue(gender));
    AsyncStorage.getItem('phone').then(phone => setPhoneNumber(phone));
    AsyncStorage.getItem('location').then(location =>
      setLocationValue(location),
    );
    AsyncStorage.getItem('country').then(country => setCountryValue(country));
    // setCheckUser(true)
  });
  console.log('DAte ' + date);
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#E5E5E5',
        height: windowHeight,
      }}>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View style={{width: 150, height: 150}}>
            <Image
              style={{width: 150, height: 150, borderRadius: 75}}
              source={require('../assets/images/avatar.png')}
            />
          </View>
          <Text
            style={{
              marginTop: 15,
              fontWeight: '700',
              fontSize: 18,
              color: 'black',
            }}>
            {fname } { lname}       
          </Text>
          
          <Text style={{marginTop: 5, fontSize: 14, color: 'black'}}>
         {phoneNumber}
          </Text>
        </View>

        {/* Infor */}
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MyProfile', {
                fname: fname,
                lname: lname,
                date: date,
                gender: genderValue,
                phone: phoneNumber,
                location: locationValue,
                country: countryValue,
              })
            }
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 15,
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>My Profile</Text>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Image source={require('../assets/images/next.png')} />
            </TouchableOpacity>
          </TouchableOpacity>
          {/* Change Password */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginBottom: 15,
            }}>
            <Text
              style={{fontSize: 14, color: 'black'}}
              onPress={() => navigation.navigate('ChangePass')}>
              Change Password
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => navigation.navigate('ChangePass')}>
              <Image source={require('../assets/images/next.png')} />
            </TouchableOpacity>
          </View>
          {/* Payment */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginBottom: 15,
            }}>
            <Text
              style={{fontSize: 14, color: 'black'}}
              onPress={() => navigation.navigate('Payment')}>
              Payment Settings
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => navigation.navigate('Payment', {})}>
              <Image source={require('../assets/images/next.png')} />
            </TouchableOpacity>
          </View>
          {/* Voucher */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginBottom: 15,
            }}>
            <Text
              style={{fontSize: 14, color: 'black'}}
              onPress={() => navigation.navigate('Voucher')}>
              My Voucher
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => navigation.navigate('Voucher')}>
              <Image source={require('../assets/images/next.png')} />
            </TouchableOpacity>
          </View>
          {/* Notification */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              marginHorizontal: 20,
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>Notification</Text>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Image source={require('../assets/images/next.png')} />
            </TouchableOpacity>
          </View>
          {/* About us */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              marginHorizontal: 20,
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>About Us</Text>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Image source={require('../assets/images/next.png')} />
            </TouchableOpacity>
          </View>
          {/* Contact us  */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginBottom: 15,
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>Contact Us</Text>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Image source={require('../assets/images/next.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{marginBottom: windowHeight - 100}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ECF0F1',
            marginHorizontal: 30,
            borderRadius: 30,
            marginVertical: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 18,
              color: 'black',
              paddingVertical: 12,
            }}
            onPress={() => navigation.navigate('Login')}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
