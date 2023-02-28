import React from "react";
import './Header.css'
import { Navbar, Nav } from "react-bootstrap";
import { Title } from "chart.js";
import { useState } from "react";

const Header = (title) => {
  const [show, setShow] = useState(false);
  return (
    <header>
    <Navbar className="navbar" expand="lg" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="link">{ <header>
          <div className='header-toggle' onClick={() => setShow(!show)}>
          <span className='nav-link-name'>Cattle Traceablity </span>
         
            <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null} `}></i>
          </div>
        </header>}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;