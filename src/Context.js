import React, { useState, useEffect, useContext } from 'react'
import data from './Data'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        rooms: [],
        featuredRooms: [],
        shortedRooms: [],
        loading: true,
        type: 'all'
    })



    useEffect(() => {
        const roomsData = () => {
            let rooms = formateData(data);
            let featuredRooms = rooms.filter(room => room.featured === true);
            setState({ rooms, featuredRooms, shortedRooms: rooms, loading: false, type: "all" })

        }
        roomsData();
        console.log('hello useEffect');

    }, [])




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




