import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Firebase
import { collection, getDocs } from "firebase/firestore";
import { getAuth, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../Connection/index'

const HeaderScreen = ({ navigation }) => {

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigation.navigate('Login')
        }).catch((error) => {
            console.log(error);
            alert(error.message)
        });
    }

    const user = require('../../../assets/perfil.png')
    const { header, userImage, headerSrc } = Styles;
    return (
        <>
            <View style={header}>
                <TouchableOpacity onPress={handleSignOut}>
                    <Image style={userImage} source={user} resizeMode="cover" />
                </TouchableOpacity>
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
        height: '8%',
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