import { Link } from "react-router-dom";
import "./barra-navegacion.css";

const BarraNavegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/sge/">
          <img
            id="barra-navegacion-logo"
            src="img/sge-logo.png"
            alt="sge"
            className="d-inline-block align-text-top"
          />
          <span id="barra-navegacion-titulo">SGE</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/sge/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/sge/gastos">
                Gastos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
