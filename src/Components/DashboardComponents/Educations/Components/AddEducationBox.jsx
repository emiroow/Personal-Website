import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { AllContext } from "../../../../ContextApi/AllContext"
import { SetAdminEducation } from '../../../../Service/index';
export default function AddEducationBox({ AddEducationArr, SetEducationArr, SetupdateStates, updateStates, TabState }) {
    const { t } = useTranslation()
    const { SetDashboardLoader } = useContext(AllContext)

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
                <div className=" w-[48%] text-gray-50 p-3 mb-8">
                    <div className="flex md:contents">
                        <div className=" border-y-2 pb-8 dark:border-DarkPurple w-full  p-4 rounded-xl  mr-auto ">
                            <div className='flex flex-col mb-4'>
                                <label>Title</label>
                                <input type="text" name='title' ref={title} className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black lg:w-[60%] h-10 mt-1 rounded-md mb-2 outline-none dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label>Date</label>
                                <input type="date" name="dateTime" ref={dateTime} className=' text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black lg:w-[60%] h-10 mt-1 rounded-md mb-2 outline-none dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]' />
                                <p className='font-IranLight'></p>
                            </div>
                            <div className='flex flex-col mb-5'>
                                <label>Date</label>
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
                try {
                    SetDashboardLoader(true)
                    const { status } = await SetAdminEducation(getEducation)
                    if (status === 200) {
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
                        SetupdateStates(!updateStates)
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
                } catch (error) {
                    console.log(error);
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
                SetDashboardLoader(false)
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
                <div onClick={HandleAddAnalys} className='w-[48%] h-[48vh] border-2 text-gray-50 flex justify-center rounded-lg items-center p-3 mb-8'>
                    <AiFillPlusCircle className='dark:text-white text-4xl text-emerald-400' />
                </div> : null
            }
        </>
    )
}
