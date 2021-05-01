import React from "react";
import * as db from "../../firestore";

function JoinList({ list, listId, user }) {
  function handleClick() {
    db.addUserToNewTopicList(user, listId);
  }
  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-orange-400 bg-gray-800 flex-shrink-0">
            {/* <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            </svg> */}
            <img
              className="rounded-full"
              src={user.photoURL}
              alt={user.displayName}
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h1 className="text-white text-3xl title-font font-large mb-2">
              {user.displayName.split(" ")[0]} you are invited to join{" "}
              <strong>{list.name}</strong>
            </h1>
            <ul className="leading-relaxed text-base">
              <p>Currently Active User:</p>
              {list.users.map((user) => (
                <li key={user.id} className="font-bold">
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="flex mx-auto mt-20 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
        >
          ✨ Accept Invitation
        </button>
      </div>
    </section>
  );
}

export default JoinList;
