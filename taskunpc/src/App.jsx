import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { useTareas } from './context/TareasContext';
import Header from './components/Header';
import ListaTareas from './components/ListaTareas';
import NuevaTarea from './pages/NuevaTarea';
import DetalleTarea from './pages/DetalleTarea';

function Inicio() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState('todas');

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === 'pendientes') return !t.completada;
    if (filtro === 'completadas') return t.completada;
    return true;
  });

  const pendientes = tareas.filter(t => !t.completada).length;

  return (
    <div>
      <Header pendientes={pendientes} />

      <div style={{ display: 'flex', gap: '8px', margin: '16px 0' }}>
        {['todas', 'pendientes', 'completadas'].map(f => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            style={{ fontWeight: filtro === f ? 'bold' : 'normal' }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <Link to="/nueva">
        <button>+ Nueva Tarea</button>
      </Link>

      <ListaTareas tareas={tareasFiltradas} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/nueva" element={<NuevaTarea />} />
      <Route path="/tarea/:id" element={<DetalleTarea />} />
    </Routes>
  );
}

export default App;