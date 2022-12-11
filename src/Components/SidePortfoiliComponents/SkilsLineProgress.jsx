import React from 'react'
import LineProgress from './ChildComponents/LineProgress'
import { useTranslation } from "react-i18next";
export default function SkilsLineProgress() {
  const { t } = useTranslation()
  return (
    <div className='w-full flex justify-center items-center mt-5'>
      <div className='w-[85%] flex-wrap flex justify-between border-b-2 pb-8 border-DarkPurple '>
        <h1 className=' mb-5 text-lg font-IranBold'>{t("AdditionalSkills")}</h1>
        <LineProgress Progress={50} Skill={"Html"} />
        <LineProgress Progress={80} Skill={"Css"} />
        <LineProgress Progress={80} Skill={"Css"} />
        <LineProgress Progress={80} Skill={"Css"} />
        <LineProgress Progress={80} Skill={"Css"} />
        <LineProgress Progress={80} Skill={"Css"} />
        <LineProgress Progress={80} Skill={"Css"} />
      </div>
    </div>
  )
}
