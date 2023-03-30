import React from "react";
import Logo from "../img/YouTube_Logo.png";
import "./Sidebar.scss";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logout } from "../../redux/Actions/Auth_action";
import { useDispatch } from "react-redux";
export const Sidebar = ({ hambargermenu, hambargar }) => {
  const dispatch= useDispatch()
  let logouthandler = ()=>{
dispatch(logout())
  }
  return (
    <div className="mainsidebar ">
      <div className="sidebar pl-1 fixed bg-white  left-0 bottom-0 w-full md:w-1/12 md:fixed">
        <ul className="text-center mt-5 w-full flex justify-around  md:flex-col md:justify-start">
          <li>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon w-6 h-6 mx-auto"
            >
              <g class="style-scope yt-icon">
                <path
                  d="M4,10V21h6V15h4v6h6V10L12,3Z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>

            <span className="block">Home</span>
          </li>
          <li>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon w-6 h-6 mx-auto"
            >
              <g
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="style-scope yt-icon"
              >
                <path
                  d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <span className="block">Shorts</span>
          </li>
          <li>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon w-6 h-6 mx-auto"
            >
              <g class="style-scope yt-icon">
                <path
                  d="M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <span className="block">Subscriptions</span>
          </li>
          <li>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon h-6 w-6 mx-auto"
            >
              <g class="style-scope yt-icon">
                <path
                  d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <span className="block">Libary</span>
          </li>
        </ul>
      </div>

      <div
        className="togglesideparent fixed w-full h-screen top-0 left-0 "
        style={hambargar ? { display: "block" } : { display: "none" }}
      >
        <div
          className={hambargar? "togglesidebar w-60 h-screen bg-white px-5 py-2 transition overflow-y-scroll absolute top-0 sidebar-visible" :  "togglesidebar w-60 h-screen bg-white px-5 py-2  overflow-y-scroll absolute top-0 sidebar-hidden" }
          
        >
          <div className="logomenu w-full flex justify-center items-center ">
            <div
              className="menu h-10 w-12 px-2 cursor-pointer"
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
            <div className="logo ml-4">
              <img
                src={Logo}
                alt="logo"
                className="inline-block cursor-pointer w-8/12 "
              />
              <sup className="text-xs pl-1">IN</sup>
            </div>
          </div>
          <ul className="text-sm mt-4">
            <li className="flex  font-semibold justify-start items-center rounded-lg bg-grey p-2">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon w-6 h-6 "
            >
              <g class="style-scope yt-icon">
                <path
                  d="M4,10V21h6V15h4v6h6V10L12,3Z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
              <span className="ml-5">Home</span>
            </li>
            <li className="flex justify-start items-center hover:rounded-lg hover:bg-grey hover:font-semibold p-2">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon w-6 h-6"
            >
              <g
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="style-scope yt-icon"
              >
                <path
                  d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
              <span className="ml-5">Shorts</span>
            </li>
            <li className="flex justify-start items-center hover:rounded-lg hover:bg-grey hover:font-semibold p-2">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon w-6 h-6"
            >
              <g class="style-scope yt-icon">
                <path
                  d="M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
              <span className="ml-5">Subcriptions</span>
            </li>
          <hr className=" w-full bg-gray-300 mt-4 "/>
          </ul>
          <ul className="setting text-sm mt-4">
           
            <li className="flex justify-start items-center hover:rounded-lg hover:bg-grey hover:font-semibold p-2">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon w-6 h-6"><g class="style-scope yt-icon"><path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z" class="style-scope yt-icon"></path></g></svg>
              <span className="ml-5">Libary</span>
            </li>
     
            <li className="flex justify-start items-center hover:rounded-lg hover:bg-grey hover:font-semibold p-2">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon h-6 w-6"><g class="style-scope yt-icon"><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z" class="style-scope yt-icon"></path></g></svg>
              <span className="ml-5">History</span>
            </li>
            <li className="flex justify-start items-center hover:rounded-lg hover:bg-grey hover:font-semibold p-2">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon h-6 w-6" ><g class="style-scope yt-icon"><path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z" class="style-scope yt-icon"></path></g></svg>
              <span className="ml-5">Your videos</span>
            </li>
            <li className="flex justify-start items-center hover:rounded-lg hover:bg-grey hover:font-semibold p-2">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon w-6 h-6"><g class="style-scope yt-icon"><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path></g></svg>
              <span className="ml-5">Watch later</span>
            </li>
            <li className="flex justify-start items-center hover:rounded-lg hover:bg-grey hover:font-semibold p-2">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon w-6 h-6" ><g class="style-scope yt-icon"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" class="style-scope yt-icon"></path></g></svg>
              <span className="ml-5">Liked videos</span>
            </li>
            <li className="flex justify-start items-center hover:rounded-lg hover:bg-grey hover:font-semibold p-2">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon h-6 w-6" ><g class="style-scope yt-icon"><path d="M12,15.7L5.6,9.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,15.7z" class="style-scope yt-icon"></path></g></svg>
              <span className="ml-5">Show more</span>
            </li>
             
           <hr className=" w-full bg-gray-300 mt-4 "/>
          </ul>
          <ul className="setting text-sm mt-4">
           
            <li className="flex justify-start items-center hover:rounded-lg hover:bg-grey hover:font-semibold p-2" onClick={logouthandler}>
            <ExitToAppIcon/>
              <span className="ml-5">Logout</span>
            </li>
     
         
             
           
          </ul>
        </div>
      </div>
      

    </div>
  );
};

