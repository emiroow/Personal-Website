import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsEye } from "react-icons/bs"
import Pagnation from './Pagnation'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchgetAdminContactUsMessages } from '../../../Reducers/DashboardSlices/ContactUsMessagesSlice'
import moment from 'jalali-moment';
import Modal from './Modal'
import { t } from 'i18next'
import { DashboardContext } from '../../../ContextApi/DashboardContext'

export default function ContentsFa() {
    const [curentPage, setCurentPage] = useState(1)
    const maxPage = useSelector((state) => state.ContactUsMessages?.Messages?.maxPage)
    const dispatch = useDispatch()
    const [modalState, SetModalState] = useState({ active: false, id: null })
    const { TabState } = useContext(DashboardContext)

    useEffect(() => {
        const data = { page: curentPage, lang: TabState, countOfPage: 15 }
        dispatch(fetchgetAdminContactUsMessages(data))
    }, [curentPage])

    const TableItems = useSelector((state) => state.ContactUsMessages?.Messages?.data)

    function convertToJalali(gregorianDate) {
        const jalaliDate = moment(gregorianDate, 'YYYY-MM-DDTHH:mm:ss.SSSSSSS');
        return jalaliDate.format('HH:mm | jYYYY-jMM-jDD');
    }

    const handleClick = (id) => {
        SetModalState({ active: true, id: id })
    }

    return (
        <div className="flex flex-col" >
            {
                modalState.active ? <Modal data={TableItems} modalState={modalState} SetModalState={SetModalState} /> : null
            }
            <div className=" w-full dark:bg-DarkPurple bg-LightYellow flex flex-wrap justify-center lg:justify-start  items-center rounded-b-xl">
                <div className="inline-block min-w-full">
                    <div className="overflow-auto ">
                        {
                            TableItems?.length === 0 ? <div className='w-full dark:bg-DarkPurple bg-LightYellow p-32 text-center text-xl '>( {t("Empty")} )</div> :
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
                                            TableItems?.map((item, index) => {
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
                {
                    maxPage >= 1 ?
                        <Pagnation curentPage={curentPage} setCurentPage={setCurentPage} maxPage={maxPage} /> : null
                }
            </div>
        </div >
    )
}

