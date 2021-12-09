// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/about" element={<About />}>
        </Route>
        <Route exact path="/" element={<Textform />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
