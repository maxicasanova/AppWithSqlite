import { Pressable, StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/Colors';
import React from 'react'
import { logout } from '../store/actions/auth.action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function SettingsScreen({ navigation }) {

    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.email);

    const onPressFunction = () => {
        dispatch(logout());
    }

    return (
        <View style={styles.screen}>
            <View style={styles.optionGroup}>
                <View style={styles.sameLine}>
                    <Text>Conectado como: {user}</Text>
                    <Pressable onPress={onPressFunction}>
                        <Text style={styles.button}>Cerrar Sesion</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    optionGroup: {
        width:'100%',
        borderWidth: 1,
        borderColor: 'grey',
        padding:30,
        marginBottom:10
    },
    sameLine: {
        display:'flex',
        flexDirection:'row',
        flexWrap:'nowrap',
        alignItems:'center',
        justifyContent:'space-between'
    },
    button:{
        fontSize:20,
        color:Colors.primary
    }
})