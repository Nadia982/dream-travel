import React from "react";


import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function PlacesDestinations({ menuItem }) {
    return (
      <div className="destinations">
        {menuItem.map((item) => {
          return (
            <div className="destination" key={item.id}>
                <img src={item.image} alt={item.alt} />
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
                <div className="info">
                 <div className="services">
                   <img src={info1} alt="plane logo" />
                   <img src={info2} alt="hotel logo" />
                   <img src={info3} alt="meal logo" />
                 </div>
                 <h4>{item.duration}</h4>
               </div>
            </div>
          );
        })}
      </div>

      // <div className="destinations"> 
      //   {items.map((destination) => {
      //     return (
      //       <div className="destination" key={destination.title}>
      //         <img src={destination.image} alt={destination.alt} />
      //         <h3>{destination.title}</h3>
      //         <p>{destination.subTitle}</p>
      //         <div className="info">
      //           <div className="services">
      //             <img src={info1} alt="plane logo" />
      //             <img src={info2} alt="hotel logo" />
      //             <img src={info3} alt="meal logo" />
      //           </div>
      //           <h4>{destination.duration}</h4>
      //         </div>
      //       </div>
      //     );
      //   })}
      // </div>
    );
  }


export default PlacesDestinations;
