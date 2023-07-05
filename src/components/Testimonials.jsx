import React from "react";
import styled from "styled-components";

const Testimonials = () => {
  return (
    <Section>
      <div className="title">
        <h2>Delighted customers</h2>
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
            incredible, memorable holiday.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

const Section = styled.section``;
