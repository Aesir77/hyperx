import React, { useState } from 'react';
import "./styling/Hyperx.css";

function LogIn() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    };
    return (
        <div className='login'>

<p> Username: </p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={(e) =>
    setInputValue(e.target.value)}
    placeholder='Maranon Joachim' />

    </form>
<p> Email: </p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue1} onChange={(r) =>
    setInputValue1(r.target.value)}
    placeholder='name@gmail.com' />
    </form>

    <p> Password: </p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue3} onChange={(r) =>
    setInputValue3(r.target.value)} 
    placeholder='******'/>
    </form>
    
    <p> Confirm Password: </p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue3} onChange={(r) =>
    setInputValue3(r.target.value)} 
    placeholder='******'/>
    </form>

    <button> Submit </button>

    <p> Already have an account? Book <a href = "./booking"> Now! </a> </p>
    </div>

   
    );
    }

export default LogIn;

