import React, { useState } from 'react'
import logo from './../assets/images/logo.png';
import hamburger_menu from './../assets/images/hamburger.png';

function Header() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <header className={navbar ? 'Header sticky' : 'Header'}>
            <div className="container d-flex justify-content-between align-items-center">
                <figure className="logo m-0"><img src={ logo } alt="logo" /></figure>
                <div className="d-flex align-items-center">
                    <ul className="navigation d-flex m-0 p-0">
                        <li className="item"><a href="/">Homepage</a></li>
                        <li className="item"><a href="/">Portfolio</a></li>
                        <li className="item"><a href="/">Blog</a></li>
                        <li className="item"><a href="/">Pages</a></li>
                        <li className="item"><a href="/">Features</a></li>
                        <li className="item"><a href="/">Mega Menu</a></li>
                        <li className="item"><a href="/">Contact</a></li>
                    </ul>  
                    <div className="hamburger-menu"> 
                        <figure className="banner m-0">
                            <img src={hamburger_menu} alt="mobile_menu" />
                        </figure>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
