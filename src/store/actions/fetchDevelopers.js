import axios from "axios";
import {
  getAllDevelopersStart,
  getAllDevelopersSuccess,
  getAllDevelopersFailed,
} from "../slices/developers";

export const fetchDeveloper = () => {
  return async (dispatch) => {
    dispatch(getAllDevelopersStart);

    try {
      const getDevs = await axios.get(
        "https://api.terawork.com/service-categories/sellers-services/computer-software-development"
      );

      const developers = await getDevs.data.data.service_search_results.hits;
      dispatch(getAllDevelopersSuccess(developers));
    } catch (error) {
      dispatch(getAllDevelopersFailed(error.Message));
      console.log(error);
    }
  };
};
