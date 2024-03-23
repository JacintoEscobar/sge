import Gastos from "./components/gastos/Gastos";
import { Routes, Route } from "react-router-dom";
import BarraNavegacion from "./components/barra-navegacion/BarraNavegacion";
import "./App.css";
import Inicio from "./components/inicio/Inicio";

function App() {
  return (
    <main>
      <BarraNavegacion />
      <Routes>
        <Route path="/sge/" Component={Inicio} />
        <Route path="/sge/gastos" Component={Gastos} />
      </Routes>
    </main>
  );
}

export default App;
