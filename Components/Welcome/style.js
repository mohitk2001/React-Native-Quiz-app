import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
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
})
export default styles