/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

export default function SplashScreen({navigation}) {
    const slides = [
        {
          key: 'one',
          title: 'Delicious Food',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../assets/images/chicken.png'),
        },
        {
          key: 'two',
          title: 'Fast Shipping',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum rhoncus nulla.',
          image: require('../assets/images/ship.png'),
        },
        {
          key: 'three',
          title: 'Certificate Food',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies mauris a id.',
          image: require('../assets/images/medal.png'),
        },
        {
          key: 'four',
          title: 'Payment Online',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui ultricies sit massa.',
          image: require('../assets/images/credits.png'),
          goMain: require('../assets/images/arrow.png')
        },
      ];
    
    function ItemSplash({dataItem}) {
      return (
        <View style={{flex: 1, backgroundColor: '#D35400',justifyContent:'center'}}>
          <Image
            source={dataItem.image}
            style={{
                alignSelf:'center',
              resizeMode: 'contain',
              height: 130,
              width: 200,
            }}
          />
          <Text
            style={{
              paddingTop: 25,
              paddingBottom: 10,
              fontSize: 24,
              fontWeight: 'bold',
              color: '#fff',
              alignSelf: 'center',
            }}>
            {dataItem.title}
          </Text>
    
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 12,
              paddingHorizontal: 30,
            }}>
            {dataItem.text}
          </Text>
          <TouchableOpacity style={{position:'absolute', bottom:0, right:0, margin:30}} onPress={() => navigation.navigate('Main')}>
              <Image style={{width:30,height:20,tintColor:'white'}} source={dataItem.goMain}/>
          </TouchableOpacity>
        </View>
      );
    }
    const renderItem = ({item, index}) => {
      return <ItemSplash dataItem={item} />;
    };
  return (

      <AppIntroSlider
        renderItem={renderItem}
        doneLabel={''}
        showNextButton={false}
        data={slides}
        activeDotStyle={{
          backgroundColor: 'white',
          width: 30,
        }}
      />
    
  );
}
