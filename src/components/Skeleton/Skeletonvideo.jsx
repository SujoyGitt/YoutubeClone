import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export const Skeletonvideo = () => {
  return (
    <div className="w-80 m-auto my-4">
      <SkeletonTheme color="#343a40" highlightColor="#b1b1b1">
        <Skeleton height={180} />
        <div className="flex">
          <Skeleton style={{ margin: "0.5rem" }} circle width={40} height={40}/>
          <Skeleton style={{ margin: "0.5rem" }}  width={240} height={40}/>
        </div>
      </SkeletonTheme>
    </div>
  );
};
