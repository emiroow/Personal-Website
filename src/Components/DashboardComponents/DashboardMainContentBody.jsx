import React from 'react'
import { Outlet } from "react-router-dom";
export default function DashboardMainContentBody() {
    return (
        <div className=' w-full mt-[6px] h-max p-5'>
            <Outlet />
        </div>
    )
}
