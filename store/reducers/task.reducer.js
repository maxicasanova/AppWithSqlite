import { FILTERED_TASK, SELECTED_TASK } from "../actions/task.action";

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
        default:
            return state;
    }
}

export default TaskReducer;