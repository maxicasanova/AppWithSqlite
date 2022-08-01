import { Image, Platform } from 'react-native'

import {CategoriesScreen} from '../screens/CategoriesScreen'
import {CategoryNoteScreen} from '../screens/CategoryNoteScreen'
import {DetailScreen} from '../screens/DetailScreen'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator()

// const Logo = () => {
//     return (
//         <Image source={require('../assets/lista.png')} style={{width: 50, height: 50}}/>
//     )
// }


const NotesNavigator = ({nombre}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    // backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent
                },
                // headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    // fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name='Home' component={CategoriesScreen} options={{title: `Notas de ${nombre}`}}/>
                {/* headerTitle: (props) => (<Logo {...props} />),  */}
                <Stack.Screen name='Products' component={CategoryNoteScreen} options={({route}) => ({ title: route.params.name})}/>
                <Stack.Screen name='Detail' component={DetailScreen} options={({route}) => ({title: route.params.task.name})} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default NotesNavigator;