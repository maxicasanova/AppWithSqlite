import { FlatList, Keyboard, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addTask, completeTask, deleteTask, filteredTask, selectTask } from '../store/actions/task.action.js';
import {useDispatch, useSelector} from 'react-redux';

import AddItem from '../src/components/AddItem/index.js';
import CustomModal from '../src/components/CustomModal';
import ItemList from '../src/components/Lista/ItemList';

// import { TASKS } from '../data/tasks';

export const CategoryNoteScreen = ({navigation, route}) => {

    const dispatch = useDispatch();
    const categoryTask = useSelector(state => state.tasks.filteredTask);
    const category = useSelector(state=> state.categories.selected)
    
    // const tasks = TASKS.filter(task => task.category === route.params.categoryID)

    const [textItem, setTextItem] = useState('');
    // const [list, setList] = useState(categoryTask);
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState('');

    const handleButtonAdd = () => {
        // let today = new Date();
        // let dd = String(today.getDate()).padStart(2, '0');
        // let mm = String(today.getMonth() + 1).padStart(2, '0');
        // let yyyy = today.getFullYear();
        // today = mm + '/' + dd + '/' + yyyy;

        // setList(currentItems => [...currentItems, {id:list.length + 1, descripcion:textItem, fecha:today, completed:false}]);

        dispatch(addTask(textItem, category))
        setTextItem('');
        Keyboard.dismiss();
    }

    const handleTextChange = (text) => setTextItem(text);

    const handleDelete = () => {
        // setList(list.filter(elem => elem.id !== itemSelected));
        dispatch(deleteTask(itemSelected))
        setModalVisible(!modalVisible);
    }

    const handleCompleted = (id) => {
        dispatch(completeTask(id));
        // setList(list.map(element => element.id === id ? {...element, completed : true} : element));
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
    },[])

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