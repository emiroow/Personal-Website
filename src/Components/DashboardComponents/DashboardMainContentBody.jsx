import React from 'react'
import { Outlet } from "react-router-dom";
export default function DashboardMainContentBody() {
    return (
        <div className=' w-full mt-2 h-max shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] items-center font-IranLight rounded-md dark:bg-BackColorWhiter border-y-2 p-5 dark:border-DarkPurple border-LightYellow bg-LightMaincolor'>
            <Outlet />
        </div>
    )
}
