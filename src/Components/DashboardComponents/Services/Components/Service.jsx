import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Service({data}) {
    const { t } = useTranslation()
    return (
        <div className='md:w-[25%] h-max w-full mx-4 my-4 space-y-3 p-5 border-2 dark:border-white border-green-500 rounded-lg'>
            <div>
                <label className='text-green-500 dark:text-white' htmlFor="">{t("TitleLabel")} :</label>
                <input defaultValue={data.title} className='mt-1 w-full p-2 text-MainColorDark text-center rounded-lg outline-green-500 dark:outline-DarkPurple' type="text" name="" id="" />
            </div>
            <div>
                <label className='text-green-500 dark:text-white' htmlFor="">{t("ValueLabel")} :</label>
                <textarea defaultValue={data.description} className='mt-1 w-full p-2 text-MainColorDark rounded-lg outline-green-500 dark:outline-DarkPurple' rows="5"></textarea>
            </div>
        </div>
    )
}
