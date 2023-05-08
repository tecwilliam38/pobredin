import { StyleSheet } from "react-native";

const CssLocal = StyleSheet.create({
    touchableStyle:{
        marginVertical:5,
    },
    gridStyle:{
        flex:3,
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around'
    },
    cardBody:{
        justifyContent:'center',
        marginTop:20,
        alignItems:'center',
        height:'60%',
        borderColor:"#ccc",
        borderWidth:2,
    },
    userImage:{
        width:45,
        height:45,
        borderRadius:50,
        borderColor:"#ccc",
        borderWidth:2,
    },
    headerSrc:{
        backgroundColor:"#fff",
        width:'70%',
        height:40,
        borderRadius:20,
        paddingLeft:10
    },
})

export {CssLocal};