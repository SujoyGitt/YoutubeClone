import React, { useEffect, useState } from "react";
import "./Video.scss";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import moment from "moment";
import { request } from "../../api";
import numeral from "numeral";
export const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      title,
      publishedAt,
      channelTitle,
      thumbnails: { medium }
    },
  } = video;

  const [views, setviews] = useState(null);
  const [duration, setduration] = useState(null);
  const [channelicon, setchannelicon] = useState(null);
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format('mm:ss')

  useEffect(() => {
    const getvideodetails = async () => {
      const {data: { items }} = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id
        },
      });
      setduration(items[0].contentDetails)
      setviews(items[0].statistics.viewCount)
    };
    getvideodetails();
  }, [id]);

  useEffect(() => {
    const getchannelicon = async () => {
      const {data: { items }} = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId
        },
      });
      setchannelicon(items[0].snippet.thumbnails.default)
    };
    getchannelicon();
  }, [id]);

  return (
    <div className="video">
      <div className="videotop w-full h-48 bg-gray-100  rounded-xl">
        <img src={medium.url} alt="" className="w-full h-full  object-cover" />
      </div>
      <div className="videologotitle flex py-3">
        <div className="channellogo bg-yellow-200 rounded-full">
          <img src={channelicon?.url} alt="" />
        </div>
        <div className="videodetails ml-3 ">
          <h5 className="videotitle text-base font-semibold">
            {title}
          </h5>
          <p className="channelname text-sm text-gray-500">
            {channelTitle }
            <span>
              <CheckCircleRoundedIcon />
            </span>
          </p>
          <p className="channeldetails text-sm text-gray-500">
            {numeral(views).format("0.a")}  views <span>{moment(publishedAt).fromNow()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
