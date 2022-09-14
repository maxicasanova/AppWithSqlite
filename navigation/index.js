import AuthNavigator from './AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import NotesNavigator from './NotesNavigator';
import React from 'react';
import { useSelector } from 'react-redux';

const MainNavigation = () => {

    const userId = useSelector(state => state.auth.userId);
    
    return (
        <NavigationContainer>
        { userId ? 
            <NotesNavigator />
            : 
            <AuthNavigator />
        }
        </NavigationContainer>
    )
}

export default MainNavigation