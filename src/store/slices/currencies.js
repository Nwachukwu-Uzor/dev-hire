import { createSlice } from "@reduxjs/toolkit";

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: {
    symbol: "",
    loading: false,
    currencies: [],
    error: null,
  },
  reducers: {
    getCurrenciesStart(state) {
      state.loading = true;
    },
    getCurrenciesSuccess(state, payload) {
      state.loading = false;
      state.currencies = payload;
    },
    getCurrenciesFailed(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { getCurrenciesStart, getCurrenciesSuccess, getCurrenciesFailed } =
  currenciesSlice.actions;

export default currenciesSlice.reducer;
