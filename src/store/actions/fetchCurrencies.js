import axios from "axios";

import {
  getCurrenciesStart,
  getCurrenciesSuccess,
  getCurrenciesFailed,
  switchCurrency,
} from "../slices/currencies";

import { getCurrencies } from "../../config/endpoints.config";

export const fetchCurrencies = () => {
  return async (dispatch) => {
    dispatch(getCurrenciesStart());
    try {
      const res = await axios.get(getCurrencies);
      const currencies = await res.data.data.currencies;
      dispatch(getCurrenciesSuccess(currencies));
      dispatch(switchCurrency(currencies[0].id));
    } catch (error) {
      dispatch(getCurrenciesFailed(error.Message));
    }
  };
};
