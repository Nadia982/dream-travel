import React, { useState } from "react";

import styled from "styled-components";

import PlacesButtons from "./PlacesButtons";
import PlacesDestinations from "./PlacesDestinations";



const Places = () => {
  return (
    <Section id="places">
      <div className="title">
        <h2>Places</h2>
      </div>
      
      <PlacesButtons/>
      <PlacesDestinations/>
        
    </Section>
  );
};

export default Places;

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
        padding: 1rem 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 0.1rem solid #000;
        &:hover {
        background-color: var(--primary-lightest);
      }
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
      justify-content: space-between;
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
        border-radius: 0.5rem;
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
  @media screen and (max-width: 980px){
    .packages {
      ul {
        text-align: center;
        justify-content: center;
        li {
          height: 3rem;
          width: 25%;
          padding: 1rem 0.5rem;
          font-size: 0.8rem;
         
        }
        .active {
          border-bottom-width: 0.3rem; 
        }
      }
    }
  .destinations{
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr))
  }
}
`;
