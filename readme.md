npx expo install react-native-elements
npx expo install expo-checkbox  
npx expo install react-native-reanimated
npm install @rneui/themed

npm install @reduxjs/toolkit react-redux @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context axios expo-location @react-navigation/bottom-tabs @react-native-async-storage/async-storage firebase @expo/vector-icons react-native-maps

 npx expo install react-native-gesture-handler
 npx expo install expo-linear-gradient
 npx expo install react-native-keyboard-aware-scroll-view


 ------------------------------------------------------- TABBAR SCREEN

import React from 'react';


import {ProductList, ProductDetails, ShopPage,Profile, ProductAllPage} from "../screens/index"

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{
                      headerShown:false,
                      tabBarShowLabel:false,
                      tabBarStyle:{backgroundColor:'#F5F7F8', }}}>
                        

    <Tab.Screen name='ProductList' 
                component={ProductList}
                options={{tabBarIcon:({focused})=>(<AntDesign name="home" 
                                                              size={30} 
                                                              color={focused ? "tomato" : "gray"} />)}}/>      


    <Tab.Screen name='ProductDetails'
                  component={ProductDetails}
                  options={{ tabBarButton: () => null }}/>


    <Tab.Screen name='ProductAllPage' 
                component={ProductAllPage}
                options={{tabBarIcon:({focused})=>(<Ionicons name="newspaper-outline" 
                                                             size={30} 
                                                             color={focused ? "tomato" : "gray"} />)}}/>      


    <Tab.Screen name='ShopPage' 
                component={ShopPage}
                options={{tabBarIcon:({focused})=>(<Feather name="shopping-cart" 
                                                            size={30} 
                                                            color={focused ? "tomato" : "gray"} />)}}/>      


    
    <Tab.Screen name='Profile' 
                component={Profile}
                options={{tabBarIcon:({focused})=>(<AntDesign name="user" 
                                                              size={30} 
                                                              color={focused ? "tomato" : "gray"} />)}}/>      


</Tab.Navigator>
  );
}

export default Tabs;

---------------------------------------------------- 2.tabbar animated
import React from 'react';
import { View } from 'react-native';

import { ProductList, ProductDetails, ShopPage, Profile, ProductAllPage } from '../screens';


import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#F5F7F8',
          marginVertical: 10,
          marginHorizontal: 10,
          borderRadius: 30,
        },
      }}>
        
      <Tab.Screen
        name="ProductList"
        component={ProductList}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 45,
              height: 45,
              borderRadius: 25,
              backgroundColor: focused ? 'tomato' : 'transparent',
            }}>
              <AntDesign name="home" size={30} color={focused ? 'white' : 'gray'} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ tabBarButton: () => null }}
      />

      <Tab.Screen
        name="ProductAllPage"
        component={ProductAllPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: focused ? 'tomato' : 'transparent',
            }}>
              <Ionicons name="newspaper-outline" size={30} color={focused ? 'white' : 'gray'} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ShopPage"
        component={ShopPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: focused ? 'tomato' : 'transparent',
            }}>
              <Feather name="shopping-cart" size={30} color={focused ? 'white' : 'gray'} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: focused ? 'tomato' : 'transparent',
            }}>
              <AntDesign name="user" size={30} color={focused ? 'white' : 'gray'} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
};

export default Tabs;
//---------------------------------------------------------- efsane animated bottom tabbar
import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { BottomFabBar } from 'rn-wave-bottom-bar';
import { ProductList, ProductDetails, ShopPage, Profile, ProductAllPage } from '../screens';

const Tab = createBottomTabNavigator();

const tabBarIcon = (iconName) => ({ focused, color, size }) => (
  <AntDesign name={iconName} size={size} color={color} />
);

const generateScreen = (screenName) => () => (
  <View>
    <Text>{screenName}</Text>
  </View>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5F0B65',
        tabBarActiveBackgroundColor: '#5F0B65',
        tabBarInactiveBackgroundColor: 'red',
      }}
      tabBar={(props) => (
        <BottomFabBar
          mode={'square' | 'default'}
          isRtl={false}
          // Add Shadow for active tab bar button
          focusedButtonStyle={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
          }}
          // - You can add the style below to show screen content under the tab-bar
          // - It will make the "transparent tab bar" effect.
          bottomBarContainerStyle={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          {...props}
        />
      )}
    >
      <Tab.Screen
        options={{
          tabBarIcon: tabBarIcon('aliwangwang-o1'),
        }}
        name="ProductList"
        component={ProductList}
      />

      <Tab.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          tabBarButton: () => null, // This hides the tab but keeps it in the navigator
        }}
      />

      <Tab.Screen
        options={{
          tabBarIcon: tabBarIcon('rocket1'),
          tabBarActiveBackgroundColor: '#45014A',
          tabBarActiveTintColor: 'purple',
        }}
        name="ProductAllPage"
        component={ProductAllPage}
      />

      <Tab.Screen
        options={{ tabBarIcon: tabBarIcon('Trophy') }}
        name="ShopPage"
        component={ShopPage}
      />

      <Tab.Screen
        options={{ tabBarIcon: tabBarIcon('wallet') }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
//----------------------------------------------------"efsane bottom tab "DETAYLARI"
yukarıdaki "efsane animated kaynak:
https://github.com/Jm-Zion/rn-wave-bottom-bar?tab=readme-ov-file

importları:
npm install rn-wave-bottom-bar --save
//----------------------------------------------------


react-native-svg
react-native-redash
expo-blur
