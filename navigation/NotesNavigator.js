import { Image, Platform } from 'react-native'

import {CategoriesScreen} from '../screens/CategoriesScreen'
import {CategoryNoteScreen} from '../screens/CategoryNoteScreen'
import {DetailScreen} from '../screens/DetailScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import SettingsScreen from '../screens/SettingsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import { COLORS } from '../constants/colors'


// const Logo = () => {
    //     return (
        //         <Image source={require('../assets/lista.png')} style={{width: 50, height: 50}}/>
        //     )
        // }
        
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Categories' component={CategoriesScreen} options={{title: `Notas`}}/>
            <HomeStack.Screen name='Products' component={CategoryNoteScreen} options={({route}) => ({ title: route.params.name})}/>
            <HomeStack.Screen name='Detail' component={DetailScreen} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="All" component={SettingsScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();


const NotesNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                    iconName = 'md-home';
                    } else if (route.name === 'Settings') {
                    iconName = 'ios-list';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                })}
        >
                <Tab.Screen name="Home" component={HomeStackScreen}/>
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default NotesNavigator;