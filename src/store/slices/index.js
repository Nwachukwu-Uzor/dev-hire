import { combineReducers } from "redux";

import developers from "./developers";
import currencies from "./currencies";

const rootReducer = combineReducers({
  developers,
  currencies,
});

export default rootReducer;
