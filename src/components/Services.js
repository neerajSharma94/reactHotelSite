import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title'
function Services() {

    const data = [
        {
            icon: <FaCocktail />,
            title: "Cocktail",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero animi impedit ipsam. Cupiditate modi harum ea voluptatum ad deleniti incidunt."
        },
        {
            icon: <FaHiking />,
            title: "Hiking",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero animi impedit ipsam. Cupiditate modi harum ea voluptatum ad deleniti incidunt."
        },
        {
            icon: <FaShuttleVan />,
            title: "ShuttleVan",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero animi impedit ipsam. Cupiditate modi harum ea voluptatum ad deleniti incidunt."
        },
        {
            icon: <FaBeer />,
            title: "FaBeer",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero animi impedit ipsam. Cupiditate modi harum ea voluptatum ad deleniti incidunt."
        }]

    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">

                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="service">
                                <span>{item.icon}</span>
                                <h4>{item.title}</h4>
                                <p>{item.info}</p>

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services
