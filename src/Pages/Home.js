import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import Title from '../components/Title'
import FeaturedRoom from '../components/FeaturedRoom'

const Home = () => {
    return (
        <>
            <Hero hero="defaultHero">
                <Banner title="luxurious rooms" subtitle=" deluxe rooms starting at $299">
                    <Link to="/reactHotelSite/rooms"><button className="btn-primary">
                        our rooms
                    </button></Link>
                </Banner>
            </Hero>
            <Services />
            <Title title="featured room" />
            <FeaturedRoom />

        </>
    )
}

export default Home
