import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


import styles from "../constants/styles"
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';


const NameItem = (props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <SafeAreaView style={styles.topContainer}>

      <View style={styles.handleContainer}>
        <Entypo name="hand" size={24} color="gold" />
        <Text style={styles.handleText}>Hey,</Text>
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Kamil Degerliyurt!</Text>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput style={styles.textInputContainer}
                   placeholder='Search...'
                   placeholderTextColor={"gray"}/>
        <FontAwesome6 name="sliders" size={24} color="white" />
      </View>

    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default NameItem

