import {
  ADD_TODO,
  REMOVE_TODO,
  FAILED_TODO,
  HANDLE_DONE,
  INITIAL_TO_DO,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  UPDATE_TO_DO,
} from "../type";
import api from "../../api";
import { AppDispatch } from "../index";

interface TodoState {
  _id: string;
  category: string;
  name: string;
  description: string;
  done: boolean;
  expanded: boolean;
}

export const addTodo = (todo: {}) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.addTodo(todo);
    dispatch({ type: ADD_TODO, payload: data });
    dispatch({ type: INITIAL_TO_DO });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAILED_TODO,
      payload: "something go wrong plz try again later",
    });
  }
};

export const removeTodo = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await api.deleteTodo(id);
    if (response.status === 200) {
      dispatch({ type: REMOVE_TODO, payload: id });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAILED_TODO,
      payload: "something go wrong plz try again later",
    });
  }
};

export const updateTodo = (todo: {}) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.updateTodo(todo);
    dispatch({ type: UPDATE_TO_DO, payload: data });
    // dispatch({ type: INITIAL_TO_DO });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAILED_TODO,
      payload: "something go wrong plz try again later",
    });
  }
};

export const handleDone =
  (todo: TodoState) => async (dispatch: AppDispatch) => {
    try {
      const response = await api.updateTodo({ ...todo, done: !todo.done });
      if (response.status === 200) {
        dispatch({ type: HANDLE_DONE, payload: todo._id });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAILED_TODO,
        payload: "something go wrong plz try again later",
      });
    }
  };

export const addCategory = (category: {}) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.addCategory(category);
    console.log(data);
    if (data.err) {
      console.log(data);
    } else {
      dispatch({ type: ADD_CATEGORY, payload: data });
    }
  } catch (err) {
    console.log(err);
  }
};

export const removeCategory = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await api.deleteCategory(id);
    if (response.status === 200) {
      dispatch({ type: REMOVE_CATEGORY, payload: id });
    }
  } catch (error) {
    console.log(error);
    // dispatch ({type:FAILED_TODO,payload:'something go wrong plz try again later'})
  }
};
