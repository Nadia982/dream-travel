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
            travel agency.</p><p>Unforgettable experiences, exclusive accommodation
            and personalised itineraries await.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Destination</label>
            <input type="text" placeholder="Search destinations" />
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
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  /* height: auto; */
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(50%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    color: whitesmoke;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    h1 {
      font-size: 3rem;
      letter-spacing: 0.2rem;
    }
    p{
      padding: 0 20vw;
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }
    .search {
    display: flex;
    background-color: #ffffce;
    /* margin: 0 20vw; */
    padding: 0.5rem;
    .container{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0 1.5rem;
    }
  }
}
`;
