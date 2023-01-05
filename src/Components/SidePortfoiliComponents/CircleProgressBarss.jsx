import React, { useEffect, useContext, useState } from 'react'
import CircleProgress from './ChildComponents/CircleProgress'
import { useTranslation } from "react-i18next";
import { AllContext } from '../../ContextApi/AllContext';
export default function CircleProgressBarss() {
    const { t } = useTranslation()
    const { GetPersonal } = useContext(AllContext)
    const [GetAbout, SetAbout] = useState(undefined)

    useEffect(() => {
        if (GetPersonal !== undefined) {
            SetAbout(GetPersonal.skills)
        }
    }, [GetPersonal])

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[85%] text-sm md:text-md 2xl:text-lg flex-wrap flex justify-center border-b-2 pb-5 dark:border-DarkPurple border-LightYellow '>
                {
                    GetAbout?.map((item, index) => {
                        if (item.progressBar) {
                            return (<CircleProgress key={index} percentage={item.value} LangProgress={item.title} />)
                        }
                    })
                }
            </div>
        </div>
    )
}
