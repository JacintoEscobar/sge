import { Pagina } from "../../util/types/Paginas";
import GastosFijos from "../gastos-fijos/GastosFijos";
import GastosVariables from "../gastos-variables/GastosVariables";
import Navegacion from "../navegacion/Navegacion";
import "./gastos.css";

const Gastos = () => {
  return (
    <section id="contenido">
      <Navegacion pagina={Pagina.GASTOS} />
      <h2>Gastos</h2>
      <p>Aquí puedes visualizar todos tus gatos de un mes</p>
      <select id="mes-gastos" className="form-select" aria-label="Mes gastos">
        <option selected>Selecciona un mes</option>
        <option value="1">Enero</option>
        <option value="2">Febrero</option>
        <option value="3">Marzo</option>
        <option value="4">Abril</option>
        <option value="5">Mayo</option>
        <option value="6">Junio</option>
        <option value="7">Julio</option>
        <option value="8">Agosto</option>
        <option value="9">Septiembre</option>
        <option value="10">Octubre</option>
        <option value="11">Noviembre</option>
        <option value="12">Diciembre</option>
      </select>
      <div className="accordion" id="accordion-gastos">
        <GastosFijos />
        <GastosVariables />
      </div>
    </section>
  );
};

export default Gastos;
