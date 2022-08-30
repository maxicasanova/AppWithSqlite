import { ADD_TASK, ADD_TASK_PHOTO, COMPLETE_TASK, DELETE_TASK, FILTERED_TASK, LOAD_TASKS, SELECTED_TASK } from "../actions/task.action";

import { TASKS } from "../../data/tasks";

const initialState = {
    tasks: TASKS,
    selected: null
}

const TaskReducer = (state=initialState, action) => {
    switch (action.type) {
        case SELECTED_TASK:
            return {
                ...state,
                selected: state.tasks.find(t => t.id === action.taskID)
            }
        case FILTERED_TASK:
            return {
                ...state,
                filteredTask: state.tasks.filter(t => t.category === action.categoryID)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks : [...state.tasks, {id:action.taskID,completed:false, fecha:action.taskDate, descripcion:action.taskDescription, category:action.taskCategory}]
            }
        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(element => element.id === action.taskID ? {...element, completed : true} : element)
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(elem => elem.id !== action.taskID)
            }
        case ADD_TASK_PHOTO:
            return {
            ...state,
            tasks: state.tasks.map(element => element.id === action.taskID ? {...element, photo : action.taskPhoto} : element)
        }
        case LOAD_TASKS:
            return {
                ...state,
                tasks: [...state.tasks, ...action.tasks]
            }
        default:
            return state;
    }
}

export default TaskReducer;