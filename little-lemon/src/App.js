import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';


function App() {
  return (
    <nav className="app-container">
      <Header />
      <Main />
      <Footer />
    </nav>
  );
}

export default App;
