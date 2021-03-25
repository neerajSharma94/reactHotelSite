import React from 'react'
import { useGlobalContext } from '../Context'
import Title from './Title'
const RoomsFilter = () => {
    const { rooms, filterRoom } = useGlobalContext();
    const allCategories = ['all', ...new Set(rooms.map((item) => item.type))];
    const clickHandler = (category) => {
        filterRoom(category);
    }
    return (
        <>
            <Title title='search rooms' />
            <section className="btn-container-new">
                {
                    allCategories.map(((category, index) => {
                        return (
                            <button type="button" className="filter-btn-new"
                                onClick={() => clickHandler(category)}
                                key={index}
                            >{category}</button>
                        )
                    }))


                }
            </section>
        </>
    )
}

export default RoomsFilter
