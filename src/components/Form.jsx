import { useState, useEffect } from "react";
import Error from "./Error";

const Form = (props) => {
  const { patients, setPatients, patient, setPatient } = props;

  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");
  const [reason, setReason] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDischargeDate(patient.dischargeDate);
      setReason(patient.reason);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, owner, email, dischargeDate, reason].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const patientObject = {
      name,
      owner,
      email,
      dischargeDate,
      reason,
    };

    if (patient.id) {
      patientObject.id = patient.id;

      const updatePatients = patients.map((patientState) =>
        patientState.id === patient.id ? patientObject : patientState
      );

      setPatients(updatePatients);
      setPatient({});
    } else {
      patientObject.id = generateId();
      setPatients([...patients, patientObject]);
    }

    setName("");
    setOwner("");
    setEmail("");
    setDischargeDate("");
    setReason("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patient Follow-Up</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add Patient and {""}
        <span className="text-indigo-600 font-bold ">Manage Them</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error message="All fields are required" />}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet Name
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Enter the Pet's Name"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner Name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Enter the Owner's Name"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter the owner's Mail"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            discharge date
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
            value={dischargeDate}
            onChange={(e) => setDischargeDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Reason for visit
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
            placeholder="Enter the Pet Symptoms"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
          value={patient.id ? "Edit Patient" : "Add Patient"}
        />
      </form>
    </div>
  );
};

export default Form;
