import React from 'react'
import { useTranslation } from "react-i18next"
import { useSelector } from 'react-redux';
import Skill from './ChildComponents/Skill';
export default function AdditionalSkills() {
    const { t } = useTranslation()
    const aboutData = useSelector((store) => store.client.clientState.skills)

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[85%] flex-wrap flex flex-col justify-between border-b-2 pb-5 pt-5 dark:border-DarkPurple border-LightYellow '>
                <h1 className=' mb-2  text-sm md:text-md 2xl:text-lg font-IranBold'>{t("AdditionalSkills")}</h1>
                {
                    aboutData?.map((item, index) => {
                        if (!item.progressBar) {
                            return (<Skill key={index} skill={item.title} />)
                        }
                    })
                }
            </div>
        </div>
    )
}
