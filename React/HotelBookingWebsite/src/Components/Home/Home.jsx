import React, {useEffect} from "react";
import bgvideo from '../../assets/flightBg.mp4'
import takeoff from '../../assets/trail3.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    // use effect to set a animation duration
    useEffect (()=> {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className="home flex container">

            <div className="maintext">
                <h1 data-aos = 'fade-up' data-aos-duration='2500'>
                    Create Ever-lasting Memories With us 
                </h1>
            </div>

            <div className="homeImages flex">
                <div className="videoDiv">
                    <video src={bgvideo} autoPlay muted loop className="video"></video>
                </div>
                <img src={takeoff} className="plane" alt="plane" />

            </div>
        </div>
    )
}

export default Home;