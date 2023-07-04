import React, {useState} from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
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
      duration: "7 nights"
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Indulge in Thailand's opulent treasures, from ornate temples and immaculate beaches to world-class resorts and Michelin-starred cuisine.",
      duration: "14 nights"
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Experience the epitome of elegance and sophistication in the enchanting city of Paris, where world-class cuisine, iconic landmarks, and unparalleled artistry await.",
      duration: "3 nights"
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "Discover a pristine oasis of breathtaking landscapes, untouched wilderness, and world-class amenities in New Zealand.",
      duration: "14 nights"
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Experience ultimate luxury at Bora Bora, where flawless turquoise waters, overwater bungalows, and world-class amenities create an unforgettable tropical escape.",
      duration: "14 nights"
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "Immerse yourself in the timeless elegance and vibrant energy of London, a city where rich history meets modern luxury.",
      duration: "7 nights"
    },
  ];

  const packages = [
    "The Weekend Break", 
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel"
  ]

const [active, setActive] = useState(1);

  return <Section id="recommend">
   
  </Section>;
};

export default Recommend;

const Section = styled.section``;