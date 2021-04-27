import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import topicBack from "../../../static/topicBack.svg";
import * as db from "../../firestore";
import Empty from "../shared/Empty";
import Error from "../shared/Error";
import Loading from "../shared/Loading";
import useSWR from "swr";

function Lists({ user }) {
  const { data: topiclists, error } = useSWR(user.uid, db.getUserTopiclists);
  if (error) return <Error message={error.message} />;
  if (!topiclists) return <Loading />;
  if (topiclists.length === 0) return <Empty />;

  console.log("topiclists", user);

  return (
    <>
      <UserListCount count={topiclists.length} />
      <section className="text-gray-500 bg-gray-900 body-font">
        <div className="container px-10 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {topiclists.map((topic) => (
              <ListItem key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </section>
      <UserListCountDown count={topiclists.length} />
    </>
  );
}

function UserListCountDown({ count }) {
  return (
    <div className="container px-5 py-5 mb-8 bg-gray-800 rounded-b-full mx-auto flex justify-center text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <p className="leading-relaxed">Total</p>
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
          {count}
        </h2>
        <p className="leading-relaxed">Topics</p>
      </div>
    </div>
  );
}

function UserListCount({ count }) {
  return (
    <div className="container px-5 py-5 mb-5 bg-gray-800 rounded-t-full mx-auto flex justify-center text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="text-green-500 w-1/4 h-1/4 mb-3 inline-block"
          viewBox="0 0 520 520"
        >
          {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> */}
          <path
            clip-rule="evenodd"
            d="m158.205 495.22h293.268l28.04-53.581-28.04-53.61h-293.268z"
            fill="#ffd772"
          />
          <path
            clip-rule="evenodd"
            d="m158.205 495.22v-107.191-4.108c0-2.844-2.327-5.143-5.171-5.143h-115.405c-2.844 0-5.143 2.298-5.143 5.143v115.408c0 2.816 2.27 5.143 5.085 5.171h.057 115.405.057c2.815-.029 5.114-2.356 5.114-5.171v-4.109z"
            fill="#f9f7f8"
          />
          <path
            clip-rule="evenodd"
            d="m37.629 318.847h115.405c2.844 0 5.171-2.327 5.171-5.143v-4.108-107.22-4.08c0-2.844-2.327-5.171-5.171-5.171h-115.405c-2.844 0-5.143 2.327-5.143 5.171v115.408c0 2.816 2.299 5.143 5.143 5.143z"
            fill="#f9f7f8"
          />
          <path
            clip-rule="evenodd"
            d="m158.205 202.375v107.221h293.268l28.04-53.61-28.04-53.611z"
            fill="#75cef8"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="m158.205 123.943h293.268l28.04-53.582-28.04-53.61h-293.268z"
            fill="#eb5468"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="m158.205 123.943v-107.192-4.108c0-2.844-2.327-5.143-5.171-5.143h-115.405c-2.844 0-5.143 2.298-5.143 5.143v115.408c0 2.844 2.298 5.171 5.143 5.171h115.405c2.844 0 5.171-2.327 5.171-5.171z"
            fill="#f9f7f8"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="m121.719 16.751v107.192 4.108c0 2.844-2.327 5.171-5.171 5.171h36.486c2.844 0 5.171-2.327 5.171-5.171v-4.108-107.192-4.108c0-2.844-2.327-5.143-5.171-5.143h-36.486c2.844 0 5.171 2.298 5.171 5.143z"
            fill="#dddaec"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="m153.034 193.124h-36.486c2.844 0 5.171 2.327 5.171 5.171v4.08 107.22 4.108c0 2.816-2.327 5.143-5.171 5.143h36.486c2.844 0 5.171-2.327 5.171-5.143v-4.108-107.22-4.08c0-2.843-2.327-5.171-5.171-5.171z"
            fill="#dddaec"
          />
          <path
            clip-rule="evenodd"
            d="m153.034 378.778h-36.486c2.844 0 5.171 2.298 5.171 5.143v4.108 107.191 4.108c0 2.816-2.298 5.143-5.114 5.171h36.429.057c2.815-.029 5.114-2.356 5.114-5.171v-4.108-107.191-4.108c0-2.845-2.327-5.143-5.171-5.143z"
            fill="#dddaec"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="m405.851 16.751c6.665 18.387 10.4 38.872 10.4 60.477 0 16.376-2.126 32.091-6.062 46.715h41.284l28.04-53.581-28.04-53.61h-45.622z"
            fill="#e5384f"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="m405.851 202.375c6.665 18.387 10.4 38.872 10.4 60.505 0 16.347-2.126 32.063-6.062 46.715h41.284l28.04-53.61-28.04-53.61z"
            fill="#60b7ff"
          />
          <path
            clip-rule="evenodd"
            d="m405.851 388.029c6.665 18.387 10.4 38.872 10.4 60.477 0 16.347-2.126 32.091-6.062 46.715h41.284l28.04-53.581-28.04-53.61h-45.622z"
            fill="#fbba58"
          />
          <path d="m37.629 140.723h115.405c5.811 0 10.708-3.937 12.196-9.28h286.243c2.791 0 5.351-1.55 6.646-4.022l28.04-53.581c1.14-2.178 1.14-4.775 0-6.954l-28.04-53.61c-1.293-2.474-3.854-4.024-6.646-4.024h-124.512c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h119.972l24.116 46.109-24.115 46.082h-281.229v-92.192h126.177c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-126.653c-1.491-5.327-6.387-9.251-12.195-9.251h-115.405c-6.971 0-12.643 5.671-12.643 12.643v115.408c0 6.987 5.672 12.672 12.643 12.672zm2.357-125.723h110.719v110.723h-110.719z" />
          <path d="m458.119 198.899c-1.293-2.474-3.854-4.024-6.646-4.024h-286.25c-1.498-5.328-6.388-9.251-12.189-9.251h-115.405c-6.971 0-12.643 5.685-12.643 12.671v115.408c0 6.971 5.671 12.643 12.643 12.643h115.405c5.808 0 10.703-3.924 12.194-9.251h286.245c2.792 0 5.352-1.55 6.646-4.024l28.04-53.61c1.14-2.177 1.14-4.775 0-6.952zm-307.414 112.448h-110.719v-110.722h110.719zm296.227-9.251h-281.227v-92.22h281.227l24.117 46.11z" />
          <path d="m101.235 35.251h-11.807c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h4.308v47.69c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-55.19c-.001-4.142-3.358-7.5-7.501-7.5z" />
          <path d="m110.39 276.498c-4.646.06-9.543.103-13.881.121 2.92-3.94 6.738-9.202 11.643-16.212 3.621-5.164 5.993-10.067 7.051-14.573.063-.27.112-.543.145-.819l.259-2.155c.036-.297.054-.596.054-.895 0-11.914-9.705-21.606-21.635-21.606-10.322 0-19.241 7.336-21.209 17.443-.792 4.066 1.863 8.004 5.928 8.795 4.069.793 8.004-1.862 8.795-5.928.599-3.077 3.327-5.311 6.486-5.311 3.535 0 6.434 2.768 6.625 6.241l-.14 1.164c-.491 1.852-1.7 4.838-4.644 9.037-8.766 12.528-13.971 19.334-16.767 22.992-3.469 4.538-5.38 7.037-4.145 11.105.735 2.419 2.553 4.283 5.032 5.128 1 .333 1.849.617 12.635.617 4.244 0 10.026-.044 17.96-.146 4.142-.053 7.457-3.454 7.403-7.596-.053-4.141-3.447-7.488-7.595-7.402z" />
          <path d="m95.346 405.869c-10.291 0-19.22 7.335-21.231 17.441-.809 4.062 1.829 8.011 5.891 8.82 4.066.812 8.012-1.829 8.82-5.891.62-3.112 3.362-5.37 6.521-5.37 3.643 0 6.606 2.977 6.606 6.635 0 3.659-2.963 6.635-6.606 6.635-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c3.643 0 6.606 2.964 6.606 6.606 0 3.659-2.963 6.635-6.606 6.635-3.294 0-6.115-2.441-6.554-5.62-.058-.442-.081-.736-.081-1.015 0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5c0 .944.063 1.854.214 3.008 1.467 10.619 10.675 18.627 21.421 18.627 11.914 0 21.606-9.706 21.606-21.635 0-5.391-1.989-10.323-5.265-14.112 3.276-3.794 5.265-8.732 5.265-14.13-.001-11.929-9.694-21.634-21.607-21.634z" />
          <path d="m199.317 60.02h46.254c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-46.254c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z" />
          <path d="m199.317 96.852h94.03c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-94.03c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z" />
          <path d="m199.317 244.438h46.254c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-46.254c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z" />
          <path d="m293.347 266.298h-94.03c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h94.03c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z" />
          <path d="m199.317 431.24h46.254c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-46.254c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z" />
          <path d="m199.317 468.072h94.03c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-94.03c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z" />
          <path d="m458.119 384.553c-1.294-2.474-3.854-4.024-6.646-4.024h-124.512c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h119.972l24.116 46.109-24.115 46.083h-281.229v-92.191h126.177c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-126.653c-1.491-5.327-6.386-9.251-12.194-9.251h-115.406c-6.971 0-12.643 5.672-12.643 12.643v115.408c0 6.987 5.671 12.671 12.643 12.671h115.405c5.811 0 10.708-3.937 12.196-9.28h286.243c2.791 0 5.351-1.55 6.646-4.022l28.04-53.582c1.14-2.178 1.14-4.776 0-6.954zm-307.414 112.447h-110.719v-110.723h110.719z" />
        </svg>
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
          {/* {count} */}
        </h2>
        <p className="leading-relaxed">Topic Lists</p>
      </div>
    </div>
  );
}

function ListItem({ topic }) {
  const { id, name, description, image, users } = topic;
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-1">
      {" "}
      <Link to={`/${id}`}>
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-auto h-auto object-cover object-center"
            src={image || topicBack}
          />
          <div className="px-8 py-1 relative z-10 w-full border-4 border-green-700 bg-green-800 opacity-0 hover:opacity-100">
            <ul className="list-disc">
              <li className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                {users[0].name}{" "}
                {users.length > 1 && `+ ${users.length - 1} others devlopers`}
              </li>
            </ul>
            <h1 className="title-font text-lg font-medium text-blue-500 mb-3">
              {name}
            </h1>
            <p className="leading-relaxed text-gray-400">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Lists;
