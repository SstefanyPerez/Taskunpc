function TareaCard({ tarea }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "8px"
    }}>
      <h3>{tarea.titulo}</h3>
      <p><strong>Materia:</strong> {tarea.materia}</p>
      <p><strong>Fecha:</strong> {tarea.fecha}</p>
      <p>
        <strong>Estado:</strong>{" "}
        {tarea.completada ? "Completada ✅" : "Pendiente ⏳"}
      </p>
    </div>
  );
}

export default TareaCard;