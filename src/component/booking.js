import React, { useState } from 'react';
import "./Hyperx.css";
import "./Check-in";


function Booking() {
  
    
const [Guests, SetGuests] = useState(1);
const [reservDate, SetreservDate] = useState("");
const handleGuestChange = (change) => {
    SetGuests((prevGuests) => Math.max(1, prevGuests + change));
};


    return (
        <div className='booking'>
    <p> Number of Guests:  </p>
    <button onClick={() => handleGuestChange(-1)}> - </button>
    <span> {Guests} </span>
    <button onClick={() => handleGuestChange(1)}> + </button>
    
<p> Reservation Date: </p>

<input type = "date"
        value = {reservDate} 
        onChange={(e) => SetreservDate(e.target.value)}
         />
        
    <p> Price(of Room): Energy Credits: 500  </p>


    <p> Type of Room: (List) </p>
    <ul>
<li> Geyser </li>
<li> Eupherium </li>
<li> Nixilis </li>


    </ul>
    <p> Mode of Payment: (List) </p>

    <p> Total: </p>
    <button> Submit </button>


    </div>
    );
}


export default Booking;