import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CssMaster } from '../Styles';

// Firebase
import { collection, getDocs } from "firebase/firestore";
import {getAuth,signInWithEmailAndPassword , createUserWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from '../Components/Connection/index'

const LoginScreen = ({ navigation }) => {
  const { btnStyle, btnText, containerLogin, userImage, inputStyle, viewStyle, textLead } = styles;
  const [dados, setDados] = useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const { bgStyle } = CssMaster;

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSigIn = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log("Usuário logado");
      const user = userCredential.user;
      navigation.navigate('Home');
    })
    .catch(error =>{
      console.log(error);
      alert(error.message)
    })
  }

  return (
    <>
      <ImageBackground 
      source={require('../../assets/backgroundlogin.png')} 
      style={bgStyle} 
      resizeMethod='scale'
      >
        <StatusBar hidden />
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
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={textLead}>Senha</Text>
            <TextInput 
            style={inputStyle} 
            placeholderTextColor={"#fff"} placeholder='Password'
            secureTextEntry={true}
            value={password}
            onChangeText={ text => setPassword(text)}
            />
            <LinearGradient
              colors={['#1a3f34', '#22755f', '#9ad3c3']}
              style={{borderRadius:10}}>
              <TouchableOpacity style={[btnStyle]}
              onPress={handleSigIn}
              >
                <Text style={btnText}>Login</Text>
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity style={btnStyle}
            onPress={()=> navigation.navigate('Cadastro')}
            >
              <Text style={[btnText,{borderBottomColor:'#fff', borderBottomWidth:1}]}>Create account</Text>
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
    top:40,
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
    paddingVertical:10,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 15,
  },
})
export default LoginScreen