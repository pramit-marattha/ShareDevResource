import React, { useState, useEffect } from "react";
import * as db from "../../firestore";

function CreateList({ user }) {
  const [list, setList] = useState({ name: "", description: "", image: null });

  function handleChange(event) {
    const { name, value, files } = event.target;
    if (files) {
      const image = files[0];
      setList((prevState) => ({ ...prevState, image }));
    } else {
      setList((prevState) => ({ ...prevState, [name]: value }));
    }
  }

  function handleCreateTopicLists() {
    // console.log(list);
    db.createTopicLists(list, user);
  }
  return (
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="text-3xl font-medium title-font mb-4 text-white tracking-widest">
        ShareDevResource 📚
      </h1>
      <p className="lg:w-2/3 mx-auto mb-12 leading-relaxed text-base">
        "{user.displayName.split(" ")[0]}" lets get started,create a list and
        add image about the related topics.
      </p>
      <div className="lg:w-5/6 mx-auto md:w-1/2 bg-green-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <input
          className="bg-gray-900 rounded-xl border text-white border-gray-900 focus:outline-none focus:border-green-500 text-base px-4 py-3 mb-4"
          placeholder="Enter topic name"
          type="text"
          name="name"
          onChange={handleChange}
          required
        />
        <textarea
          className="bg-gray-900 rounded-xl border text-white border-gray-900 focus:outline-none focus:border-green-500 text-base px-4 py-4 mb-4"
          placeholder="short description"
          type="text"
          name="description"
          onChange={handleChange}
        />
        <input
          className="bg-gray-900 rounded-xl border text-white border-gray-900 focus:outline-none focus:border-green-500 text-base px-4 py-3 mb-4"
          placeholder="Add topic name"
          type="file"
          name="image"
          onChange={handleChange}
        />
        {list.image && (
          <img className="mb-4" src={URL.createObjectURL(list.image)} />
        )}
        <button
          onClick={handleCreateTopicLists}
          className="text-white rounded-full bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          ➕ Create
        </button>
        <p className="text-xs text-gray-600 mt-3">*Topic name is required</p>
      </div>
    </div>
  );
}

export default CreateList;
