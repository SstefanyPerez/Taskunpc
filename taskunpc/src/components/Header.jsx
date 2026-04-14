function Header({ pendientes }) {
  return (
    <header style={{
      backgroundColor: "#282c34",
      color: "white",
      padding: "15px",
      textAlign: "center",
      borderRadius: "8px"
    }}>
      <h1>📋 TaskUNPC</h1>
      <p>Tareas pendientes: {pendientes}</p>
    </header>
  );
}

export default Header;