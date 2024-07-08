import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Bussiness from './Bussiness';
import Entertainment from './Entertainment';
import Sport from './Sport';
import Science from './Science';
import Technology from './Technology';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
        <div className='flex flex-column'>
            <Navbar expand="lg" className=" " fixed='top' style={{backgroundColor:'#006d77',
             boxShadow:" 0px 21px 39px -15px rgba(0,0,0,0.96)", color:"#90e0ef"}}>
            <div className="container ">
                <Navbar.Brand href="#home">accidic<span className='text-white'>NEWS</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-white" >
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/Bussiness"}>Bussiness</Nav.Link>
                        <Nav.Link as={Link} to={"/Entertainment"}>Entertaiment</Nav.Link>
                        <Nav.Link as={Link} to={"/Sport"}>Sport</Nav.Link>
                        <Nav.Link as={Link} to={"/Science"}>Science</Nav.Link>
                        <Nav.Link as={Link} to={"/Technology"}>Technology</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
            </Navbar>
            <div className="intro mt-5 pt-5">
            <h1 className='text-center text-uppercase'style={{color:"#03045e"}}>wellcome to accidicNews....</h1>
            </div>
        </div>
        </>
  )
}

export default NavBar
