import React from "react";
import "./SingleComments.scss";
import moment from "moment";
export const SingleComment = ({comment}) => {
  const {authorDisplayName,publishedAt,authorProfileImageUrl,textDisplay} = comment;
  return (
    <div className="singlecomment w-10/12 flex mt-5">
      <div className="profileimg w-12 h-12 bg-grey rounded-full overflow-hidden">
        <img src={authorProfileImageUrl} alt="" />
      </div>
      <div className="profile_title_comment ml-4">
        <div className="profile_name text-sm font-semibold">
          {authorDisplayName}
          <span className="comment_time text-gray-500 font-light ml-2">
            {moment({publishedAt}).fromNow()}
          </span>
        </div>
        <div className="profile_commment text-sm my-1 ">
         {textDisplay}
        </div>
        <div className="comment_reaction flex mt-2">
          <p className="flex items-center">
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
            <span className="ml-2 text-sm"> 3</span>
            <span className="ml-3">
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                class="style-scope yt-icon w-6 h-6 text-grey inline rotate-180"
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
          <span className="ml-8 text-sm">Reply</span>
        </div>
      </div>
    </div>
  );
};
