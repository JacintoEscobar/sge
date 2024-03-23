import { Link } from "react-router-dom";
import { NavegacionProps } from "../../util/types/NavegacionProps";
import { Pagina } from "../../util/types/Paginas";

const Navegacion = ({ pagina }: NavegacionProps) => {
  if (pagina === Pagina.GASTOS) {
    return (
      <nav id="navegacion" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">
            <Link to="/sge/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Gastos
          </li>
        </ol>
      </nav>
    );
  }

  return (
    <nav id="navegacion" aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          Inicio
        </li>
      </ol>
    </nav>
  );
};

export default Navegacion;
