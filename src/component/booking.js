import React, { useState } from 'react';
import "./styling/Hyperx.css";
import { useNavigate } from 'react-router-dom';


function Booking() {
    const [Guests, SetGuests] = useState(1);
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    const [reservDate, SetreservDate] = useState("");
    const [untilDate, SetuntilDate] = useState("");
    const [roomtype, setroomtype] = useState("geyser"); 
    const [payment, setpayment] = useState("");
    const account = useNavigate();
<<<<<<< Updated upstream
=======
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
>>>>>>> Stashed changes

    const handleGuestChange = (change) => {
        SetGuests((prevGuests) => Math.max(1, prevGuests + change));
    };

<<<<<<< Updated upstream
     const handleAccount = () => {
        account('/account');
     }
=======

     const handleSubmit = (event) => {
        event.preventDefault();
      
    };
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
<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
            <button type='button' onClick={handleAccount}> Book </button>
=======
            <p> Username: </p>
  


            <button type='button' onClick={handleSubmit}> Book </button>

            
>>>>>>> Stashed changes
        </div>
    );
}

export default Booking;
