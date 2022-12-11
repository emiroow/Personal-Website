import React from 'react'
import { useTranslation } from "react-i18next";
import Skill from './ChildComponents/Skill';
export default function AdditionalSkills() {
    const {t} = useTranslation()
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[85%] flex-wrap flex flex-col justify-between border-b-2 pb-5 pt-5 border-DarkPurple '>
                <h1 className=' mb-1 text-lg font-IranBold'>{t("AdditionalSkills")}</h1>
                <Skill skill={"Adobe Photoshop"} />
                <Skill skill={"Adobe Photoshop"} />
                <Skill skill={"Adobe Photoshop"} />
            </div>
        </div>
    )
}
