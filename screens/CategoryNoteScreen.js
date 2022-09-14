import { FlatList, Keyboard, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addTask, completeTask, deleteTask, filteredTask, loadTasks, selectTask } from '../store/actions/task.action.js';
import {useDispatch, useSelector} from 'react-redux';

import AddItem from '../src/components/AddItem/index.js';
import CustomModal from '../src/components/CustomModal';
import ItemList from '../src/components/Lista/ItemList';

export const CategoryNoteScreen = ({navigation, route}) => {

    const dispatch = useDispatch();
    const categoryTask = useSelector(state => state.tasks.filteredTasks);
    const category = useSelector(state=> state.categories.selected)

    const [textItem, setTextItem] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState('');

    const handleButtonAdd = () => {
        dispatch(addTask(textItem, category.id))
        setTextItem('');
        Keyboard.dismiss();
    }

    const handleTextChange = (text) => setTextItem(text);

    const handleDelete = () => {
        dispatch(deleteTask(itemSelected))
        setModalVisible(!modalVisible);
    }

    const handleCompleted = (id) => {
        dispatch(completeTask(id));
    }

    const handleSelected = (item) => {
        dispatch(selectTask(item.id))
        navigation.navigate('Detail', {
            name: item.name
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

    useEffect(()=> {
        dispatch(filteredTask(category.id))
    },[textItem, modalVisible])

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
                data={categoryTask}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}