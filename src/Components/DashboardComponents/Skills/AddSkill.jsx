import React from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { DashboardContext } from '../../../ContextApi/DashboardContext'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { fetchSetAdminCircleSkill, fetchSetAdminSkill } from '../../../Reducers/DashboardSlices/SkillsSlice'

export default function AddSkill() {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const lang = useRef()
    const percentage = useRef()
    const type = useRef()
    const title = useRef()

    const [addType, setAddtype] = useState("0")

    const { TabState } = useContext(DashboardContext)

    const handleAddSkill = async () => {
        const langVal = lang.current.value
        const percentageVal = percentage?.current?.value
        const typeVal = type.current.value
        const titleVal = title.current.value
        if (typeVal === "1") {
            if (langVal && typeVal && titleVal && percentageVal) {
                const response = await dispatch(fetchSetAdminCircleSkill({
                    id: 0,
                    title: titleVal,
                    value: parseInt(percentageVal),
                    lang: parseInt(langVal),
                    isActive: true
                }))
                if (response.payload.status === 200) {
                    toast.success(t("SuccessToAdd"), {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else {
                    toast.error(t("Problem"), {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            } else {
                toast.warning(t("PleaseFill"), {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } else {
            if (typeVal === "0") {
                if (langVal && typeVal && titleVal && percentageVal) {
                    const response = await dispatch(fetchSetAdminSkill({
                        id: 0,
                        title: titleVal,
                        value: parseInt(percentageVal),
                        lang: parseInt(langVal),
                        progressBar: true,
                        isActive: true
                    }))
                    if (response.payload.status === 200) {
                        toast.success(t("SuccessToAdd"), {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    } else {
                        toast.error(t("Problem"), {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                } else {
                    toast.warning(t("PleaseFill"), {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            } else if (typeVal === "2") {
                if (langVal && typeVal && titleVal) {
                    const response = await dispatch(fetchSetAdminSkill({
                        id: 0,
                        title: titleVal,
                        value: "0",
                        lang: parseInt(langVal),
                        progressBar: false,
                        isActive: true
                    }))
                    if (response.payload.status === 200) {
                        toast.success(t("SuccessToAdd"), {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    } else {
                        toast.error(t("Problem"), {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                } else {
                    toast.warning(t("PleaseFill"), {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }
        }
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
                <div className='lg:w-[7%] m-auto'>
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
