import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

// Pages
import HomeScreen from './HomeScreen';
import Profile from './Profile/index';
import Notifications from './Notifications/index';
import VagasScreen from './Vagas/index';
import LoginScreen from './User/login';
import CadastroScreen from './User/cadastro';
import MyTabs from './Tabs';

const MyStack = () => {
    return (
        <>
            <StatusBar hidden />
            <Stack.Navigator initialRouteName='Profile'>
                <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Cadastro" component={CadastroScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Notificações" component={Notifications} />
                <Stack.Screen name="Vagas" component={VagasScreen} />
                {/* <Stack.Screen name="Tabs" component={MyTabs} /> */}
            </Stack.Navigator>
        </>
    )
}
export default MyStack