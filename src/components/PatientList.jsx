import Patient from "./Patient";

const PatientList = (props) => {
  const { patients, setPatient, deletePatient } = props;

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patients List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Admin your {""}
            <span className="text-indigo-600 font-bold">
              Patients & Appointments
            </span>
          </p>
          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start adding patients and {""}
            <span className="text-indigo-600 font-bold">
              they will be displayed here
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;
