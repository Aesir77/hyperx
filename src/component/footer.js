import React from "react";
<<<<<<< Updated upstream
import './styling/Hyperx.css';
function Footer() {
return (

<div className="footer">
<p> Contact Number: +63997990439 </p>
<p> Email: hyper.X@worlds.com </p>
<p> Icons here </p>


</div>
);
}

=======
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
            <p>Email: info@ourhotel.com</p>
            <p>Phone: +1 (234) 567-890</p>
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


>>>>>>> Stashed changes
export default Footer;