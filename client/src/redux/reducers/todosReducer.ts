import {
  INITIAL_TO_DOS,
  NEW_CATEGORY,
  ADD_TODO,
  REMOVE_TODO,
  HANDLE_EXPANDED,
  HANDLE_DONE,
  UPDATE_TO_DO,
} from "../type";
import { AnyAction } from "redux";

interface TodoState {
  _id: string;
  category: string;
  name: string;
  description: string;
  done: boolean;
  createdAt?: string;
  updateAt?: string;
  expanded: boolean;
}

const initialState: TodoState[] = [
  {
    _id: "",
    category: "",
    name: "",
    description: "",
    done: false,
    expanded: false,
  },
];

const todosReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case INITIAL_TO_DOS:
      return [...action.payload];
    case NEW_CATEGORY:
      return initialState;
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      const newState = state.filter((todo) => todo._id !== action.payload);
      return [...newState];
    case UPDATE_TO_DO:
      const updateState = state.map((todo) => {
        if (todo._id === action.payload._id) {
          return { ...action.payload };
        } else {
          return todo;
        }
      });
      return [...updateState];
    case HANDLE_EXPANDED:
      const id = action.payload;
      const expandedState = state.map((todo) => {
        if (todo._id === id) {
          if (todo.expanded) {
            return { ...todo, expanded: !todo.expanded };
          } else {
            return { ...todo, expanded: true };
          }
        }
        return todo;
      });
      return [...expandedState];

    case HANDLE_DONE:
      const updateDoneState = state.map((todo) => {
        if (todo._id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
      return [...updateDoneState];

    default:
      return state;
  }
};

export default todosReducer;
