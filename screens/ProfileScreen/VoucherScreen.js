/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
import React , { useState} from 'react';
const voucher = require('../../assets/images/voucher.png');
const tick =  require('../../assets/images/ticklike.png')
const tickdlike =  require('../../assets/images/tickdlike.png')
import Clock from '../../assets/svg/clock.svg';
import Dislike from '../../assets/svg/dislike.svg';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const itemWidth = windowWidth - 60;
//   import Marker from '../assets/svg/marker.svg';

function ItemRestaurant({dataItem}) {
  const [checkId, setcheckId] = useState(true)

  return (
    <TouchableOpacity
    
      style={{
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between',
      }} onPress={() => setcheckId(!checkId)}>
      <View style={{backgroundColor:'#ecf0f1',borderRadius:20}}>
        <Image
          style={{width: itemWidth / 3, height: itemWidth / 3}}
          source={dataItem.img}
        />
      </View>

      <View
        style={{
          marginLeft: 20,
          flexDirection: 'column',
          height: itemWidth / 3,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 12, fontWeight: '700', color: 'black'}}>
          {dataItem.name}
        </Text>
        <View style={{flexDirection: 'row', alignContent: 'center'}}>
          <Text
            style={{
              color: '#34495E',
              fontSize: 10,
              maxWidth: '90%',
              alignSelf: 'center',
            }}>
            <Clock /> {dataItem.day}
          </Text>
        </View>
        <Text style={{color: '#E74C3C', fontSize: 14}}>{dataItem.time}</Text>
      </View>

      <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => setcheckId(!checkId)} >
        <Image
          style={{alignSelf: 'center'}}
          source={dataItem.isCheck === checkId ? tick : tickdlike}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
const renderItem = ({item, index}) => {
  return <ItemRestaurant dataItem={item} />;
};

export default function VoucherScreen({navigation}) {
  const [listNearMe, setListNearMe] = React.useState([
    {
      id: 1,
      name: 'Sale off 30% for Pizza',
      day: 'Apr 10 - Apr 30',
      img: voucher,
      time: '11 days left',
     isCheck:false
    },
    {
      id: 2,
      name: 'Sale off 30% for Pizza',
      day: 'Apr 10 - Apr 30',
      img: voucher,
      time: '11 days left',
      isCheck:false
    },
    {
      id: 3,
      name: 'Sale off 30% for Pizza',
      day: 'Apr 10 - Apr 30',
      img: voucher,
      isCheck:false,
      time: '11 days left',
    },
  ]);

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: windowHeight,
        backgroundColor:'#E5E5E5'
      }}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}>
          <TouchableOpacity
            style={{width: 15, height: 30}}
            onPress={() => navigation.goBack()}>
            <Image
              style={{width: 15, height: 30}}
              source={require('../../assets/images/back.png')}
            />
          </TouchableOpacity>
          <Text style={{fontWeight: '700', fontSize: 18, color: 'black'}}>
            My Voucher
          </Text>
          <View />
        </View>
        <View>
          <FlatList
            keyExtractor={(item, index) => item.id.toString()}
            data={listNearMe}
            renderItem={renderItem}
          />
        </View>
      </View>
      <View style={{marginBottom: 40}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#d35400',
            marginHorizontal: 30,
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
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
