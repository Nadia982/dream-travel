import React from "react";
import styled from "styled-components";

// import {GiIsland, GiPartyPopper} from 'react-icons/gi';
// import { TbDiamond } from '@tabler/icons-react';
// import TbDiamond from 'react-icons/tb';
// import TbHotelService from 'react-icons/tb';
// import TbSunset from 'react-icons/tb';
// import IoIosAirplane from 'react-icons'
import { IoIosAirplane } from "react-icons/io";

const Services = () => {
  const data = [
    {
      icon: IoIosAirplane,
      alt: "topical island",
      title: "Exclusive Destinations",
      subTitle:
        "Discover the world's most luxurious and sought-after destinations, from pristine tropical islands to cosmopolitan city escapes.",
    },
    {
      icon: IoIosAirplane,
      alt: "diamond icon symbolising VIP treatment",
      title: "Personalized Service",
      subTitle:
        "Our dedicated team of travel experts will meticulously plan every aspect of your trip, offering personalized recommendations to ensure a seamless travel experience.",
    },
    {
      icon: IoIosAirplane,
      alt: "hotel icon",
      title: "Beautiful Accommodation",
      subTitle:
        "Immerse yourself in the lap of luxury with our handpicked selection of exquisite accommodation, from lavish resorts to boutique hotels.",
    },
    {
      icon: IoIosAirplane,
      alt: "sunset icon",
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
          {/* <div className="icon"> */}
          <div>
          {service.icon}
            {/* <img src={service.icon} alt={service.alt} /> */}
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
margin: 0 auto;
max-width: 1200px;
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
}
}
@media screen and (max-width: 980px){
  .services-container{
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
  }
}
`