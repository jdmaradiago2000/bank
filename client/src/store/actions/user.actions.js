import axios from "axios";

import { usersActions } from "../slices/user.slice";

const API_URL = "http://localhost:5000/api/v1/users";

export const login = (accountNumber, password) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      dispatch(usersActions.login("http://localhost:5000/api/v1/users/signup"));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signup = (name, email, password) => {
  return async (dispatch) => {
    try {
      // API REQUEST
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(
        usersActions.logout("http://localhost:5000/api/v1/users/signup")
      );
    } catch (error) {
      console.log(error);
    }
  };
};
