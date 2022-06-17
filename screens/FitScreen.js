import React ,{ Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
  } from "react-native";

export default class LoginScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.threerectangle} >
          <TouchableOpacity 
          style={styles.min}
          onPress={() => this.signInWithGoogleAsync()}
          >
            <Text style={styles.minText}>3 Min</Text>
            <Text style={styles.minText}>SHORT AND SWEET</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fiverectangle} >
          <TouchableOpacity style={styles.min}>
            <Text style={styles.minText}>5 Min</Text>
            <Text style={styles.minText}>SHORT AND SWEET</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tenrectangle} >
          <TouchableOpacity style={styles.min}>
            <Text style={styles.minText}>10 Min</Text>
            <Text style={styles.minText}>SHORT AND SWEET</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0096FF'
  },
  threerectangle: {
    height: 80,
    width: 240,
    paddingLeft: 25,
    backgroundColor: 'salmon', 
    top: '7%',
    left: '10%',
  },
  fiverectangle: {
    height: 80,
    width: 240,
    paddingLeft: 25,
    backgroundColor: 'salmon', 
    top: '23%',
    left: '20%',
  },
  tenrectangle: {
    height: 80,
    width: 240,
    paddingLeft: 25,
    backgroundColor: 'salmon', 
    top: '40%',
    left: '10%',
  },
  min: {
    top: '15%',
    color: 'white',
  },
  minText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});
