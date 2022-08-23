/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/SignUp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import FlexBox from '../screens/FlexBox';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import MyListScreen from '../screens/MyListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PaymentScreen from '../screens/ProfileScreen/PaymentScreen';
import ChangePWScreen from '../screens/ProfileScreen/ChangePWScreen';
import CreditScreen from '../screens/ProfileScreen/CreditScreen';
import PaypalScreen from '../screens/ProfileScreen/PaypalScreen';
import VoucherScreen from '../screens/ProfileScreen/VoucherScreen';
import UpdateInfor from '../screens/UpdateInfor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyProfileScreen from '../screens/ProfileScreen/MyProfileScreen';
import EditProfileScreen from '../screens/ProfileScreen/EditProfileScreen';
import SplashScreen from '../screens/SplashScreen';
import EditPaypal from '../screens/ProfileScreen/EditPaypal';
import SearchRestaurant from '../screens/ProfileScreen/SearchRestaurant';

//NOTES: File này là settings của navigation

const Tab = createBottomTabNavigator(); //NOTES: Khai báo tabbar
const Stack = createNativeStackNavigator(); //NOTES: Khai báo stack

const Tabbar = () => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('user').then(user => setUsername(user));
  });
  console.log(' User ' + username);
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                style={[
                  homeStyle.iconStyle,
                  {tintColor: focused ? '#D35400' : '#00000080'},
                ]}
                source={require('../assets/images/store.png')}
              />
              // <Text>{username}</Text>
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                style={[
                  homeStyle.iconStyle,
                  {tintColor: focused ? '#D35400' : '#00000080'},
                ]}
                source={require('../assets/images/order.png')}
              />
            ),
          }}
          name="Order"
          component={OrderScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                style={[
                  homeStyle.iconStyle,
                  {tintColor: focused ? '#D35400' : '#00000080'},
                ]}
                source={require('../assets/images/list.png')}
              />
            ),
          }}
          name="MyList"
          component={MyListScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                style={[
                  homeStyle.iconStyle,
                  {tintColor: focused ? '#D35400' : '#00000080'},
                ]}
                source={require('../assets/images/user.png')}
              />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
          // initialParams={{username: username}}
        />
      </Tab.Navigator>
    </View>
  );
};
export default function MainNavigation() {
  //NOTES: cái này là Navigation của app
  //gồm có tabbar và các màn hình ngoiaf tabbar
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={MainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          headerShown={true}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={SignUp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="FoodDetailScreen"
          component={Tabbar}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Payment"
          component={PaymentScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ChangePass"
          component={ChangePWScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Credit"
          component={CreditScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Paypal"
          component={PaypalScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Voucher"
          component={VoucherScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="UpdateInfor"
          component={UpdateInfor}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MyProfile"
          component={MyProfileScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EditProfile"
          component={EditProfileScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SearchRes"
          component={SearchRestaurant}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const homeStyle = StyleSheet.create({
  icons: {
    width: 20,
    height: 20,
  },
});
