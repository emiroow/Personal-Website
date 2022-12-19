import React from 'react'
import { SlCalender } from "react-icons/sl"
import { useTranslation } from 'react-i18next'
export default function Date() {
    const { t } = useTranslation()
    return (
        <div class="container">
            <div class="flex flex-col md:grid grid-cols-12 text-gray-50  mb-8">
                <div class="flex md:contents">
                    <div class="col-start-1 col-end-1 md:mx-auto relative">
                        <div class="h-full rounded-3xl w-6 flex items-center justify-center">
                            <div class="h-full w-[2px] dark:bg-DarkPurple bg-white pointer-events-none"></div>
                        </div>
                        <div class="w-6  h-6 -mt-7 absolute top-0  flex items-center justify-center  rounded-full dark:bg-DarkPurple bg-white shadow text-center">
                            <SlCalender className='text-sm dark:text-white text-LightMaincolor' />
                        </div>
                    </div>
                    <div class=" col-start-2 col-end-12 p-4 rounded-xl  mr-auto w-full">
                        <h3 class="font-semibold text-md 2xl:text-lg mb-1 font-IranBold text-shadow-dark ">{t("historyTitle")}</h3>
                        <p class="leading-tight text-justify mb-1 w-full text-sm 2xl:text-md  font-IranBold dark:text-DarkPurple text-LightBackcolor">
                            {t("historyDate")}
                        </p>
                        <span className='font-IranLight text-sm 2xl:text-md'>
                            {t("historyDis")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
