import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from './assets/background.jpg'; 
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip.advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    <div 
      className='container'
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
      }}
    >
      <div className='content'>
          <h1>Advice</h1>
          <p className='content-advice'>{advice}</p>
          <button onClick={fetchAdvice}>Get Advice</button>
      </div>
    </div>
  );
};

export default App;

