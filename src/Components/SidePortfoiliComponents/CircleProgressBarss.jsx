import React, { useEffect, useState } from 'react'
import CircleProgress from './ChildComponents/CircleProgress'
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
export default function CircleProgressBarss() {
    const aboutData = useSelector((store) => store.client.clientState.circleSkills)

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[85%] text-sm md:text-md 2xl:text-lg flex-wrap flex justify-center border-b-2 pb-5 dark:border-DarkPurple border-LightYellow '>
                {
                    aboutData?.map((item, index) => {
                        return (<CircleProgress key={index} percentage={item.value} LangProgress={item.title} />)
                    })
                }
            </div>
        </div>
    )
}
