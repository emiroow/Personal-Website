import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Analyze() {
    const { t } = useTranslation()
    return (
        <div className='w-full flex-wrap justify-center md:justify-between px-5 flex items-center max-md:mt-1 flex-row'>
            <div className='md:w-[25%] w-[100%] flex md:justify-evenly justify-between items-center mt-5 md:mt-8'>
                <span className='font-Yekan text-xl md:text-3xl 2xl:text-4xl dark:text-DarkPurple text-LightMaincolor'>1+</span>
                <span className='font-IranBold md:mt-2 text-[14px] md:text-md  2xl:text-xl' >{t("Experience")}</span>
            </div>
            <div className='md:w-[25%] w-[100%] flex md:justify-evenly justify-between items-center mt-5 md:mt-8'>
                <span className='font-Yekan text-xl md:text-3xl 2xl:text-4xl dark:text-DarkPurple text-LightMaincolor'>8+</span>
                <span className='font-IranBold md:mt-2 text-[14px] md:text-md  2xl:text-xl' >{t("projects")}</span>
            </div>
            <div className='md:w-[25%] w-[100%] flex md:justify-evenly justify-between items-center mt-5 md:mt-8'>
                <span className='font-Yekan text-xl md:text-3xl 2xl:text-4xl dark:text-DarkPurple text-LightMaincolor'>1+</span>
                <span className='font-IranBold md:mt-2 text-[14px] md:text-md  2xl:text-xl' >{t("Customer")}</span>
            </div>
        </div>
    )
}
