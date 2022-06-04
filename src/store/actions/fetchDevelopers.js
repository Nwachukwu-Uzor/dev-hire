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
      dispatch(getAllDevelopersSuccess(developers));
    } catch (error) {
      dispatch(getAllDevelopersFailed(error.Message));
      console.log(error);
    }
  };
};
