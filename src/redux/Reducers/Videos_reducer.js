import {
  CHANNEL_VIDEOS_FAIL,
  CHANNEL_VIDEOS_REQUEST,
  CHANNEL_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  SEARCH_VIDEO_FAIL,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
  SUBCRIPTION_CHANNEL_FAIL,
  SUBCRIPTION_CHANNEL_REQUEST,
  SUBCRIPTION_CHANNEL_SUCCESS,
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
        loading: false,
      };

    case VIDEOS_REQUEST_BY_IDFAIL:
      return {
        ...state,
        video: null,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const Relatedvideosreducer = (
  state = { loading: true, videos: [] },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case RELATED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case RELATED_VIDEO_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };

    case RELATED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const Searchvideosreducer = (
  state = { loading: true, videos: [] },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case SEARCH_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };

    case SEARCH_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const subscriptionsChannelReducer = (
  state = { loading: true, videos: [] },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case SUBCRIPTION_CHANNEL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SUBCRIPTION_CHANNEL_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };

    case SUBCRIPTION_CHANNEL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export const ChannelVideosReducer = (
  state = { loading: true, videos: [] },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case CHANNEL_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CHANNEL_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };

    case CHANNEL_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};
