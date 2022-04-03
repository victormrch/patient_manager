import React from "react";

const Patient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre : {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner Name : {""}
        <span className="font-normal normal-case">Stuart James</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email Address : {""}
        <span className="font-normal normal-case">stuart@jll.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        DISCHARGE DATE : {""}
        <span className="font-normal normal-case">21-01-2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Reason for visit : {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          quibusdam cumque illo magnam, reprehenderit eligendi commodi ullam et
          soluta ratione odio. Minima neque aliquam, consequatur perferendis
          modi ipsa asperiores quas!
        </span>
      </p>
    </div>
  );
};

export default Patient;
