import React from 'react'
import banner from './../assets/images/banner_image.png';

function Main_Banner() {
    return (
        <div className="Main_Banner">
            <figure>
                <img src={banner} alt="banner" />
            </figure>
            <article className="container">
                <h1>Let's Be Creative !</h1>
            </article>
        </div>
    )
}

export default Main_Banner
