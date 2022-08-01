import { FlatList, Keyboard, View } from 'react-native';
import React, { useState } from 'react';

import AddItem from '../src/components/AddItem/index.js';
import CustomModal from '../src/components/CustomModal';
import ItemList from '../src/components/Lista/ItemList';
import { TASKS } from '../data/tasks';

export const CategoryNoteScreen = ({navigation, route}) => {
    
    const tasks = TASKS.filter(task => task.category === route.params.categoryID)

    const [textItem, setTextItem] = useState('');
    const [list, setList] = useState(tasks);
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

    const handleSelected = (item) => {
        navigation.navigate('Detail', {
            task: item
        })
    }

    const renderItem = ({item}) => (
        <ItemList 
            data={item}
            handleCompleted={handleCompleted}
            setModalVisible={setModalVisible}
            setItemSelected={setItemSelected}
            handleSelected={handleSelected}
        />
    )

    return (
        <View>
            <CustomModal
                    modalVisible={modalVisible}
                    handleDelete={handleDelete}
                    setModalVisible={setModalVisible}
                />
            <AddItem
                textItem={textItem}
                handleTextChange={handleTextChange}
                handleButtonAdd={handleButtonAdd}
            />
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}