import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";


const Info = () => {
    return (
        <div className="info section">
            <div className="infoContainer container">
                
                <div className="titleDiv flex">
                    <h2>Travel to make memories all around the World</h2>
                    <button className="btn">
                        View All
                    </button>
                </div>

                <div className="cardsDiv grid">
                    
                    <div className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                            <RxCalendar/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your phone and book a flight ticket</p>
                    </div>
                    
                    <div className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                            <BsShieldCheck/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your phone and book a flight ticket</p>
                    </div>
                    
                    <div className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                            <BsBookmarkCheck/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your phone and book a flight ticket</p>
                    </div>
                    
                </div>


                
            </div>
        </div>
    )
}

export default Info;