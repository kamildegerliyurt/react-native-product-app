import NamePopular from "../components/NamePopular";
import {COLORS} from "../constants/color"
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  productListContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:COLORS.white,
    marginTop:30,
  },
  topContainer: {
    width:"100%",
    paddingHorizontal:5,
    backgroundColor:COLORS.creamOrange,
    paddingVertical:10,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
    
  
  },
  handleContainer: {
    flexDirection:"row",
  },
  handleText: {
    textAlign:"center",
    paddingTop:5,
    paddingLeft:5,
    fontSize:16,
    fontWeight:"bold",
    color:COLORS.white,
  },
  nameContainer: {
    padding:5,
  },
  nameText: {
    fontSize:18,
    fontWeight:"bold",
    color:COLORS.white,
  },
  searchBarContainer: {
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    paddingRight:5,
  },
  textInputContainer: {
    alignItems:"center",
    justifyContent:"center",
    width:"90%",
    paddingVertical:6,
    textAlign:"center",
    borderRadius:10,
    backgroundColor:COLORS.white,
    fontSize:16,
    fontWeight:"bold",
    alignSelf:"flex-start",
  },
  categoriesContainer: {
    marginTop:5,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },
  seeAllContainer: {
    flexDirection:"row",
    width:"100%",
    alignItems:"center",
    justifyContent:"space-between",
  
  },
  categoriesText: {
    fontSize:20,
    fontWeight:"bold",
    paddingLeft:5,

  },
  seeAllText: {
    fontSize:16,
    fontWeight:"bold",
    color:COLORS.creamOrange,
    paddingHorizontal:5,
    
  },
  flatListContainer: {
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
  },
 
  categoryView: {
    width:140,
    margin:7,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:COLORS.peach,
    borderRadius:10,
    
  },
  titleText: {
    textAlign:"center",
    margin:15,
    textAlign:"center",
    borderRadius:10,
    fontSize:16,
    fontWeight:"bold",
    color:COLORS.dimGray,
  },
  buttonContainer: {
    alignItems:"center",
    justifyContent:"center",
  },
  popularProductsContainer: {
    marginTop:5,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },
  productCategoryView: {
        width:160,
        margin:10,
        backgroundColor:COLORS.peach,
        borderRadius:10,
  },
  productTitleText:{
        textAlign:"center",
        margin:15,
        width:"40%",
        textAlign:"center",
        borderRadius:10,
        fontSize:16,
        fontWeight:"bold",
        color:COLORS.dimGray,
  },
    popularProductsTitleText: {
      width:"100%",
      marginTop:5,
      paddingLeft:5,
      fontSize:16,
      fontWeight:"bold",
      color:COLORS.black,
      
    },
    popularProductsGramText: {
      width:"100%",
      paddingLeft:5,
      fontSize:16,
      fontWeight:"bold",
      color:COLORS.dimGray,

    },
    priceImageContainer: {
      width:"100%",
      paddingVertical:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingRight:10,
    },
    priceText: {
      fontSize:20,
      fontWeight:"bold",
      color:COLORS.black,
      paddingLeft:5,
    },
    recommendationContainer: {
          marginTop:5,
          width:"100%",
          alignItems:"center",
          justifyContent:"center",
    },
    productAllPageContainer: {
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:COLORS.white,
    },
    namePopularContainer:{
    width:"100%",
    paddingHorizontal:20,
    backgroundColor:COLORS.creamOrange,
    paddingVertical:10,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
    top: -25 
    },
    namePopularTopContainer: {
      width:"75%",
      alignItems:"center",
      justifyContent:"space-between",
      flexDirection:"row",
    },
    namePopularTopText: {
      fontSize:20,
      fontWeight:"bold",
      color:COLORS.white
    },
    backProductListContainer: {
      alignItems:"center",
      justifyContent:"center",
    },
    popularProductsItemContainer: {
      flex:1,
      width:"100%",
      alignItems:"center",
      justifyContent:"center",
    },
    PopularProductsCategoryView: {
      width:120,
      margin:5,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:COLORS.peach,
      borderRadius:10,
      
      
    },
    profileContainer: {
     flex:1,
     alignItems:"center",
     justifyContent:"center",
     backgroundColor:COLORS.white,
    },
    profileImage: {
      width:200,
      height:200,
      resizeMode:"cover",
    },
    profileText: {
      textAlign:"center",
      fontSize:30,
      fontWeight:"bold",
      padding:5,
      color:COLORS.dimGray,
    },
    productDetailsContainer: {
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    productDetailsTopContainer: {
      flex:1,
      width:"100%",
      paddingHorizontal:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
    },
   
    productDetailsImageContainer: {
      flex:1,
      width:"100%",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:10,
      paddingVertical:50,
      marginVertical:10,
      borderColor:COLORS.creamOrange
    },
    productDetailsImage: {
      width:150,
      height:150,
      resizeMode:"center",
    },
    productDetailsTextContainer: {
      flex:4,
      width:"100%",
      alignItems:"center",
      justifyContent:"center",
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      paddingVertical:30,
      backgroundColor:COLORS.white,
    },
    titlePriceTextContainer: {
      width:"95%",
      alignItems:"center",
      justifyContent:"space-between",
      flexDirection:"row",
      paddingHorizontal:10,
    },
    productDetailsTitleText: {
      fontSize:25,
      fontWeight:"bold",
      color:COLORS.black,
    },
    productDetailsPriceText: {
      fontSize:25,
      fontWeight:"bold",
      color:COLORS.green,
    },
    gramMlContainer: {
      width:"95%",
      paddingHorizontal:10,
      marginVertical:5,

    },
    gramMlText: {
      fontSize:18,
      fontWeight:"bold",
      color:COLORS.dimGray,
    },
    detailContainer: {
      width:"95%",
      padding:10,
      alignItems:"center",
      justifyContent:"center",
    },
    productDetailsDetailText: {
      fontSize:16,
      fontWeight:"bold",
      color:COLORS.dimGray,
      textAlign:"center",
    },
    linearButtonContainer: {
      width:"95%",
      alignItems:"center",
      justifyContent:"center",
      paddingVertical:15,
      borderRadius:25,
      
    },
    addToCartText: {
      fontSize:20,
      fontWeight:"bold",
      color:COLORS.white,
    },
    shopPageContainer: {
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    shopPageImage: {
      width:200,
      height:200,
      resizeMode:"center",
    },
    shopPageTitle: {
      fontSize:20,
      fontWeight:"bold",
      color:COLORS.black,
      marginVertical:5,
      textAlign:"center",
    },
    shopPageDetail: {
      fontSize:16,
      fontWeight:"bold",
      color:COLORS.dimGray,
      marginVertical:5,
      textAlign:"center",
    },
    priceContainer: {
      width:"40%",
      alignItems:"center",
      justifyContent:"space-around",
      flexDirection:"row",
      borderRadius:20,
      padding:10,
     
    },
    imagePlusMinus: {
      width:40,
      height:40,
      resizeMode:"cover",
    },
    shopPagePrice: {
      fontSize:20,
      fontWeight:"bold",
      color:COLORS.black,
      textAlign:"center",
    },
    plusAndPriceContainer: {
      width:"100%", 
      alignItems:"center",
      justifyContent:"space-between", 
      flexDirection:"row",
      paddingHorizontal:10,
    },
    shopPageEach: {
      fontSize:20,
      fontWeight:"bold",
      color:COLORS.black,
      textAlign:"center",
    },
    buyContainer: {
      width:"100%",
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      paddingVertical:10,
    },
    buyButtonContainer: {
      width:"95%",
      alignItems:"center",
      justifyContent:"center",
      paddingVertical:15,
      borderRadius:25,
    }



});

export default styles;
