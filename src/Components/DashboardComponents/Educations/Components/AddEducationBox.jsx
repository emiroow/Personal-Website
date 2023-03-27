import React, { useState, useEffect, useRef } from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
import { SetAdminEducation } from '../../../../Service/index';
import { useDispatch } from 'react-redux';
import { fetchSetAdminEducation } from '../../../../Reducers/DashboardSlices/EducationsSlice';
export default function AddEducationBox({ AddEducationArr, SetEducationArr, TabState }) {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [getEducation, setEducation] = useState({
        id: 0,
        title: "",
        dateTime: "",
        description: "",
        lang: TabState,
        isActive: true
    })

    const title = useRef()
    const dateTime = useRef()
    const description = useRef()

    const NewAnalys = () => {
        return (
            <>
                <div className=" w-full bg-BackColorWhiter rounded-xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.30)] lg:w-[48%] h-max flex items-center justify-center text-gray-50 p-1 mb-8">
                    <div className="flex md:contents">
                        <div className=" border-y-2 pb-8 dark:border-DarkPurple w-full  p-4 rounded-xl  mr-auto ">
                            <div className='flex flex-col mb-4'>
                                <label>{t("TitleLabel")} :</label>
                                <input type="text" name='title' ref={title} className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black lg:w-[60%] h-10 mt-1 rounded-md mb-2 outline-none dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label>{t("dateLable")} :</label>
                                <input type="date" name="dateTime" ref={dateTime} className=' text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black lg:w-[60%] h-10 mt-1 rounded-md mb-2 outline-none dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]' />
                                <p className='font-IranLight'></p>
                            </div>
                            <div className='flex flex-col mb-5'>
                                <label>{t("descriptionLable")} :</label>
                                <textarea name='description' ref={description} className='outline-none p-3 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black rounded-xl' id="" rows="5"></textarea>
                            </div>
                            <div className='flex flex-row '>
                                <button onClick={handleGetAllChangs} className='text-sm bg-green-500 font-IranLight rounded-lg p-2'>{t("SaveBtn")}</button>
                                <button onClick={() => SetEducationArr([])} className='text-sm mx-3 w-max bg-red-500 font-IranLight rounded-lg p-2'>{t("CancelLocation")}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const HandleAddAnalys = () => {
        SetEducationArr(AddEducationArr.concat(<NewAnalys key={AddEducationArr.length} />))
    }

    useEffect(() => {
        if (getEducation.title && getEducation.dateTime && getEducation.description) {
            const setSetverData = async () => {
                const response = await dispatch(fetchSetAdminEducation(getEducation))
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
                    SetEducationArr([])
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
                setEducation({ ...getEducation, [title.current.name]: "", [dateTime.current.name]: "", [description.current.name]: "", id: 0 })
            }
            setSetverData()
        } else {
            if (AddEducationArr.length > 0) {
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
    }, [getEducation])

    const handleGetAllChangs = () => {
        setEducation({ ...getEducation, [title.current.name]: title.current.value, [dateTime.current.name]: dateTime.current.value, [description.current.name]: description.current.value })
    }

    return (
        <>
            {AddEducationArr.length === 0 ?
                <button onClick={HandleAddAnalys} className='border-2 text-gray-50 flex justify-center rounded-lg items-center p-3 mb-3'>
                    <span className='mx-2 text-sm'>{t("addbtn")}</span>
                    <AiFillPlusCircle className='dark:text-white text-lg text-emerald-400' />
                </button> : null
            }
        </>
    )
}
