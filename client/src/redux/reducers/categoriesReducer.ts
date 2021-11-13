import { INITIAL_CATEGORIES, ADD_CATEGORY, REMOVE_CATEGORY } from "../type";
import { AnyAction } from "redux";

interface Categories {
  _id: string;
  name: string;
  userId: string;
}

const initialState: Categories[] = [
  {
    name: "",
    userId: "",
    _id: "",
  },
];

export const categoriesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case INITIAL_CATEGORIES:
      return [...action.payload];
    case ADD_CATEGORY:
      return [...state, action.payload];
    case REMOVE_CATEGORY:
      const updateCategories = state.filter(
        (cat) => cat._id !== action.payload
      );
      return [...updateCategories];
    default:
      return state;
  }
};
