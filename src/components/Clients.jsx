import React from 'react'
import Slider from "react-slick";
import 'font-awesome/css/font-awesome.min.css';
import facebook_logo from './../assets/images/facebook.png';


function Clients() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div className="Clients">
            <div className="container">
                <Slider className="clients-slider" {...settings}>
                    <figure>
                        <img src={facebook_logo } alt="facebook" />
                    </figure>
                    <figure>
                        <img src={facebook_logo} alt="facebook" />
                    </figure>
                    <figure>
                        <img src={facebook_logo} alt="facebook" />
                    </figure>
                    <figure>
                        <img src={facebook_logo} alt="facebook" />
                    </figure>
                    <figure>
                        <img src={facebook_logo} alt="facebook" />
                    </figure>
                </Slider>
            </div>
        </div>
    )
}

export default Clients