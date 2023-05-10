import { StyleSheet  } from "react-native";

const CssLocal = StyleSheet.create({
    touchableStyle: {
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollStyle:{
        flex: 3,
        width: '100%',
        backgroundColor: '#fff',
    },
    bodyStyle: {
        // flex: 1,
        width: '100%',
        backgroundColor: '#555',
        justifyContent:'space-between',    
        borderBottomColor: '#000',
        borderWidth: 1,
    },
    gridStyle: {
        flex:1,
        flexDirection: 'row',
        marginVertical: 5,
        // height:'50%',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        // borderColor:'#000',
        // borderWidth:1,
    },
    userStyle: {
        flex: 1,
        marginBottom:10,
        width: '100%',
        // paddingVertical:10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    cardBody: {
        justifyContent: 'space-around',
        // marginVertical: 5,
        // alignItems: 'center',
        // height: '70%',
        width: '100%',
        borderRadius: 20,
        // borderColor:'#000',
        // borderWidth:1,
    },
    cardStyle: {
        width: '95%',
        height: '105%',
        borderRadius: 20,
    },
    cardText: {
        position: 'absolute',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        textShadowColor:"#000",
        textShadowOffset:{width:0, height:5},
        textShadowRadius:5,
        elevation:4,
        justifyContent: 'center',
    },
    userImage: {
        width: 95,
        height: 95,
        borderRadius: 50,
        // borderColor: "#ccc",
        // borderWidth: 2,
    },
    imageBgStyle:{
        width:'100%', 
        alignItems:'center', 
        justifyContent:'center', 
        height:200
    },
    headerSrc: {
        backgroundColor: "#fff",
        width: '70%',
        height: 40,
        borderRadius: 20,
        paddingLeft: 10
    },
})

export { CssLocal };