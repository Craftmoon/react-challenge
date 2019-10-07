import { combineReducers } from "redux";
import messages from "./messages";
import customers from "./customers";
import transactions from "./transactions";

const reducers = combineReducers({
  messages,
  transactions,
  customers
});

export default reducers;
