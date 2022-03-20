import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";

const Ques = ({ question,index }) => {
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [C, setC] = useState(false);
  const [D, setD] = useState(false);
  useEffect(() => {
   
  }, [index])
  
  return (
    <View>
      <View style={styles.Ques_Box}>
        <Text style={styles.Ques_heading}>{question.Question}</Text>
      </View>
      <View style={styles.options_box}>
        <Text style={styles.option_text}>Choose correct one from these</Text>
        <View style={styles.options}>
          <TouchableOpacity
          onPress={()=>{
            setA(true)
            setB(false)
            setC(false)
            setD(false)
          }}
          >
            <Text style={[styles.option,A?styles.secondStyle:null]}>{question.options.a}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{
            setA(false)
            setB(true)
            setC(false)
            setD(false)
          }}
          >
            <Text style={[styles.option,B?styles.secondStyle:null]}>{question.options.b}</Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>{
            setA(false)
            setB(false)
            setC(true)
            setD(false)
          }}
          >
            <Text style={[styles.option,C?styles.secondStyle:null]}>{question.options.c}</Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>{
            setA(false)
            setB(false)
            setC(false)
            setD(true)
          }}
          >
            <Text style={[styles.option,D?styles.secondStyle:null]}>{question.options.d}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Ques_Box: {
    width: "100%",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#00ccff",
  },
  Ques_heading: {
    fontSize: 25,
  },
  options_box: {
    width: "100%",
    marginTop: 15,
  },
  option_text: {
    fontSize: 20,
  },
  options: {
    marginTop: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "#000066",
    padding: 10,
  },
  option: {
    marginVertical: 5,
    fontSize: 20,
    backgroundColor: "lightgrey",
    padding: 5,
    borderWidth: 1,
  },
  secondStyle:{
      backgroundColor:"#66ffff"
  }
});

export default Ques;
