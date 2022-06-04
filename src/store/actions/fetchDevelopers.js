import axios from "axios";
import {
  getAllDevelopersStart,
  getAllDevelopersSuccess,
  getAllDevelopersFailed,
} from "../slices/developers";

import { getDevelopers } from "../../config/endpoints.config";

export const fetchDevelopers = () => {
  return async (dispatch) => {
    dispatch(getAllDevelopersStart());

    try {
      const getDevs = await axios.get(getDevelopers);

      const developers = await getDevs.data.data.service_search_results.hits;
      const withFavStatus = developers.map((dev) => {
        return { ...dev, isFavorite: false };
      });
      dispatch(getAllDevelopersSuccess(withFavStatus));
    } catch (error) {
      dispatch(getAllDevelopersFailed(error.Message));
    }
  };
};
