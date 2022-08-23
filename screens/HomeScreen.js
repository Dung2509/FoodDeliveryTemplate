/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  FlatList,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Marker from '../assets/svg/marker.svg';
import Star from '../assets/svg/star.svg';
import Clock from '../assets/svg/clock.svg';
import React, {useState, useEffect} from 'react';
import Search from '../assets/svg/search.svg';
import ItemType from './ItemType';
const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;
const burgers = require('../assets/images/foodImages/burgers.png');
const food1 = require('../assets/images/foodImages/food1.png');
const pizza = require('../assets/images/foodImages/pizza.png');
const bbq = require('../assets/images/foodImages/bbq.png');
const fruit = require('../assets/images/foodImages/fruit.png');
const sushi = require('../assets/images/foodImages/sushi.png');
const noodle = require('../assets/images/foodImages/noodle.png');
const coffee = require('../assets/images/foodImages/coffee.png');
const burger2 = require('../assets/images/foodImages/burger2.png');
const pocake = require('../assets/images/foodImages/pocake.png');
const chip = require('../assets/images/foodImages/potato.png');

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
const drinkMenu = [
  [
    {title: 'Drink', img: require('../assets/images/drinkImages/coffe.png')},
    {title: 'Drink', img: require('../assets/images/drinkImages/drink1.png')},
  ],
  [
    {title: 'Drink', img: require('../assets/images/drinkImages/drink2.png')},
    {title: 'Drink', img: require('../assets/images/drinkImages/drink3.png')},
  ],
  [
    {title: 'Drink', img: require('../assets/images/drinkImages/drink4.png')},
    {title: 'Drink', img: require('../assets/images/drinkImages/drink5.png')},
  ],
];

const foodMenu = [
  [
    {title: 'Burgers', img: burgers},
    {title: 'Fruit', img: fruit},
  ],
  [
    {title: 'Pizza', img: pizza},
    {title: 'Sushi', img: sushi},
  ],
  [
    {title: 'BBQ', img: bbq},
    {title: 'Noodle', img: noodle},
  ],
];

const cakeMenu = [
  [
    {title: 'Cake', img: require('../assets/images/cakeImages/cake2.png')},
    {title: 'Cake', img: require('../assets/images/cakeImages/cake3.png')},
  ],
  [
    {title: 'Cake', img: require('../assets/images/cakeImages/cake4.png')},
    {title: 'Cake', img: require('../assets/images/cakeImages/cake5.png')},
  ],
  [
    {title: 'Cake', img: require('../assets/images/cakeImages/cake6.png')},
    {title: 'Cake', img: require('../assets/images/cakeImages/cake.png')},
  ],
];

const snackMenu = [
  [
    {title: 'Snack', img: require('../assets/images/snackImages/1.png')},
    {title: 'Snack', img: require('../assets/images/snackImages/2.png')},
  ],
  [
    {title: 'Snack', img: require('../assets/images/snackImages/7.png')},
    {title: 'Snack', img: require('../assets/images/snackImages/4.png')},
  ],
  [
    {title: 'Snack', img: require('../assets/images/snackImages/5.png')},
    {title: 'Snack', img: require('../assets/images/snackImages/6.png')},
  ],
];
const renderItem = ({item}) => {
  return <ItemRestaurant dataItem={item} />;
};

