import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Form";
import PatientList from "./components/PatientList";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [];

      setPatients(patientsLS);
    };
    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 m-12 md:flex">
        <Formulario
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
