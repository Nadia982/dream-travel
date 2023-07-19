import React, { useState } from "react";

function PlacesMenu({ button, filter }) {
  // const packages = [
  //     "All Destinations",
  //     "City Breaks",
  //     "Tropical Escapes",
  //     "Rural Retreats"
  //   ];

  const [active, setActive] = useState(1);

  function Button({ button, filter }) {
    return (
      <div>
        {button.map((cat, i) => {
          return (
            <button type="button" onClick={() => filter(cat)}>
              {cat}
            </button>
          );
        })}
      </div>
    );

    /* <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul> */
  }
  //         </div>
  //   )
  // }
}
export default PlacesMenu;
