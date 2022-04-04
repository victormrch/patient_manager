import React from "react";

const Error = (props) => {
  const { message } = props;
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold rounded-md mb-5">
      <p>{message}</p>
    </div>
  );
};

export default Error;
