import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { TaskReducer } from "./Tasks/TaskReducer";
import { AuthReducer } from "./Auth/Auth.Reducer";
import thunk from "redux-thunk";

const rootRuducer = combineReducers({
  tasks: TaskReducer,
  auth: AuthReducer,
});

export const Store = legacy_createStore(rootRuducer, applyMiddleware(thunk));
