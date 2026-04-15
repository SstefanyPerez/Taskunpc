import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();
  const [form, setForm] = useState({ titulo: '', materia: '', fecha: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.titulo || !form.materia || !form.fecha) return;
    agregarTarea(form);
    navigate('/');
  }

  return (
    <div>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input name="titulo" value={form.titulo} onChange={handleChange} required />
        </div>
        <div>
          <label>Materia:</label>
          <input name="materia" value={form.materia} onChange={handleChange} required />
        </div>
        <div>
          <label>Fecha:</label>
          <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required />
        </div>
        <button type="submit">Guardar</button>
        <button type="button" onClick={() => navigate('/')}>Cancelar</button>
      </form>
    </div>
  );
}

export default NuevaTarea;