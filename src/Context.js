import React, { useState, useEffect, useContext } from 'react'
import data from './Data'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        rooms: [],
        featuredRooms: [],
        shortedRooms: [],
        loading: true,
        type: 'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
        capacity: 1
    })

    useEffect(() => {
        let rooms = formateData(data);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        setState({
            ...state,
            rooms, featuredRooms, shortedRooms: rooms, loading: false, maxPrice, maxSize
        })

    }, []);

    const getRoomInfo = (id) => {
        const tempRoom = state.rooms.find(item => item.id === id)
        return tempRoom;

    }

    const filterRoom = (category,) => {
        if (category === 'all') {
            const shortedRooms = state.rooms;
            setState({ ...state, shortedRooms });
        }
        else {
            const shortedRooms = state.rooms.filter(room => room.type === category);
            setState({ ...state, shortedRooms })
        }
    }



    const formateData = (items) => {
        const newItem = items.map((item) => {
            const id = item.sys.id;
            const images = item.fields.images.map((image) => image.fields.file.url)
            return { ...item.fields, id, images }
        })
        return newItem;
    }


    return <AppContext.Provider value={{ ...state, getRoomInfo: getRoomInfo, filterRoom: filterRoom }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider };




