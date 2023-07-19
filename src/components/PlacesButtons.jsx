import React, {useState} from "react";

import styled from "styled-components";

function PlacesButtons({ button, filter }) {

  const [active, setActive] = useState(1);

    return (
      <Section className="packages">
      <ul >
        {button.map((cat, i) => {
          return (
            <li className={active === i + 1 ? "active" : ""}
            onClick={() => {setActive(i + 1); filter(cat)}}>
              {cat}
            </li>
          );
        })}
      </ul>
      </Section>
    );
  };

export default PlacesButtons;

const Section = styled.ul`
  .packages {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
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
  }`