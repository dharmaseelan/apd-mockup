import React from 'react';
import Slider from "react-slick";

function Testimonials() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        pauseOnHover: false,
        cssEase: "cubic-bezier(0.2, 0, 0.8, 1)"
    };
    return (
        <div className="Testimonials">
           <div className="container">
                <ul className="testimonials-wrapper m-0 p-0">
                    <Slider {...settings}>
                        <li className="item">
                            <div className="name-wrapper">
                                <span className="name">Alex Simpson</span>
                                <span className="position"> - CEO & Developer</span>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and  standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                            </p>
                        </li>
                        <li className="item">
                            <div className="name-wrapper">
                                <span className="name">Steven Cole</span>
                                <span className="position"> - User interface Designer</span>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and  standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                            </p>
                        </li>
                        <li className="item">
                            <div className="name-wrapper">
                                <span className="name">Alex Simpson</span>
                                <span className="position"> - CEO & Developer</span>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry,
                                when an unknown printer took a galley of type and  standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                            </p>
                        </li>
                    </Slider>
                </ul>
            </div>  
        </div>
    )
}

export default Testimonials
