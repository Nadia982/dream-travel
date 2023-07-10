import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <ul className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <ul className="social__links">
       <li><BsFacebook/></li>
       <li><BsLinkedin/></li>
       <li><AiFillInstagram/></li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
display: flex;
justify-content: space-evenly;
background-color: var(--primary-lightest);
padding: 2.5rem;
border-radius: 0.5rem;
ul {
  display: flex;
  list-style-type: none;
  gap: 2rem;
  li {
    a{
      text-decoration: none;
      color: black;
      transition: 0.3s ease-in-out;
      padding: 0.5rem 0;
      &:hover {
        color: var(--primary-bright2);
        text-decoration: underline;
      }
    }
    svg {
      font-size: 1.6rem;
      &:hover {
        color: var(--primary-bright2)
      }
    }
  }
}

@media screen and (max-width: 700px){
flex-direction: column;
ul {
  flex-direction: column;
  gap: 1rem;
}

.links {
  a { 
    display: block;
    width: 100%;
    margin: 0;
    height: 2rem;
  }
  
}
.social__links {
  margin-top: 1rem;
  flex-direction: row;
}
`;
