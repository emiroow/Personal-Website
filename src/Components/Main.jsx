import React, { useContext, useEffect, useState } from 'react'
import Analyze from './MainComponents/Analyze'
import Banner from './MainComponents/Banner'
import MyService from './MainComponents/MyService'
import PortfolioGallery from './MainComponents/PortfolioGallery'
import Comments from './MainComponents/Comments'
import History from './MainComponents/History'
import Footer from './Footer'
import ContactMe from './MainComponents/ContactMe'
import Map from './MainComponents/Map'
import Certificate from './MainComponents/Certificate'
import { useSelector } from 'react-redux'
export default function Main() {
    const getData = useSelector((store) => store.client.clientState)
    const getSetting = useSelector((store) => store.setting.setting)
    console.log(getSetting)
    return (
        <div className="w-[100%] lg:w-[69%] relative h-max mb-[15px]">
            <Banner />
            {
                getData?.analyses && getSetting.analysis ? <Analyze /> : null
            }
            {
                getData?.services && getSetting.services ? <MyService /> : null
            }
            {
                getData?.comments && getSetting.comments ? <Comments /> : null
            }
            {
                getData?.portfolios && getSetting.portfolios && getData?.portfolioCatagories ? <PortfolioGallery /> : null
            }
            {
                getData?.certificates && getSetting.certificates ? <Certificate /> : null
            }
            {
                getData?.histories && getSetting.histories ? <History /> : null
            }
            {
                getSetting?.contactUsBox ? <ContactMe /> : null
            }
            {
                getData?.about?.locationAddress.length >= 0 ? <Map /> : null
            }
            <Footer />
        </div>
    )
}
