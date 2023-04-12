import React, { useRef, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchSetAdminService } from '../../../../Reducers/DashboardSlices/ServiceSlice';
import { DashboardContext } from '../../../../ContextApi/DashboardContext';
import Preloader from "../../../Preloader"
export default function NewService({ setNewServerState }) {
    const Loader = useSelector((state) => state.services.status)
    const { t } = useTranslation()
    const Title = useRef(null)
    const Value = useRef(null)
    const dispatch = useDispatch()
    const { TabState } = useContext(DashboardContext)
    const handleAddNewService = async () => {
        if (Title.current.value && Value.current.value) {
            const response = await dispatch(fetchSetAdminService({
                id: 0,
                title: Title.current.value,
                description: Value.current.value,
                link: "string",
                lang: TabState,
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
                setNewServerState(false)
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
                setNewServerState(false)
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

    return (
        <div className='md:w-[25%] h-max w-full mx-4 my-4 space-y-3 p-5 border-2 dark:border-white border-green-500 rounded-lg'>
            {Loader === "pending" ? <Preloader /> : null}
            <div>
                <label className='text-green-500 dark:text-white' htmlFor="">{t("TitleLabel")} :</label>
                <input ref={Title} className='mt-1 w-full p-2 text-MainColorDark text-center rounded-lg outline-green-500 dark:outline-DarkPurple' type="text" name="" id="" />
            </div>
            <div>
                <label className='text-green-500 dark:text-white' htmlFor="">{t("ValueLabel")} :</label>
                <textarea ref={Value} className='mt-1 w-full p-2 text-sm text-MainColorDark rounded-lg outline-green-500 dark:outline-DarkPurple' rows="5"></textarea>
            </div>
            <div className='w-full mt-3 flex justify-between'>
                <div className='w-full mt-1 flex justify-around p-1'>
                    <button onClick={handleAddNewService} className='text-sm bg-green-500 font-IranLight rounded-lg p-2'>{t("SaveBtn")}</button>
                    <button onClick={() => setNewServerState(false)} className='text-sm bg-orange-400 font-IranLight rounded-lg p-2'>{t("CancelLocation")}</button>
                </div>
            </div>
        </div>
    )
}
