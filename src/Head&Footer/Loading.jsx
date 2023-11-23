import React from "react";
import './Loading.css'
const Loading = () => {
  return (
    <div class="loading-screen flex gap-5 items-center justify-center">
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="sm:text-base text-[10px]">Loading please wait...</p>
    </div>
  );
};

export default Loading;
