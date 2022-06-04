import { combineReducers } from "redux";

import developers from "./developers";

const rootReducer = combineReducers({
  developers,
});

export default rootReducer;
