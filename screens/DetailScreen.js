import { Button, Image, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import React from 'react'
import { useSelector } from 'react-redux';

export const DetailScreen = ({navigation}) => {

    const task = useSelector(state => state.tasks.selected)

    const handleButton = () => {
        navigation.navigate('TakePhoto', {
            name: 'Tomar foto'
        })
    }
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{task.description}</Text>
            <Text style={styles.text}>Nota agregada en la fecha: {task.fechaLimite}</Text>
            { task.photo ? 
                <Image source={{ uri: task.photo}} style={styles.image} /> 
                :
                <View>
                    <Text style={styles.text}>Pueder agregar una foto.</Text>
                    <Button title='Agregar una foto' onPress={handleButton}/>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenBold',
        marginBottom: 10
    },
    image: {
        width: 100,
        height: 100
    },
    text:{
        marginBottom:10
    }
})