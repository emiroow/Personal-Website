import React from 'react'
import Tab from '../TabLayout/Tab'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export default function Layout({ TabsInfo, children, SetTabState, TabState }) {

    return (
        <>
            <ToastContainer />
            <div className='font-IranBold'>
                <div className="border-b border-white dark:border-gray-500">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <Tab TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState} />
                    </ul>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}
