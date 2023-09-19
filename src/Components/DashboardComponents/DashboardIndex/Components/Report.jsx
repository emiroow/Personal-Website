import { t } from 'i18next'
import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import moment from 'jalali-moment'
import Modal from '../../ContactUsMessages/Modal'

export default function Report({ reportState, commentsArr }) {
    console.log(reportState, commentsArr)
    const [modalState, SetModalState] = useState({ active: false, id: null })

    const handleClick = (id) => {
        SetModalState({ active: true, id: id })
    }

    function convertToJalali(gregorianDate) {
        const jalaliDate = moment(gregorianDate, 'YYYY-MM-DDTHH:mm:ss.SSSSSSS');
        return jalaliDate.format('HH:mm | jYYYY-jMM-jDD');
    }

    return (
        <div className='lg:w-[49.5%]  max-md:mb-8'>
            {
                modalState.active ? <Modal data={commentsArr} modalState={modalState} SetModalState={SetModalState} /> : null
            }
            <h1 className='font-IranBold text-xl'>{t("Report")}:</h1>
            <div className="w-full bg-LightYellow/50 dark:bg-DarkPurple/40 rounded-md flex flex-row flex-wrap shadow-md mt-5 border-2">
                <div className='w-[50%] lg:w-[25%] space-y-3  justify-center items-center flex flex-col p-5'>
                    <div className='font-IranBold text-3xl dark:text-green-500'>{reportState?.comments / 2}</div>
                    <div className='text-xl'>{t("comments")}</div>
                </div>
                <div className='w-[50%] lg:w-[25%] space-y-3 border-x justify-center items-center flex flex-col p-5'>
                    <div className='font-IranBold text-3xl dark:text-green-500'>{reportState?.portfolios / 2}</div>
                    <div className='text-xl'>{t("PortfoliosMenu")}</div>
                </div>
                <div className='w-[50%] lg:w-[25%] space-y-3 max-md:border-t border-x justify-center items-center flex flex-col p-5'>
                    <div className='font-IranBold text-3xl dark:text-green-500'>{reportState?.skills / 2}</div>
                    <div className='text-xl'>{t("skills")}</div>
                </div>
                <div className='w-[50%] lg:w-[25%] space-y-3 max-md:border-t justify-center items-center flex flex-col p-5'>
                    <div className='font-IranBold text-3xl dark:text-green-500'>{reportState?.contactUsMessages}</div>
                    <div className='text-xl'>{t("ContactUsMessagesMenu").split("ی مخاطبین")}</div>
                </div>
            </div>

            <h1 className='font-IranBold text-xl mt-10'>{t("newMassege")}:</h1>
            <div className="w-full flex flex-row flex-wrap shadow-md mt-5 border-2">
                <div className="inline-block min-w-full">
                    <div className="overflow-auto ">
                        {
                            commentsArr?.length === 0 ? <div className='w-full dark:bg-DarkPurple bg-LightYellow p-32 text-center text-xl '>( {t("Empty")} )</div> :
                                <table className="min-w-full text-right text-sm font-light  rounded-b-xl">
                                    <thead className="border-b  font-medium border-neutral-500 bg-black ">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">#</th>
                                            <th scope="col" className="px-6 py-4">{t("fromName")}</th>
                                            <th scope="col" className="px-6 py-4">ip</th>
                                            <th scope="col" className="px-6 py-4">{t("dateLable")}</th>
                                            <th scope="col" className="px-6 py-4"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            commentsArr?.map((item, index) => {
                                                return (
                                                    <tr key={item.id} className="border-b border-neutral-500 bg-neutral-700">
                                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                                        <td className="whitespace-nowrap px-6 py-4">{item.fullName}</td>
                                                        <td className="whitespace-nowrap px-6 py-4">{item.ip}</td>
                                                        <td className="whitespace-nowrap px-6 py-4">{convertToJalali(item.dateTime)}</td>
                                                        <td className="whitespace-nowrap px-6 py-4 flex justify-end ">
                                                            <BsEye onClick={() => handleClick(item.id)} className='text-2xl cursor-pointer' />
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
