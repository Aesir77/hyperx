import React from "react";
import './styling/footer.css';
function Footer() {
return (

<footer className="footer">
<div className="footer-content">
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/reviews">Reviews</a></li>
              <li><a href="/check-in">Check-In</a></li>
              <li><a href="/check-in">Log-in</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: hyperxhotels@gmail.com</p>
            <p>Phone: 1-700-800-900</p>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <p>&copy; 2024 Our Hotel. All rights reserved.</p>
          </div>
        </div>
        </footer>
);
}


export default Footer;