import React from 'react';
import headerlogo from '../images/headerlogo.svg';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav className="navbar">

            <div className="nav-center">
                <div className="nav-header">
                    <img src={headerlogo} alt="logo" className="header-logo" />

                    <ul className="nav-links ">
                        <li>
                            <Link to="/reactHotelSite/">Home</Link>
                        </li>
                        <li>
                            <Link to="/reactHotelSite/Rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
