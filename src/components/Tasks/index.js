import React, { useState } from "react";

import AddItem from '../AddItem';
import CustomModal from '../CustomModal';
import { Keyboard } from 'react-native';
import Lista from '../Lista';

export default function Tasks() {

    const [textItem, setTextItem] = useState('');
    const [list, setList] = useState([{
        descripcion: "Tarea de Ejemplo",
        fecha: '07/12/2022',
        id: 1,
        completed:false
    }]);
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState('');

    const handleButtonAdd = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        setList(currentItems => [...currentItems, {id:list.length + 1, descripcion:textItem, fecha:today, completed:false}]);
        setTextItem('');
        Keyboard.dismiss();
    }

    const handleTextChange = (text) => setTextItem(text);

    const handleDelete = () => {
        setList(list.filter(elem => elem.id !== itemSelected));
        setModalVisible(!modalVisible);
    }

    const handleCompleted = (id) => {
        setList(list.map(element => element.id === id ? {...element, completed : true} : element));
    }

    return (
        <>
            <CustomModal
                    modalVisible={modalVisible}
                    handleDelete={handleDelete}
                    setModalVisible={setModalVisible}
                    itemSelected={itemSelected}
                />
                <AddItem
                    textItem={textItem}
                    handleTextChange={handleTextChange}
                    handleButtonAdd={handleButtonAdd}
                />
                <Lista 
                    list={list}
                    handleCompleted={handleCompleted}
                    setModalVisible={setModalVisible}
                    setItemSelected={setItemSelected}
                />
        </>
    )
}
