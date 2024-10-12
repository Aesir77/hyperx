import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
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
  );
}

export default App;
