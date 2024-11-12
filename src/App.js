import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
<<<<<<< Updated upstream
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mynavbar from './Mynavbar';
import Home from './component/Home.js';
import Aboutus from './component/About-us';
import LogIn from './component/Log-In.js';
import Reviews from './component/Reviews.js';
import Checkin from './component/Check-in.js';
import Footer from './component/footer.js';
import Booking from './component/booking.js';
=======
import *  as reactRouterDom from "react-router-dom";
import Mynavbar from './Mynavbar';
import Home from './component/Home.js';
import Aboutus from './component/About-us.js';
import LogIn from './component/Log-In.js';
import Reviews from './component/Reviews.js';
import Checkin from './component/Check-in.js';
<<<<<<< Updated upstream

function App() {
  return (  
    <reactRouterDom.BrowserRouter>
      <Mynavbar/>
    <reactRouterDom.Routes>
      <reactRouterDom.Route path="/" element={<Home />} />
      <reactRouterDom.Route path="/about" element={<Aboutus />} />
      <reactRouterDom.Route path="/log-in" element={<LogIn />} />
      <reactRouterDom.Route path="/reviews" element={<Reviews />} />
      <reactRouterDom.Route path="check-in" element={<Checkin />} />

    </reactRouterDom.Routes>  
   </reactRouterDom.BrowserRouter>
=======
import Footer from './component/footer.js';
import Booking from './component/booking.js';
import Account from "./component/account.js";
>>>>>>> Stashed changes
import './custom.css';

function App() {
  return (
    <div className="m_menu">
      <Router>
        <Mynavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<Aboutus />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="check-in" element={<Checkin />} />
          <Route path="booking" element={<Booking />} />
<<<<<<< Updated upstream
=======
          <Route path ="account" element={<Account />} />

>>>>>>> Stashed changes
        </Routes>
      </Router>
      <Footer />
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
