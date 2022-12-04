import React from 'react'
import { useTranslation } from "react-i18next";
export default function Header() {
    const { t } = useTranslation()
    return (
        <div className='w-full flex justify-center items-center p-10 border-b-2 border-DarkPurple'>
            <div className=' space-y-2 w-[80%] flex-col flex justify-center items-center'>
                <img className=' mb-2 max-w-[60%] rounded-full border-4 border-DarkPurple' src={require("../../assets/images/ProfileImg.jpg")} alt="" />
                <p className='text-center  font-IranBold'>{t("HeadName")}</p>
                <span className='text-center text-sm font-IranLight'>{t("Fild")}</span>
            </div>
        </div>
    )
}
