import React from 'react'
import Tab from '../TabLayout/Tab'
export default function Layout({ TabsInfo, children, SetTabState, TabState }) {

    return (
        <>
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
