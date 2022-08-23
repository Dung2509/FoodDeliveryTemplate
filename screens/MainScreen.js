/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Image, Text} from 'react-native';
import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonCommon from '../screens/ButtonCommon';
import Footer from '../screens/Footer';

export default function MainScreen({navigation}) {
  

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        
      }}>
  
      <View
        style={{
          width: 300,
          height: 300,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#d3540080',
          alignSelf: 'center',
          borderRadius: 30,
          marginVertical: 20,
          marginBottom: -40,
        }}>
        <Image
          style={{width: 186, height: 149, resizeMode: 'cover'}}
          source={require('../assets/images/burger.png')}
        />
      </View>
      <View style={{marginHorizontal: 30}}>
        <ButtonCommon
          styleBtn={{
            backgroundColor: '#D35400',
            marginVertical: 20,
          }}
          key={1}
          styleTextbtn={{color: '#FFFFFF'}}
          text={'Sign In'}
          clicked={() => navigation.navigate('Login')}
        />
        <ButtonCommon
          styleBtn={{
            backgroundColor: '#ECF0F1',
          }}
          styleTextbtn={{color: '#000'}}
          text={'Sign Up'}
          clicked={() => navigation.navigate('Signup')}
        />
      </View>
      {/* </View> */}
      <View style={{alignItems: 'center'}}>
        <Footer />
      </View>
    </View>
  );
}
