import React, { useState } from "react";
import "./Header.scss";
import Logo from "../img/YouTube_Logo.png";
import MicIcon from "@material-ui/icons/Mic";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
export const Header = ({ hambargermenu }) => {
  let [input, setInput] = useState("");
  let nevigate = useNavigate();
  //search functionality
  let handlesubmit = (e) => {
    e.preventDefault();
    nevigate(`/search/${input}`);
    setInput("");
  };
  // mobile search handle
  let [mobilesearch, setmobilesearch] = useState(false);
  let mobilesearchhandle = () => {
    if (mobilesearch === false) {
      setmobilesearch(true);
    } else {
      setmobilesearch(false);
    }
  }; 

  return (
    <div className="header w-full flex justify-between p-2 px-0 fixed top-0 left-0 bg-white">
      <div className="logomenu w-5/12 sm:w-2/12 flex justify-center items-center">
        <div
          className="menu h-10 w-10 hover:bg-gray-200  hover:rounded-full"
          onClick={hambargermenu}
        >
          <span>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon mx-auto mt-2 w-6 h-6"
            >
              <g class="style-scope yt-icon">
                <path
                  d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </span>
        </div>
        <div className="logo ml-2 md:ml-6 flex ">
          <NavLink to="/">
            <img
              src={Logo}
              alt="logo"
              className="inline-block cursor-pointer"
            />
          </NavLink>
          <sup className="text-xs pl-1">IN</sup>
        </div>
      </div>
      <div className="searchbar w-5/12 md:w-6/12 flex justify-center items-center">
        <div className="search w-11/12  overflow-hidden">
          <form action="" onSubmit={handlesubmit} className="flex justify-end">
            <input
              className="w-10/12  p-2 px-4 order-2 hidden sm:flex"
              type="text"
              placeholder="Search"
              id="search"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />

            {/* <label for="search" className="text-center w-12">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon w-6 h-6 m-auto mt-2 ml-3"
            >
                <g class="style-scope yt-icon">
                <path
                  d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                  class="style-scope yt-icon"
                ></path>
               </g>
              </svg>
            </label> */}

            <button
              className="searchicon w-16 text-center order-3"
              onClick={mobilesearchhandle}
            >
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                class="style-scope yt-icon w-6 h-6 m-auto  "
              >
                <g class="style-scope yt-icon">
                  <path
                    d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                    class="style-scope yt-icon"
                  ></path>
                </g>
              </svg>
            </button>
          </form>
        </div>
        <div className="record w-1/12 ml-4 hidden sm:block ">
          <MicIcon className="h-6 w-6" />
        </div>
      </div>
      {mobilesearch ? (
        <div className="searchbarforphone w-full flex justify-center items-center bg-white absolute top-0 left-0 sm:hidden p-2">
          <form
            action=""
            onSubmit={handlesubmit}
            className="w-full"
            onMouseLeave={mobilesearchhandle}
          >
            <div className="searche w-full overflow-hidden flex justify-between  items-center rounded-lg border border-gray-400">
              <input
                className="w-10/12  p-2 px-4  order-2  sm:flex"
                type="text"
                placeholder="Search"
                id="search"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button className="searchicone  w-16 text-center order-3">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  class="style-scope yt-icon w-6 h-6 m-auto  "
                >
                  <g class="style-scope yt-icon">
                    <path
                      d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                      class="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </form>
          <div className="record w-1/12 ml-4  ">
            <MicIcon className="h-6 w-6" />
          </div>
        </div>
      ) : null}
      <div className="righticon w-2/12 flex justify-center items-center">
        <span className="hidden md:block">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon w-6 h-6 m-auto"
          >
            <g class="style-scope yt-icon">
              <path
                d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </span>
        <span className="mx-6 hidden sm:block">
          <NotificationsNoneRoundedIcon />
        </span>
        <div className="profile w-12 h-12 bg-grey rounded-full overflow-hidden"><img src={''} className="w-full h-full object-cover" alt="" /></div>
      </div>
    </div>
  );
};
