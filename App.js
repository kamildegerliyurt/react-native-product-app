import React from 'react'

import Tabs from './src/navigation/Tabs';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

const Stack = createNativeStackNavigator()



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>

          <Stack.Screen name='Tabs' component={Tabs}/>
  
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

