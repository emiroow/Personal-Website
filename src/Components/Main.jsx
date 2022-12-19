import React from 'react'
import Analyze from './MainComponents/Analyze'
import Banner from './MainComponents/Banner'
import MyService from './MainComponents/MyService'
import PortfolioGallery from './MainComponents/PortfolioGallery'
import Comments from './MainComponents/Comments'
import History from './MainComponents/History'
import Footer from './Footer'
import ContactMe from './MainComponents/ContactMe'
import Map from './MainComponents/Map'
export default function Main() {

    return (
        <div className="w-[100%] lg:w-[69%] relative h-max mb-[15px]">
            <Banner />
            <Analyze />
            <MyService />
            <Comments />
            <PortfolioGallery />
            <History />
            <ContactMe />
            <Map />
            <Footer />
        </div>
    )
}
