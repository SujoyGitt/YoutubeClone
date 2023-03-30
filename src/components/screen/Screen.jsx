import React from "react";
import { Category } from "../categorybar/Category";
import "./screen.scss";
import { Video } from "../Video/Video";
import { useDispatch, useSelector } from "react-redux";
import { getPopularvideos } from "../../redux/Actions/videos_action";
import { useEffect } from "react";

export const Screen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularvideos());
  }, [dispatch]);
let {videos} = useSelector(state=>state.homeVideos)
  return (
    <>
      <div className="Screen w-full md:w-11/12 ">
        <Category />
        <div className="video_container w-full flex flex-wrap mt-4 gap-5  justify-center">
          {videos.map((video) => {
            return <Video video={video} key={video.id}/>;
          })}
        </div>
      </div>
    </>
  );
};
