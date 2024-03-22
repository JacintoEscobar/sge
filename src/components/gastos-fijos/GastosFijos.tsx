const GastosFijos = () => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#gastos-fijos-contenido"
          aria-expanded="false"
          aria-controls="gastos-fijos-contenido"
        >
          Gastos fijos
        </button>
      </h2>
      <div
        id="gastos-fijos-contenido"
        className="accordion-collapse collapse"
      >
        <div className="accordion-body">
          <p>Estos son los gastos fijos del mes seleccionado</p>
        </div>
      </div>
    </div>
  );
};

export default GastosFijos;
