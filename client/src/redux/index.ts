import todoReducer from "./reducers/todoReducer";
import todosReducer from "./reducers/todosReducer";
import authReducer from "./reducers/authReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialAuth = JSON.parse(localStorage.getItem("Profile") || "{}");

const initialReducer = {
  auth: initialAuth,
};

const reducers = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  todos: todosReducer,
  categories: categoriesReducer,
});

const store = createStore(reducers, initialReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export default store;
