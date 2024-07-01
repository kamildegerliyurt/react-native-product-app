import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from "../constants/styles"

import {NamePopular, PopularProductsItem} from "../components/index"



const ProductAllPage = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.productAllPageContainer}>




        <NamePopular />

        <PopularProductsItem />




        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default ProductAllPage

