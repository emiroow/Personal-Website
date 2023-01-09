import React, { useContext, useEffect, useState } from 'react'
import { AllContext } from "../../ContextApi/AllContext"
import { useTranslation } from 'react-i18next'
export default function Analyze() {
    const { t } = useTranslation()

    const { GetPersonal } = useContext(AllContext)
    const [GetAbout, SetAbout] = useState(undefined)

    useEffect(() => {
        if (GetPersonal !== undefined) {
            SetAbout(GetPersonal.analyses)
        }
    }, [GetPersonal])

    return (
        <div className='w-[98%] md:w-[100%] 2xl:w-[100%] m-auto flex-wrap md:mt-5 justify-center md:justify-between px-5 flex items-center max-md:mt-1 flex-row'>
            {
                GetAbout?.map((item , index) => {
                    return (
                        <div key={index} className='md:w-[25%] w-[100%] flex md:justify-evenly justify-between items-center mt-5 md:mt-8'>
                            <span className='font-Yekan text-xl md:text-3xl 2xl:text-4xl dark:text-DarkPurple text-LightMaincolor'>{item.value}</span>
                            <span className='font-IranBold md:mt-2 text-[14px] md:text-md  2xl:text-xl' >{item.title}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
