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
import React, {useState} from 'react';
const food1 = require('../assets/images/foodImages/food1.png');
const like = require('../assets/images/like.png');
const dlike = require('../assets/images/dlike.png');
import Like from '../assets/svg/like.svg';
import Dislike from '../assets/svg/dislike.svg';
import ItemType from './ItemType';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const itemWidth = windowWidth - 60;

function ItemRestaurant({dataItem}) {
  const [checkId, setcheckId] = useState(true);

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between',
      }}>
      <Image
        style={{width: itemWidth / 3, height: itemWidth / 3}}
        source={dataItem.img}
      />
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
          {dataItem.isCheck === checkId ? (
            <Text
              style={{
                color: '#34495E',
                fontSize: 10,
                maxWidth: '90%',
                alignSelf: 'center',
              }}>
              <Like /> {dataItem.like}+
            </Text>
          ) : (
            <Text
              style={{
                color: '#34495E',
                fontSize: 10,
                maxWidth: '90%',
                alignSelf: 'center',
              }}>
              <Like /> {dataItem.like + 1}+
            </Text>
          )}

          <Text style={{color: '#34495E', marginHorizontal: 5}}>|</Text>
          {dataItem.isCheck !== checkId ? (
            <Text style={{color: '#34495E', fontSize: 12, alignSelf: 'center'}}>
              <Dislike /> {dataItem.dislike}+
            </Text>
          ) : (
            <Text style={{color: '#34495E', fontSize: 12, alignSelf: 'center'}}>
              <Dislike /> {dataItem.dislike+1}+
            </Text>
          )}
        </View>
        <Text style={{color: '#2ecc71', fontSize: 14}}>{dataItem.money}</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity
            onPress={() => setcheckId(!checkId)}
            style={{
              fontSize: 12,
              marginLeft: 5,
              height: 18,
              width: 18,
              borderRadius: 9,
              justifyContent: 'center',
              backgroundColor:
                dataItem.isCheck === checkId ? '#D35400' : '#ECF0F1',
            }}>
            <Image
              style={{
                alignSelf: 'center',
                tintColor: dataItem.isCheck === checkId ? 'white' : '#34495E',
              }}
              source={dlike}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setcheckId(!checkId)}
            style={{
              fontSize: 12,
              marginLeft: 5,
              height: 18,
              width: 18,
              borderRadius: 9,
              justifyContent: 'center',
              backgroundColor:
                dataItem.isCheck === !checkId ? '#D35400' : '#ECF0F1',
            }}>
            <Image
              style={{
                alignSelf: 'center',
                tintColor: dataItem.isCheck === !checkId ? 'white' : '#34495E',
              }}
              source={like}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const renderItem = ({item, index}) => {
  return <ItemRestaurant dataItem={item} />;
};

export default function OrderScreen({navigation}) {
  const [listNearMe, setListNearMe] = React.useState([
    {
      id: 1,
      name: 'Dogmie jagong tutung',
      like: 999,
      dislike: 93,
      img: food1,
      money: '$99.99',
      isCheck: false,
    },
    {
      id: 2,
      name: 'Dogmie jagong tutung',
      like: 999,
      dislike: 93,
      img: food1,
      money: '$99.99',
      isCheck: false,
    },
    {
      id: 3,
      name: 'Dogmie jagong tutung',
      like: 999,
      dislike: 93,
      img: food1,
      money: '$99.99',
      isCheck: false,
    },
  ]);

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: windowHeight - 100,
      }}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}>
          <TouchableOpacity style={{width: 15, height: 30}}>
            <Image
              style={{width: 15, height: 30}}
              source={require('../assets/images/back.png')}
            />
          </TouchableOpacity>
          <Text style={{fontWeight: '700', fontSize: 18, color: 'black'}}>
            Review Food
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
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyList')}
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
