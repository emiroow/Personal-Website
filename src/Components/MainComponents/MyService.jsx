import React from 'react'
import { useTranslation } from 'react-i18next'
export default function MyService() {
    const { t } = useTranslation()
    return (
        <>
            <div className='w-[95%] max-md:m-auto md:w-full mt-20'>
                <h1 className='text-shadow-dark mb-3 max-md:mt-10 font-IranBold md:mx-5 text-xl md:text-2xl 2xl:text-3xl'>{t("MyService")}</h1>
            </div>
            <div className=' w-full flex justify-between flex-row flex-wrap'>
                <div className=' shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] w-[95%] max-md:m-auto max-md:mb-2 md:w-[30%] dark:bg-BackColorWhiter bg-LightMaincolor border-2 dark:border-DarkPurple rounded-md p-3 border-LightYellow'>
                    <h1 className='font-IranBold text-shadow-dark mb-1 text-lg 2xl:text-xl'>{t("Service1")}</h1>
                    <span className='font-IranLight md:text-[13px] 2xl:text-[16px] '>{t("ServiceDis1")}</span>
                </div>
                <div className=' shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] w-[95%] max-md:m-auto max-md:mb-2 md:w-[30%] dark:bg-BackColorWhiter bg-LightMaincolor border-2 dark:border-DarkPurple rounded-md p-3 border-LightYellow'>
                    <h1 className='font-IranBold text-shadow-dark mb-1 text-lg 2xl:text-xl'>{t("Service2")}</h1>
                    <span className='font-IranLight md:text-[13px] 2xl:text-[16px] '>{t("ServiceDis2")}</span>
                </div>
                <div className=' shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] w-[95%] max-md:m-auto max-md:mb-2 md:w-[30%] dark:bg-BackColorWhiter bg-LightMaincolor border-2 dark:border-DarkPurple rounded-md p-3 border-LightYellow'>
                    <h1 className='font-IranBold text-shadow-dark mb-1 text-lg 2xl:text-xl '>{t("Service3")}</h1>
                    <span className='font-IranLight md:text-[13px] 2xl:text-[16px] '>{t("ServiceDis3")}</span>
                </div>
            </div>
        </>
    )
}
