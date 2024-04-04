import React, { useState, useEffect } from 'react';
import './App.css'; 
import chuck from './chuck.png';

function ChuckNorrisJoke() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error);
    }
  };

  return (
    <div>
      <img src={chuck} alt="Chuck Norris" /> 
      <p>{joke}</p>
      <button onClick={fetchJoke}>Nova história</button>
    </div>
  );
}

export default ChuckNorrisJoke;