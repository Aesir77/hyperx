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
        </div>
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p className="page-text">
          We are dedicated to providing you with the best experience during your stay.
          Enjoy our amenities, services, and friendly staff. We look forward to welcoming you!
        </p>
      </section>
    </div>
  );
}

export default Home;