import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'


const ScrollToTop = () => {
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({top: 0})
  }

  window.addEventListener("scroll", ()=> {
    window.scrollY > 150 ? setScrollState(true) : setScrollState(false);  
  })
  return (
    <ToTop scrollState={scrollState}  onClick = {toTop}>
      <p>Scroll to top</p>
      <img src={logo} alt="Dream Travel logo. Click to scroll to top" />
    </ToTop>
  )
}

export default ScrollToTop

const ToTop = styled.div`
display: ${({scrollState}) => (scrollState ? "flex" : "none")};
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.1rem;
position: fixed; 
bottom: 1rem;
right: 0.5rem;
z-index: 10;
cursor: pointer;
img {
  height: 1.5rem;
}
p {
  font-size: 0.8rem;
  max-width: 45px;
  text-align: center;
}
border-radius: 1rem;
background-color: #1900ff39;
padding: 0.1rem 0;
`;