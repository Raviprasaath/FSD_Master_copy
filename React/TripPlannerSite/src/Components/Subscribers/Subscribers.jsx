import React, {useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribers = () => {
    // use effect to set a animation duration
    useEffect (()=> {
        Aos.init({duration: 2000})
    }, [])


    return (
        <div className="subscribe section">
            <div className="sectionContainer container">
                <h2 data-aos = 'fade-left' data-aos-duration='2500' >Subscribe Newsletters & get Latest News</h2>
                <div data-aos = 'fade-right' data-aos-duration='2500' className="inputDiv flex">
                    <input type="text" placeholder="Enter your Email address" />
                    <button className="btn">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribers;