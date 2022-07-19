import { View, Text,TextInput } from 'react-native'
import React,{useState} from 'react'
import styles from "./QuizLandingStyle"
const QuizLanding = () => {
    const [name, setName] = useState("")
    const [difficulty, setDifficulty] = useState("")
  return (
    <View style={styles.QuizLanding}>
      <Text>Please fill out below field </Text>
    </View>
  )
}

export default QuizLanding