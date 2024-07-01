import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'


import styles from "../constants/styles"


import {NameItem, Categories, PopularProducts, Recommendation} from "../components/index"

const ProductList = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.productListContainer}>

      


        <NameItem />

  
        <Categories />


        <PopularProducts />


        <Recommendation />





      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default ProductList

