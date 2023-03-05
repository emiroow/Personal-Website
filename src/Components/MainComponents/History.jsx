import React, { useContext, useEffect, useState } from 'react'
import { AllContext } from "../../ContextApi/AllContext"
import Date from './ChildComponents/Date'
import { useTranslation } from 'react-i18next'
export default function History() {
    const { t } = useTranslation()

    const { GetPersonal } = useContext(AllContext)
    const [Geteducations, Seteducations] = useState(undefined)
    const [Gethistories, Sethistories] = useState(undefined)

    useEffect(() => {
        if (GetPersonal !== undefined) {
            Seteducations(GetPersonal.educations);
            Sethistories(GetPersonal.histories);
        }
    }, [GetPersonal])


    return (
        <div className='w-full mt-16 ' id='date'>
            <div className='justify-between flex flex-row flex-wrap  w-[98%] md:w-[95%] 2xl:w-[93%] m-auto'>
                <div className='w-[100%] max-md:mt-3 lg:w-[49.5%] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] px-5 dark:bg-BackColorWhiter bg-LightMaincolor border-b-2 dark:border-DarkPurple border-LightYellow rounded-md h-max'>
                    <div className='mt-8 md:mx-2'>
                        <h1 className='text-shadow-dark font-IranBold text-xl md:text-2xl 2xl:text-3xl'>{t("education")}</h1>
                    </div>
                    <div className="py-4 mt-5">
                        {
                            Geteducations?.map((item, index) => {
                                return (<Date key={index} dateTime={item.dateTime} title={item.title} description={item.description} />)
                            })
                        }
                    </div>
                </div>
                <div className='w-[100%] max-lg:mt-3 lg:w-[49.5%] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] px-5 dark:bg-BackColorWhiter bg-LightMaincolor border-b-2 dark:border-DarkPurple border-LightYellow rounded-md h-max'>
                    <div className='mt-8 md:mx-2'>
                        <h1 className='text-shadow-dark font-IranBold text-xl md:text-2xl 2xl:text-3xl'>{t("WorkHistory")}</h1>
                    </div>
                    <div className="py-4 mt-5">
                        {
                            Gethistories?.map((item, index) => {
                                return (<Date key={index} dateTime={item.dateTime} title={item.title} description={item.description} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
