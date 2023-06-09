import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { CssMaster } from '../Styles'
import { CssLocal } from './style'

// Components
import HeaderScreen from '../Components/Header';

const VagasScreen = ({ navigation }) => {
    const { bgStyle, button, buttonText } = CssMaster;
    const { touchableStyle, gridStyle, cardBody } = CssLocal;
    const bg = require('../../assets/background.png')
    return (
        <>
            <View style={bgStyle}>
                <HeaderScreen />
                <View style={gridStyle}>
                    <View style={cardBody}>
                        <Text style={[buttonText,{textAlign:"center", color:"#000"}]}>Vagas disponíveis</Text>
                        <TouchableOpacity
                            style={touchableStyle}
                            onPress={() => navigation.navigate('Home')}>
                            <LinearGradient
                                colors={["#48F10E", "#078716", "#093203"]}
                                style={button}
                            >
                                <Text style={buttonText}>Voltar</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={gridStyle}></View>
                <View style={gridStyle}></View>
            </View>
        </>
    )
}

export default VagasScreen