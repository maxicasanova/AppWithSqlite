import * as FileSystem from 'expo-file-system'

import { fetchTasks, insertTask } from '../../db';

export const SELECTED_TASK = 'SELECTED_TASK';
export const FILTERED_TASK = 'FILTERED_TASK';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const ADD_TASK_PHOTO = 'ADD_TASK_PHOTO';
export const LOAD_TASKS = 'LOAD_TASKS';

export const loadTasks = () => {
    return async dispatch => {
        try{
            const result = await fetchTasks();
            console.log(result);
            dispatch({type: LOAD_TASKS, tasks:result.rows_array})
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

// export const addTask = (category, description) =>({
//     type: ADD_TASK,
//     descripcion:text,
//     categoryID: category
// });

export const addTask = (category, description) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    fechaLimite = mm + '/' + dd + '/' + yyyy;
    const name = '';
    const image = '';

    return async dispatch => {
        try{
            const result = await insertTask(category,name,description,image,fechaLimite);
            dispatch(
                {
                    type: ADD_TASK, 
                    taskID:result.id, 
                    taskDescription:description, 
                    taskCategory: category, 
                    taskDate:fechaLimite
                })
        } catch (err) {
            console.log(err);
        }
    }
}

export const completeTask = (id) =>({
    type: COMPLETE_TASK,
    taskID: id
});

export const deleteTask = (id) =>({
    type: DELETE_TASK,
    taskID: id
});

export const addPhoto = (id, image) => {
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }

        dispatch({ 
            type: ADD_TASK_PHOTO, 
            taskID: id,
            taskPhoto: Path
        })
    }
}


