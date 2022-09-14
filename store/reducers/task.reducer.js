import { COMPLETE_TASK, FILTERED_TASK, LOAD_TASKS, SELECTED_TASK } from "../actions/task.action";

const initialState = {
    tasks: [],
    selected: null
}

const TaskReducer = (state=initialState, action) => {
    switch (action.type) {
        case SELECTED_TASK:
            return {
                ...state,
                selected: state.tasks?.find(t => t.id === action.taskID)
            }
        case FILTERED_TASK:
            return {
                ...state,
                filteredTasks: state.tasks.filter(t => t.category === action.categoryID)
            }
        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks?.map(element => element.id === action.taskID ? {...element, completed : true} : element)
            }
        case LOAD_TASKS:
            return {
                ...state,
                tasks: [...action.tasks]
            }
        default:
            return state;
    }
}

export default TaskReducer;