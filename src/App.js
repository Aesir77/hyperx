import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Mynavbar from './Mynavbar';
import Home from './component/Home.js';
import Aboutus from './component/About-us';
import LogIn from './component/Log-In.js';
import Reviews from './component/Reviews.js';
import Checkin from './component/Check-in.js';
<<<<<<< Updated upstream
import './custom.css';
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
    </Routes>
   
   </Router>
</div>   
=======
    </reactRouterDom.Routes>  
   </reactRouterDom.BrowserRouter>
=======
import './custom.css';
import Footer from './component/footer.js';
import Booking from './component/booking.js';

function App() {
  return (  
<div className="m_menu">



    <Router>
      <Mynavbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="AboutUs" element={<Aboutus/>} />
      <Route path="/log-in" element={<LogIn/>} />
      <Route path="reviews" element={<Reviews/>} />
      <Route path="check-in" element={<Checkin/>} />
      <Route path="booking" element={<Booking/>} />

    </Routes>
   </Router>

   <Footer/>
</div>  
 
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  );
}

export default App;
