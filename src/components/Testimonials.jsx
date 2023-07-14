import React from "react";
import styled from "styled-components";

const Testimonials = () => {
  return (
    <Section id = "testimonials">
      <div className="title">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <h4>Ms N.</h4>
          <p>
            Exquisite attention to detail, impeccable service, and unforgettable
            experiences. Dream Travel exceeded all our expectations!
          </p>
        </div>
        <div className="testimonial">
          <h4>Mr Y.</h4>
          <p>
            From start to finish, our trip was a seamless blend of luxury and
            adventure. Thank you for crafting an amazing experience.
          </p>
        </div>
        <div className="testimonial">
          <h4>Mrs G.</h4>
          <p>
            Dream Travel’s expert guidance and personalised touch made for an
            incredible, memorable holiday. We plan to be back very soon!
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

const Section = styled.section`
  margin: 3rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      width: 30%;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100,100,111,0.2) 0 7px 29px 0;
      transition: 0.3s ease-in-out;
      &:hover{
        transform: translate(0.4rem, -1rem);
        box-shadow: rgba(0,0,0,0.35) 0 5px 15px;
      }
      h4 {
        text-align: center;
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (max-width: 660px){
    .testimonials{
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        width: 80%;
        margin: 0 auto;
        .info {
          flex-direction: column;
          justify-content: center;

        }
      }
    }
  }
`;
