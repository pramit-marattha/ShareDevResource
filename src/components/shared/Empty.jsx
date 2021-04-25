import React from "react";
import emptySvg from "../../../static/empty.svg";

function Empty() {
  return (
    <div className="container mx-auto flex px-2 py-6 items-center justify-center flex-col">
      <h1 className="title-font sm:text-xl text-2xl mb-4 font-medium text-white">
        You have no lists. Create a new one!
      </h1>
      <img
        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src={emptySvg}
      />
    </div>
  );
}

export default Empty;
