import { StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from "../constants/styles"

import { MaterialCommunityIcons } from '@expo/vector-icons';


import { useNavigation } from '@react-navigation/native';


const NamePopular = (props) => {
//------------------------------------
const navigation = useNavigation();


const handleBackButton = ()=> {
    navigation.navigate("ProductList")
}
//------------------------------------


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.namePopularContainer}>



            <View style={styles.namePopularTopContainer}> 

                <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.backProductListContainer]}
                           onPress={handleBackButton}>
                  <MaterialCommunityIcons name="arrow-left-bold-box" size={50} color="white" />     
                </Pressable>  

                <Text style={styles.namePopularTopText}>Popular products</Text>

            </View>



        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default NamePopular

