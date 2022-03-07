import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";

const Home = ({navigation}) => {
  return (
    <View style={styles.HomeScreen_Container}>
      <Text style={styles.Home_Head}>Quizzzy</Text>
      <Image
        resizeMode="cover"
        source={require("../assets/quiz.jpg")}
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

const styles = StyleSheet.create({
  HomeScreen_Container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  Home_Head: {
    fontSize: 40,
    color: "#193367",
  },
  Home_Logo: {
    width: "100%",
    height: 400,
    borderRadius: 20,
    marginVertical: 20,
  },
  Start_button: {
    backgroundColor:"#193367",
    width:"100%",
    height:100,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  Start_Text:{
    fontSize: 30,
    color:"#fff"
  }
});
