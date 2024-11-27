
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';  // You need to install axios to make HTTP requests
import "./Hyperx.css";


function Checkin() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [confirmationNumber, setConfirmationNumber] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setConfirmationNumber(params.get('confirmationNumber'));
    }, [location]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Send a request to check if the email exists
            const response = await axios.post('http://localhost:5001/check-email', {
                email: inputValue2
            });
            // If email exists, navigate to the reviews page
            if (response.data.exists) {
                navigate('/reviews');  // Change '/reviews' to your actual reviews page route
            } else {
                alert('Email not found. Please check your email or book again.');
            }
        } catch (error) {
            console.error('Error checking email:', error);
            alert('Email Does Not Exists.');
        }
    };

    return (
        <div className='checkin'>
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor="confirmationNumber">Book Confirmation Number: </label>
                    <input 
                        type="text" 
                        id="confirmationNumber" 
                        value={confirmationNumber} 
                        readOnly 
                        disabled 
                    />
                </div>

                <div>
                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input 
                        type="text" 
                        id="contactNumber" 
                        value={inputValue1} 
                        onChange={(r) => setInputValue1(r.target.value)} 
                        placeholder="Enter your contact number" 
                    />
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input 
                        type='text'
                        id="email"
                        value={inputValue2}
                        onChange={(e) => setInputValue2(e.target.value)}
                        placeholder='name@gmail.com'
                    />
                </div>
                <button type="submit"> Check-In </button>
            </form>

            <p>Not booked yet? Click <a href="./booking">Here</a> to book your flight!</p>
        </div>
    );
}
    export default Checkin;
