import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="logo" />
            Travelo
          </div>
          <div className="toggle">

          </div>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#recommend">Places</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <button>Connect</button>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`

`;
