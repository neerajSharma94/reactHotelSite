import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context'
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero'

const SingleRoom = () => {
    const { getRoomInfo } = useGlobalContext();
    const { id } = useParams();
    const [newRoom, setNewRoom] = useState('')




    useEffect(() => {
        const singleRoom = getRoomInfo(id);
        setNewRoom(singleRoom);
    }, [getRoomInfo, id, newRoom]);




    if (!newRoom) {
        return (
            <div className="error">
                <h3>no such room found...</h3>
                <Link to="/reactHotelSite/room" className="btn-primary">back to rooms</Link>
            </div>
        )

    };

    const [heroImg, ...img] = newRoom.images;


    return <>
        <StyledHero img={heroImg}>
            <Banner title={`${newRoom.name}`}>
                <Link to="/reactHotelSite/" className="btn-primary">return Home</Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {img.map((image, index) =>
                    <img src={image} alt="images" key={index} />
                )}
            </div>
        </section>
        <div className="single-room-info">
            <article className="desc">
                <h3>detail</h3>
                <p>{newRoom.description}</p>
            </article>

            <article className="info">
                <h3>info</h3>
                <h6>price: ${newRoom.price}</h6>
                <h6>size: {newRoom.size}Sq.Ft.</h6>
                <h6>
                    max capacity :
                {newRoom.capacity > 1 ? `${newRoom.capacity} people` : `${newRoom.capacity} person`}
                </h6>
                <h6>{newRoom.pets ? "pets allowed" : "no pets allowed"}</h6>
                <h6>{newRoom.breakfast && "free breakfast included"}</h6>
            </article>
        </div>
        <section className="room-extras">
            <h6>room extras</h6>
            <ul className="extra">
                {newRoom.extras.map((extra, index) =>
                    <li key={index}>{extra}</li>
                )}
            </ul>
        </section>


    </>

}

export default SingleRoom



