import { LOGIN, LOGOUT, FAILED_LOGIN } from "../type";
import api from "../../api";
import { Dispatch } from "redux";
import { History } from "history";

export const login = (user: {}) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const signIn =
  (userDetails: {}, history: History) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.login(userDetails);
      if (data.token) {
        dispatch({ type: LOGIN, payload: data });
        history.push("/");
        console.log(data);
      } else {
        dispatch({ type: FAILED_LOGIN, payload: data.message });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAILED_LOGIN,
        payload: "something go wrong plz try again later",
      });
    }
  };

export const signUp =
  (userDetails: {}, history: History) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.register(userDetails);
      dispatch({ type: LOGIN, payload: data });
      history.push("/");
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAILED_LOGIN,
        payload: "something go wrong plz try again later",
      });
    }
  };
