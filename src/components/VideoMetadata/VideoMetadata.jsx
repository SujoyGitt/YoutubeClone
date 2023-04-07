import React, { useEffect } from "react";
import "./VideoMetadata.scss";
import numeral from "numeral";
import moment from "moment";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShareIcon from "@material-ui/icons/Share";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ShowMoreText from "react-show-more-text";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSubscriptionStatus,
  getchannelDetails,
} from "../../redux/Actions/ChannelAction";
export const VideoMetadata = ({ video: { snippet, statistics } }, videoId) => {
  const { channelId, description, channelTitle, title, publishedAt } = snippet;
  const { viewCount, likeCount } = statistics;
  const [anchorEl, setAnchorEl] = React.useState(null);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getchannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  const { snippet: channelsnippet, statistics: channelstatics } = useSelector(
    (state) => state.channelDetails.channel
  );

  const { subcriptionStatus } = useSelector(
    (state) => state.channelDetails.subcriptionStatus
  );
  
  //this is open menu toggle function
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="VideoMetadata w-full">
      <h1 className="videotitle font-bold text-xl">{title}</h1>
      <div className="videometadata-channel w-full">
        <div className="videometa_data_top w-full flex items-center my-3">
          <div className="channel_logo_name  w-3/12 flex items-center">
            <div className="channel_logo_img whitespace-nowrap rounded-full bg-grey overflow-hidden">
              <img src={channelsnippet?.thumbnails?.default?.url} alt="" />
            </div>
            <div className="channel_name-subs ml-2">
              <h1 className="channel_Name font-semibold ">{channelTitle}.</h1>
              <p className="text-sm text-gray-500">
                <span>
                  {numeral(channelstatics?.subscriberCount).format("0.a")}
                </span>
                subscr...
              </p>
            </div>
          </div>
          <div className="channel_features  w-9/12 p-2  flex justify-between">
            <p>Join</p>
            <div className="flex items-center">
              <span>
                <NotificationsNoneOutlinedIcon />
              </span>
              {subcriptionStatus ? "Subscribed" : "Subscribe"}
              <div>
                <span onClick={handleClick} className="inline-block">
                  <ExpandMoreIcon />
                </span>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            </div>
            <p className="like_dislike">
              <span className="hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  class="style-scope yt-icon w-6 h-6 text-grey inline"
                >
                  <g class="style-scope yt-icon">
                    <path
                      d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
                      class="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
                {numeral(likeCount).format("0,a")}
              </span>
              <span className="px-2">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  class="style-scope yt-icon w-6 h-6 inline rotate-180 text-grey"
                >
                  <g class="style-scope yt-icon">
                    <path
                      d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
                      class="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
              </span>
            </p>
            <p>
              <span>
                <ShareIcon />
              </span>
              Share
            </p>
            <p>
              <span>
                <MonetizationOnIcon />
              </span>
              Thanks
            </p>
            <p>...</p>
          </div>
        </div>
        <div className="channel_description bg-grey p-4 rounded">
          <p className="view_time font-semibold text-gray-700">
            {numeral(viewCount).format("0.a")} views
            <span> {moment(publishedAt).fromNow()}</span>
          </p>
          <p className="description_details text-sm font-medium  text-gray-800">
            <ShowMoreText
              lines={3}
              more={"SHOW MORE"}
              less={"SHOW LESS"}
              anchorClass="show-more-less-clickable"
              // onClick={this.executeOnClick}
              expanded={false}
              // width={280}
              // truncatedEndingComponent={"... "}
            >
              {description}
            </ShowMoreText>
          </p>
        </div>
        <div className="channel_lisence w-full flex my-3">
          <p className="w-3/12 text-sm">Lincense</p>
          <p className="w-8/12 text-blue-500 font-semibold text-sm">
            Lorem ipsum dolor sit (amet consectetur).
          </p>
        </div>
      </div>
    </div>
  );
};
