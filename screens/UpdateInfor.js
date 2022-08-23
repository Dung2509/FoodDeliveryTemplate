/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowHeight = Dimensions.get('window').height;
export default function UpdateInfor({navigation, editItem, Creditlist, route}) {
  const [bankName, setbankName] = React.useState(route.params.bankName);
  const [name, setName] = React.useState(route.params.name);
  const [cardNb, setcardNb] = React.useState(route.params.cardNb);
  const [data, setData] = React.useState(route.params.data);
  const [cvv, setCvv] = React.useState(route.params.cvv);

  const addCreditCard = () => {
    const newCredit = {
      bankName,
      name,
      cardNb,
      data,
      cvv,
    };
    AsyncStorage.getItem('card').then(credit => {
      const listCredit = JSON.parse(credit);
      console.log('LIST' + JSON.stringify(listCredit));
      if (credit === null) {
        AsyncStorage.setItem('card', JSON.stringify([newCredit]));
      } else {
        listCredit.push(newCredit);
        AsyncStorage.setItem('card', JSON.stringify(listCredit));
        navigation.navigate('Credit', {
          bankName: bankName,
          name: name,
          cardNb: cardNb,
          data: data,
          cvv: cvv,
        });
      }
      console.log(JSON.stringify(listCredit));
    });
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
              source={require('../assets/images/back.png')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
            Add Credit Card
          </Text>
          <View />

        </View>
        <View style={{marginHorizontal: 10}}>
          <TextInput
            placeholder="Bank name"
            onChangeText={setbankName}
            style={{
              borderWidth: 1,
              borderRadius: 30,
              paddingLeft: 10,
              marginBottom: 5,
            }}
          />
          <TextInput
            placeholder="Your name"
            onChangeText={setName}
            style={{
              borderWidth: 1,
              borderRadius: 30,
              paddingLeft: 10,
              marginBottom: 5,
            }}
          />
          <TextInput
            placeholder="Card number"
            onChangeText={setcardNb}
            style={{
              borderWidth: 1,
              borderRadius: 30,
              paddingLeft: 10,
              marginBottom: 5,
            }}
          />
          <TextInput
            placeholder="Data"
            onChangeText={setData}
            style={{
              borderWidth: 1,
              borderRadius: 30,
              paddingLeft: 10,
              marginBottom: 5,
            }}
          />
          <TextInput
            placeholder="CVV"
            onChangeText={setCvv}
            style={{
              borderWidth: 1,
              borderRadius: 30,
              paddingLeft: 10,
              marginBottom: 5,
            }}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={addCreditCard}
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
  );
}
