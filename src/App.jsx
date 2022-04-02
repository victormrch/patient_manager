import Header from "./components/Header";
import Formulario from "./components/Form";
import PatientList from "./components/PatientList";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 m-12 md:flex">
        <Formulario />
        <PatientList />
      </div>
    </div>
  );
}

export default App;
