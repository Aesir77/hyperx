import React, { useState } from 'react';
import "./Hyperx.css";

function Checkin() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='checkin'>
      <p>Name:</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder='Maranon Joachim' 
        />
      </form>

      <p>Homeworld:</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue1} 
          onChange={(e) => setInputValue1(e.target.value)} 
          placeholder='Gaia' 
        />
      </form>

      <p>Book Confirmation Number:</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue2} 
          onChange={(e) => setInputValue2(e.target.value)} 
          placeholder='#09533771573' 
        />
      </form>

      <p>Email:</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue3} 
          onChange={(e) => setInputValue3(e.target.value)} 
          placeholder='maria@worlds.com' 
        />
      </form>

      <button type="submit">Submit</button>

      <p>Not booked yet? Click <a href="./booking">Here</a></p>
    </div>
  );
}

export default Checkin;
