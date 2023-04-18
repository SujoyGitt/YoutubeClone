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
      payload: data.items[0],
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: VIDEOS_REQUEST_BY_IDFAIL,
      payload: error.message,
    });
  }
};
export const getrelatedvideo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RELATED_VIDEO_REQUEST,
    });
    const { data } = await request("./search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 15,
        type: "video",
      },
    });
    dispatch({
      type: RELATED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: RELATED_VIDEO_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getVideoSearch = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_VIDEO_REQUEST,
    });
    let { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 12,
        q: keyword,
        type: "video,channel",
      },
    });
    dispatch({
      type: SEARCH_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SEARCH_VIDEO_FAIL,
      payload: error.message,
    });
  }
};
export const getSubcriptionChannel = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBCRIPTION_CHANNEL_REQUEST,
    });
    const { data } = await request("./subscriptions", {
      params: { part: "snippet,contentDetails", mine: true },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: SUBCRIPTION_CHANNEL_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data);

    dispatch({
      type: SUBCRIPTION_CHANNEL_FAIL,
      payload: error.response.data,
    });
  }
};

export const getVideosbyChannel = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_VIDEOS_REQUEST,
    });
    //1:get Upload playlist id
    const {
      data: { items },
    } = await request("./channels", {
      params: { part: "contentDetails", id: id },
    });
    const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads;
    console.log(uploadPlaylistId);
    //1:get the videos using the id
    const { data } = await request("./playlistItems", {
      params: {
        part: "contentDetails,snippet",
        playlistId: uploadPlaylistId,
        maxResults: 30,
      },
    });
    dispatch({
      type: CHANNEL_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data.message);

    dispatch({
      type: CHANNEL_VIDEOS_FAIL,
      payload: error.response.data,
    });
  }
};
