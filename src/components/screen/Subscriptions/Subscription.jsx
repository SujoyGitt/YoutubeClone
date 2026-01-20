import React from "react";
import "./Subscription.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubcriptionChannel } from "../../../redux/Actions/videos_action";
import { Videohorizontal } from "../../Videohorizontal/Videohorizontal";
import "./Subscription.scss";

export const Subscription = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubcriptionChannel());
  }, [dispatch]);

  const { loading, videos  } = useSelector(
    (state) => state.subscriptionsChannel
  );
  return (
    <>
      <div className="Screen subscription w-full md:w-11/12  justify-end">
      <div className=" w-full flex flex-wrap mt-4 gap-5v">

      {!loading
        ? videos?.map((video) => (
            <Videohorizontal video={video} key={video.id} subScreen/>
          ))
        : ""}
        </div>
      </div>
    </>
  );
};
