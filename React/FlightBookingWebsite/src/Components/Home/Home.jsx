import React from "react";
import bgvideo from '../../assets/flightBg.mp4'
import takeoff from '../../assets/trail3.png'

const Home = () => {
    return (
        <div className="home flex container">

            <div className="maintext">
                <h1>
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