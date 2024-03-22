import { Pagina } from "../../util/types/Paginas";
import Navegacion from "../navegacion/Navegacion";

const Inicio = () => {
  return (
    <section id="contenido">
      <Navegacion pagina={Pagina.INICIO} />
    </section>
  );
};

export default Inicio;
