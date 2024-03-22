const GastosVariables = () => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#gastos-variables-contenido"
          aria-expanded="false"
          aria-controls="gastos-variables-contenido"
        >
          Gastos variables
        </button>
      </h2>
      <div
        id="gastos-variables-contenido"
        className="accordion-collapse collapse"
      >
        <div className="accordion-body">
          <p>Estos son los gastos varibles del mes seleccionado</p>
        </div>
      </div>
    </div>
  );
};

export default GastosVariables;
