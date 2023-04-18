import React, { useEffect, useState } from "react";
import "./Video.scss";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import moment from "moment";
import { request } from "../../api";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

export const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      title,
      publishedAt,
      channelTitle,
      thumbnails: { medium },
    },
    contentDetails
  } = video;

  const [views, setviews] = useState(null);
  const [duration, setduration] = useState(null);
  const [channelicon, setchannelicon] = useState(null);
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  let _videoId = id?.videoId || contentDetails?.videoId || id ;
  const getvideodetails = async () => {
    const {data: { items }} = await request("/videos", {
      params: {
        part: "contentDetails,statistics",
        id: _videoId,
      },
    });
    setduration(items[0].contentDetails.duration);
    setviews(items[0].statistics.viewCount);
  };
  useEffect(() => {
    getvideodetails();
  }, [_videoId]);
  const getchannelicon = async () => {
    const {data: { items }} = await request("/channels", {
      params: { part: "snippet", id: channelId },
    });
    setchannelicon(items[0].snippet.thumbnails.default);
  };
  useEffect(() => {
    getchannelicon();
  }, [channelId]);
  let navigate = useNavigate()
let handlevideoClick = ()=>{
navigate(`./watch/${_videoId}`)
}
  return (
    <div className="video" onClick={handlevideoClick}>
      <div className="videotop w-full h-48 bg-gray-100  rounded-xl overflow-hidden relative">
        <img src={medium.url} alt="" className="w-full h-full  object-cover cursor-pointer" />
        {/* <LazyLoadImage src={medium.url} effect="blur" /> */}
        <span className="absolute right-0 bottom-0 text-white font-bold bg-gray-600 opacity-70 p-1">
          {_duration}
        </span>
      </div>
      <div className="videologotitle flex py-3">
        <div className="channellogo rounded-full overflow-hidden w-2/12 h-14 bg-gray-100">
          <img
            src={channelicon?.url}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* <LazyLoadImage src={channelicon?.url} effect="blur" /> */}
        </div>
        <div className="videodetails ml-3 w-10/12">
          <h5 className="videotitle text-base font-semibold">{title}</h5>
          <p className="channelname text-sm text-gray-500">
            {channelTitle}
            <span>
              <CheckCircleRoundedIcon />
            </span>
          </p>
          <p className="channeldetails text-sm text-gray-500">
            {numeral(views).format("0.a")} views
            <span>{moment(publishedAt).fromNow()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
