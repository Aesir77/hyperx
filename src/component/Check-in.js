import React, { useState } from 'react';
import "./Hyperx.css";


function Checkin() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const handleSubmit = (event) => {
    event.preventDefault();
    };
    return (
        <div className='checkin'>
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