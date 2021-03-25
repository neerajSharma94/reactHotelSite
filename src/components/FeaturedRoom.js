import React from 'react'
import { useGlobalContext } from '../Context'
import Room from './Room'
import Loading from './Loading'

const FeaturedRoom = () => {
    const { featuredRooms, loading } = useGlobalContext();

    const featuredData = (featuredRooms) => {
        return featuredRooms.map(item => {
            return <Room key={item.id} room={item} />
        })
    }



    return (
        <section className="featured-rooms">
            <div className="featured-rooms-center">
                {loading ? <Loading /> : featuredData(featuredRooms)}
            </div>
        </section>
    )
}

export default FeaturedRoom


