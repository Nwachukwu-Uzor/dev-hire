import axios from "axios";

import {
  getCurrenciesStart,
  getCurrenciesSuccess,
  getCurrenciesFailed,
} from "../slices/currencies";

export const fetchCurrencies = () => {
  return async (dispatch) => {
    dispatch(getCurrenciesStart());
    try {
      const res = await axios.get("");
    } catch (error) {
      dispatch(getCurrenciesFailed(error.Message));
    }
  };
};
