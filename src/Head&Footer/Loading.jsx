import React from "react";
import './Loading.css'
const Loading = () => {
  return (
    <div class="loading-screen flex gap-5">
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Loading please wait...</p>
    </div>
  );
};

export default Loading;
