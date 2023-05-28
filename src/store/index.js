import { combineReducers, createStore } from "redux";

import { counterReducer } from "./reducers/index";

const rootReducer = combineReducers({

  counter: counterReducer,
});

export default createStore(rootReducer);
