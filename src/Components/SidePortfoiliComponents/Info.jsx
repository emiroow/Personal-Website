import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { AllContext } from "../../ContextApi/AllContext"
export default function Info() {
    const { t } = useTranslation()
    const { GetPersonal } = useContext(AllContext)
    const [GetAbout, SetAbout] = useState(undefined)

    useEffect(() => {
        if (GetPersonal !== undefined) {
            SetAbout(GetPersonal.about)
        }
    }, [GetPersonal])

    return (
        <div className='w-full flex justify-center items-center mt-5'>
            <div className='w-[85%] text-sm md:text-md 2xl:text-lg border-b-2 pb-8 dark:border-DarkPurple border-LightYellow'>
                <div className='flex justify-between mt-5'>
                    <span className='font-IranBold'>{t("HeadInfoCountry")} : </span>
                    <span className='font-IranLight'>{GetAbout?.country}</span>
                </div>
                <div className='flex justify-between mt-5'>
                    <span className='font-IranBold'>{t("HeadInfoState")} : </span>
                    <span className='font-IranLight'>{GetAbout?.city}</span>
                </div>
                <div className='flex justify-between mt-5'>
                    <span className='font-IranBold'>{t("HeadInfoYearsOld")} : </span>
                    <span className='font-IranLight'>{GetAbout?.birthday}</span>
                </div>
            </div>
        </div>
    )
}
