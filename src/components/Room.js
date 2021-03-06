import React from 'react'
import { Link } from 'react-router-dom'

const Room = ({ room }) => {
    const { images, name, id, price } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/reactHotelSite/room/${id}`} className="btn-primary room-link">
                    features
        </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>

    )
}

export default Room

