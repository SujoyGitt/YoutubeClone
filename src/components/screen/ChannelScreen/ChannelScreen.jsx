import React from "react";
import "./ChannelScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideosbyChannel } from "../../../redux/Actions/videos_action";
import { useParams } from "react-router-dom";
import { Skeletonvideo } from "../../Skeleton/Skeletonvideo";
import { Video } from "../../Video/Video";
import { getchannelDetails } from "../../../redux/Actions/ChannelAction";
import numeral from "numeral";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

export const ChannelScreen = () => {
  let dispatch = useDispatch();
  const { channelId } = useParams();
  useEffect(() => {
    dispatch(getVideosbyChannel(channelId));
    dispatch(getchannelDetails(channelId))
  }, [dispatch, channelId]);
  const { videos, loading } = useSelector((state) => state.ChannelVideos);
  const { snippet, statistics } = useSelector((state) => state.channelDetails.channel);
 const { subcriptionStatus } = useSelector(
    (state) => state.channelDetails.subcriptionStatus
  );
  return (
    <>
     <div className="ChannelScreen w-full md:w-11/12 ">
    <div className="px-5 py-2 w-full ml-auto mt-14 flex-wrap flex justify-between items-center channelHeader">
      <div className="profile-details flex w-full md:w-8/12 flex-wrap sm:flex-nowrap justify-between items-center">
        <div className="profile-photo min-w-32 min-h-32 lg:h-32 lg:w-32 rounded-full overflow-hidden bg-grey m-auto sm:m-0">
          <img src={snippet?.thumbnails?.default?.url} alt="" className="w-full h-full object-cover "/>
        </div>
        <div className="profile-details ml-4">
          <div className="title text-2xl text-gray-500">{snippet?.title}</div>
          <div className="view my-2"><span className="font-medium">{snippet?.customUrl}</span> <span>{numeral(statistics?.subscriberCount).format('0,a')}</span> <span>{statistics?.videoCount} videos</span></div>
          <div className="description  text-gray-500 text-sm">{snippet?.description.slice(1,100)}...</div>
        </div>
      </div>
      <div className="flex items-center mt-3 sm:mt-3">
              <span>
                <NotificationsNoneOutlinedIcon />
              </span>
              {subcriptionStatus ? "Subscribed" : "Subscribe"}
            </div>
    </div>
      {/* channel details */}
        <div className="video_container w-full flex flex-wrap mt-4 gap-5  justify-center">
          {!loading ? (
            videos?.map((video) => <Video video={video} ChannelScreen />)
          ) : (
            [...Array(20)].map(()=> {return <Skeletonvideo/>})
          )}
        </div>
      </div>
    </>
  );
};
