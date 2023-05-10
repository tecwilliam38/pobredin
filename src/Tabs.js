import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

// Pages
import MyStack from './stack';
import HomeScreen from './HomeScreen/index';
import Profile from './Profile/index';
import Notifications from './Notifications';
import VagasScreen from './Vagas';
import LoginScreen from './User/login';

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Login'
      screenOptions={({ route }) => ({
        tabBarActiveTintColor:'#5ee3bf',
        tabBarInactiveTintColor:'#1b8968',
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute',
            // backgroundColor: "#171626",
            backgroundColor: "rgba(255,255,255, 0.5)",
            borderTopWidth: 0,
            bottom: 4,
            left: 14,
            right: 14,
            borderRadius: 4,
            elevation: 0,
            height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-home' : 'ios-list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1a4d3e',
        tabBarInactiveTintColor: '#999',
      })} >
      <Tab.Screen name="Login"
      options={{
        tabBarIconStyle:{
          left:-60,
          position:'relative',
      },
        tabBarStyle: { display: "none" },
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
          ),
        }}
      component={LoginScreen} />
      <Tab.Screen name="Home" options={{
          tabBarIconStyle:{
            left:-60,
            position:'relative',
        },
        // tabBarStyle: { display: "none" },
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
          ),}}
        component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIconStyle:{
            left:-50,
            position:'relative',
        },
          title: 'Minha Rede',
          headerShown: false,
          // tabBarBadge: 1,
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Publicação" options={{
        tabBarIconStyle:{
          left:-35,
          position:'relative',
      },
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="plussquare" color={color} size={size} />
        ),
      }}
        component={HomeScreen} />
      <Tab.Screen name="Notificações" component={Notifications}
        options={{
          tabBarIconStyle:{
            left:-15,
            position:'relative',
        },
          headerShown: false,
          // tabBarBadge: 0,
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
  )
}
export default MyTabs;