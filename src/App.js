// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div className="App">
        <h3>1. Welcome to Chef Chu's Restaurant</h3>
        <nav>
          <Link to="/"><button>Home</button></Link>
          <Link to="/categories"><button>Categories</button></Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
