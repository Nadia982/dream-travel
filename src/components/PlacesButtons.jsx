import React, {useState} from 'react'

function PlacesButtons() {
    const packages = [
        "All Destinations",
        "City Breaks",
        "Tropical Escapes",
        "Rural Retreats"
      ];

      const [active, setActive] = useState(1);

  return (
    <div className="packages">
        <ul>
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
        </ul>
        </div>
  )
}

export default PlacesButtons;