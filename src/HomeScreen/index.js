import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, useWindowDimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { CssMaster } from '../Styles'
import { CssLocal } from './style'

// Components
import HeaderScreen from '../Components/Header';
import { Image } from 'react-native'
import { ImageBackground } from 'react-native'

const HomeScreen = ({ navigation }) => {
    const { bgStyle } = CssMaster;
    const { touchableStyle, gridStyle, cardBody, cardText, cardStyle, userImage, userStyle, bodyStyle, imageBgStyle } = CssLocal;
    const bg = require('../../assets/background.png')
    const user = require('../../assets/perfil.png');
    const cardImage = require('../../assets/Card.png');
    const cardNotifications = require('../../assets/CardNotification.png');
    const cardVagas = require('../../assets/CardVagas.png')


    return (
        <>
            <View style={bgStyle}>
                <HeaderScreen navigation />
                <SafeAreaView style={{ flex: 1, width: '100%' }}>
                    <ScrollView>
                        <View style={{ bodyStyle, height: useWindowDimensions().height + 150, marginBottom: 50 }}>
                            <View style={userStyle}>
                                <ImageBackground
                                    style={imageBgStyle}
                                    source={require('../../assets/CardHeader.png')}
                                    resizeMode="cover">
                                    <Image style={userImage} source={user} resizeMode='contain' />
                                    <View>
                                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>William Ferreira da Silva</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: '#999' }}>Técnico de suporte em TI na Stefanini Brasil</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={[gridStyle,{marginTop:80}]}>
                                <View style={cardBody}>
                                    <TouchableOpacity style={touchableStyle} onPress={() => navigation.navigate('Profile')}>
                                        <Image source={cardImage} style={cardStyle} resizeMode='contain' />
                                        <Text style={cardText}>Go to Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={gridStyle}>
                                <View style={cardBody}>
                                    <TouchableOpacity style={touchableStyle} onPress={() => navigation.navigate('Notificações')}>
                                        <Image source={cardNotifications} style={cardStyle} resizeMode='contain' />
                                        <Text style={cardText}>Notificações</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={gridStyle}>
                                <View style={cardBody}>
                                    <TouchableOpacity style={touchableStyle} onPress={() => navigation.navigate('Vagas')}>
                                        <Image source={cardVagas} style={cardStyle} resizeMode='contain' />
                                        <Text style={cardText}>Vagas</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={gridStyle}>
                                <View style={cardBody}>
                                    <TouchableOpacity style={touchableStyle} onPress={() => navigation.navigate('Profile')}>
                                        <Image source={cardImage} style={cardStyle} resizeMode='contain' />
                                        <Text style={cardText}>Go to Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={gridStyle}>
                                <View style={cardBody}>
                                    <TouchableOpacity style={touchableStyle} onPress={() => navigation.navigate('MinhaRede')}>
                                        <Image source={cardImage} style={cardStyle} resizeMode='contain' />
                                        <Text style={cardText}>Go to Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[gridStyle,{marginBottom:30}]}>
                                <View style={cardBody}>
                                    <TouchableOpacity style={touchableStyle} onPress={() => navigation.navigate('MinhaRede')}>
                                        <Image source={cardImage} style={cardStyle} resizeMode='contain' />
                                        <Text style={cardText}>Go to Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </>
    )
}

export default HomeScreen