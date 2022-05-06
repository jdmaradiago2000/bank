import axios from "axios";

import { transfersActions } from "../slices/transfers.slice";

const API_URL = "http://localhost:5000/api/v1/users/1/history";

export const getUsersTransfers = (userId) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      const res = await axios.get(API_URL);

      const { transfers } = res.data;

      dispatch(transfersActions.getTransfers({ transfers }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const newTransfer = (accountNumber, amount) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      dispatch(transfersActions.newTransfer());
    } catch (error) {
      console.log(error);
    }
  };
};
