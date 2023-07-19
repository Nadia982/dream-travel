import React, {useEffect} from "react";
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Places from './components/Places'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import scrollreveal from "scrollreveal"

const App = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px", 
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      ` 
      #hero, 
      #service,
      #places,
      #testimonials,
      `,
      {
        opacity: 0,
        interval: 300,
      }
    )
  }, []);
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Hero/>
    <Services/>
    <Places/>
    <Testimonials/>
    <Footer/>
    
    </>
  )
}

export default App