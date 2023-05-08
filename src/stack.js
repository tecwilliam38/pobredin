import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

// Pages
import HomeScreen from './HomeScren/index';
import Profile from './Profile/index';
import Notifications from './Notifications/index';
import VagasScreen from './Vagas/index';
import LoginScreen from './User/login';


const MyStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
                <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Notificações" component={Notifications} />
                <Stack.Screen name="Vagas" component={VagasScreen} />
            </Stack.Navigator>
        </>
    )
}
export default MyStack