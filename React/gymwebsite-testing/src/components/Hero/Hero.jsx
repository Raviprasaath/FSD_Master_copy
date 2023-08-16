import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import {motion} from "framer-motion";
import NumberCounter from 'number-counter'


const Hero = () => {

    const transition = {type: 'spring', duration : 3}
    const mobile = window.innerWidth<=768 ? true: false;
  
    return (
    <div className='hero' id='home'>

        <div className="blur hero-blur"></div>
        <div className='left-h'>
            <Header/>
            {/* the Best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? "167px" : '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}>
                </motion.div>

                <span>the best fitness club in the town</span>
            </div>

             {/* Hero Heading*/}
             <div className="hero-text">
                <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>
                    In here we will Help you to Shape and Build your ideal body and live up your life to fullest.
                    </span>
                </div>
             </div><br></br>

             {/* Figures*/}
             <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix='+'/>
                    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span><NumberCounter end={978} start={800} delay='4' preFix='+'/></span>
                    <span>members joined</span>
                </div>
                <div>
                    <span><NumberCounter end={50} start={10} delay='4' preFix='+'/></span>
                    <span>fitness programs</span>
                </div>
              </div><br></br>

             {/* Hero buttons*/}
             <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
             </div>
            </div>

             {/* Heart rate*/}

        <div className='right-h'>
            <button className="btn">Join Now</button>
           
            <motion.div
            initial={{right: "-1rem"}}
            whileInView={{right: '4rem'}}
            transition={transition}
             className="heart-rate">
                <img src={heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>
         

             {/* Hero Images*/}
             <img src={hero_image} alt='' className='hero-image'/>
             <motion.img
             initial={{right: "11rem"}}
             whileInView={{right: '25rem'}}
             transition={transition}
             src={hero_image_back} alt='' className='hero-image-back'/>

             {/* Calories*/}
             <motion.div
             initial={{right: "35rem"}}
             whileInView={{right: '30rem'}}
             transition={transition}
             className="calories">
                <img src={calories} alt="" />
                <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
                </div>
             </motion.div>

        </div>
    </div>
                    
                   
  )
}

export default Hero
