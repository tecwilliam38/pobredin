import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

// Pages
//  import MyStack from './stack';
import HomeScreen from './HomeScreen/index';
import Profile from './Profile/index';
import Notifications from './Notifications';
import VagasScreen from './Vagas';
import LoginScreen from './User/login';

const MyTabs = () => {
  return (
    <>
      <Tab.Navigator
      initialRouteName='Login'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-home' : 'ios-list-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1a4d3e',
          tabBarInactiveTintColor: '#999',
        })} >
        <Tab.Screen name="Home" options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
          component={HomeScreen} />
        <Tab.Screen name="MinhaRede" component={Profile}
          options={{
            headerShown: false,
            tabBarBadge: 1,
            tabBarIcon: ({ color, size }) => (
              <Feather name="users" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Publicação" options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plussquare" color={color} size={size} />
          ),
        }}
          component={HomeScreen} />
        <Tab.Screen name="Notificações" component={Notifications}
          options={{
            headerShown: false,
            tabBarBadge: 0,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Vagas" component={VagasScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="folder" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  )
}

export default MyTabs