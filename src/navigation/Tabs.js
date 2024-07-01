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
