import {Pressable, StyleSheet, Text, View} from 'react-native';

import React from "react";

export default function ItemList (props) {

    const {data, setModalVisible, setItemSelected, handleCompleted} = props;
    
    return (
        <View style={!data.completed ? styles.item : styles.completed}>
            <Text style={!data.completed ? styles.text : styles.textCompleted}>{data.id}</Text>
            <Text style={!data.completed ? styles.text : styles.textCompleted}>{data.descripcion}</Text>
            <Text style={!data.completed ? styles.text : styles.textCompleted}>{data.fecha}</Text>
            <Pressable
                onPress={() => {
                    setModalVisible(true);
                    setItemSelected(data.id);
                    }
                }
            >
                <Text style={[styles.text, styles.actions]}>&#10060;</Text>
            </Pressable>
            {!data.completed && <Pressable
                onPress={() => {handleCompleted(data.id);console.log(data)}}
            >
                <Text style={[styles.text, styles.actions]}>&#10003;</Text>
            </Pressable> }
            {/* <Pressable
                onPress={() => console.log('asd')}
            >
                <Text style={[styles.text, styles.actions]}>&#9998;</Text>
            </Pressable> */}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor:'#D9D9D9',
        borderRadius:20,
        margin: 10,
        height:80,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    completed:{
        backgroundColor:'#F2F2F2',
        borderRadius:20,
        margin: 10,
        height:80,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    text:{
        fontWeight:'700'
    },
    textCompleted:{
        color:'white'
    },
    actions:{
        fontSize:20
    }
})