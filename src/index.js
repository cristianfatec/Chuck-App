import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe BrowserRouter, Routes e Route
import Home from './Home';
import ChuckNorrisJoke from './ChuckNorrisJoke';
import './App.css'; 


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/generator" element={<ChuckNorrisJoke />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);