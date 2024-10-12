import React, { useState } from 'react';
<<<<<<< HEAD
import "./styling/Hyperx.css";

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

<p> Name: </p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={(e) =>
    setInputValue(e.target.value)}
    placeholder='Maranon Joachim' />

    </form>
<p> Homeworld: </p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue1} onChange={(r) =>
    setInputValue1(r.target.value)}
    placeholder='Gaia' />
    </form>

    <p> Book Confirmation Number: </p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue2} onChange={(r) =>
    setInputValue2(r.target.value)} 
    placeholder = "#09533771573"/>
    
    </form>

    <p> Email: </p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue3} onChange={(r) =>
    setInputValue3(r.target.value)} 
    placeholder='maria@worlds.com'/>
    </form>


    <button> Submit </button>

    <p> Not booked yet? Click <a href = "./booking"> Here </a> </p>
    </div>

   
    );
    }
=======
import "./Hyperx.css";

function Checkin() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="checkin">
      <p>Name:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Maranon Joachim"
        />
      </form>

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

      <button type="submit">Submit</button>

      <p>Not booked yet? Click <a href="./booking">Here</a></p>
    </div>
  );
}
>>>>>>> c825cb37f1c86a87dca4f9c3bdc92abbf330d1be

export default Checkin;
