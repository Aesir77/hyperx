import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
<<<<<<< HEAD
import *  as reactRouterDom from "react-router-dom";
import Mynavbar from './Mynavbar';
import Home from './component/Home';
import Aboutus from './component/about-us';
import LogIn from './component/Log-In';
import Reviews from './component/Reviews';
import CheckIn from './component/check-in';
import Booking  from './component/booking';
import Footer from './component/footer';

function App() {
  return (    
    <div className="m_menu">
    <reactRouterDom.BrowserRouter>
    
    <Mynavbar/>
      
    <reactRouterDom.Routes>
      <reactRouterDom.Route path="/" element={<Home />} />
      <reactRouterDom.Route path="/about-us" element={<Aboutus />} />
      <reactRouterDom.Route path="/log-In" element={<LogIn />} />
      <reactRouterDom.Route path="/reviews" element={<Reviews />} />
      <reactRouterDom.Route path="check-in" element={<CheckIn />} />
      <reactRouterDom.Route path="booking" element ={<Booking />} />

   
    </reactRouterDom.Routes>  
   </reactRouterDom.BrowserRouter>

<Footer />
   </div>  
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mynavbar from './Mynavbar';
import Home from './component/Home.js';
import Aboutus from './component/About-us';
import LogIn from './component/Log-In.js';
import Reviews from './component/Reviews.js';
import Checkin from './component/Check-in.js';
import Footer from './component/footer.js';
import Booking from './component/booking.js';
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
        </Routes>
      </Router>
      <Footer />
    </div>
>>>>>>> c825cb37f1c86a87dca4f9c3bdc92abbf330d1be
  );
}

export default App;
