import React from 'react'
import computer_icon from './../assets/images/computer.png';
import puzzle_icon from './../assets/images/puzzle.png';
import circle_icon from './../assets/images/circle.png';
import star_icon from './../assets/images/star.png';
import cart_icon from './../assets/images/cart.png';
import book_icon from './../assets/images/book.png';

function Services() {
    return (
        <div className="Services">
            <div className="container">
                <ul className="services-wrapper p-0 m-0">
                    <li>
                        <a href="">
                            <figure><img src={computer_icon} alt="computer" /></figure>
                            <article>
                                <header>
                                    <h6 className="m-0">Responsive & Multipurpose</h6>
                                    <sub>Desktop, Tablets & phones</sub>
                                </header>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's.
                                </p>
                            </article> 
                        </a>
                    </li> 
                    <li>
                        <a href="">
                            <figure><img src={puzzle_icon} alt="puzzle" /></figure>
                            <article>
                                <header>
                                    <h6 className="m-0">Easy Customization</h6>
                                    <sub>One Click Demo Content Installation</sub>
                                </header>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's
                                </p>
                            </article>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <figure><img src={star_icon} alt="star" /></figure>
                            <article>
                                <header>
                                    <h6 className="m-0">Unlimited Features</h6>
                                    <sub>Shortcodes, Typography & Different Layouts</sub>
                                </header>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and
                                </p>
                            </article>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <figure><img src={book_icon} alt="book" /></figure>
                            <article>
                                <header>
                                    <h6 className="m-0">Clean & Modular Coding</h6>
                                    <sub>100% Clean, Valid & Well-Commented Coding</sub>
                                </header>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's.
                                </p>
                            </article>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <figure><img src={cart_icon} alt="cart" /></figure>
                            <article>
                                <header>
                                    <h6 className="m-0">The Best E-Commerce Solutions</h6>
                                    <sub>WooCommerce Fully Integration</sub>
                                </header>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's
                                </p>
                            </article>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <figure><img src={circle_icon} alt="circle" /></figure>
                            <article>
                                <header>
                                    <h6 className="m-0">Awesome Friendly Support</h6>
                                    <sub>Free Lifetime Support & Updates</sub>
                                </header>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's.
                                </p>
                            </article>
                        </a>
                    </li>
                </ul>  
            </div>   
        </div>
    )
}

export default Services
