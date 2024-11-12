import React, { useState } from 'react';
import "./styling/Hyperx.css";
<<<<<<< Updated upstream
import "./Check-in";
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> Stashed changes


function Booking() {
    const [Guests, SetGuests] = useState(1);
<<<<<<< Updated upstream
    const [reservDate, SetreservDate] = useState("");
    const [roomtype, setroomtype] = useState("geyser"); 
    const [payment, setpayment] = useState("");
=======

    const [reservDate, SetreservDate] = useState("");
    const [untilDate, SetuntilDate] = useState("");
    const [roomtype, setroomtype] = useState("geyser"); 
    const [payment, setpayment] = useState("");
    const account = useNavigate();
>>>>>>> Stashed changes

    const handleGuestChange = (change) => {
        SetGuests((prevGuests) => Math.max(1, prevGuests + change));
    };

<<<<<<< Updated upstream
    
=======
     const handleAccount = () => {
        account('/account');
     }
>>>>>>> Stashed changes
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

            <p> Until</p>
             <input 
                type="date"
<<<<<<< Updated upstream
                value={reservDate}
                onChange={(e) => SetreservDate(e.target.value)}
=======
                value={untilDate}
                onChange={(e) => SetuntilDate(e.target.value)}
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
            <button> Book </button>
=======
            <button type='button' onClick={handleAccount}> Book </button>
>>>>>>> Stashed changes
        </div>
    );
}

export default Booking;
