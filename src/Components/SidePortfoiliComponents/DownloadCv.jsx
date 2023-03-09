import React from 'react'
import { useTranslation } from 'react-i18next'
import { IoCodeDownloadOutline } from "react-icons/io5"
import { useSelector } from 'react-redux'
export default function DownloadCv() {
    const { t } = useTranslation()
    const aboutData = useSelector((store) => store.client.clientState.about)
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[80%] flex-wrap flex flex-col justify-center items-center pb-5 pt-5'>
                <a href={aboutData?.cvUrl} className="w-[75%] flex items-center justify-center  dark:bg-DarkPurple bg-LightYellowDark rounded-md text-center p-2 font-IranBold">
                    <span className='dark:text-white text-sm md:text-md 2xl:text-lg text-LightBackcolor'>{t("DownloadCv")}</span>
                    <IoCodeDownloadOutline className='text-3xl mx-1 dark:text-white text-LightBackcolor' />
                </a>
            </div>
        </div>
    )
}
