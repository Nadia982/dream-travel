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
      title: "Unparalleled Accommodation",
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
    </Section>;
};

export default Services;

const Section = styled.section`

`