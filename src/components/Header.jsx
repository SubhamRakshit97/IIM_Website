import React, { useState } from 'react';
import Logo from '../assets/img/Logo-Original.png';


const Header = () => {
    const [dropdown, setDropdown] = useState({});

    const handleDropdown = (index) => {
        setDropdown((prevDropdown) => ({
            ...prevDropdown,
            [index]: !prevDropdown[index]
        }));
    };

    return (
        <header>
            <div className="top-bar">
                <div className="language-toggle">
                    <a href="/">English</a> | <a href='/'>हिन्दी</a>
                </div>
                <div className='font-size'>
                    <a href='/'>A-</a>
                    <a href='/'>A</a>
                    <a href='/'>A+</a>
                </div>
            </div>
            <div className="logo-nav">
                <div className="logo">
                    <img src={Logo} alt="IIM Logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                   
                        <i className="uil uil-search"></i> {/* Update this with the correct path to your search icon */}
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href='/'>About Us</a></li>
                    <li className="dropdown">
                        <a href='/' onFocus={() => handleDropdown(1)}>Programmes</a>
                        {dropdown[1] && (
                            <ul className="dropdown-menu">
                                <li><a href='/'>MBA</a></li>
                                <li><a href='/'>Executive MBA</a></li>
                                <li><a href='/'>PhD</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href='/'>People</a></li>
                    <li><a href='/'>Research</a></li>
                    <li><a href='/'>Placements</a></li>
                    <li><a href='/'>Media Relations</a></li>
                    <li><a href='/'>Campus</a></li>
                    <li><a href='/'>Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
