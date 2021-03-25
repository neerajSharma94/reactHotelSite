import React from 'react'
import { useGlobalContext } from '../Context'
import Room from './Room'

const RoomsList = () => {
    const { shortedRooms } = useGlobalContext();
    if (shortedRooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search paramaters</h3>
            </div>
        )
    }
    return (
        <section className="roomsList">
            <div className="roomslist-center">
                {
                    shortedRooms.map(item => {
                        return <Room key={item.id} room={item} />
                    })
                }
            </div>
        </section>
    )
}

export default RoomsList
