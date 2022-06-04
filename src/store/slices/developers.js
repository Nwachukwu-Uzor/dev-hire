import { createSlice } from "@reduxjs/toolkit";

export const developersSlice = createSlice({
  name: "developers",
  initialState: {
    loading: false,
    developers: [],
    favoriteDevelopers: [],
    count: 0,
    error: null,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    getAllDevelopersStart(state) {
      state.loading = true;
    },
    getAllDevelopersSuccess(state, { payload }) {
      state.developers = payload;
      state.loading = false;
    },
    getAllDevelopersFailed(state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const {
  increment,
  getAllDevelopersStart,
  getAllDevelopersSuccess,
  getAllDevelopersFailed,
} = developersSlice.actions;

export default developersSlice.reducer;
