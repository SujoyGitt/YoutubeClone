import React, { useEffect, useState } from "react";
import "./Videohorizontal.scss";
import moment from "moment";
import numeral from "numeral";
import { request } from "../../api";
import { useNavigate } from "react-router-dom";
export const Videohorizontal = ({ video,searchScreen, subScreen }) => {
  let {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails,
      resourceId,
    },
  } = video;

  const isvideo = !(id.kind === "youtube#channel" || subScreen);

  const [views, setviews] = useState(null);
  const [duration, setduration] = useState(null);
  const [channelicon, setchannelicon] = useState([]);
  //get video details
  useEffect(() => {
    const getvideodetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setduration(items[0].contentDetails.duration);
      setviews(items[0].statistics.viewCount);
    };
    if (isvideo) getvideodetails();
  }, [id, isvideo]);
  //get channel icon
  useEffect(() => {
    const getchannelicon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: { part: "snippet", id: channelId },
      });
      setchannelicon(items[0].snippet.thumbnails.default);
    };
    getchannelicon();
  }, [channelId]);

  //this viraible for time count
  let second = moment.duration(duration).asSeconds();
  let _duration = moment.utc(second * 1000).format("mm:ss");
  const _channelId = resourceId?.channelId || id.channelId;
  //Ridirect page in watch screen or channel screen
  let navigate = useNavigate();
  let handlevideoClick = () => {
    isvideo ?
    navigate(`/watch/${id.videoId}`):
    navigate(`/channel/${_channelId}`);
  };
  //classname for thumbnail
  const thumbnail = !isvideo && 'video_horialzontal_profile_channel'
  return (
    <div
      className="videoHorizontal flex mt-4 w-full   flex-col sm:flex-row"
      onClick={handlevideoClick}
    >
      <div
        className={ `video_horialzontal_profile rounded-md bg-grey relative  overflow-hidden ${thumbnail}` }
      >
        <img
          src={thumbnails.default.url}
          alt=""
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-0 right-0 bg-gray-500 opacity-60 text-white rounded">
          {_duration}
        </span>
      </div>
      <div className="details ml-3 ">
        <div className="horizontal_video_title font-semibold text-sm sm:text-base lg:text-sm">
          {title}
        </div>
        <div className="horizontal_channel_name text-sm text-gray-500 my-1 flex">
          <span className="min-h-16 w-12 overflow-hidden rounded-full hidden sm:block">
            <img
              src={channelicon.url}
              alt="channelicon"
              className="w-full h-full object-cover"
            />
          </span>
          <span className="sm:ml-2">{channelTitle}</span>
        </div>
        {isvideo ? (
          <div className="horizontal_view_time text-sm text-gray-500">
            {numeral(views).format("0.a")} View .{" "}
            {moment(publishedAt).fromNow()}
          </div>
         ) : ( "" )}
        {searchScreen || subScreen ? (
          <p className="horizontal_channel_name descripion_name text-sm text-gray-500 mt-2 my-3 ">
            {description}
          </p>
         ) : ( "" )}
      </div>
    </div>
  );
};
