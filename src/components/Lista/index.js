import { FlatList, StyleSheet, Text, View } from 'react-native';

import ItemList from './itemList'
import React from "react";

export default function Lista (props) {

    const {list, setModalVisible, setItemSelected, handleCompleted} = props;
    
    const renderItem = ({item}) => (
        <ItemList 
            data={item}
            handleCompleted={handleCompleted}
            setModalVisible={setModalVisible}
            setItemSelected={setItemSelected}
        />
    )
    return(
        list.length ? (
        <View style={styles.container}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
        ) : (
            <View style={[styles.container, styles.welcome]}>
                <Text style={styles.textWelcome}> Bienvenido! Puede ingresar nuevas tareas arriba</Text>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    welcome: {
        minHeight:200,
        margin:30
    },
    textWelcome : {
        fontSize: 30,
        textAlign:'center'
    }
});