import React from 'react';
import { View, Text } from 'react-native';
import { ProductList, ProductDetails, ShopPage, Profile, ProductAllPage } from '../screens';

import { AntDesign, Ionicons,Feather } from '@expo/vector-icons';
import { BottomFabBar } from 'rn-wave-bottom-bar';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const tabBarIcon = (IconComponent, iconName) => ({color, size }) => (
  <IconComponent name={iconName} size={size} color={color} />
);

const generateScreen = (screenName) => () => (
  <View>
    <Text>{screenName}</Text>
  </View>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false,
                      tabBarActiveTintColor: 'tomato',
                      tabBarActiveBackgroundColor: '#FF844B',
                      tabBarInactiveBackgroundColor: 'red',
                    }}

      tabBar={(props) => (<BottomFabBar
                                        mode={'square' | 'default'}
                                        isRtl={false}
                                        focusedButtonStyle={{shadowColor: '#000',
                                                            shadowOffset: {
                                                                              width: 0,
                                                                              height: 7,
                                                                            },
                                                            shadowOpacity: 0.41,
                                                            shadowRadius: 9.11,
                                                            elevation: 14,
                                                            }}

                                        bottomBarContainerStyle={{// position: 'absolute',
                                                                  bottom: 0,
                                                                  left: 0,
                                                                  right: 0,
                                                                }}
                                        {...props}
                                      />
                                    )}>
                                      

      <Tab.Screen options={{tabBarIcon: tabBarIcon(AntDesign, 'home'),}}
                  name="ProductList"
                  component={ProductList}/>


      <Tab.Screen name="ProductDetails"
                  component={ProductDetails}
                  options={{tabBarButton: () => null, }}/>



      <Tab.Screen options={{tabBarIcon: 
                                        tabBarIcon(Ionicons, 'newspaper-outline'), 
                                        tabBarActiveBackgroundColor: '#FF844B',
                                        tabBarActiveTintColor: 'tomato',
                          }}
                  name="ProductAllPage"
                  component={ProductAllPage}/>



      <Tab.Screen options={{ tabBarIcon: tabBarIcon(Feather, 'shopping-cart') }}
                  name="ShopPage"
                  component={ShopPage}/>


      <Tab.Screen options={{ tabBarIcon: tabBarIcon(AntDesign, 'user') }}
                  name="Profile"
                  component={Profile}/>

      
    </Tab.Navigator>
  );
};

export default Tabs;
