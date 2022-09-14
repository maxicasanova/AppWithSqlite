import React, { useEffect } from "react";

import {CategoriesScreen} from '../screens/CategoriesScreen'
import {CategoryNoteScreen} from '../screens/CategoryNoteScreen'
import Colors from "../constants/Colors";
import {DetailScreen} from '../screens/DetailScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewPhotoScreen from '../screens/NewPhotoScreen';
import SettingsScreen from '../screens/SettingsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { loadTasks } from "../store/actions/task.action";
import { useDispatch } from "react-redux";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Categories' component={CategoriesScreen} options={{title: `Notas`}}/>
            <HomeStack.Screen name='Products' component={CategoryNoteScreen} options={({route}) => ({ title: route.params.name})}/>
            <HomeStack.Screen name='Detail' component={DetailScreen} />
            <HomeStack.Screen name='TakePhoto' component={NewPhotoScreen} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Configuracion" component={SettingsScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();


const NotesNavigator = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(loadTasks());
    },[])

    
    return (
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
                tabBarActiveTintColor: Colors.red,
                tabBarInactiveTintColor: 'gray',
                })}
        >
                <Tab.Screen name="Home" component={HomeStackScreen}/>
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
    )
}
export default NotesNavigator;