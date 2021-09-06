import todoReducer from "./reducers/todoReducer";
import todosReducer from "./reducers/todosReducer";
import { combineReducers, createStore } from 'redux';

const initialReducer = {
    todo: todoReducer,
    todos: todosReducer
}
const store = createStore(combineReducers(initialReducer))

export default store