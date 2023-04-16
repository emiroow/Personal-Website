import React, { useState, useRef, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '../../Modal';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchDeleteAdminService, fetchEditAdminService } from '../../../../Reducers/DashboardSlices/ServiceSlice';
import { DashboardContext } from "../../../../ContextApi/DashboardContext"
export default function Service({ data }) {
    const [isVisiblty, setIsVisiblty] = useState(true)
    const { t } = useTranslation()
    const [modalState, SetModalState] = useState({ Active: false, Access: false, id: null })
    const dispatch = useDispatch()
    const titleRef = useRef()
    const valueRef = useRef()
    const { TabState } = useContext(DashboardContext)

    const handlechangeVisiblty = () => {
        setIsVisiblty(!isVisiblty)
    }

    const ActionBtns = ({ id }) => {
        if (isVisiblty) {
            return (
                <>
                    <button onClick={handlechangeVisiblty} className='text-sm bg-orange-500 font-IranLight rounded-lg p-2'>{t("EditBtn")}</button>
                    <button onClick={() => handleDeleteService(id)} className='text-sm bg-red-500 font-IranLight rounded-lg p-2'>{t("RemoveBtn")}</button>
                </>
            )
        } else {
            return (
                <>
                    <button onClick={() => handleEditeService(id)} className='text-sm bg-green-500 font-IranLight rounded-lg p-2'>{t("SaveBtn")}</button>
                    <button onClick={handlechangeVisiblty} className='text-sm bg-amber-500 font-IranLight rounded-lg p-2'>{t("CancelLocation")}</button>
                    <button onClick={() => handleDeleteService(id)} className='text-sm bg-red-500 font-IranLight rounded-lg p-2'>{t("RemoveBtn")}</button>
                </>
            )
        }
    }

    const handleEditeService = async (id) => {
        if (titleRef.current.value && valueRef.current.value) {
            const response = await dispatch(fetchEditAdminService({
                id: id,
                title: titleRef.current.value,
                description: valueRef.current.value,
                link: "string",
                lang: TabState,
                isActive: true
            }))
            if (response.payload.status === 200) {
                setIsVisiblty(!isVisiblty)
                toast.success(t("SuccessEdited"), {
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

    const handleDeleteService = (id) => {
        SetModalState({ ...modalState, Active: true, Access: false, id: id })
    }

    useEffect(() => {
        const setServer = async () => {
            if (modalState.Access) {
                const response = await dispatch(fetchDeleteAdminService(modalState?.id))
                if (response.payload.status === 200) {
                    toast.success(t("SuccessTopdelete"), {
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
                SetModalState({ ...modalState, Active: false, Access: false, id: null })
            }
        }
        setServer()
    }, [modalState.Access])

    return (
        <>
            <Modal SetModalState={SetModalState} modalState={modalState} target={data?.title} />
            <div className='md:w-[25%] h-max w-full mx-4 my-4 space-y-3 p-5 border-2 dark:border-white border-LightMaincolor rounded-lg'>
                <div>
                    <label className='text-LightMaincolor dark:text-white' htmlFor="">{t("TitleLabel")} :</label>
                    <input ref={titleRef} disabled={isVisiblty} defaultValue={data.title} className='mt-1 w-full p-2 border-2 border-green-500 text-MainColorDark text-center rounded-lg outline-green-500 dark:outline-DarkPurple' type="text" name="" id="" />
                </div>
                <div>
                    <label className='text-LightMaincolor dark:text-white' htmlFor="">{t("ValueLabel")} :</label>
                    <textarea ref={valueRef} disabled={isVisiblty} defaultValue={data.description} className='mt-1 border-2 border-green-500 w-full p-2 text-sm text-MainColorDark rounded-lg outline-green-500 dark:outline-DarkPurple' rows="5"></textarea>
                </div>
                <div className='w-full mt-3 flex justify-around'>
                    <ActionBtns id={data.id} />
                </div>
            </div>
        </>
    )
}
