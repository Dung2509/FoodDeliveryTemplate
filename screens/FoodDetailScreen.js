import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function FoodDetailScreen({route, navigation}) {
 //NOTES: Nhận dữ liệu từ navigation
  return (
    <View>
      <View style={{width: '100%'}}>
        <TouchableOpacity
          style={{marginHorizontal: 42.5, marginVertical: 20}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{width: 25, height: 30}}
            source={require('../assets/images/back.png')}
          />
        </TouchableOpacity>
      </View>
      <Text onPress={() => navigation.goBack()}>{route.params.username}</Text>
    </View>
  );
}
