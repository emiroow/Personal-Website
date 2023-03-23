import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
export default function MyService() {
    const { t } = useTranslation()
    const getData = useSelector((store) => store.client.clientState.services)

    return (
        <>
            <div className='m-auto w-[98%] md:w-[95%] 2xl:w-[93%] mt-10 md:mt-24'>
                <h1 className='text-shadow-dark mb-3 max-md:mt-10 font-IranBold  text-xl md:text-2xl 2xl:text-3xl'>{t("MyService")}</h1>
            </div>
            <div className=' w-[98%] md:w-[95%] 2xl:w-[93%] m-auto flex justify-between flex-row flex-wrap'>
                {
                    getData?.map((item, index) => {
                        return (
                            <div key={index} className=' mb-5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] w-[95%] max-md:m-auto max-md:mb-2 md:w-[30%] dark:bg-BackColorWhiter bg-LightMaincolor border-2 dark:border-DarkPurple rounded-md p-3 border-LightYellow'>
                                <h1 className='font-IranBold text-shadow-dark mb-1 text-lg 2xl:text-xl'>{item.title}</h1>
                                <span className='font-IranLight md:text-[13px] 2xl:text-[16px] '>{item.description}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
