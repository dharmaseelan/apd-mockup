import React from 'react'
import computer_icon from './../assets/images/computer.png';
import puzzle_icon from './../assets/images/puzzle.png';
import circle_icon from './../assets/images/circle.png';

function What_We_Offer() {
    return (
        <div className="What_We_Offer">
            <div className="container">
                <div className="heading center">
                    <h3>What we <span>offer</span></h3>
                    <p>We offer our customers the best services & solutions, this is our main serives list</p>
                </div>
                <ul className="wrapper p-0 m-0">
                    <li>
                        <a href="/">
                            <figure>
                                <img src={computer_icon} alt="computer" />
                            </figure>
                            <h6 className="m-0">Responsive & Multipurpose</h6>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <span className="btn-sm">Read more</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <figure>
                                <img src={puzzle_icon} alt="puzzle" />
                            </figure>
                            <h6 className="m-0">Easy Customization</h6>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <span className="btn-sm">Read more</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <figure>
                                <img src={circle_icon} alt="circle" />
                            </figure>
                            <h6 className="m-0">Awsome Friendly Support</h6>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <span className="btn-sm">Read more</span>
                        </a>
                    </li>
                </ul>
             </div>   
        </div>
    )
}

export default What_We_Offer
