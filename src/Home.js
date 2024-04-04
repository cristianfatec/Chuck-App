import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

function Home() {
  return (
    <div className="Home">
      <h1>Conheça as histórias do seu pai AKA Chuck Norris</h1>
      <Link to="/generator" className="btn">
        Gerar Histórias de Chuck Norris
      </Link>
    </div>
  );
}

export default Home;
