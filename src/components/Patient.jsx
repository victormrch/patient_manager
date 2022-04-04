import React from "react";

const Patient = ({ patient, setPatient, deletePatient }) => {
  const { name, owner, email, dischargeDate, reason, id } = patient;

  const handleDelete = () => {
    const res = confirm("Do you want to delete this patient?");

    if (res) deletePatient(id);
  };

  return (
    <div className="my-5 mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre : {""}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner Name : {""}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email Address : {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        DISCHARGE DATE : {""}
        <span className="font-normal normal-case">{dischargeDate}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Reason for visit : {""}
        <span className="font-normal normal-case">{reason}</span>
      </p>
      <div className="flex flex-row justify-between mt-8">
        <button
          type="button"
          className="py-2 px-10 mb-2 bg-amber-500 hover:bg-amber-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPatient(patient)}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 mb-2 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
