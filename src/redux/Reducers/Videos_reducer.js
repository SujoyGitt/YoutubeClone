import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  VIDEOS_REQUEST_BY_IDFAIL,
  VIDEOS_REQUEST_BY_IDREQUEST,
  VIDEOS_REQUEST_BY_IDSUCCESS,
} from "./Action_Types";

export const Homevideosreducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export const Selectedvideosreducer = (
  state = { loading: true, video: null },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case VIDEOS_REQUEST_BY_IDREQUEST:
      return {
        ...state,
        loading: true,
      };

    case VIDEOS_REQUEST_BY_IDSUCCESS:
      return {
        ...state,
        video: payload,
        loading: false
      };

    case VIDEOS_REQUEST_BY_IDFAIL:
      return {
        ...state,
        video: null,
        loading: false,
        error:payload
      };

    default:
      return state;
  }
};
