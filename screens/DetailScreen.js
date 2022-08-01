import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

export const DetailScreen = ({ route }) => {

    const { task } = route.params

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{task.name}</Text>
            <Text>{task.description}</Text>
            <Text>{task.fechaLimite}</Text>
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
    }
})