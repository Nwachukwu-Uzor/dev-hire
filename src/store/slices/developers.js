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
    setFavoriteStatus(state, { payload }) {
      const developers = JSON.parse(JSON.stringify(state.developers));
      const dev = developers.find(
        (developer) => developer._source.profile_id === payload
      );

      dev.isFavorite = !dev.isFavorite;

      const myFav = developers.filter((dev) => dev.isFavorite);
      state.developers = developers;
      state.favoriteDevelopers = myFav;
    },
    // removeFromFavorite(state, { payload }) {
    //   const developers = JSON.parse(JSON.stringify(state.developers));
    //   const dev = developers.find(
    //     (developer) => developer._source.profile_id === payload
    //   );

    //   dev.isFavorite = false;

    //   const myFav = developers.filter((dev) => dev.isFavorite);
    //   state.developers = developers;
    //   state.favoriteDevelopers = myFav;
    // },
  },
});

export const {
  increment,
  getAllDevelopersStart,
  getAllDevelopersSuccess,
  getAllDevelopersFailed,
  setFavoriteStatus,
} = developersSlice.actions;

export default developersSlice.reducer;
