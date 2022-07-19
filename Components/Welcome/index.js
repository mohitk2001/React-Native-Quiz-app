import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import styles from "./style.js"
const Home = ({navigation}) => {
  return (
    <View style={styles.HomeScreen_Container}>
      <Text style={styles.Home_Head}>Quizzzy</Text>
      <Image
        resizeMode="cover"
        source={require("../../assets/quiz.jpg")}
        style={styles.Home_Logo}
      />
      <TouchableOpacity style={styles.Start_button}
      onPress={()=>navigation.navigate("Quiz")}
      >
          <Text style={styles.Start_Text}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
