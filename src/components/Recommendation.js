import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import data from "../utils/data"
import styles from "../constants/styles"




const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


const Recommendation = (props) => {
  const navigation = useNavigation();

  const handleButton = (item) => {
    navigation.navigate("ProductDetails", {
      data: item
    })
  }

  const [productData, setProductData] = useState(shuffleArray([...data]));

  return (
    <View style={styles.recommendationContainer}>
      <View style={styles.seeAllContainer}>        
        <Text style={styles.categoriesText}>Recommendation</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>

      <View style={styles.flatListContainer}>
        <FlatList data={productData}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  alwaysBounceHorizontal={false}
                  snapToAlignment={'start'} 
                  decelerationRate={'fast'} 
                  keyExtractor={(item) => item.id}
                  renderItem={({item}) => {
                    const title = item.title
                    const image = item.image
                    // const popularTitle = item.popular_title
                    const graMl = item.gram_ml
                    const price = item.price

                    return (
                      <View style={styles.productCategoryView}>
                        <Pressable style={({pressed}) => [{transform: [{translateY: pressed ? 3 : 0}]}, styles.buttonContainer]}
                                   onPress={()=> handleButton(item)}>
                          <Image style={{width:80, height:80, resizeMode:"center"}}
                                 source={image}/>

                          <Text style={styles.popularProductsTitleText}>{title}</Text>
                          <Text style={styles.popularProductsGramText}>{graMl}</Text>

                          <View style={styles.priceImageContainer}>
                            <Text style={styles.priceText}>${price}</Text>
                            <FontAwesome5 name="shopping-cart" size={30} color="#FF844B" />
                          </View>
                        </Pressable>
                      </View>
                    )
                  }}/>
      </View>
    </View>
  )
}

export default Recommendation
