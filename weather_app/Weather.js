import React, { Component } from "react";
import { StyleSheet, Text, View} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from 'prop-types';

const weatherCases = {
  Rain : {
    colors: ['#00c6Fb','#005bea'],
    title: "Raining",
    subtitle: "For more info look outside",
    icon: "weather-rainy"
  },
  Clear:{
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny",
    subtitle: "For more info look outside",
    icon: "weather-sunny"
  },
  Thunderstorm:{
    colors:["#00ECBC", "#304352"],
    title: "Thunderstorm",
    subtitle: "Actually, outside of the house",
    icon: "weather-lightning"  
  },
  Clouds:{
    colors:["#D7D2CC", "#304372"],
    title: "Clouds",
    subtitle: "I know, It's boring",
    icon: "weather-cloudy"  
  },
  Snow:{
    colors:["#7DE2FC", "#B9B6E5"],
    title: "cold",
    subtitle: "Do tou want to build a snowman?",
    icon: "weather-snowy"  
  },
  Drizzle:{
    colors:["#89F7Fe","#66a6FF"],
    title: "Drizzle",
    subtitle: "I like rain",
    icon: "weather-windy"  
  },
  Haze:{
    colors:["#89F7Fe","#66a6FF"],
    title: "Haze",
    subtitle: "Don't know what that is",
    icon: "weather-hail"  
  },
  Mist:{
    colors:["#D7Decc","#304352"],
    title: "Mist",
    subtitle: "mist!",
    icon: "weather-fog"  
  }
}

function Weather({weatherName, temp}){
  return (
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons color = "white" size={144} name={weatherCases[weatherName].icon}/>
        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  lower: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  temp: {
    fontSize: 35,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24,
    marginTop: 10
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
