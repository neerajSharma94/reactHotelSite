import React from 'react'
import RoomFilter from './RoomsFilter'
import RoomList from './RoomsList'
import { useGlobalContext } from '../Context'
import Loading from './Loading'

const RoomContainer = () => {
    const { loading } = useGlobalContext();
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomFilter />
            <RoomList />
        </>
    )
}

export default RoomContainer
