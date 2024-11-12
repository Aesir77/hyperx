
import React, { useState } from 'react';
import "./styling/Hyperx.css";


function Account() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
  


    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Thank you for booking with us, Have a safe hyperdrive to the stars! ");
    };

    return (
        <div className='login'>

<p> Username: </p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={(e) =>
    setInputValue(e.target.value)}
    placeholder='Kimmy1' />

    </form>
<p> Password: </p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue1} onChange={(r) =>
    setInputValue1(r.target.value)}
    placeholder='******' />

    </form>

    <button onClick={handleSubmit}> Book </button>

        </div>


   
    );
    }

export default Account;
