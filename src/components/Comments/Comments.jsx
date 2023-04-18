import React, { useEffect, useState } from "react";
import "./Comments.scss";
import { SingleComment } from "../SingleComment/SingleComment";
import { useDispatch, useSelector } from "react-redux";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  addComment,
  getcommentVideobyId,
} from "../../redux/Actions/Commentsaction";

export const Comments = ({ videoId, totalComments }) => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcommentVideobyId(videoId));
  }, [videoId, dispatch]);

  const comments = useSelector((state) => state.CommentList.comments);
  const {photo} = useSelector(state=>state.auth?.user)
  console.log(photo)
  const _comments = comments
    ? comments.map((comment) => comment.snippet.topLevelComment.snippet)
    : [];
  const [text, setText] = useState("");
  let handlecomment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;
    dispatch(addComment(videoId, text));
    setText("");
  };

  let [screen, setscreen] = useState(false);
  let setcommentforsmallscreen = () => {
    if (screen === false) {
      setscreen(true);
    } else {
      setscreen(false);
    }
  };
  return (
    <div
      className={screen?"comments w-full  relative":"comments w-full relative h-14 overflow-hidden lg:overflow-auto lg:h-auto"}
    >
      <div
        className="absolute top-0  right-4 lg:hidden"
        onClick={setcommentforsmallscreen}
      >
        <span className="block">
          <ExpandLessIcon />
        </span>
        <ExpandMoreIcon className="-translate-y-3" />
      </div>
      <div className="comments_top w-full my-2">
        <div className="comment_sort flex w-full">
          <p className="w-3/12">{totalComments} Comments</p>
          <p className="text-lg font-semibold  items-center hidden sm:flex">
            <span>
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                class="style-scope yt-icon w-6 h-6"
              >
                <g class="style-scope yt-icon">
                  <path
                    d="M21,6H3V5h18V6z M15,11H3v1h12V11z M9,17H3v1h6V17z"
                    class="style-scope yt-icon"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="ml-2">Sort by</span>
          </p>
        </div>
      </div>
      <div className="comments_form w-full flex items-center ">
        <div className="comments_profile w-10 h-10 rounded-full bg-grey ">
          <img src={''} alt="" />
        </div>
        <form
          action=""
          className="w-11/12  ml-4 mb-2 relative"
          onSubmit={handlecomment}
        >
          <input
            type="text"
            placeholder="Add a comment..."
            className="my-2 w-full placeholder-black text-sm pb-3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="absolute -bottom-12 right-0 text-sm p-1 px-2 bg-grey rounded-lg lg:hidden">
            post
          </button>
        </form>
      </div>
      <div className="comments_list w-full">
        {_comments.map((comment, index) => (
          <SingleComment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};
