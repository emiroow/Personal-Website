import React, { useEffect, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AllContext } from '../../ContextApi/AllContext';
import { IoCodeDownloadOutline } from "react-icons/io5"
export default function DownloadCv() {
    const { t } = useTranslation()

    const { GetPersonal } = useContext(AllContext)
    const [GetAbout, SetAbout] = useState(undefined)

    useEffect(() => {
        if (GetPersonal !== undefined) {
            SetAbout(GetPersonal.about.cvUrl)
        }
    }, [GetPersonal])

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[80%] flex-wrap flex flex-col justify-center items-center pb-5 pt-5'>
                <a href={GetAbout} className="w-[75%] flex items-center justify-center  dark:bg-DarkPurple bg-LightYellowDark rounded-md text-center p-2 font-IranBold">
                    <span className='dark:text-white text-sm md:text-md 2xl:text-lg text-LightBackcolor'>{t("DownloadCv")}</span>
                    <IoCodeDownloadOutline className='text-3xl mx-1 dark:text-white text-LightBackcolor' />
                </a>
            </div>
        </div>
    )
}
