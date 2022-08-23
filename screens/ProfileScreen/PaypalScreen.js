/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React , {useState}from 'react';
const windowHeight = Dimensions.get('window').height;
export default function PaypalScreen({navigation}) {
  const [text, setText] = useState('Make as Dafault')
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
          Paypal
        </Text>
        <View />
      </View>

      {/* Paypal  */}
      <View
        style={{
          marginHorizontal: 5,
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: windowHeight - 60,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 40,
          }} onPress={() => navigation.navigate('EditPaypal')}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 5,
                backgroundColor: '#ECF0F1',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/images/paypal.png')} />
            </View>
            <Text style={{marginLeft: 10}}>Paypal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text>Itoh@gmail.com</Text>
            <Image
              style={{alignSelf: 'center', marginLeft: 9}}
              source={require('../../assets/images/next.png')}
            />
          </View>
        </TouchableOpacity>
        {/* Button */}
        <View style={{}}>
          <View style={{marginVertical: 20}}>
            <TouchableOpacity
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
               {text}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 40}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ECF0F1',
                marginHorizontal: 20,
                borderRadius: 30,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '700',
                  fontSize: 18,
                  color: 'black',
                  paddingVertical: 12,
                }}>
               Remove
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
