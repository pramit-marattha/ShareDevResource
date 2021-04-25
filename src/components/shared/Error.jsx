import React from "react";

function Error({ message }) {
  return (
    message && <div className="text-bold text-red-500 mb-2 mt-4">{message}</div>
  );
}

export default Error;
