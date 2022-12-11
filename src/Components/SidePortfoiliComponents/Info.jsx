import React from 'react'
import { useTranslation } from "react-i18next";
export default function Info() {
    const { t } = useTranslation()
    return (
        <div className='w-full flex justify-center items-center mt-5'>
            <div className='w-[85%] border-b-2 pb-8 border-DarkPurple'>
                <div className='flex justify-between mt-5'>
                    <span className='font-IranBold'>{t("HeadInfoCountry")} : </span>
                    <span className='font-IranLight'>{t("InfoCountry")}</span>
                </div>
                <div className='flex justify-between mt-5'>
                    <span className='font-IranBold'>{t("HeadInfoState")} : </span>
                    <span className='font-IranLight'>{t("InfoState")}</span>
                </div>
                <div className='flex justify-between mt-5'>
                    <span className='font-IranBold'>{t("HeadInfoCity")} : </span>
                    <span className='font-IranLight'>{t("InfoCity")}</span>
                </div>
                <div className='flex justify-between mt-5'>
                    <span className='font-IranBold'>{t("HeadInfoYearsOld")} : </span>
                    <span className='font-IranLight'>{t("InfoYearsOld")}</span>
                </div>
            </div>
        </div>
    )
}
