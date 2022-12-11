import React from 'react'
import { useTranslation } from 'react-i18next'
import { IoCodeDownloadOutline } from "react-icons/io5"
export default function DownloadCv({ dowloadlink }) {
    const { t } = useTranslation()
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[80%] flex-wrap flex flex-col justify-center items-center pb-5 pt-5'>
                <a href={dowloadlink} className="w-[75%] flex items-center justify-center  bg-DarkPurple rounded-md text-center p-2 font-IranBold">
                    <span className='text-white'>{t("DownloadCv")}</span>
                    <IoCodeDownloadOutline className='text-3xl mx-1' />
                </a>
            </div>
        </div>
    )
}
