/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View style={{flexDirection: 'column', height: 120}}>
      <View style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
        <View style={{flex: 1, height: 2, backgroundColor: '#34495e4d'}} />
        <View>
          <Text
            style={{
              width: 150,
              fontSize: 14,
              textAlign: 'right',
              marginRight: 30,
            }}>
            Or connect with
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          marginTop: 10,
        }}>
        <Image
          style={{width: 190, height: 120, marginLeft: 0}}
          source={require('../assets/images/ffood.png')}
        />

        <View
          style={{
            width: 120,
            marginRight: 30,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => Alert.alert('Facebook')}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../assets/images/fb.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('Google')}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../assets/images/gg.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
