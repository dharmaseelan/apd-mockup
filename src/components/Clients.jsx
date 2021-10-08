import React from 'react'
import Slider from "react-slick";

function Clients() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    };
    return (
        <div className="Clients">
            <div className="container">
                <ul className="clients-wrapper m-0 p-0">
                    <li className="item">
                    </li>
                </ul>
            </div>
            <Slider {...settings}>
                <span>
                    <h3>1</h3>
                </span>
                <span>
                    <h3>2</h3>
                </span>
            </Slider>
        </div>
    )
}

export default Clients
