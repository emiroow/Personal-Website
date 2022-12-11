import React from 'react'
import CircleProgress from './ChildComponents/CircleProgress'
import { useTranslation } from "react-i18next";

export default function CircleProgressBarss() {
    const { t } = useTranslation()
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[85%] flex-wrap flex justify-between border-b-2 pb-5 border-DarkPurple '>
                <CircleProgress percentage={20} LangProgress={t("LangProgress1")} />
                <CircleProgress percentage={80} LangProgress={t("LangProgress2")} />
                <CircleProgress percentage={40} LangProgress={t("LangProgress3")} />
            </div>
        </div>
    )
}
