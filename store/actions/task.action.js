import * as FileSystem from 'expo-file-system'

import { fetchTasks } from '../../db';

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
            const result = await fetchTasks()
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

export const addTask = (text, category) =>({
    type: ADD_TASK,
    descripcion:text,
    categoryID: category
});

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


