import React, { useCallback, useState, useEffect } from "react";
import homeSvg from "../../../static/home.svg";
import * as db from "../../firestore";

function Register() {
  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await db.firebaseApp
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  });

  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await db.firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      // history.push("/");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  });

  return (
    <div>
      <section className="text-gray-300 bg-gray-950 body-font">
        <div className="container mx-auto flex px-5 py-7 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium italic text-white">
              Share Dev Resources
            </h1>
          </div>
          <img
            className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={homeSvg}
          />
          <div className="text-center lg:w-2/3 w-full">
            {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium italic text-white">
              Share Dev Resources
            </h1> */}
            <p className="leading-relaxed mb-8 ">
              ShareDev Resource is a social app that helps you to share your
              developer resource lists with friends, family and other developers
              in realtime.Login and register by clicking the button below and
              access tons of helpful and awesome resources and also you can post
              and provide tons of awesome resources for others all for
              completely free of cost.
            </p>
            <div className="flex justify-center">
              <button
                onClick={db.signInWithGoogle}
                className="inline-flex text-black bg-green-400 border-0 py-1 px-6 focus:outline-none hover:bg-green-600 rounded-full text-lg"
              >
                <img
                  src="https://media0.giphy.com/media/2epS8zhisYtHDCKrWv/giphy.gif"
                  style={{
                    width: "10%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    dispaly: "block",
                  }}
                  alt="google logo"
                />
                {/* Login With Google */}
              </button>
            </div>
          </div>
          <div className="text-center text-3xl border-dashed border-4 border-green-500 m-4 p-3">
            OR
          </div>
          <div className="flex">
            <div className="flex-initial">
              <h1 className="text-center text-3xl">Register</h1>
              <form
                onSubmit={handleSignUp}
                className="w-full max-w-xs m-auto bg-green-100 rounded p-5"
              >
                <label className="block mb-2 text-green-500">
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 mb-6 text-green-700 border-b-2 border-green-500 outline-none focus:bg-gray-300"
                  />
                </label>
                <label className="block mb-2 text-green-500">
                  Password
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 mb-6 text-green-700 border-b-2 border-green-500 outline-none focus:bg-gray-300"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-6 rounded"
                >
                  Sign Up
                </button>
              </form>
            </div>
            {/*  */}
            <div className="flex-initial ml-5">
              <h1 className="text-center text-3xl">Log in</h1>
              <form
                onSubmit={handleLogin}
                className="w-full max-w-xs m-auto bg-green-100 rounded p-5"
              >
                <label className="block mb-2 text-green-500">
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 mb-6 text-green-700 border-b-2 border-green-500 outline-none focus:bg-gray-300"
                  />
                </label>
                <label className="block mb-2 text-green-500">
                  Password
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 mb-6 text-green-700 border-b-2 border-green-500 outline-none focus:bg-gray-300"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-6 rounded"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
