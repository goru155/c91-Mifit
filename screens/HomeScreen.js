import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
   
} from "react-native";
export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <View style={styles.titleBar}>
                        <Text style={styles.titleText}>MiFit App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("WeightGain")
                    }>
                       < Text style={styles.routeText}>Gain Weight</Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("LooseWeight")
                    }>
                        <Text style={styles.routeText}>Loose Weight</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StayFit")
                    }>
                        <Text style={styles.routeText}>Maintain fitness</Text>
                        </TouchableOpacity>
                        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "blue"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
});
