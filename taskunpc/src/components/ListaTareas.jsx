import TareaCard from "./TareaCard";
import { tareasIniciales } from "../data/tareas";

function ListaTareas() {
  return (
    <div>
      <h2>Lista de Tareas</h2>

      {tareasIniciales.map(tarea => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </div>
  );
}

export default ListaTareas;