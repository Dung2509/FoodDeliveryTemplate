/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View,  TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function Header({navigation}) {
  return (
    <View style={{width:'100%'}}>
      <TouchableOpacity style={{marginHorizontal:42.5,marginVertical:20}} onPress={() => navigation.goBack()}>
      <Image
          style={{width: 25, height: 30}}
          source={require('../assets/images/back.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
