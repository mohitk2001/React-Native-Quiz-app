import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Questions from './Question';
const Quiz = () => {
   console.log(Questions) 
  
   
    
  return (
    <View style={styles.Quiz_Component}>
      <Text style={styles.Quiz_Head}>Welcome</Text>
      <View>

      </View>
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
    }
})