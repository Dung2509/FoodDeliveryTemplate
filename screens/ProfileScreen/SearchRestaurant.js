/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Marker from '../../assets/svg/marker.svg';
const windowWidth = Dimensions.get('window').width;
const food1 = require('../../assets/images/foodImages/food1.png');
const itemWidth = windowWidth - 60;
import Star from '../../assets/svg/star.svg';
import Clock from '../../assets/svg/clock.svg';



const listNearMe2 = [
  {
    name: 'Cheesecake Factory',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'American',
    id: 1,
  },
  {
    name: 'Shokolaat',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'American',
    id: 2,
  },
  {
    name: 'Gordon Biersch',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'American',
    id: 3,
  },
  {
    name: 'Crepevine',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'American',
    id: 4,
  },
  {
    name: 'Creamery',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'American',
    id: 5,
  },
  {
    name: 'Old Pro',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'American',
    id: 6,
  },
  {
    name: 'Nola"s',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Cajun',
    id: 7,
  },
  {
    name: 'House of Bagels',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Bagels',
    id: 8,
  },
  {
    name: 'The Prolific Oven',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Sandwiches',
    id: 9,
  },
  {
    name: 'La Strada',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Italian',
    id: 10,
  },
  {
    name: 'Buca di Beppo',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Italian',
    id: 11,
  },
  {
    name: 'Pasta?',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Italian',
    id: 12,
  },
  {
    name: 'Madame Tam',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Asian',
    id: 13,
  },
  {
    name: 'Sprout Cafe',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Salad',
    id: 14,
  },
  {
    name: 'Pluto"s',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Salad',
    id: 15,
  },
  {
    name: 'Junoon',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Indian',
    id: 16,
  },
  {
    name: 'Bistro Maxine',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'French',
    id: 17,
  },
  {
    name: 'Three Seasons',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Vietnamese',
    id: 18,
  },
  {
    name: 'Sancho"s Taquira',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Mexican',
    id: 19,
  },
  {
    name: 'Reposado',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Mexican',
    id: 20,
  },
  {
    name: 'Siam Royal',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Thai',
    id: 21,
  },
  {
    name: 'Krung Siam',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Thai',
    id: 22,
  },
  {
    name: 'Thaiphoon',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Thai',
    id: 23,
  },
  {
    name: 'Tamarine',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Vietnamese',
    id: 24,
  },
  {
    name: 'Joya',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Tapas',
    id: 25,
  },
  {
    name: 'Jing Jing',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Chinese',
    id: 26,
  },
  {
    name: 'Patxi"s Pizza',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Pizza',
    id: 27,
  },
  {
    name: 'Evvia Estiatorio',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Mediterranean',
    id: 28,
  },
  {
    name: 'Cafe 220',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Mediterranean',
    id: 29,
  },
  {
    name: 'Cafe Renaissance',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Mediterranean',
    id: 30,
  },
  {
    name: 'Kan Zeman',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Mediterranean',
    id: 31,
  },
  {
    name: 'Gyros-Gyros',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Mediterranean',
    id: 32,
  },
  {
    name: 'Mango Caribbean Cafe',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Caribbean',
    id: 33,
  },
  {
    name: 'Coconuts Caribbean Restaurant & Bar',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Caribbean',
    id: 34,
  },
  {
    name: 'Rose & Crown',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'English',
    id: 35,
  },
  {
    name: 'Baklava',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Mediterranean',
    id: 36,
  },
  {
    name: 'Mandarin Gourmet',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Chinese',
    id: 37,
  },
  {
    name: 'Bangkok Cuisine',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Thai',
    id: 38,
  },
  {
    name: 'Darbar Indian Cuisine',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Indian',
    id: 39,
  },
  {
    name: 'Mantra',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Indian',
    id: 40,
  },
  {
    name: 'Janta',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Indian',
    id: 41,
  },
  {
    name: 'Hyderabad House',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Indian',
    id: 42,
  },
  {
    name: 'Starbucks',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Coffee',
    id: 43,
  },
  {
    name: 'Peet"s Coffee',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Coffee',
    id: 44,
  },
  {
    name: 'Coupa Cafe',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Coffee',
    id: 45,
  },
  {
    name: 'Lytton Coffee Company',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Coffee',
    id: 46,
  },
  {
    name: 'Il Fornaio',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Italian',
    id: 47,
  },
  {
    name: 'Lavanda',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Mediterranean',
    id: 48,
  },
  {
    name: 'MacArthur Park',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'American',
    id: 49,
  },
  {
    name: 'St Michael"s Alley',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Californian',
    id: 50,
  },
  {
    name: 'Osteria',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Italian',
    id: 51,
  },
  {
    name: 'Vero',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Italian',
    id: 52,
  },
  {
    name: 'Cafe Renzo',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Italian',
    id: 53,
  },
  {
    name: 'Miyake',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Sushi',
    id: 54,
  },
  {
    name: 'Sushi Tomo',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Sushi',
    id: 55,
  },
  {
    name: 'Kanpai',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Sushi',
    id: 56,
  },
  {
    name: 'Pizza My Heart',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Pizza',
    id: 57,
  },
  {
    name: 'New York Pizza',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Pizza',
    id: 58,
  },
  {
    name: 'California Pizza Kitchen',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Pizza',
    id: 59,
  },
  {
    name: 'Round Table',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Pizza',
    id: 60,
  },
  {
    name: 'Loving Hut',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Vegan',
    id: 61,
  },
  {
    name: 'Garden Fresh',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Vegan',
    id: 62,
  },
  {
    name: 'Cafe Epi',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'French',
    id: 63,
  },
  {
    name: 'Tai Pan',
    distance: '3 min - 1.1 km',
    star: Math.floor(Math.random() * 5) + 1,
    img: food1,
    address: 'Chinese',
    id: 64,
  },
];
function ItemRestaurant({dataItem}) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          width: itemWidth,
          marginTop: 10,
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
          <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
            {dataItem.name}
          </Text>
          <Text
            style={{
              color: '#34495E',
              fontSize: 12,
              maxWidth: '100%',
            }}>
            <Marker /> {dataItem.address}
          </Text>
          <Text style={{color: '#34495E', fontSize: 12}}>
            <Clock /> {dataItem.distance}
          </Text>
          <View style={{flexDirection: 'row'}}>
            {Array.from(Array(dataItem.star)).map((item, index) => (
              <Star key={index} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

export default function SearchRestaurant({navigation}) {
  const [search, setSearch] = useState('');
  const [listData, setListData] = useState(listNearMe2);
  // const [listNearMe, setListNearMe] = React.useState([
  //     {
  //       id: 1,
  //       name: 'Dapur Ijah Restaurant',
  //       address: '13 th Street, 46 W 12th St, NY',
  //       distance: '3 min - 1.1 km',
  //       star: 5,
  //       img: food1,
  //     },
  //     {
  //       id: 2,
  //       name: 'Dapur Ijah Restaurant',
  //       address: '13 th Street, 46 W 12th St, NY',
  //       distance: '3 min - 1.1 km',
  //       star: 5,
  //       img: food1,
  //     },
  //     {
  //         id: 3,
  //         name: 'Hi Ijah Restaurant',
  //         address: '13 th Street, 46 W 12th St, NY',
  //         distance: '3 min - 1.1 km',
  //         star: 5,
  //         img: food1,
  //       },
  //       {
  //         id: 4,
  //         name: 'Ba Ijah Restaurant',
  //         address: '13 th Street, 46 W 12th St, NY',
  //         distance: '3 min - 1.1 km',
  //         star: 5,
  //         img: food1,
  //       },
  //   ]);
  const renderItem = ({item}) => {
    return <ItemRestaurant dataItem={item} />;
  };

  const [items, setItems] = useState(listNearMe2);
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    if (textSearch) {
      setItems(
        listNearMe2.reduce((array, item) => {
          if (item.name.toLowerCase().includes(textSearch.toLowerCase())) {
            array.push({
              name: item.name,
              img: item.img,
              id: item.id,
              address: item.address,
              distance: item.distance,
              star: item.star,
            });
          }
          return array;
        }, []),
      );
    } else {
      setItems(
        listNearMe2.map(item => ({
          name: item.name,
          img: item.img,
          id: item.id,
          address: item.address,
          distance: item.distance,
          star: item.star,
        })),
      );
    }
  }, [textSearch]);
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{width: 20, height: 20, alignSelf: 'center'}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/images/back.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 30,
            paddingLeft: 20,
            marginBottom: 10,
            backgroundColor: '#ECF0F1',
            width: windowWidth - 60,
          }}>
          <Image source={require('../../assets/images/searchf.png')} />
          <TextInput
            style={{flex: 1, marginLeft: 10, fontSize: 14}}
            placeholder="Search"
            // value={search}
            onChangeText={text => setTextSearch(text)}
          />
        </TouchableOpacity>
      </View>

      <Text style={{fontSize: 12, marginBottom: 15}}>
        <Marker /> 9 West 46 Th Street, New York City
      </Text>

      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={items}
        renderItem={renderItem}
      />
    </View>
  );
}
