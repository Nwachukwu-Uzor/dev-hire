import { createSlice } from "@reduxjs/toolkit";

export const developersSlice = createSlice({
  name: "developers",
  initialState: {
    loading: false,
    developers: [],
    favoriteDevelopers: [],
    error: null,
  },
  reducers: {
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
    addToFavorite(state, { payload }) {
      const developers = JSON.parse(JSON.stringify(state.developers));
      const favoriteDevelopers = JSON.parse(
        JSON.stringify(state.favoriteDevelopers)
      );

      const dev = developers.find(
        (developer) => developer._source.profile_id === payload
      );

      console.log(dev);

      favoriteDevelopers.push(dev);

      console.log(favoriteDevelopers);
      state.favoriteDevelopers = favoriteDevelopers;
    },
    removeFromFavorite(state, { payload }) {
      console.log(payload);
      state.favoriteDevelopers.filter(
        (dev) => dev._source.profile_id !== payload
      );
    },
  },
});

export const {
  increment,
  getAllDevelopersStart,
  getAllDevelopersSuccess,
  getAllDevelopersFailed,
  addToFavorite,
  removeFromFavorite,
} = developersSlice.actions;

export default developersSlice.reducer;
