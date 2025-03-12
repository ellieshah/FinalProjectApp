import React from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <nav className="app-container">
      <Header />
      <main>
        <h2>Welcome to Little Lemon</h2>
        <p>Enjoy fresh Mediterranean flavors!</p>
      </main>
      <footer>
        <p>&copy; 2025 Little Lemon Restaurant</p>
      </footer>
    </nav>
  );
}

export default App;
