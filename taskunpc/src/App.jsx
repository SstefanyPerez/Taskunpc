import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import { tareasIniciales } from "./data/tareas";

function App() {
  const pendientes = tareasIniciales.filter(t => !t.completada).length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>TaskUPC — Mi Gestor Académico</h1>

      <Header pendientes={pendientes} />
      <ListaTareas />
    </div>
  );
}

export default App;