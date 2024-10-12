<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
import React, { useState } from 'react';
import "./Hyperx.css";


function Checkin() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
<<<<<<< Updated upstream
=======
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
>>>>>>> Stashed changes
    const handleSubmit = (event) => {
    event.preventDefault();
    };
    return (
        <div className='checkin'>
<<<<<<< Updated upstream
    <p> Book Confirmation Number</p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={(e) =>
    setInputValue(e.target.value)} />

    </form>
<p> Contact Number</p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue1} onChange={(r) =>
    setInputValue1(r.target.value)} />

    </form>
    
    </div>
    );
    }

export default Checkin;
=======
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

export default Checkin;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
