import React from 'react';
import './App.css';
import Drawer from './components/Drawer';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <div className="App">
      <Drawer />
      <div className="main-content">
        <Aboutus />
      </div>
    </div>
  );
}

export default App;
