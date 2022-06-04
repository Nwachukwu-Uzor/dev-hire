import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "developers",
  initialState: {
    loading: false,
    developers: [],
    favoriteDevelopers: [],
    error: null,
  },
  reducers: {
    getAllDeveloper() {},
  },
});
