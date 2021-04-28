import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as db from "../../firestore";
import useAuth from "../../hooks/useAuth";

function Navbar({ user }) {
  const { pathname } = useLocation();
  const isHomeRoute = pathname === "/";

  return (
    <header className="text-gray-500 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          {!isHomeRoute && (
            <Link to="/" className="mr-5 hover:text-white">
              Home
            </Link>
          )}
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="ml-3 text-1xl xl:block lg:hidden">
            {/* Hello! {user.displayName} */}
          </span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button
            onClick={db.logOut}
            className="inline-flex items-center text-red-600 font-bold bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Logout
            <svg
              fill="red"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-7 h-5 ml-3 mr-1"
              viewBox="0 0 490 450"
            >
              <path
                d="M461.248,194.736l-128-128c-24.928-24.96-65.568-24.96-90.496,0C230.656,78.8,224,94.896,224,111.984
			s6.656,33.184,18.752,45.248l82.752,82.752l-82.752,82.752C230.656,334.832,224,350.896,224,367.984s6.656,33.152,18.752,45.248
			c12.096,12.096,28.16,18.752,45.248,18.752s33.152-6.656,45.248-18.752l128-128C473.344,273.168,480,257.072,480,239.984
			S473.344,206.8,461.248,194.736z M438.624,262.608l-128,128c-12.128,12.096-33.12,12.096-45.248,0
			c-12.48-12.48-12.48-32.768,0-45.248l105.376-105.376L265.376,134.608c-6.048-6.048-9.376-14.08-9.376-22.624
			s3.328-16.576,9.376-22.624c6.24-6.24,14.432-9.376,22.624-9.376c8.192,0,16.384,3.136,22.624,9.344l128,128
			c6.048,6.08,9.376,14.112,9.376,22.656S444.672,256.56,438.624,262.608z"
              />

              <path
                d="M237.248,194.736l-128-128c-24.928-24.96-65.568-24.96-90.496,0C6.656,78.8,0,94.896,0,111.984
			s6.656,33.184,18.752,45.248l82.752,82.752l-82.752,82.752C6.656,334.832,0,350.896,0,367.984s6.656,33.152,18.752,45.248
			c12.096,12.096,28.16,18.752,45.248,18.752s33.152-6.656,45.248-18.752l128-128C249.344,273.168,256,257.072,256,239.984
			S249.344,206.8,237.248,194.736z M214.624,262.608l-128,128c-12.128,12.096-33.12,12.096-45.248,0
			c-12.48-12.48-12.48-32.768,0-45.248l105.376-105.376L41.376,134.608C35.328,128.56,32,120.528,32,111.984
			s3.328-16.576,9.376-22.624c6.24-6.24,14.432-9.376,22.624-9.376s16.384,3.136,22.624,9.344l128,128
			c6.048,6.08,9.376,14.112,9.376,22.656S220.672,256.56,214.624,262.608z"
              />
            </svg>
            <img
              className="rounded-full"
              src={user.photoURL}
              alt={user.displayName}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
