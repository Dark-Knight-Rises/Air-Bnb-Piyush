import React from 'react'
// import star from 'images/star.png'

function Card(props) {
    console.log(props.coverImg)
    return (
        <div className='card'>
            <img src={props.coverImg} alt="k" className='card--img'/>
            <div className="card--stats">
                <img src='images/star.png' alt="star" className='card--star' />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ₹ {props.price}</span> / person</p>
        </div>
    )
}

export default Card
