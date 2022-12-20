import React from 'react'
import Main from '../Components/Main'
import SideMenu from '../Components/SideMenu'
import MobileDviceMenu from '../Components/MobileDviceMenu'
import SidePortfolio from '../Components/SidePortfolio'
export default function Client() {
    return (
        <>
            <MobileDviceMenu />
            <SidePortfolio />
            <Main />
            <SideMenu />
        </>
    )
}
