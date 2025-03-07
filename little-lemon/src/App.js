import './App.css';

function App() {
  return (
    <nav>
      <a href="About-section" onClick={handleClick("About")} style={{ color: "Black", fontSize: "18px" }}>About</a>
      <a href="Menu-section" onClick={handleClick("Menu")} style={{ color: "Black", fontSize: "18px" }}>Menu</a>
      <a href="Reservations-section" onClick={handleClick("Reservations")} style={{ color: "Black", fontSize: "18px" }}>Reservations</a>
      <a href="order-online-section" onClick={handleClick("Order Online")} style={{ color: "Black", fontSize: "18px" }}>Order Online</a>
      <a href="Login-section" onClick={handleClick("Login")} style={{ color: "Black", fontSize: "18px" }}>Login</a>
    </nav>
  );
}

export default App;
