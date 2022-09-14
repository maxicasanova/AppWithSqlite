import { applyMiddleware, combineReducers, createStore } from 'redux'

import AuthReducer from './reducers/auth.reducer';
import CategoryReducer from './reducers/category.reducer';
import TaskReducer from './reducers/task.reducer';
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    tasks: TaskReducer,
    auth: AuthReducer
})

export default createStore(RootReducer,applyMiddleware(thunk));