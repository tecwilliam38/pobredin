import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const HeaderScreen = () => {
    const user = require('../../../assets/perfil.png')
    const { header, userImage, headerSrc } = Styles;
    return (
        <>
            <View style={header}>
                <Image style={userImage} source={user} resizeMode="cover" />
                <TextInput style={headerSrc} placeholder='Pesquisar' />
                <AntDesign name="wechat" size={40} color="#333333" />
            </View>
        </>
    )
}
const Styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '98%',
        marginTop: 20,
        height:'8%',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 2,
        backgroundColor: '#f3f2ef',
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 50,
        borderColor: "#ccc",
        borderWidth: 2,
    },
    headerSrc: {
        backgroundColor: "#fff",
        width: '70%',
        height: 40,
        borderRadius: 20,
        paddingLeft: 10
    },
})

export default HeaderScreen