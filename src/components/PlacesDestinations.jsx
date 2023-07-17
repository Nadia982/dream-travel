import React from 'react'

import Destination1 from "../assets/Destination1.png"
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from '../assets/Destination4.png'
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/pexels-bill-emrich-230794.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function PlacesDestinations() {
    const data = [
        {
          image: Destination1,
          alt: "Singapore cityscape at sunset",
          category: "City Breaks",
          title: "Singapore",
          subTitle:
            "Discover Singapore's captivating blend of opulence, innovation, and cultural splendor, where luxury meets tradition in a vibrant urban oasis.",
          duration: "7 nights",
        },
        {
          image: Destination2,
          alt: "A barge on a river in Thailand at sunset with a temple in the background",
          category: "Tropical Escapes",
          title: "Thailand",
          subTitle:
            "Indulge in Thailand's opulent treasures, from ornate temples and immaculate beaches to world-class resorts and Michelin-starred cuisine.",
          duration: "14 nights",
        },
        {
          image: Destination3,
          alt: "The Eiffel Tower at night",
          category: "City Breaks",
          title: "Paris",
          subTitle:
            "Experience the epitome of elegance and sophistication in the enchanting city of Paris, where exquisite cuisine, iconic landmarks, and unparalleled artistry await.",
          duration: "3 nights",
        },
        {
          image: Destination4,
          alt: "A mountain scene of snowy wilderness in New Zealand",
          category: "Rural Retreats",
          title: "New Zealand",
          subTitle:
            "Discover a pristine idyll of breathtaking landscapes, untouched wilderness, and exceptional amenities in New Zealand.",
          duration: "14 nights",
        },
        {
          image: Destination5,
          alt: "overwater bungalows on clear blue sea",
          category: "Tropical Escapes",
          title: "Bora Bora",
          subTitle:
            "Experience ultimate luxury at Bora Bora, where flawless turquoise waters, overwater bungalows, and first-class service create an unforgettable tropical escape.",
          duration: "14 nights",
        },
        {
          image: Destination6,
          alt: "The London Eye ferris wheel illuminated in purple, set against a background of a night-time scene in London",
          category: "City Breaks",
          title: "London",
          subTitle:
            "Immerse yourself in the timeless elegance and vibrant energy of London, a city where rich history and tradition meets modern luxury.",
          duration: "7 nights",
        },
      ];
    return (
    <div className="destinations">
          {data.map((destination) => {
            return (
              <div className="destination" key={destination.title}>
                <img src={destination.image} alt={destination.alt} />
                <h3>{destination.title}</h3>
                <p>{destination.subTitle}</p>
                <div className="info">
                  <div className="services">
                    <img src={info1} alt="plane logo" />
                    <img src={info2} alt="hotel logo" />
                    <img src={info3} alt="meal logo" />
                  </div>
                  <h4>{destination.duration}</h4>
                </div>
              </div>
            );
          })}
    </div>
  )
}

export default PlacesDestinations