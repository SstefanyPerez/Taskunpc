import { Link } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';

function TareaCard({ id, titulo, materia, fecha, completada }) {
  const { toggleTarea } = useTareas();

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '12px',
      margin: '8px 0',
      opacity: completada ? 0.6 : 1,
    }}>
      <input
        type="checkbox"
        checked={completada}
        onChange={() => toggleTarea(id)}
      />
      <span style={{ textDecoration: completada ? 'line-through' : 'none', marginLeft: '8px' }}>
        <strong>{titulo}</strong>
      </span>
      <p>{materia} · {fecha}</p>
      <p>{completada ? 'Completada' : 'Pendiente'}</p>
      <Link to={`/tarea/${id}`}>Ver detalle</Link>
    </div>
  );
}

export default TareaCard;