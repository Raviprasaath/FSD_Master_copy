import React, { useEffect } from "react";

import ImageGrid from "../../assets/loungeImg.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Longue = () => {
  // use effect to set a animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos="fade-up" data-aos-duration="2500" className="imgDiv">
          <img src={ImageGrid} />
        </div>

        <div className="textDiv">
          <h2 data-aos = 'fade-down' data-aos-duration='2500'>Unaccompainted Minor Lounge</h2>

          <div className="grids grid">
            <div  data-aos = 'fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Help through the airport</span>
              <p>
                You can also call airlines from your phone and book a ticketto
                fav location!
              </p>
            </div>

            <div data-aos = 'fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Proiorty Boarding</span>
              <p>Help through the airport</p>
            </div>

            <div data-aos = 'fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Chauffeur-drive service</span>
              <p>
                You can also call airlines from your phone and book a ticketto
                fav location!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Longue;
