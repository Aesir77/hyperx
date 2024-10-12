import React, { useState } from 'react';
import "./Hyperx.css";


function Checkin() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< Updated upstream
    };
    return (
        <div className='checkin'>
    <p> Book Confirmation Number</p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={(e) =>
    setInputValue(e.target.value)} />
=======
    alert('Check-in completed! Enjoy your journey across the stars!');
  };
>>>>>>> Stashed changes

    </form>
<p> Contact Number</p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue1} onChange={(r) =>
    setInputValue1(r.target.value)} />

<<<<<<< Updated upstream
    </form>
    
=======
      <p>Homeworld:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue1}
          onChange={(r) => setInputValue1(r.target.value)}
          placeholder="Gaia"
        />
      </form>

      <p>Book Confirmation Number:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue2}
          onChange={(r) => setInputValue2(r.target.value)}
          placeholder="#09533771573"
        />
      </form>

      <p>Email:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue3}
          onChange={(r) => setInputValue3(r.target.value)}
          placeholder="maria@worlds.com"
        />
      </form>

      <button type="submit" onClick={handleSubmit}>Submit</button>

      <p>Not booked yet? Click <a href="./booking">Here</a></p>
>>>>>>> Stashed changes
    </div>
    );
    }

export default Checkin;