import React from "react";
import homeSvg from "../../../static/home.svg";
import * as db from "../../firestore";

function Register() {
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
        </div>
      </section>
    </div>
  );
}

export default Register;
