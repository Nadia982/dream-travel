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
          <a href="#recommend">Recommend</a>
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

const FooterContainer = styled.footer``;
