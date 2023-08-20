import React, {useEffect} from "react";

import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Info = () => {
    // use effect to set a animation duration
    useEffect (()=> {
        Aos.init({duration: 2000})
    }, [])    

    return (
        <div className="info section">
            <div className="infoContainer container">
                
                <div data-aos = 'fade-right' data-aos-duration='2500' className="titleDiv flex">
                    <h2>Travel to make memories all around the World</h2>
                    <button data-aos = 'fade-left' data-aos-duration='2500' className="btn">
                        View All
                    </button>
                </div>

                <div className="cardsDiv grid">
                    
                    <div data-aos = 'fade-up' data-aos-duration='2500'  className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                            <RxCalendar/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your phone and book a flight ticket</p>
                    </div>
                    
                    <div data-aos = 'fade-up' data-aos-duration='2500'  className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                            <BsShieldCheck/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your phone and book a flight ticket</p>
                    </div>
                    
                    <div data-aos = 'fade-up' data-aos-duration='2500'  className="singleCard grid">
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