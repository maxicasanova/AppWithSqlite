import {combineReducers, createStore} from 'redux';

import CategoryReducer from './reducers/category.reducer';
import TaskReducer from './reducers/task.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    tasks: TaskReducer
})

export default createStore(RootReducer);