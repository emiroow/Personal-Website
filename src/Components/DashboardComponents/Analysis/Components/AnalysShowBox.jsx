import React, { useState, useRef, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import { fetchDeletAdminAnalysis, fetchUpdateAdminAnalysis } from '../../../../Reducers/DashboardSlices/AnalysisSlice';
import { useDispatch } from 'react-redux';
export default function AnalysShowBox({ value, title, id, SetupdateStates, updateStates, TabState }) {

    const [editeing, setEditing] = useState(false)

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [GetAnalysis, SetAnalysis] = useState({
        id: 0,
        title: "",
        value: "",
        lang: TabState,
        isActive: true
    })

    const titleRef = useRef()
    const valueRef = useRef()

    const HandleDeleteAnalys = (ID) => {
        const setSetverData = async () => {
            const response = await dispatch(fetchDeletAdminAnalysis(ID))
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
        }
        setSetverData()
    }

    useEffect(() => {
        if (GetAnalysis.title) {
            const setSetverData = async () => {
                const response = await dispatch(fetchUpdateAdminAnalysis(GetAnalysis))
                if (response.payload.status === 200) {
                    setEditing(false)
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
                SetAnalysis({ ...GetAnalysis, [titleRef.current.name]: "", [valueRef.current.name]: "", id: 0 })
            }
            setSetverData()
        } else {
            if (editeing) {
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
    }, [GetAnalysis])

    const handleGetAllChangs = () => {
        SetAnalysis({ ...GetAnalysis, [titleRef.current.name]: titleRef.current.value, [valueRef.current.name]: valueRef.current.value, id: parseInt(titleRef.current.id) })
    }

    const HandleEditing = () => {
        if (!editeing) {
            return (<button onClick={() => setEditing(true)} className='text-sm bg-orange-500 font-IranLight rounded-lg p-2'>{t("EditBtn")}</button>)
        } else {
            return (
                <>
                    <button onClick={handleGetAllChangs} className='text-sm bg-green-500 font-IranLight rounded-lg p-2'>{t("SaveBtn")}</button>
                    <button onClick={() => {
                        setEditing(false)
                        SetAnalysis({ ...GetAnalysis, [titleRef.current.name]: "", [valueRef.current.name]: "", id: 0 })
                    }} className='text-sm bg-amber-500 font-IranLight rounded-lg p-2'>{t("CancelLocation")}</button>
                </>
            )
        }
    }

    return (
        <div className=' w-[95%] lg:w-[23%] border-2 dark:border-white border-LightMaincolor  mx-3 my-3 rounded-lg p-2 text-lg '>
            <label className='dark:text-white text-LightMaincolor'>{t("TitleLabel")} :</label>
            <input name='title' id={id} ref={titleRef} disabled={editeing ? false : true} type="title" className='w-full border-2 my-1 rounded-lg outline-none h-10 text-MainColorDark border-emerald-400 text-center mb-3' defaultValue={title} />
            <label className='dark:text-white text-LightMaincolor'>{t("ValueLabel")} :</label>
            <input name='value' ref={valueRef} disabled={editeing ? false : true} type="value" className='w-full border-2 my-1 rounded-lg outline-none h-10 text-MainColorDark text-center border-emerald-400' defaultValue={value} />
            <div className='w-full mt-1 flex justify-around p-1'>
                <HandleEditing />
                <button onClick={() => HandleDeleteAnalys(id)} className='text-sm bg-red-500 font-IranLight rounded-lg p-2'>{t("RemoveBtn")}</button>
            </div>
        </div>
    )
}