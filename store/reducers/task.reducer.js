import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, FILTERED_TASK, SELECTED_TASK } from "../actions/task.action";

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
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            return {
                ...state,
                tasks : [...state.tasks, {id:state.tasks.length+1,completed:false, fecha:today, descripcion:action.descripcion, category:action.categoryID}]
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
        default:
            return state;
    }
}

export default TaskReducer;