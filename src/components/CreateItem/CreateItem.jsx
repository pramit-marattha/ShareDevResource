import React from "react";
// import * as db from "../firestore";
// import Error from "./shared/Error";

function CreateItem() {
  return (
    <>
      <form className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
        <input
          className="flex-grow w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          name="name"
          placeholder="Add item name"
          type="text"
        />
        <input
          className="flex-grow w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          name="link"
          placeholder="Add link"
          type="url"
          required
        />
        <button
          type="submit"
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Create
        </button>
      </form>
      {/* display error */}
    </>
  );
}

export default CreateItem;
