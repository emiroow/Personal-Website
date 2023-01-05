import React, { useContext } from 'react'
import Main from '../Components/Main'
import SideMenu from '../Components/SideMenu'
import MobileDviceMenu from '../Components/MobileDviceMenu'
import SidePortfolio from '../Components/SidePortfolio'
import Preloader from "../Components/Preloader";
import { AllContext } from "../ContextApi/AllContext"
export default function Client() {
    const { Loading } = useContext(AllContext)
    return (
        <>
            {Loading ? <Preloader /> : null}
            <MobileDviceMenu />
            <SidePortfolio />
            <Main />
            <SideMenu />
        </>
    )
}
