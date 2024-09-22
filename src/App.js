import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Mynavbar from './Mynavbar';
import Home from './component/Home.js';
import Aboutus from './component/About-us';
import LogIn from './component/Log-In.js';
import Reviews from './component/Reviews.js';
import Checkin from './component/Check-in.js';
import './custom.css';

function App() {
  return (  
<div className="m_menu">
    <Router>
      <Mynavbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about-us" element={<Aboutus/>} />
      <Route path="/log-in" element={<LogIn/>} />
      <Route path="reviews" element={<Reviews/>} />
      <Route path="check-in" element={<Checkin/>} />

    </Routes>
   
   </Router>
</div>   
  );
}

export default App;
