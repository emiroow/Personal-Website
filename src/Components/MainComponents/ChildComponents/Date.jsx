import React from 'react'
import { SlCalender } from "react-icons/sl"
import i18n from '../../../i18n'
import * as shamsi from 'shamsi-date-converter';
import { useTranslation } from 'react-i18next';

export default function Date({ dateTime, title, description, endDateTime }) {
    const { t } = useTranslation()
    const Date = (date) => {
        const Split = date.split("T")[0]
        if (i18n.language === "en") {
            return (Split)
        } else {
            return (shamsi.gregorianToJalali(Split).join("/"))
        }
    }

    return (
        <div className="container">
            <div className="flex flex-col md:grid grid-cols-12 text-gray-50  mb-8">
                <div className="flex md:contents">
                    <div className="col-start-1 col-end-1 md:mx-auto relative">
                        <div className="h-full rounded-3xl w-6 flex items-center justify-center">
                            <div className="h-full w-[2px] dark:bg-DarkPurple bg-white pointer-events-none"></div>
                        </div>
                        <div className="w-6  h-6 -mt-7 absolute top-0  flex items-center justify-center  rounded-full dark:bg-DarkPurple bg-white shadow text-center">
                            <SlCalender className='text-sm dark:text-white text-LightMaincolor' />
                        </div>
                    </div>
                    <div className=" col-start-2 col-end-12 p-4 rounded-xl  mr-auto w-full">
                        <h3 className="font-semibold text-md 2xl:text-lg mb-1 font-IranBold text-shadow-dark ">{title}</h3>
                        <p className={`${i18n.language === "en" ? "border-l-2  pl-2" : "border-r-2  pr-2"} leading-tight text-[12px] text-justify mt-2 mb-1 space-y-1  dark:border-DarkPurple border-LightBackcolor w-full text-sm 2xl:text-md font-IranBold dark:text-DarkPurple text-LightBackcolor`}>
                            <p>
                                <span className='text-white font-IranLight'>{t("startDateTime")} :</span>
                                <span> {Date(dateTime)}</span>
                            </p>
                            <p>
                                <span className='text-white font-IranLight'>{t("endDateTime")} :</span>
                                <span> {Date(endDateTime)}</span>
                            </p>
                        </p>
                        <span className='font-IranLight text-sm 2xl:text-md'>
                            {description}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