export default function HomeScreen({navigation, setFood, route}) {
  const [listNearMe, setListNearMe] = React.useState([
    {
      id: 1,
      name: 'Dapur Ijah Restaurant',
      address: '13 th Street, 46 W 12th St, NY',
      distance: '3 min - 1.1 km',
      star: 5,
      img: food1,
    },
    {
      id: 2,
      name: 'Dapur Ijah Restaurant',
      address: '13 th Street, 46 W 12th St, NY',
      distance: '3 min - 1.1 km',
      star: 5,
      img: food1,
    },
  ]);

  const [listNearMe2, setListNearMe2] = React.useState([
    {
      id: 1,
      name: 'Dapur Ijah Restaurant',
      address: '13 th Street, 46 W 12th St, NY',
      distance: '3 min - 1.1 km',
      star: 4,
      img: require('../assets/images/drinkImages/image.png'),
    },
    {
      id: 2,
      name: 'Dapur Ijah Restaurant',
      address: '13 th Street, 46 W 12th St, NY',
      distance: '3 min - 1.1 km',
      star: 5,
      img: require('../assets/images/drinkImages/image.png'),
    },
  ]);

  const [listNearMe3, setListNearMe3] = React.useState([
    {
      id: 1,
      name: 'Dapur Ijah Restaurant',
      address: '13 th Street, 46 W 12th St, NY',
      distance: '3 min - 1.1 km',
      star: 4,
      img: require('../assets/images/cakeImages/cake1.png'),
    },
    {
      id: 2,
      name: 'Dapur Ijah Restaurant',
      address: '13 th Street, 46 W 12th St, NY',
      distance: '3 min - 1.1 km',
      star: 5,
      img: require('../assets/images/cakeImages/cake1.png'),
    },
  ]);

  const [listNearMe4, setListNearMe4] = React.useState([
    {
      id: 1,
      name: 'Dapur Ijah Restaurant',
      address: '13 th Street, 46 W 12th St, NY',
      distance: '3 min - 1.1 km',
      star: 4,
      img: require('../assets/images/snackImages/3.png'),
    },
    {
      id: 2,
      name: 'Dapur Ijah Restaurant',
      address: '13 th Street, 46 W 12th St, NY',
      distance: '3 min - 1.1 km',
      star: 5,
      img: require('../assets/images/snackImages/3.png'),
    },
  ]);
  const [idSelected, setIdSelected] = useState(2);
  const listItem = [
    {
      id: 1,
      image: coffee,
      type: 'Drink',
    },
    {
      id: 2,
      image: burger2,
      type: 'Food',
    },
    {
      id: 3,
      image: pocake,
      type: 'Cake',
    },
    {
      id: 4,
      image: chip,
      type: 'Snack',
    },
  ];

  const onSelected = id => {
    setIdSelected(id);
  };
  const HeaderMain = () => {
    return (
      <>
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
          }}>
          <Image source={require('../assets/images/searchf.png')} />
          <TextInput
            style={{flex: 1, marginLeft: 10, fontSize: 14}}
            onFocus={() => navigation.navigate('SearchRes')}
            placeholder="Search"
          />
        </TouchableOpacity>
        <Text style={{fontSize: 12, marginBottom: 15}}>
          <Marker /> 9 West 46 Th Street, New York City
        </Text>
        <View style={styles.listItemType}>
          {listItem.map((item, index) => {
            return (
              <ItemType
                key={index}
                onSelected={onSelected}
                selected={item.id === idSelected}
                {...item}
              />
            );
          })}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{fontWeight: '700', fontSize: 18, color: 'black'}}>
            Food Menu
          </Text>
          <Text style={{fontSize: 12, color: 'black', alignSelf: 'center'}}>
            View all
          </Text>
        </View>
        <View>
          <FlatList
            data={
              idSelected === 1
                ? drinkMenu
                : idSelected === 2
                ? foodMenu
                : idSelected === 3
                ? cakeMenu
                : idSelected === 4
                ? snackMenu
                : null
            }
            horizontal={true}
            style={{maxHeight: (itemWidth / 2) * 2 + 20, marginBottom: 1}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              const lightblue = 'rgba(52,152,219,0.3)';
              const purple = 'rgba(155,89,182,0.3)';
              return (
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: index !== 0 ? 20 : 0,
                  }}>
                  <TouchableOpacity
                    style={{
                      width: itemWidth / 3,
                      height: itemWidth / 3,
                      paddingTop: 10,
                      paddingLeft: 15,
                      borderRadius: 20,
                      backgroundColor: index % 2 === 0 ? lightblue : purple,
                      position: 'relative',
                      marginBottom: 20,
                    }}
                    onPress={() => {
                      navigation.navigate('DetailFood');
                      setFood(item[0].title);
                    }}>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 14,
                        color: 'white',
                      }}>
                      {item[0].title}
                    </Text>
                    <Image
                      source={item[0].img}
                      style={{
                        width: itemWidth / 3 - 20,
                        height: itemWidth / 6,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: itemWidth / 3,
                      height: itemWidth / 3,
                      borderRadius: 20,
                      backgroundColor: index % 2 === 0 ? purple : lightblue,
                      position: 'relative',
                      paddingTop: 10,
                      paddingLeft: 15,
                    }}
                    onPress={() => {
                      navigation.navigate('DetailFood');
                      Alert.alert(item[1].title);
                    }}>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 14,
                        color: 'white',
                      }}>
                      {item[1].title}
                    </Text>
                    <Image
                      source={item[1].img}
                      style={{
                        width: itemWidth / 3 - 20,
                        height: itemWidth / 6,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: '700', fontSize: 18, color: 'black'}}>
              Near me
            </Text>
            <Text style={{fontSize: 12, color: 'black', alignSelf: 'center'}}>
              View all
            </Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#E5E5E5'}}>
      <FlatList
        ListHeaderComponent={HeaderMain}
        keyExtractor={(item, index) => item.id.toString()}
        data={
          idSelected === 1
            ? listNearMe2
            : idSelected === 2
            ? listNearMe
            : idSelected === 3
            ? listNearMe3
            : idSelected === 4
            ? listNearMe4
            : null
        }
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  listItemType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
