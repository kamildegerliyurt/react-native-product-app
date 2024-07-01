import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../constants/styles";


const ShopPage = ({ route }) => {
  //------------------------------------------------
  const { title, price, image, detail } = route.params;
  const handlePlusIcon = require("../../assets/images/plusicon.png");
  const handleMinusIcon = require("../../assets/images/minusicon.png");
  //------------------------------------------------
  const [number, setNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price);
  //------------------------------------------------
  const handlePlus = () => {
    if (number < 99) {
      setNumber(number + 1);
      setTotalPrice((number + 1) * price);
    }
  };
  //------------------------------------------------
  const handleMinus = () => {
    if (number > 0) {
      setNumber(number - 1);
      setTotalPrice((number - 1) * price);
    }
  };
  //------------------------------------------------


  return (
    <LinearGradient colors={['#FFFFFF','#E6F2E6', '#CCEBCC', '#B3E3B3', '#99DC99']}
                    style={{ flex: 1 }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >

      <SafeAreaView style={styles.shopPageContainer}>

        <Image source={image} style={styles.shopPageImage} />
        <Text style={styles.shopPageTitle}>{title}</Text>
        <Text style={styles.shopPageDetail}>{detail}</Text>


       <View style={styles.plusAndPriceContainer}>

          <View style={styles.priceContainer}>
            <Pressable onPress={handleMinus}>
              <Image style={styles.imagePlusMinus} source={handleMinusIcon} />
            </Pressable>

            <Text style={styles.shopPageEach}>{number}</Text>

            <Pressable onPress={handlePlus}>
              <Image style={styles.imagePlusMinus} source={handlePlusIcon} />
            </Pressable>
          </View>

          <Text style={styles.shopPagePrice}>Price: ${totalPrice.toFixed(2)}</Text>


       </View>




       <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3: 0}]},styles.linearButtonContainer]}>
        <LinearGradient  colors={["#00CB75","#00CB75"]}
                            style={styles.linearButtonContainer}
                            start={{ y: 1, y: 1 }}
                            end={{ x: 0, y: 0 }}>
                             
                    <Text style={styles.addToCartText}> Buy Now</Text>
            </LinearGradient>
        </Pressable>



        




      </SafeAreaView>
    </LinearGradient>
  );
};

export default ShopPage;
