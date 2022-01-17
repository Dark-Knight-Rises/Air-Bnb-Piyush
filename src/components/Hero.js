import React from 'react'
// import grid from 'images/photo-grid.png'
function Hero() {
    return (
        <div className='hero'>
            <img src='images/photo-grid.png' className='hero--image' alt="grid" />
            <h1 className='hero--h'>Online Expierences</h1>
            <p className='hero--text'>Hey there! This Airbnb website UI is made with ReactJS it uses the props, states, map and other fancy stuff of the library😉.
                Will definitely add more features in this fronted app with the proper backend support from NodeJS and MongoDB
                It is currently deployed on Heruku and Github pages.
                Thankyou for visiting and trying it out, cheers ✌️

            </p>
        </div>
    )
}

export default Hero
