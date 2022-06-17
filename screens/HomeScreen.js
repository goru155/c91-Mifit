import React ,{ Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform
} from "react-native";

export default class Home extends Component {
  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Mifit</Text>
          </View>
          <TouchableOpacity style={styles.routeCard} 
          onPress={() =>
          this.props.navigation.navigate('GainWeight')
          }>
            <Text style={styles.routeText}>Gain Weight</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard} 
          onPress={() =>
          this.props.navigation.navigate('LoseWeight')
          }>
            <Text style={styles.routeText}>Lose Weight</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.routeCard} 
          onPress={() =>
          this.props.navigation.navigate('StayFit')
          }>
            <Text style={styles.routeText}>Stay Fit</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex: 1
  },
  button:{
    alignContent:"center",
    paddingTop: 50,
    color: 'black'
  },
  droidSafeArea:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 25,
    backgroundColor: '#000080'
  },
  titleBar: { 
    flex: 0.15, 
    justifyContent: "center", 
    alignItems: "center" 
  }, 
  titleText: { 
    fontSize: 40, 
    fontWeight: "bold", 
    color: "white" 
  }, 
  routeText: { 
    fontSize: 35, 
    fontWeight: "bold", 
    color: "black", 
    marginTop: 75, 
    paddingLeft: 30 
  }
})