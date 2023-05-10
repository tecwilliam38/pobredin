import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CssMaster } from '../Styles';

// Firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../Components/Connection/index'

const CadastroScreen = ({ navigation }) => {
    const { btnStyle, btnText, containerLogin, userImage, inputStyle, viewStyle, textLead } = styles;
    const [dados, setDados] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { bgStyle } = CssMaster;

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Usuário cadastrado')
                const user = userCredential.user;
                navigation.goBack();
             })
            .catch(error => {
                console.log(error)
                Alert.alert(error.message)
            })
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <ImageBackground
                source={require('../../assets/backgroundlogin.png')}
                style={bgStyle}
                resizeMethod='scale'
            >
                <StatusBar hidden StatusBarStyle='light-content' />
                <View style={containerLogin}>
                    <View style={viewStyle}>
                        <Image
                            source={require('../../assets/perfil.png')}
                            resizeMode='cover' style={userImage} />
                        <Text style={textLead}>E-mail</Text>
                        <TextInput
                            style={inputStyle}
                            placeholderTextColor={"#fff"}
                            placeholder='Digite seu e-mail'
                            keyboardType='email-address'
                            value={email}
                            //   onChange={(e) => setEmail(e.target.value)}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <Text style={textLead}>Senha</Text>
                        <TextInput
                            style={inputStyle}
                            placeholderTextColor={"#fff"} placeholder='Password'
                            secureTextEntry={true}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <LinearGradient
                            colors={['#1a3f34', '#22755f', '#9ad3c3']}
                            style={{ borderRadius: 10 }}>
                            <TouchableOpacity style={[btnStyle]}
                                onPress={handleCreateAccount}
                            >
                                <Text style={btnText}>Cadastrar</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <TouchableOpacity style={btnStyle} onPress={() => navigation.goBack()}>
                            <Text style={[btnText, { borderBottomColor: '#fff', borderBottomWidth: 1 }]}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}
const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    viewStyle: {
        top: 40,
        filter: 'blur(10)',
        justifyContent: 'space-evenly',
        paddingHorizontal: 40,
        width: '90%',
        backgroundColor: 'rgba(255,255,255,0.3)',
        height: '60%',
        borderRadius: 40,
        borderColor: "#fff",
        borderWidth: 1,
    },
    userImage: {
        top: 10,
        marginBottom: 10,
        marginLeft: '35%',
        width: 90,
        height: 90,
        borderRadius: 60,
        borderColor: "#fff",
        borderWidth: 1,
    },
    textLead: {
        textAlign: 'left',
        color: "#fff",
    },
    inputStyle: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
    },
    btnStyle: {
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
    },
    btnText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15,
    },
})
export default CadastroScreen