import { HOME_VIDEOS_FAIL, HOME_VIDEOS_SUCCESS } from "./Action_Types";

export const Homevideosreducer = (
  state = {
    videos: [],
    loading: false,
    nextpageToken: null,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload.videos,
        loading: false,
        nextpageToken: payload.nextpageToken,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...state,
      
        loading: false,
        error:payload  
      };
      default:return state
  }
};
