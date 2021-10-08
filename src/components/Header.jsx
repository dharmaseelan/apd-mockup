import React from 'react'

function Header() {
    return (
        <header className="Header">
            <div className="container d-flex justify-content-between align-items-center">
                <h1>logo</h1>
                <ul className="navigation d-flex m-0 p-0">
                    <li className="item"><a href="/">Homepage</a></li>
                    <li className="item"><a href="/">Portfolio</a></li>
                    <li className="item"><a href="/">Blog</a></li>
                    <li className="item"><a href="/">Pages</a></li>
                    <li className="item"><a href="/">Features</a></li>
                    <li className="item"><a href="/">Mega Menu</a></li>
                    <li className="item"><a href="/">Contact</a></li>
                </ul>   
            </div>
        </header>
    )
}

export default Header
