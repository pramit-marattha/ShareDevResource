import React from "react";
// import * as db from "../firestore";

function ItemList() {
  return (
    <section className="text-gray-500 body-font bg-gray-900">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap -m-4">{/* display items in list */}</div>
      </div>
    </section>
  );
}

function Item() {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-800 p-6 rounded-lg">
        <a href="#" target="_blank" rel="noopener noreferer">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="image"
            alt="content"
          />
        </a>
        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
          Username
        </h3>
        <h2 className="text-lg text-white font-medium title-font mb-4">Name</h2>
        <div className="flex items-center justify-between">
          <span className="leading-relaxed text-base">Posted date</span>
          <button className="inline-flex text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
