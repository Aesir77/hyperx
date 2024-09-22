import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import *  as reactRouterDom from "react-router-dom";
import Mynavbar from './Mynavbar';
import Home from './component/Home.js';
import Aboutus from './component/About-us.js';
import LogIn from './component/Log-In.js';
import Reviews from './component/Reviews.js';
import Checkin from './component/Check-in.js';

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
  );
}

export default App;
