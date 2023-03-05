import React from 'react'
import LineProgress from './ChildComponents/LineProgress'
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
export default function SkilsLineProgress() {
  const { t } = useTranslation()
  const aboutData = useSelector((store) => store.client.clientState.skills)

  return (
    <div className='w-full flex justify-center items-center mt-5'>
      <div className='w-[85%] flex-wrap flex justify-between border-b-2 pt-2 dark:border-DarkPurple border-LightYellow '>
        <h1 className=' mb-6 text-sm md:text-md 2xl:text-lg font-IranBold'>{t("Skills")}</h1>
        {
          aboutData?.map((item, index) => {
            if (item.progressBar) {
              return (<LineProgress key={index} Progress={item.value} Skill={item.title} />)
            }
          })
        }
      </div>
    </div>
  )
}
