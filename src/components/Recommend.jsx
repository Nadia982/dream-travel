import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/pexels-bill-emrich-230794.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

const Recommend = () => {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle:
        "Discover Singapore's captivating blend of opulence, innovation, and cultural splendor, where luxury meets tradition in a vibrant urban oasis.",
      duration: "7 nights",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle:
        "Indulge in Thailand's opulent treasures, from ornate temples and immaculate beaches to world-class resorts and Michelin-starred cuisine.",
      duration: "14 nights",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle:
        "Experience the epitome of elegance and sophistication in the enchanting city of Paris, where exquisite cuisine, iconic landmarks, and unparalleled artistry await.",
      duration: "3 nights",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle:
        "Discover a pristine idyll of breathtaking landscapes, untouched wilderness, and exceptional amenities in New Zealand.",
      duration: "14 nights",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle:
        "Experience ultimate luxury at Bora Bora, where flawless turquoise waters, overwater bungalows, and first-class service create an unforgettable tropical escape.",
      duration: "14 nights",
    },
    {
      image: Destination6,
      title: "London",
      subTitle:
        "Immerse yourself in the timeless elegance and vibrant energy of London, a city where rich history meets modern luxury.",
      duration: "7 nights",
    },
  ];

  const packages = [
    "All Destinations",
    "City Breaks",
    "Tropical Escapes",
    "Rural Retreats"
  ];

  const [active, setActive] = useState(1);

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
        </div>
        <div className="destinations">
          {data.map((destination) => {
            return (
              <div className="destination">
                <img src={destination.image} alt={destination.title} />
                <h3>{destination.title}</h3>
                <p>{destination.subTitle}</p>
                <div className="info">
                  <div className="services">
                    <img src={info1} alt="logo" />
                    <img src={info2} alt="logo" />
                    <img src={info3} alt="logo" />
                  </div>
                  <h4>{destination.duration}</h4>
                </div>
              </div>
            );
          })}
        </div>
    </Section>
  );
};

export default Recommend;

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid #000;
      }
      .active {
        border-bottom: 0.5rem solid var(--secondary-color);
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3em;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translate(0.4rem, -1rem);
        box-shadow: rgba(0,0,0,0.35) 0 5px 15px; 
      }
      img {
        width: 100%; 
      }
      .info{
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            width: 2rem;
            height: 2rem;
            border-radius: 1rem;
            background-color: #4d2ddb84;
            padding: 0.2rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
