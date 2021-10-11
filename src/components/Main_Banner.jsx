import React from 'react'
import banner from './../assets/images/banner_image.png';
import arrow_down from './../assets/images/down-chevron.png';
import { Link } from 'react-scroll';

function Main_Banner() {
    return (
        <div className="Main_Banner">
            <figure className="banner m-0">
                <img src={banner} alt="banner" />
            </figure>
            <article className="container">
                <div className="wrapper">
                    <p className="m-0 sub">WHAT ARE YOU WAITING FOR?</p>
                    <h1>Let's Be Creative !</h1>
                    <span className="desc">Lorem Ipsum Dolor Si Amet</span>
                    <div className="content">
                        <h3><span className="primary">Start</span> Doing That</h3>
                        <Link to='What_We_Offer' smooth={true}>
                            <figure className="arrow-icon"><img src={arrow_down} alt="arrow" /></figure>
                        </Link>
                    </div> 
                </div>  
            </article>
        </div>
    )
}

export default Main_Banner
