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
import { AllContext } from "../ContextApi/AllContext"
import Certificate from './MainComponents/Certificate'
export default function Main() {

    const { GetPersonal } = useContext(AllContext)
    const [GetAbout, SetAbout] = useState(undefined)

    useEffect(() => {
        if (GetPersonal !== undefined) {
            SetAbout(GetPersonal)
        }
    }, [GetPersonal])


    return (
        <div className="w-[100%] lg:w-[69%] relative h-max mb-[15px]">
            <Banner />
            {
                GetAbout?.analyses ? <Analyze /> : null
            }
            {
                GetAbout?.services ? <MyService /> : null
            }
            {
                GetAbout?.comments ? <Comments /> : null
            }
            {
                GetAbout?.portfolios && GetAbout?.portfolioCatagories ? <PortfolioGallery /> : null
            }
            {
                GetAbout?.certificates || GetAbout?.certificates ? <Certificate /> : null
            }
            {
                GetAbout?.histories || GetAbout?.educations ? <History /> : null
            }
            {/* add */}
            <ContactMe />
            {
                GetAbout?.about.locationAddress.length >= 0 ? <Map /> : null
            }
            <Footer />
        </div>
    )
}
