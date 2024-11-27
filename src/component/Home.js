<<<<<<< Updated upstream
import React from "react";
import './styling/Home.css';
import room1 from './Assets/1_cR0GxdchD1HtKQxQ09Z1sg.jpg'; 
import room2 from './Assets/movie-themed-hotel-rooms-v0-flos2w10a07b1.jpg'; 
import room3 from './Assets/flh_20180612-luxuryspace-1.jpg'; 

function Home() {
  return (
    <div className="home">
      <header className="header" >
        <h1>Welcome to Our Hotel</h1>
        <p>Your comfort is our priority!</p>
      </header>
      <section className="gallery">
        <h2>Our Rooms</h2>
        <div className="image-container">
          <img src={room1} alt="Room 1" />
          <img src={room2} alt="Room 2" />
          <img src={room3} alt="Room 3" />
=======
<<<<<<< Updated upstream
=======
import React, { useEffect, useState } from "react";
import './styling/Home.css';

function Home() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/rooms')
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error('Error fetching rooms:', error));
  }, []);

  return (
    <div className="home">
      <header className="header">
        <h1>Welcome to Our Hotel</h1>
        <p>Your comfort is our priority!</p>
      </header>

      
      <section className="gallery">
        <h2>Our Rooms</h2>
        <div className="image-container">
          {rooms.map((room) => (
            <div key={room.type} className="room-card">
              <img src={room.imageUrl}  />
              <h3>{room.type}</h3>
              <p>{room.description}</p>
            </div>
          ))}
>>>>>>> Stashed changes
        </div>
      </section>
      <section className="about">
        <h2>About Us</h2>
<<<<<<< Updated upstream
        <p class="page-text">
          We are dedicated to providing you with the best experience during your stay. 
=======
        <p className="page-text">
          We are dedicated to providing you with the best experience during your stay.
>>>>>>> Stashed changes
          Enjoy our amenities, services, and friendly staff. We look forward to welcoming you!
        </p>
      </section>
    </div>
  );
}

export default Home;
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
