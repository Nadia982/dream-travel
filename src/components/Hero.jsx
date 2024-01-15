import styled from "styled-components";
import homeImage from "../assets/hero.png";

const Hero = () => {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Indulge in opulence and explore the world with our bespoke luxury
            travel agency.
          </p>
          <p>
            Unforgettable experiences, exclusive accommodation and personalised
            itineraries await.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Destination</label>
            <input type="text" placeholder="Type destination here" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in date</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out date</label>
            <input type="date" />
          </div>
          <button>Explore now</button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(50%);
    }
  }
  .content {
    height: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    color: white;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
    h1 {
      font-size: 3rem;
      letter-spacing: 0.2rem;
    }
    p {
      padding: 0 15vw;
      margin-top: 0.5rem;
      font-size: 1.2rem;
      font-weight: 500;
      text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
    }
    .search {
      display: flex;
      background-color: white;
      opacity: 80%;
      margin-top: 2rem;
      padding: 0.5rem;
      border-radius: 5px;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: var(--primary-dark);
        }
        input {
          background-color: transparent;
          border: 1px solid var(--primary-dark);
          border-radius: 4px;
          text-align: center;
          margin-top: 0.2rem;
          padding: 0.4rem 0;
          color: black;
        
          &[type="date"] {
            padding-left: 1rem;
          }
          &::placeholder {
            color: darkslategrey;
            text-align: center;            
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 5px;
        color: white;
        border: none;
        background-color: var(--primary-color);
        font-size: 1.1rem;
        width: 100px;
        transition: 0.3s ease-in-out;
        &:hover{
          background-color: var(--primary-accent);
        }
      }
    }
  }
  
@media screen and (max-width: 980px){
  height: 100vh;
  .background {
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .content {

    .title {
      margin-bottom: 1rem;
      h1 {
        font-size: 1.6rem;
      }
      p {
        font-size: 1.1rem;
        padding: 0 4vw;
      }
    }
    .search {
      flex-direction: column;
      gap: 1rem;
      .container {
        padding: 0 .8rem;
      }
      button {
        width: 80%;
        margin: 0 auto;
        padding: 0.5rem;
      }
    }
  }
}
`;
