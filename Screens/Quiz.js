import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import Questions from './Question';
import Ques from './Ques';
const Quiz = () => {
  const [index,setIndex]=useState(0)
   const Previous=()=>{
    if(index>0){
      setIndex(index-1)
      
    }
    
   }
   const Next=()=>{
    if(index<4){
      setIndex(index+1)
      
    }
  }  
  return (
    <View style={styles.Quiz_Component}>
      <Text style={styles.Quiz_Head}>Welcome</Text>
      <View>
        <Ques question={Questions[index]} index={index}/>
      </View>
      <View style={styles.buttons}>
        <Button title='Previous' onPress={()=>Previous()}/>
        <Button title='Next'  onPress={()=>Next()}/>
      </View>
      <Button
      title='Submit Your Quiz'
      color="#cc3300"
      style={styles.submissionButton}
      />
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    Quiz_Component:{
        width:"100%",
        display:"flex",
        alignItems:"center"
    },
    Quiz_Head:{
        fontSize:40
    },
    buttons:{
      display:"flex",
      flexDirection:"row",
      width:"100%",
      justifyContent:"space-between",
      marginTop:10,
      padding:5
    }
   
})