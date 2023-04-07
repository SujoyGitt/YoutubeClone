import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  VIDEOS_REQUEST_BY_IDFAIL,
  VIDEOS_REQUEST_BY_IDREQUEST,
  VIDEOS_REQUEST_BY_IDSUCCESS,
} from "../Reducers/Action_Types";

import { request } from "../../api";

export const getPopularvideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    let { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 12,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
export const getVideosCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    let { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 12,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
export const getvideobyId = (id) => async (dispatch) => {
  try {
    dispatch({
      type: VIDEOS_REQUEST_BY_IDREQUEST,
    });
    const { data } = await request("./videos", {
      params: { part: "snippet,statistics", id: id },
    });
    dispatch({
      type: VIDEOS_REQUEST_BY_IDSUCCESS,
      payload: data.items[0]
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: VIDEOS_REQUEST_BY_IDFAIL,
      payload: error.message,
    });
  }
};
