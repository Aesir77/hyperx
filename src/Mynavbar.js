import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import './custom.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-color">
      <Container>
        <Navbar.Brand as={Link} to="/"className='custom-nav-link'>Hyper X</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
<<<<<<< Updated upstream
            <Nav.Link as={Link} to="/"className='custom-nav-link'>Home</Nav.Link>
            <Nav.Link as={Link} to="/about"className='custom-nav-link'>About</Nav.Link>
            <Nav.Link as={Link} to="/log-in"className='custom-nav-link'>Log In</Nav.Link>
            <Nav.Link as={Link} to="/reviews"className='custom-nav-link'>Reviews</Nav.Link>
            <Nav.Link as={Link} to="/check-in"className='custom-nav-link'>Check In</Nav.Link>
=======
            <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="custom-nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/log-in" className="custom-nav-link">Log In</Nav.Link>
            <Nav.Link as={Link} to="/reviews" className="custom-nav-link">Reviews</Nav.Link>
            <Nav.Link as={Link} to="/check-in" className="custom-nav-link">Check In</Nav.Link>
            <Nav.Link as={Link} to="/add-review" className="custom-nav-link add-review-btn">
              Add Review
            </Nav.Link>
>>>>>>> Stashed changes
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

<<<<<<< Updated upstream
export default BasicExample;
=======
export default BasicExample;

>>>>>>> Stashed changes
