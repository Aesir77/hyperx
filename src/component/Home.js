import React from "react";
import './styling/Home.css';

// Import your images
import room1 from './Assets/1_cR0GxdchD1HtKQxQ09Z1sg.jpg'; // Ensure the file extension is correct
import room2 from './Assets/movie-themed-hotel-rooms-v0-flos2w10a07b1.jpg'; // Ensure the file extension is correct
import room3 from './Assets/flh_20180612-luxuryspace-1.jpg'; // Ensure the file extension is correct

function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1>Welcome to Our Hotel</h1>
        <p>Your comfort is our priority!</p>
      </header>
      <section className="gallery">
        <h2>Our Rooms</h2>
        <div className="image-container">
          <img src={room1} alt="Room 1" />
          <img src={room2} alt="Room 2" />
          <img src={room3} alt="Room 3" />
        </div>
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing you with the best experience during your stay. 
          Enjoy our amenities, services, and friendly staff. We look forward to welcoming you!
        </p>
      </section>
    </div>
  );
}

export default Home;
