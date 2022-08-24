import { Button, Image, StyleSheet, Text, View } from 'react-native';

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
            <Text style={styles.title}>{task.name}</Text>
            <Text>{task.description}</Text>
            <Text>{task.fechaLimite}</Text>
            { task.photo ? 
                <Image source={{ uri: task.photo}} style={styles.image} /> 
                :
                <View>
                    <Text>Pueder agregar una foto.</Text>
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
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontFamily: 'RobotoBold',
        marginBottom: 10
    },
    image: {
        width: 70,
        height: 70
    },
})