import { StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard, Pressable, Image, FlatList } from 'react-native'
import React from 'react'


import styles from "../constants/styles"
import { useState, useEffect } from 'react'
import data from "../utils/data"

import { useNavigation } from '@react-navigation/native'


const PopularProductsItem = (props) => {
// //------------------------------
const navigation = useNavigation();
//------------------------------
const otherHandleButton = (item)=> {
  navigation.navigate("ProductDetails",
      {
          data: item
      }
  )
}
// //------------------------------
const [productData, setProductData]= useState([...data])



  return (
    <View style={styles.popularProductsItemContainer}>
       <FlatList data={productData} 
                 numColumns={(3)}         
                 showsVerticalScrollIndicator={false}
                 alwaysBounceVertical={false}
                 snapToAlignment={'start'} 
                 decelerationRate={'fast'} 
                 keyExtractor={(item)=> item.id}
                  // keyExtractor={(item) => item.id.toString()}
                  renderItem={({item})=> {
                    //----------------------------
                        const title = item.title
                        const image = item.image
                   //----------------------------

                    return(

                        <View style={styles.PopularProductsCategoryView}>
                            <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.buttonContainer]}
                                       onPress={()=> otherHandleButton(item)}
                                       >
                                <Image style={{width:80, height:80, resizeMode:"center"}}
                                       source={image}/>
                                <Text style={styles.titleText} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
                            </Pressable>
                        </View>
                    )
                  }}/>
    </View>
  )
}

export default PopularProductsItem

