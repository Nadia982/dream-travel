import styled from "styled-components"
import homeImage from "../assets/hero.png"

const Hero = () => {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>Indulge in opulence and explore the world with our bespoke luxury travel agency. Unforgettable experiences, exclusive accommodation and personalised itineraries await.
</p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Destination</label>
            <input type="text" placeholder="Search destinations"/>
          </div>
          <div className="container">
            <label htmlFor="">Check-in date</label>
            <input type="date"/>
          </div>
          <div className="container">
            <label htmlFor="">Check-out date</label>
            <input type="date"/>
          </div>
          <button>Explore now</button>
        </div>
      </div>
    </Section>
  )
}

export default Hero

const Section = styled.section`

`