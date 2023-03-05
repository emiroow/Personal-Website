import React, { useState, useEffect } from 'react'
import { HiMenuAlt2 } from "react-icons/hi"
import DashboardMobileMenu from "./DashboardMobileMenu"
import { useTranslation } from 'react-i18next';
import { useHref, useLocation } from "react-router-dom"
export default function DashboardHeader() {
    const [GetMenuShoing, SetMenuShoing] = useState(false)
    const [CurentRoute, SetCurentRoute] = useState()
    const { t } = useTranslation()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.split("/")[2]) {
            SetCurentRoute(location.pathname.split("/")[2])
        } else {
            SetCurentRoute("DashboardRoute")
        }
    }, [location])

    const HandleMenuShoing = () => {
        SetMenuShoing(true)
    }
    return (
        <div className='dark:bg-BackColorWhiter justify-between font-IranBold shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] bg-LightMaincolor rounded-md w-full flex items-center h-[8vh] p-5 border-x-2 border-LightYellow dark:border-DarkPurple'>
            <div className='text-md lg:text-xl'>{t("Title")}{CurentRoute !== "DashboardRoute" ? " / " : null}{t(CurentRoute + "HeaderPath")}</div>
            <div className='text-3xl lg:hidden block'><HiMenuAlt2 onClick={HandleMenuShoing} /></div>
            {/* <div className='text-3xl lg:block hidden'></div> */}
            <DashboardMobileMenu sidestatus={GetMenuShoing} sidesetstatue={SetMenuShoing} />
        </div>
    )
}
