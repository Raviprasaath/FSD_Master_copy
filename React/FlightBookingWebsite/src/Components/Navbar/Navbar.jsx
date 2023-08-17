import React from 'react';
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import logo from '../../assets/logo.jpg'

const Navbar = () => {
    return (
        <div className='navrbar flex'>
            <div className="navBarOne flex">
                <div>
                    <SiConsul/>
                </div>
                <div className='none flex'>
                    <li className='flex'> <BsPhoneVibrate/> Support</li>
                    <li className='flex'><AiOutlineGlobal/> Languages</li>
                </div>
                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>
            <div className="navBarTwo">
                <div className="logoDiv">
                    <img src={logo} className='Logo' alt="logo"/>
                </div>
                <div className="navBarMenu">
                    <ul className="menu flex">
                        <li className="listItem">Home</li>
                        <li className="listItem">About</li>
                        <li className="listItem">Offers</li>
                        <li className="listItem">Seats</li>
                        <li className="listItem">Destinations</li>
                    </ul>
                    <button className="btn flex btnOne">
                        Contact
                    </button>
                </div>

                <div className='toggleIcon'>
                    <CgMenuGridO/>
                </div>

            </div>
        </div>
    )
}

export default Navbar;