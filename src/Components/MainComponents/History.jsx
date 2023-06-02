import React from 'react'
import Date from './ChildComponents/Date'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
export default function History() {
    const { t } = useTranslation()
    const getHistoriesData = useSelector((store) => store.client.clientState.histories)
    const getEducationsData = useSelector((store) => store.client.clientState.educations)
    const getData = useSelector((store) => store.client.clientState)
    const getSetting = useSelector((store) => store.setting.setting)

    return (
        <>
            {
                getSetting?.educations || getSetting?.histories ? <div className='w-full ' id='date'>
                    <div className='my-5 md:my-16 justify-between flex flex-row flex-wrap  w-[98%] md:w-[95%] 2xl:w-[93%] m-auto'>
                        {
                            getSetting?.educations && getData?.educations?.length !== 0 ?
                                <div className='w-[100%] max-md:mt-3 lg:w-[49.5%] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] px-5 dark:bg-BackColorWhiter bg-LightMaincolor border-b-2 dark:border-DarkPurple border-LightYellow rounded-md h-max'>
                                    <div className='mt-8 md:mx-2'>
                                        <h1 className='text-shadow-dark font-IranBold text-xl md:text-2xl 2xl:text-3xl'>{t("education")}</h1>
                                    </div>
                                    <div className="py-4 mt-5">
                                        {
                                            getEducationsData?.map((item, index) => {
                                                return (<Date key={index} dateTime={item.dateTime} title={item.title} description={item.description} />)
                                            })
                                        }
                                    </div>
                                </div> : null
                        }
                        {
                            getSetting?.histories && getData?.histories?.length !== 0 ?
                                <div className='w-[100%] max-lg:mt-3 lg:w-[49.5%] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] px-5 dark:bg-BackColorWhiter bg-LightMaincolor border-b-2 dark:border-DarkPurple border-LightYellow rounded-md h-max'>
                                    <div className='mt-8 md:mx-2'>
                                        <h1 className='text-shadow-dark font-IranBold text-xl md:text-2xl 2xl:text-3xl'>{t("WorkHistory")}</h1>
                                    </div>
                                    <div className="py-4 mt-5">
                                        {
                                            getHistoriesData?.map((item, index) => {
                                                return (<Date key={index} dateTime={item.dateTime} title={item.title} description={item.description} />)
                                            })
                                        }
                                    </div>
                                </div> : null
                        }
                    </div>
                </div> : null
            }
        </>
    )
}
