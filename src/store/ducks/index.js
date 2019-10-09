import { combineReducers } from "redux";
import customers from "./customers";
import transactions from "./transactions";

const reducers = combineReducers({
  transactions,
  customers
});

export default reducers;
