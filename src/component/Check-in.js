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
    const [inputValue2, setInputValue2] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Check-in completed! Enjoy your journey across the stars!');
    };

    return (
        <div className='checkin'>
            <p>Book Confirmation Number:</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder="Enter your confirmation number" 
                />
            </form>

            <p>Contact Number:</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue1} 
                    onChange={(r) => setInputValue1(r.target.value)} 
                    placeholder="Enter your contact number" 
                />
            </form>

            <p>Email: </p>
            <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.values)}
                placeholder='name@gmail.com'
                >    
                </input>
            </form>

            <button type="submit" onClick={handleSubmit}> Check-In </button>

            <p>Not booked yet? Click <a href="./booking">Here</a> to book your flight!</p>
        </div>
    );
}

export default Checkin;
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
