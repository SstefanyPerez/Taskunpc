import TareaCard from "./TareaCard";

function ListaTareas({ tareas }) {
  if (tareas.length === 0) return <p>No hay tareas para mostrar.</p>;

  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tareas.map(tarea => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </div>
  );
}

export default ListaTareas;