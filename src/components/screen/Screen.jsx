import React from "react";
import { Category } from "../categorybar/Category";
import "./screen.scss";
import { Video } from "../Video/Video";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularvideos,
  getVideosCategory,
} from "../../redux/Actions/videos_action";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Skeletonvideo } from "../Skeleton/Skeletonvideo";
export const Screen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularvideos());
  }, [dispatch]);

  let { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  let fetchdata = () => {
    if (activeCategory === "All") {
      dispatch(getPopularvideos());
    } else {
      dispatch(getVideosCategory(activeCategory));
    }
  };
  return (
    <>
      <div className="Screen w-full md:w-11/12 ">
        <Category />
        <div className="video_container w-full flex flex-wrap mt-4 gap-5  justify-center">
          <InfiniteScroll
            className="  flex flex-wrap mt-4 gap-5  justify-center"
            dataLength={videos.length}
            next={fetchdata}
            hasMore={true}
            Loader={
              <h1 className="text-green-400 text-4xl overflow-hidden">
                Loading...
              </h1>
            }
          >
            {!loading
              ? videos.map((video) => {
                  return <Video video={video} key={video.id+Math.random()} />;
                })
              : [...Array(20)].map(() => {
                  return <Skeletonvideo/>
                })}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};
