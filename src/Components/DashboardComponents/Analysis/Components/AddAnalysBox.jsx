import React, { useEffect, useState, useRef, useContext } from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import { fetchAddAdminAnalysis } from '../../../../Reducers/DashboardSlices/AnalysisSlice';

export default function AddAnalysBox({ AddNewAnalisArr, SetAddNewAnalisArr, SetupdateStates, updateStates, TabState }) {
    const { t } = useTranslation()
    const titleRef = useRef()
    const valueRef = useRef()
    const dispatch = useDispatch()
    const [GetAnalysis, SetAnalysis] = useState({
        id: 0,
        title: "",
        value: "",
        lang: TabState,
        isActive: true
    })


    const NewAnalys = () => {
        return (
            <div className='lg:w-[23%] w-[95%] border-2 dark:border-white border-LightMaincolor mx-3 my-3 rounded-lg p-2 text-lg '>
                <label className='dark:text-white text-LightMaincolor'>{t("TitleLabel")} :</label>
                <input name='title' ref={titleRef} id={0} type="text" className='w-full border-2 border-emerald-400 my-1 rounded-lg outline-none h-10 text-MainColorDark text-center mb-3' />
                <label className='dark:text-white text-LightMaincolor'>{t("ValueLabel")} :</label>
                <input name='value' ref={valueRef} type="text" className='w-full border-2 border-emerald-400 my-1 rounded-lg outline-none h-10 text-MainColorDark text-center' />
                <div className='w-full mt-1 flex justify-around p-1'>
                    <button onClick={handleGetAllChangs} className='text-sm bg-green-500 font-IranLight rounded-lg p-2'>{t("SaveBtn")}</button>
                    <button onClick={() => SetAddNewAnalisArr([])} className='text-sm bg-red-500 font-IranLight rounded-lg p-2'>{t("CancelLocation")}</button>
                </div>
            </div>
        )
    }

    useEffect(() => {
        if (GetAnalysis.title && GetAnalysis.value) {
            const setSetverData = async () => {
                const response = await dispatch(fetchAddAdminAnalysis(GetAnalysis))
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
                    SetAddNewAnalisArr([])
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
                SetAnalysis({ ...GetAnalysis, [titleRef.current.name]: "", [valueRef.current.name]: "" })
            }
            setSetverData()
        } else {
            if (AddNewAnalisArr.length > 0) {
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
        SetAnalysis({ ...GetAnalysis, [titleRef.current.name]: titleRef.current.value, [valueRef.current.name]: valueRef.current.value})
    }

    const HandleAddAnalys = () => {
        SetAddNewAnalisArr(AddNewAnalisArr.concat(<NewAnalys key={AddNewAnalisArr.length} />))
    }

    return (
        <>
            {AddNewAnalisArr.length === 0 ?
                (
                    <div onClick={HandleAddAnalys} className='lg:w-[23%] w-[95%] cursor-pointer border-2 dark:border-white border-emerald-500 justify-center items-center flex flex-col text-5xl mx-3 my-3 rounded-lg h-[25.3vh]'>
                        <AiFillPlusCircle className='dark:text-white text-emerald-400' />
                        <p className='text-sm mt-2 dark:text-white text-LightMaincolor'>{t("AddAnalysis")}</p>
                    </div>
                ) : null
            }
        </>
    )
}
