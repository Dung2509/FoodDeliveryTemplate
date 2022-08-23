/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowHeight = Dimensions.get('window').height;

export default function MyProfileScreen({navigation, route}) {

//   const [fname, setFname] = useState('');
//   const [lname, setLname] = useState('');
// const [date, setBday] = useState('')
// const [genderValue, setGenderValue] = useState(null)
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [locationValue, setLocationValue] = useState(null);
//   const [countryValue, setCountryValue] = useState(null);
//   useEffect(() => {
//     AsyncStorage.getItem('fname').then(fname => setFname(fname));
//     AsyncStorage.getItem('lname').then(lname => setLname(lname));
//     AsyncStorage.getItem('date').then(date => setBday(date));
//     AsyncStorage.getItem('gender').then(gender => setGenderValue(gender));
//     AsyncStorage.getItem('phone').then(phone => setPhoneNumber(phone));
//     AsyncStorage.getItem('location').then(location => setLocationValue(location));
//     AsyncStorage.getItem('country').then(country => setCountryValue(country));
//   })
// console.log('gender' + JSON.stringify(genderValue));
// console.log('date' + JSON.stringify(date));
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: windowHeight,
      }}>
      <View style={{height:windowHeight-60}}>
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
            onPress={() =>
              navigation.navigate('Profile', {
                lname: route.params.lname
              })
            }>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/images/back.png')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
            My Profile
          </Text>
          <View style={{}} />
        </View>

        {/* Profile */}
        <View style={{marginHorizontal: 20,height:windowHeight-200}}>
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
<View style={{flexDirection:'column', justifyContent:'space-around', height:windowHeight-300 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 1,
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{width: '35%'}}>First name</Text>         
            <Text>{route.params.fname}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
              alignItems: 'center',
            }}>
            <Text style={{width: '35%'}}>Last name</Text>
            <Text>{route.params.lname}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
              alignItems: 'center',
            }}>
            <Text style={{width: '35%'}}>Birthday</Text>
            <Text>{route.params.date}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
              alignItems: 'center',
            }}>
            <Text style={{width: '35%'}}>Gender</Text>
            <Text>{route.params.gender}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
              alignItems: 'center',
            }}>
            <Text style={{width: '35%'}}>Phone</Text>
            <Text>{route.params.phone}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
              alignItems: 'center',
            }}>
            <Text style={{width: '35%'}}>Location</Text>
            <Text>{route.params.location + ', ' + route.params.country}</Text>
          </View>
        </View>
      </View>
      </View>

      <View style={{}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile',{
            fname:route.params.fname,
            lname:route.params.lname,
            date:route.params.date,
            gender:route.params.gender,
            phone: route.params.phone,
            location:route.params.location,
            country: route.params.country
          })}
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
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
