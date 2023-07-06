import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

const Services = () => {
  const data = [
    {
      icon: service1,
      alt: "topical island",
      title: "Exclusive Destinations",
      subTitle:
        "Discover the world's most luxurious and sought-after destinations, from pristine tropical islands to cosmopolitan city escapes.",
    },
    {
      icon: service2,
      alt: "VIP icon",
      title: "Personalized Service",
      subTitle:
        "Our dedicated team of travel experts will meticulously plan every aspect of your trip, offering personalized recommendations to ensure a seamless travel experience.",
    },
    {
      icon: service3,
      alt: "hotel icon",
      title: "Beautiful Accommodation",
      subTitle:
        "Immerse yourself in the lap of luxury with our handpicked selection of exquisite accommodation, from lavish resorts to boutique hotels.",
    },
    {
      icon: service4,
      alt: "castle icon",
      title: "Authentic Cultural Immersion",
      subTitle:
        "Delve into the local culture and traditions of your destination with curated itineraries that offer unique encounters and insider access to hidden gems."
    }
  ];

  return <Section id="services">
    <h2>Services</h2>
    <div className="services-container">
    {
    data.map(service=>{
      return (
        <div className="service">
          <div className="icon">
            <img src={service.icon} alt={service.alt} />
          </div>
          <h3>{service.title}</h3>
          <p>{service.subTitle}</p>
        </div>
      )
    })
    }
    </div>
    </Section>;
};

export default Services;

const Section = styled.section`
h2{
  margin-top: 2rem;
  text-align: center;
}
.services-container{
padding: 3rem 0;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;
.service{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: aliceblue;
  box-shadow: rgba(100, 111, 111, 0.2) 0 7px 29px 0;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translate(0.4rem, -1rem);
    box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
  }
  .icon{
    img {
      height: 2.4rem;
    }
  }
}}
`