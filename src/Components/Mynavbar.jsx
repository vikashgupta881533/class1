import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoimg from "../Img/logo.jpeg";
import { Link } from 'react-router-dom';
import Singup from './Singup';


import About from './About';

let Mynavbar = ()=>{
    return(
        <>
        <Navbar bg="black" data-bs-theme="dark">
        <Container>

            <div class="logo-section">

   <img src={logoimg} alt="" />

    

</div>
            
           
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Our Work</Nav.Link>
            <div><button className='singupbtn'><Link to="/Singup">Click</Link></button></div>
            
          </Nav>
        </Container>
      </Navbar>

      
      
        </>
    )
}

export default Mynavbar;