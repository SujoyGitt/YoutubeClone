import React, { useEffect, useState } from "react";
import "./Category.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {useDispatch} from "react-redux"
import { getPopularvideos, getVideosCategory } from "../../redux/Actions/videos_action";
const keywords = [
  "All",
  "React js",
  "CodeWithSuju",
  "3 Ediot Blog",
  "javascript",
  "use of API",
  "Songs",
  "coding",
  "Art",
  "Guiter",
  "News",
  "Technology",
  "Entertainment",
  "Motivation",
  "fitness",
  "Helth",
  "Blog",
  "Bengali",
];
export const Category = () => {
  const [activeelement, setactiveelement] = useState("All");
  let dispatch = useDispatch();

  const handleclick = (value) => {
    setactiveelement(value);
    if(value === "All"){
      dispatch(getPopularvideos())
    }else{
      dispatch(getVideosCategory(value))
    }
  };
  


  // Draggable effect on scroll
  useEffect(() => {
    var carousel = document.querySelector(".Category");
    var h = false;
    let k;
    let pp;

    carousel.addEventListener("mousedown", function (e) {
      h = true;
      k = e.pageX;
      pp = carousel.scrollLeft;
      
    });
    // ====

    carousel.addEventListener("mousemove", function (e) {
      e.preventDefault();
      if (!h) return;
      carousel.scrollLeft = pp - (e.pageX - k);
    });
    // ====
    carousel.addEventListener("mouseup", function () {
      h = false;
    });
    carousel.addEventListener("mouseleave", function () {
      h = false;
    });
  });


  return (
    <div className="Categoryparent w-full flex justify-around items-center">
      <div className="Category w-11/12">
        {keywords.map((value,index) => {
          return (
              <span
                className={activeelement === value ? "active" : ""}
                key={index}
                onClick={() => handleclick(value)}>
                {value}
              </span>
          );
        })}
      </div>
      <div className="rightarrow w-1/12 cursor-pointer text-center">
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};
