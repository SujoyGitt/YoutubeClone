import React, { useEffect } from "react";
import { Comments } from "../../Comments/Comments";
import { Videohorizontal } from "../../Videohorizontal/Videohorizontal";
import { VideoMetadata } from "../../VideoMetadata/VideoMetadata";
import "./WatchScreen.scss";
import { useParams } from "react-router-dom";
import {
  getrelatedvideo,
  getvideobyId,
} from "../../../redux/Actions/videos_action";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getvideobyId(id));
    dispatch(getrelatedvideo(id));
  }, [dispatch, id]);
  const { videos, loading: relatedvideoloading } = useSelector(
    (state) => state.relatedVideo
  );
  const { video, loading } = useSelector((state) => state.selectedvideo);

  return (
    <div className="watchscreen w-full min-h-screen mt-14 bg-white flex flex-wrap lg:flex-nowrap p-2 sm:p-6">
      <div className="col w-full lg:w-8/12 ">
        <div className="watchscreen_player w-full  mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameborder="0"
            className="w-full h-full"
            title={video?.snippet?.title}
            allowFullScreen
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetadata video={video} videoId={id} />
        ) : (
          <h2>Loading...</h2>
        )}
        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </div>
      <div className="col w-full lg:w-4/12 lg:pl-6 mt-8 lg:mt-0">
        {!loading ?
          videos?.filter((video) => video.snippet)
            .map((video) => (
              <Videohorizontal video={video} key={video.id.videosId} />
            )):<SkeletonTheme><Skeleton width="100%" height="130px" count={15}/></SkeletonTheme>}
      </div>
    </div>
  );
};
