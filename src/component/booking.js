import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styling/Hyperx.css";
function Booking() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const [Guests, SetGuests] = useState(1);
    const [reservDate, SetreservDate] = useState("");
    const [untilDate, SetuntilDate] = useState("");
    const [roomtype, setroomtype] = useState("geyser");
    const [payment, setpayment] = useState("");
    const account = useNavigate();
    const handleGuestChange = (change) => {
        SetGuests((prevGuests) => Math.max(1, prevGuests + change));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if the username or password is empty
        if (!inputValue || !inputValue1) {
            alert('Please enter both username and password');
            return; // Prevent form submission if fields are empty
        }
        // Send the request to validate user credentials
        fetch('http://localhost:5001/validateUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: inputValue,
                password: inputValue1,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                // Generate a random confirmation number
                const bookingConfirmationNumber = Math.floor(Math.random() * 1000000);
                // Navigate to the Check-in page with the confirmation number
                account(`/check-in?confirmationNumber=${bookingConfirmationNumber}`);
            } else {
                alert(data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    };
    const getPrice = () => {
        switch (roomtype) {
            case "geyser":
                return 600;
            case "eupherium":
                return 900;
            case "nixilis":
                return 1300;
            default:
                return 0;
        }
    };
    return (
        <div className='booking'>
            <p> Username: </p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder="Enter your username" 
                />
            </form>
            <p> Password: </p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="password" 
                    value={inputValue1} 
                    onChange={(r) => setInputValue1(r.target.value)} 
                    placeholder="Enter your password" 
                />
            </form>
            <p> Number of Guests: </p>
            <button onClick={() => handleGuestChange(-1)}> - </button>
            <span> {Guests} </span>
            <button onClick={() => handleGuestChange(1)}> + </button>
            <p> Reservation Date: </p>
            <p> From </p>
            <input 
                type="date" 
                value={reservDate} 
                onChange={(e) => SetreservDate(e.target.value)} 
            />
            <p> Until </p>
            <input 
                type="date" 
                value={untilDate} 
                onChange={(e) => SetuntilDate(e.target.value)} 
            />
            <p> Price (of Room): Energy Credits: {getPrice()} </p>
            <p> Type of Room: </p>
            <select value={roomtype} onChange={(e) => setroomtype(e.target.value)}>
                <option value="geyser">Geyser (Small)</option>
                <option value="eupherium">Eupherium (Medium)</option>
                <option value="nixilis">Nixilis (Large)</option>
            </select>
            <p> Mode of Payment: </p>
            <select value={payment} onChange={(e) => setpayment(e.target.value)}>
                <option value="e-credits">Ecredits</option>
                <option value="unity">Unity</option>
                <option value="astral strand">Astral Strand</option>
            </select>
            <p> Total: {getPrice() * Guests} Energy Credits </p>
            <button type="submit" onClick={handleSubmit}> Book </button>
        </div>
    );
}
export default Booking;