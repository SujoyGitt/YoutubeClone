import React from "react";
import "./Videohorizontal.scss";
import moment from "moment";
import numeral from "numeral";
export const Videohorizontal = () => {
  return (
    <div className="videoHorizontal flex mt-4 w-full">
      <div className="video_horialzontal_profile  rounded-md bg-grey relative  overflow-hidden">
        <img src="" alt="" />
        <span className="absolute bottom-0 right-0 bg-gray-500 opacity-60 text-white rounded">
          00.00
        </span>
      </div>
      <div className="details ml-3 ">
        <div className="horizontal_video_title font-semibold text-sm ">
          horizontal video title Lorem, ipsum dolor sit amet consectetur
          adipisicing elit.
        </div>
        <div className="horizontal_channel_name text-sm text-gray-500 mt-2 ">
          CodeWidthsuju
        </div>
        <div className="horizontal_view_time text-sm text-gray-500">
          {numeral(1000).format("0.a")} View . {moment("2023-03-09").fromNow()}
        </div>
      </div>
    </div>
  );
};
