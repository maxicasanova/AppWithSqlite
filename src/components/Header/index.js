import { Pressable, StyleSheet, Text, View } from 'react-native';

import React from 'react';

function Header({nombre, setLogged, logged}) {

    const handleButton = () => setLogged(false);

    return (
        <View style={styles.header}>
            {logged && 
                <Pressable
                    onPress={handleButton}
                    style={styles.backButton}
                >
                    <Text style={styles.buttonText} >Atras</Text>
                </Pressable>
            }
            <Text style={styles.headerTitle}>{ !nombre ? 'To do List' : `Lista de ${nombre}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#1E90FF',
        minHeight:100,
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 20
    },
    headerTitle: {
        fontSize:20,
        fontFamily:'OpenBold',
        color:'#fff'
    },
    backButton:{
        backgroundColor:'#fff',
        padding:5,
        borderRadius:10
    },
    buttonText:{
        fontSize:16,
    }
});

export default Header