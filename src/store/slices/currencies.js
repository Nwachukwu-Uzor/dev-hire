import { createSlice } from "@reduxjs/toolkit";

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: {
    symbol: "",
    loading: false,
    currencies: [],
    error: null,
    currentCurrency: null,
  },
  reducers: {
    getCurrenciesStart(state) {
      state.loading = true;
    },
    getCurrenciesSuccess(state, { payload }) {
      state.loading = false;
      state.currencies = payload;
    },
    getCurrenciesFailed(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    switchCurrency(state, { payload }) {
      const currencies = JSON.parse(JSON.stringify(state.currencies));
      const current = currencies.find((c) => c.id === Number(payload));
      const modifiedCurrencies = currencies.filter(
        (curr) => curr.id !== current.id
      );
      const newCurrencies = [current, ...modifiedCurrencies];
      state.currencies = newCurrencies;
      state.currentCurrency = current;
    },
  },
});

export const {
  getCurrenciesStart,
  getCurrenciesSuccess,
  getCurrenciesFailed,
  switchCurrency,
} = currenciesSlice.actions;

export default currenciesSlice.reducer;
