import React ,{ Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar
  } from "react-native";

import Crunches from '../assets/excercisevideos/Crunches.gif'

export default class WeightGain extends Component {
  render(){
    return(
      <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}>
        <Text style={styles.titleText}>Weight gain</Text>
        <Image 
        source={Crunches}
        style={styles.fit_img} 
        />
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "blue",
    marginLeft: 100
  },
  fit_img: {
    width: 250,
    height: 200,
    marginLeft: 70,
    marginTop: 100
  }
})
