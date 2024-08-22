import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <Homepage />
    </div>
  );
}

export default App;
