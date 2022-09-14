import * as FileSystem from 'expo-file-system'

import { deleteTaskDB, fetchTasks, insertTask, updateTask } from '../../db';

export const SELECTED_TASK = 'SELECTED_TASK';
export const FILTERED_TASK = 'FILTERED_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const LOAD_TASKS = 'LOAD_TASKS';

export const loadTasks = () => {
    return async dispatch => {
        try{
            const result = await fetchTasks();
            dispatch({type: LOAD_TASKS, tasks:result.rows._array})
        } catch (err) {
            console.log(err)
        }
    }
}

export const selectTask = (id) => ({
    type: SELECTED_TASK,
    taskID: id
});

export const filteredTask = (id) => ({
    type: FILTERED_TASK,
    categoryID: id
});

export const addTask = (textItem, category) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let fechaLimite = mm + '/' + dd + '/' + yyyy;
    const image = '';

    return async dispatch => {
        try{
            await insertTask(category,textItem,image,fechaLimite);
            const result = await fetchTasks();
            dispatch({type: LOAD_TASKS, tasks:result.rows._array})
        } catch (err) {
            console.log(err);
        }
    }
}

export const completeTask = (id) =>({
    type: COMPLETE_TASK,
    taskID: id
});

export const deleteTask = (id) => {
    return async dispatch => {
        try{
            await deleteTaskDB(id);
            const result = await fetchTasks();
            dispatch({type: LOAD_TASKS, tasks:result.rows._array})
        } catch (err) {
            console.log(err)
        }
    }
};

export const addPhoto = (id, image) => {
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path
            })

            await updateTask(Path, id);
            const result = await fetchTasks();
            dispatch({type: LOAD_TASKS, tasks:result.rows._array})

        } catch (error) {
            console.log(error.message)
            throw error
        }
    }
}


