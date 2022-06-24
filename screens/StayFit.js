import React, { Component } from 'react';
import { Text,
   View,
    SafeAreaView,
    StyleSheet
   } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class StayFit extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.titleText}>Maintain your body fitness </Text>
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
      container: {
          flex: 1
      },
      titleText:{
        color:"blue",
        marginLeft:116,
        marginTop:390,
      }
    })