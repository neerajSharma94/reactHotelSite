import React from 'react'

const Banner = ({ title, subtitle, children }) => {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div />
            {children}
        </div>
    )
}

export default Banner
