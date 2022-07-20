import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import React from "react";

export default function Login(props) {

    const {nombre, setNombre, setLogged} = props;

    const handleTextChange = (text) => setNombre(text);

    const handleButtonAdd = () => setLogged(true);

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Bienvenido, ingresa tu nombre!
                </Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <TextInput
                        placeholder='John Doe' 
                        style = {styles.input}
                        value={nombre}
                        onChangeText={handleTextChange}
                    />
                </TouchableWithoutFeedback>
                {nombre.length > 3 &&
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={handleButtonAdd} 
                >
                    <Text style={styles.buttonText}>Aceptar</Text>
                </Pressable> }
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#fff',
        borderRadius:50,
        maxWidth:'80%',
        height:250,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    container: {
        minHeight:'70%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width:300,
        maxWidth:'90%',
    },
    buttonOpen: {
        backgroundColor: "#555AFF",
    },
    buttonText: {
        textAlign:'center',
        color:'#fff',
        fontSize:18
    },
    input:{
        width:300,
        maxWidth:'90%',
        fontSize:24,
        backgroundColor:'#F0F0F0'
    },
    title: {
        fontSize:30,
        fontFamily:'RobotoBold',
        textAlign:'center'
    }
})