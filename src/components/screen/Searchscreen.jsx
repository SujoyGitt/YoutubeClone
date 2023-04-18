import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideoSearch } from "../../redux/Actions/videos_action";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
// import { Video } from "../Video/Video";
import { Skeletonvideo } from "../Skeleton/Skeletonvideo";
import { Videohorizontal } from "../Videohorizontal/Videohorizontal";

export const Searchscreen = () => {
  let { query } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoSearch(query));
  }, [query, dispatch]);

  const { videos, loading } = useSelector((state) => state.searchvideo);
  return (
    <>
      <div className="Screen w-full flex justify-center">
        <div className="w-full flex flex-wrap md:w-9/12 gap-5  justify-center">
          {!loading ? (
            videos.map((currentdata) => {
              return <><Videohorizontal video={currentdata} key={currentdata.id.videoId} searchScreen/></>;
            })
          ) :  <SkeletonTheme> <Skeleton width="100%" height="230px" count={20}/> </SkeletonTheme>
           
          }
        </div>
      </div>
    </>
  );
};
