import destination1 from "../../assets/destination1.jpg";
import traveler3 from "../../assets/traveler3.jpg";

const travelers = [
  {
    id: 1,
    destinationImage: destination1,
    travelerImage: traveler3,
    traverlerName: "Scarlett Johansson",
    socialLink: "@scarlettjohansson8",
  },
];

const Travelers = () => {
  return (
    <div className="travelers conatiner section">
      <div className="sectionConatiner">
        <h2>Top travelers of this month</h2>

        <div className="travelersContainer grid">
          {travelers.map(({}) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="singleTraveler">
                <img src={destination1} className="destinationImage" />

                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={traveler3} className="travelerImage" />
                  </div>
                </div>
                <div className="traverlerName">
                  <span>Scarlett Johansson</span>
                  <p>@scarlettjohansson8</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
