import { StyleSheet, Text, View,FlatList, Image, Pressable } from 'react-native'
import React from 'react'

import styles from "../constants/styles"

import { useState, useEffect } from 'react'
// import axios from 'axios'


import data from "../utils/data"


import { useNavigation } from '@react-navigation/native'


const Categories = (props) => {
// //------------------------------
// const [productData, setProductData]= useState([])
// //------------------------------

// useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//       .then((res)=> {
//           setProductData(res.data)
//       })
//   }, [])
// //------------------------------
const navigation = useNavigation();
//------------------------------
const handleButton = (item)=> {
    navigation.navigate("ProductDetails",
        {
            data: item
        }
    )
}
// //------------------------------
const [productData, setProductData]= useState([...data])
// const [productData, setProductData]= useState(data)




  return (
    <View style={styles.categoriesContainer}>

      <View style={styles.seeAllContainer}>        
        <Text style={styles.categoriesText}>Categories</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>


      <View style={styles.flatListContainer}>
        <FlatList data={productData}
                  horizontal
                  showsHorizontalScrollIndicator= {false}
                  alwaysBounceHorizontal={false}
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

                        <View style={styles.categoryView}>
                            <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.buttonContainer]}
                                       onPress={()=> handleButton(item)}
                                       >
                                <Image style={{width:80, height:80, resizeMode:"center"}}
                                       source={image}/>
                                <Text style={styles.titleText} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
                            </Pressable>
                        </View>
                    )
                  }}/>
      </View>



    </View>
  )
}

export default Categories