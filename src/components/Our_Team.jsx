import React from 'react'
import user_img from './../assets/images/user_placeholder.jpeg';

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
                        </a>
                        <article>
                            <p className="position">CEO & Developer</p>
                            <p className="email"><a href="/"><i class="fas fa-envelope"></i> a.simpson@unique.com</a></p>
                            <p className="phone"><a href="/">+1 911 (77) 22-1111</a></p>
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
                            <p className="position">CEO & Developer</p>
                            <p className="email"><a href="/">a.simpson@unique.com</a></p>
                            <p className="phone"><a href="/">+1 911 (77) 22-1111</a></p>
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
                            <p className="position">CEO & Developer</p>
                            <p className="email"><a href="/">a.simpson@unique.com</a></p>
                            <p className="phone"><a href="/">+1 911 (77) 22-1111</a></p>
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
                        </a>
                        <article>
                            <p className="position">CEO & Developer</p>
                            <p className="email"><a href="/">a.simpson@unique.com</a></p>
                            <p className="phone"><a href="/">+1 911 (77) 22-1111</a></p>
                        </article>
                    </li>
                </ul> 
                <div className="view-all"><a href="/" className="btn_primary w-100">View all works</a></div>
            </div> 
        </div>
    )
}

export default Team
