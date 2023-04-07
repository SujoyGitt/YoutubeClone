import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./Reducers/auth_reducer";
import { Homevideosreducer } from "./Reducers/Videos_reducer";
import { Selectedvideosreducer } from "./Reducers/Videos_reducer";
import { ChannelDetailsreducer } from "./Reducers/ChannelReducer";
import { CommentListreducer } from "./Reducers/Commentsreducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: Homevideosreducer,
  selectedvideo: Selectedvideosreducer,
  channelDetails: ChannelDetailsreducer,
  CommentList: CommentListreducer,
});

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
