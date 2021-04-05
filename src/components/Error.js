import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <>
            <Hero >
                <Banner title="404" >
                    <Link to="/reactHotelSite/"><button className="btn-primary">back to Home</button></Link>

                </Banner>
            </Hero>
        </>
    )
}

export default Error
