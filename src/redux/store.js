import { createStore, combineReducers } from "redux";

import { countReducer } from "./reducers/countReducer";

const rootReducer = combineReducers({
  count: countReducer,
});

const store = createStore(rootReducer);
console.log(store.getState());
export default store;
