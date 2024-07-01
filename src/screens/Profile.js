import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import styles from "../constants/styles"



const Profile = () => {
//-------------------------------
const profile = require("../../assets/images/boyprofile.png")
//-------------------------------

  return (
    <View style={styles.profileContainer}>

      <Image style={styles.profileImage}
             source={profile}/>


      <Text style={styles.profileText}>Profile</Text>

    </View>
  )
}

export default Profile

