import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Service({ data }) {
    const [isVisiblty, setIsVisiblty] = useState(true)
    const { t } = useTranslation()

    const handlechangeVisiblty = () => {
        setIsVisiblty(!isVisiblty)
    }

    const ActionBtns = () => {
        if (isVisiblty) {
            return (
                <>
                    <button onClick={handlechangeVisiblty} className='text-sm bg-orange-500 font-IranLight rounded-lg p-2'>{t("EditBtn")}</button>
                    <button className='text-sm bg-red-500 font-IranLight rounded-lg p-2'>{t("RemoveBtn")}</button>
                </>
            )
        } else {
            return (
                <>
                    <button className='text-sm bg-green-500 font-IranLight rounded-lg p-2'>{t("SaveBtn")}</button>
                    <button onClick={handlechangeVisiblty} className='text-sm bg-amber-500 font-IranLight rounded-lg p-2'>{t("CancelLocation")}</button>
                </>
            )
        }
    }

    return (
        <div className='md:w-[25%] h-max w-full mx-4 my-4 space-y-3 p-5 border-2 dark:border-white border-green-500 rounded-lg'>
            <div>
                <label className='text-green-500 dark:text-white' htmlFor="">{t("TitleLabel")} :</label>
                <input disabled={isVisiblty} defaultValue={data.title} className='mt-1 w-full p-2 text-MainColorDark text-center rounded-lg outline-green-500 dark:outline-DarkPurple' type="text" name="" id="" />
            </div>
            <div>
                <label className='text-green-500 dark:text-white' htmlFor="">{t("ValueLabel")} :</label>
                <textarea disabled={isVisiblty} defaultValue={data.description} className='mt-1 w-full p-2 text-sm text-MainColorDark rounded-lg outline-green-500 dark:outline-DarkPurple' rows="5"></textarea>
            </div>
            <div className='w-full mt-3 flex justify-between'>
                <ActionBtns />
            </div>
        </div>
    )
}
