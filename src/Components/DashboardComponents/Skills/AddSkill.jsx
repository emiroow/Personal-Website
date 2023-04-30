import React from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { DashboardContext } from '../../../ContextApi/DashboardContext'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'

export default function AddSkill() {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const lang = useRef()
    const percentage = useRef()
    const type = useRef()
    const title = useRef()

    const [addType, setAddtype] = useState("0")

    const { TabState } = useContext(DashboardContext)

    const handleAddSkill = () => {

    }

    return (
        <div className='w-full flex justify-center my-10 flex-col'>
            <div className='flex w-full lg:w-[80%] max-lg:space-y-3 flex-col lg:flex-row m-auto'>
                <div className='lg:w-[20%] m-auto'>
                    <label htmlFor="">{t("TitleLabel")} :</label>
                    <input ref={title} className='w-full p-2 rounded-lg dark:border-DarkPurple border-2 text-black text-center font-IranBold' type="text" />
                </div>
                {
                    addType === "0" || addType === "1" ? <div className='lg:w-[20%] m-auto'>
                        <label htmlFor="">{t("darsad")} :</label>
                        <input ref={percentage} className='w-full p-2 rounded-lg dark:border-DarkPurple border-2 text-black text-center font-IranBold' placeholder='%' type="number" />
                    </div> : null
                }
                <div className='lg:w-[20%] m-auto'>
                    <label htmlFor="">{t("type")} :</label>
                    <select onChange={(e) => setAddtype(e.target.value)} defaultValue={"0"} ref={type} className='w-full my-3 p-2 rounded-lg dark:border-DarkPurple border-2 text-black text-center font-IranBold' placeholder='test' name="" id="">
                        <option value="0">{t("lineProgres")}</option>
                        <option value="1">{t("circelProgress")}</option>
                        <option value="2">{t("noneProgres")}</option>
                    </select>
                </div>
                <div className='lg:w-[5%] m-auto'>
                    <label htmlFor="">{t("lang")} :</label>
                    <select ref={lang} defaultValue={TabState} className='w-full my-3 p-2 rounded-lg dark:border-DarkPurple border-2 text-black text-center font-IranBold' placeholder='test' name="" id="">
                        <option value="0">EN</option>
                        <option value="1">FA</option>
                    </select>
                </div>
                <div className='lg:w-[5%] m-auto'>
                    <button onClick={handleAddSkill} className='px-5 py-3 mt-3 dark:bg-DarkPurple bg-LightYellow m-auto w-max rounded-xl'>{t("Add")}</button>
                </div>
            </div>
        </div>)
}
