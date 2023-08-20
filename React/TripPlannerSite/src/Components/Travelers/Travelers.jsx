import React, { useEffect } from "react";

import destination1 from "../../assets/destination1.jpg";
import destination2 from "../../assets/destination2.jpg";
import destination3 from "../../assets/destination3.jpg";
import destination4 from "../../assets/destination4.jpg";
import traveler1 from "../../assets/traveler1.jpg";
import traveler2 from "../../assets/traveler2.jpg";
import traveler3 from "../../assets/traveler3.jpg";
import traveler4 from "../../assets/traveler4.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const travelers = [
  {
    id: 1,
    destinationImage: destination1,
    travelerImage: traveler1,
    traverlerName: "Tom Cruise",
    socialLink: "@tomcruise7",
  },
  {
    id: 2,
    destinationImage: destination3,
    travelerImage: traveler3,
    traverlerName: "Scarlett Johansson",
    socialLink: "@scarlettjohansson8",
  },
  {
    id: 3,
    destinationImage: destination2,
    travelerImage: traveler2,
    traverlerName: "Will Smith",
    socialLink: "@willsmith12",
  },
  {
    id: 4,
    destinationImage: destination4,
    travelerImage: traveler4,
    traverlerName: "Monica Bellucci",
    socialLink: "@monicabellucci5",
  },
];

const Travelers = () => {
  // use effect to set a animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos = 'fade-down' data-aos-duration='2500'>Top travelers of this month</h2>

        <div data-aos = 'fade-up' data-aos-duration='2500' className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              traverlerName,
              socialLink,
            }) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelerImage" />
                    </div>
                  </div>
                  <div className="traverlerName">
                    <span>{traverlerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
