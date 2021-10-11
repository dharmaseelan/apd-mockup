import React from 'react'
import user_img from './../assets/images/user_placeholder.jpeg';
import Social_Icons from './Social_Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

function Team() {
    return (
        <div className="Our_Team">
            <div className="container">
                <ul className="wrapper p-0">
                    <li className="item">
                        <a href="/">
                            <figure>
                                <img src={user_img} alt="user" />
                            </figure>  
                            <div className="name-wrapper">
                                <div className="name">Alex Simpson</div>
                            </div>
                            <Social_Icons />
                        </a>
                        <article>
                            <p className="position">CEO & Developer</p>
                            <p className="email"><a href="/"><FontAwesomeIcon icon={faEnvelope} /> a.simpson@unique.com</a></p>
                            <p className="phone"><a href="/"><FontAwesomeIcon icon={faPhoneAlt} /> +1 911 (77) 22-1111</a></p>
                        </article>    
                    </li> 
                    <li className="item">
                        <a href="/">
                            <figure>
                                <img src={user_img} alt="user" />
                            </figure>
                            <div className="name-wrapper">
                                <div className="name">Steven Cole</div>
                            </div>
                        </a>
                        <article>
                            <p className="position">User interface Designer</p>
                            <p className="email"><a href="/"><FontAwesomeIcon icon={faEnvelope} /> a.cole@unique.com</a></p>
                            <p className="phone"><a href="/"><FontAwesomeIcon icon={faPhoneAlt} /> +1 911 (77) 22-1111</a></p>
                        </article>
                    </li>
                    <li className="item">
                        <a href="/">
                            <figure>
                                <img src={user_img} alt="user" />
                            </figure>
                            <div className="name-wrapper">
                                <div className="name">Frank Piener</div>
                            </div>
                        </a>
                        <article>
                            <p className="position">Sales Manager</p>
                            <p className="email"><a href="/"><FontAwesomeIcon icon={faEnvelope} /> f.piener@unique.com</a></p>
                            <p className="phone"><a href="/"><FontAwesomeIcon icon={faPhoneAlt} /> +1 911 (77) 22-1111</a></p>
                        </article>
                    </li>
                    <li className="item m-0">
                        <a href="/">
                            <figure>
                                <img src={user_img} alt="user" />
                            </figure>
                            <div className="name-wrapper">
                                <div className="name">Ashley Lennon</div>
                            </div>
                            <Social_Icons />
                        </a>
                        <article>
                            <p className="position">IT Specialist</p>
                            <p className="email"><a href="/"><FontAwesomeIcon icon={faEnvelope} /> a.lennon@unique.com</a></p>
                            <p className="phone"><a href="/"><FontAwesomeIcon icon={faPhoneAlt} /> +1 911 (77) 22-1111</a></p>
                        </article>
                    </li>
                </ul> 
                <div className="view-all"><a href="/" className="btn_primary w-100">View all works</a></div>
            </div> 
        </div>
    )
}

export default Team
