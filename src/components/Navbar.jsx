import React, {useState} from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscChromeClose} from 'react-icons/vsc'

const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="logo" />
            Dream Travel
          </div>
          <div className="toggle">
            {
            navbarState ? <VscChromeClose onClick={()=> setNavbarState(false)}/> : <GiHamburgerMenu onClick={()=> setNavbarState(true)}/>
            }
          </div>
        </div>

        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#places">Places</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <button>Contact</button>
      </Nav>
      <ResponsiveNav state={navbarState}>
      <ul>
          <li><a href="#hero" onClick={()=>setNavbarState(false)}>Home</a></li>
          <li><a href="#services" onClick={()=>setNavbarState(false)}>Services</a></li>
          <li><a href="#places" onClick={()=>setNavbarState(false)}>Places</a></li>
          <li><a href="#testimonials" onClick={()=>setNavbarState(false)}>Testimonials</a></li>
        </ul>
      </ResponsiveNav>
    </>
  );
};

const Nav = styled.nav`
position: sticky;
top:0;
background-color: #fff;
padding: 1rem;
box-shadow: rgba(0,0,0,0.35) 0 0 5px;
z-index: 10;
display: flex;
justify-content: space-between;
align-items: center;
.brand{
  .container{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.2rem;
    font-weight: 900;
    text-transform: uppercase; 
    max-width: 120px;
    line-height: 1.2rem;
  }
  .toggle{
    display: none;
  }
}
ul {
  display: flex;
  list-style-type: none;
  font-weight: bolder;
  li {
    a {
      text-decoration: none;
      color: var(--primary-color);
      font-size: 1.2rem;
      transition: 0ms.1s ease-in-out;
      padding: 1rem 1.5rem;
      &:focus  {
        color: var(--primary-accent);
        text-decoration: underline;
        text-underline-offset: 0.2rem;
        text-decoration-thickness: 0.2rem;
      }
      &:hover {
        color: var(--primary-accent);
        text-decoration: underline;
        text-underline-offset: 0.2rem;
        text-decoration-thickness: 0.2rem;
      }
    }
    
  }
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bolder;
  border: none;
  border-radius: 1rem;
  color: whitesmoke;
  background-color: var(--primary-color);
  font-weight: bolder;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  transition: 0ms.3s ease-in-out;
  &:hover{
    background-color: var(--primary-accent);
  }
}

@media screen and (max-width: 980px){
  .brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .toggle {
      display: block;
      font-size: 2rem;
      margin-right: 1rem;
      
      svg {
        display: block;
        cursor: pointer;
      }
    }
  }
  ul {
    display: none; 
  }
  button {
    display: none;
  }
}
`;

const ResponsiveNav = styled.div`
display: flex;
position: fixed;
transition: 0.3s ease-in-out;
z-index: 150;
background-color: #fff;
width: 100%;
height: auto;
top: ${({state}) => (state ? "50px" : "-400px")};
ul {
  list-style-type: none;
  width: 100%;
  text-align: center;
    a {
      text-decoration: none;
      padding: 2rem 1rem;
      display: block;
      color: var(--primary-color);
      font-size: 1.2rem;
      transition: 0.1s ease-in-out;
      &:hover {
        color: var(--primary-accent);
      }
    }
}
`;

export default Navbar;