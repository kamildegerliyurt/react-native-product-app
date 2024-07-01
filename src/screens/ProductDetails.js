import { StyleSheet, Text, View, Image, Pressable,} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from "../constants/styles";



const ProductDetails = ({ route }) => {
 //----------------------------------
 const total = route.params.data;
 const title = total.title;
 const price = total.price;
 const image = total.image;
 const gramMl = total.gram_ml;
 const detail = total.detail;
 //----------------------------------
 const [checked, setChecked]= useState(false);

 const handleHeartPress = () => {
    setChecked(!checked);
 }
 //--------------------------------------------
 const navigation = useNavigation();

 const backButton = () => {
   navigation.navigate("ProductList");
 }

 const addToCart = () => {
   navigation.navigate("ShopPage", { 
     total, title, price, image, gramMl, detail 
   });
 }
 //--------------------------------------------

  return (
    <LinearGradient colors={['#FFA1AB','#FFA3AB',"#FE8D97","#FC7F8B","#FD737E",'#8B0000']}
                    style={{flex:1,}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>

      <SafeAreaView style={styles.productDetailsContainer}>

        <View style={styles.productDetailsTopContainer}>

          <Pressable style={({pressed})=> [{transform: [{translateX: pressed ? 1 : 5}]}]} 
                    onPress={backButton}>
            <MaterialCommunityIcons name="arrow-left-bold-box" size={50} color="white" /> 
          </Pressable>

          <CheckBox checked={checked}
                    checkedIcon="heart"
                    uncheckedIcon="heart-o"     
                    checkedColor='red'
                    uncheckedColor='white'
                    size={30}  
                    onPress={handleHeartPress}/>  
        </View>

        <View style={styles.productDetailsImageContainer}>   
          <Image style={styles.productDetailsImage} source={image}/>
        </View>

        <View style={styles.productDetailsTextContainer}>

          <View style={styles.titlePriceTextContainer}>
            <Text style={styles.productDetailsTitleText}>{title}</Text>
            <Text style={styles.productDetailsPriceText}>${price}</Text>
          </View>

          <View style={styles.gramMlContainer}>
            <Text style={styles.gramMlText}>{gramMl}</Text>
          </View>

          <View style={styles.detailContainer}>
            <Text style={styles.productDetailsDetailText} numberOfLines={10} ellipsizeMode='tail'>{detail}</Text>
          </View>

          <LinearGradient colors={["#FB606D",'#FD737E', '#FC7F8B', '#FE8D97', '#FFA3AB', '#FFA1AB']}
                          style={styles.linearButtonContainer}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}>
            <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3: 0}]}]}
                       onPress={addToCart}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
            </Pressable>
          </LinearGradient>

        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default ProductDetails
