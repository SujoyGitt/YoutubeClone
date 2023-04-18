import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./Reducers/auth_reducer";
import { Homevideosreducer } from "./Reducers/Videos_reducer";
import { Selectedvideosreducer } from "./Reducers/Videos_reducer";
import { ChannelDetailsreducer } from "./Reducers/ChannelReducer";
import { CommentListreducer } from "./Reducers/Commentsreducer";
import { Relatedvideosreducer } from "./Reducers/Videos_reducer";
import { Searchvideosreducer } from "./Reducers/Videos_reducer";
import { subscriptionsChannelReducer } from "./Reducers/Videos_reducer";
import { ChannelVideosReducer } from "./Reducers/Videos_reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: Homevideosreducer,
  selectedvideo: Selectedvideosreducer,
  channelDetails: ChannelDetailsreducer,
  CommentList: CommentListreducer,
  relatedVideo: Relatedvideosreducer,
  searchvideo: Searchvideosreducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  ChannelVideos:ChannelVideosReducer
});

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
