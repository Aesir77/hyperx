import React, { useEffect, useState } from "react";
import './styling/Home.css';

function Home() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null); // State to manage selected room for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    fetch('http://localhost:5001/rooms')
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error('Error fetching rooms:', error));
  }, []);

  // Function to open modal with selected room details
  const openModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

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
              <button onClick={() => openModal(room)}>
                <img src={room.imageUrl} alt={room.type} />
              </button>
              <h3>{room.type}</h3>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && selectedRoom && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedRoom.type}</h2>
            <img src={selectedRoom.imageUrl} alt={selectedRoom.type} />
            <p>{selectedRoom.description}</p>

            {/* Button Link */}
            <button className="book-button">
              <a href="/check-in" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
