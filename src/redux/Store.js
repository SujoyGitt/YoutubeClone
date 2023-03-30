import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./Reducers/auth_reducer";
import { Homevideosreducer } from "./Reducers/Videos_reducer";
const rootReducer = combineReducers({
  auth: authReducer,
 homeVideos: Homevideosreducer
});

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk)),
);
