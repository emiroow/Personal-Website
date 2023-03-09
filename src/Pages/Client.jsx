import React from 'react'
import Main from '../Components/Main'
import SideMenu from '../Components/SideMenu'
import MobileDviceMenu from '../Components/MobileDviceMenu'
import SidePortfolio from '../Components/SidePortfolio'
import Preloader from "../Components/Preloader";
import { useSelector } from 'react-redux'
export default function Client() {
    const Loader = useSelector((store) => store.client.status === "Loading")
    const contactLoader = useSelector((sotre) => sotre.contact.loader)

    return (
        <>
            {Loader || contactLoader ? <Preloader /> : null}
            <MobileDviceMenu />
            <SidePortfolio />
            <Main />
            <SideMenu />
        </>
    )
}
