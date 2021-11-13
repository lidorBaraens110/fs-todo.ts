import {
  INITIAL_TO_DO,
  HANDLE_CHANGE,
  INITIAL_TO_DO_WITH_DETAILS,
} from "../type";
import { AnyAction } from "redux";

interface TodoState {
  name: string;
  description: string;
  _id?: string;
}

const initialState: TodoState = {
  name: "",
  description: "",
};

const todoReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case INITIAL_TO_DO:
      return initialState;
    case INITIAL_TO_DO_WITH_DETAILS:
      return { ...action.payload };
    case HANDLE_CHANGE:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};

export default todoReducer;
