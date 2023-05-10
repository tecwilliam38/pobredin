import { StyleSheet } from "react-native";

const CssMaster = StyleSheet.create({
    title:{
        color:"#FFF",
    },
    bgStyle:{
        flex:1,
        alignItems:"center",
        width:'100%',
        backgroundColor:'#f3f2ef',
        // resizeMode:'cover'
    },
    button:{
        width:"100%",
        padding: 15, 
        alignItems: "center", 
        borderRadius: 15,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18,
        color:"#fff",
    }
})
export {CssMaster};