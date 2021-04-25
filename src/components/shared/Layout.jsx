import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <section className="text-gray-500 bg-gray-900 body-font">
        <div className="container px-5 py-0 mx-auto">{children}</div>
      </section>
    </>
  );
}

export default Layout;
