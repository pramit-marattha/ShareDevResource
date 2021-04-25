import React from "react";
import "../../../static/loading.css";

function Loading() {
  return (
    <div className="spinner-container">
      <div className="lds-dual-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
