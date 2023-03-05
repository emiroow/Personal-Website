import React, { useContext, useState } from 'react'
import { useTranslation } from "react-i18next";
import { DeleteAdminEducation } from '../../../../Service/PersonalServices';
import { AllContext } from '../../../../ContextApi/AllContext';
import Modal from '../../Modal';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
export default function Date({ data, SetupdateStates, updateStates }) {
    const [editeing, setEditing] = useState(false)
    const [modalState, SetModalState] = useState({ Active: false, Access: false, id: null })
    const { t } = useTranslation()
    const { SetDashboardLoader } = useContext(AllContext)
    const HandleEditing = () => {
        if (!editeing) {
            return (<button onClick={() => setEditing(true)} className='text-sm bg-orange-500 font-IranLight rounded-lg p-2'>{t("EditBtn")}</button>)
        } else {
            return (
                <>
                    <button className='text-sm mx-3 bg-green-500 font-IranLight rounded-lg p-2'>{t("SaveBtn")}</button>
                    <button onClick={() => {
                        setEditing(false)
                    }} className='text-sm mx-3 bg-amber-500 font-IranLight rounded-lg p-2'>{t("CancelLocation")}</button>
                </>
            )
        }
    }

    const handleDeletDate = (id) => {
        SetModalState({ ...modalState, Active: true, Access: false, id: id })
    }

    useEffect(() => {
        if (modalState.Access && modalState.id) {
            const deletDatefromServer = async () => {
                try {
                    SetDashboardLoader(true)
                    const { status } = await DeleteAdminEducation(modalState?.id)
                    SetupdateStates(!updateStates)
                    if (status === 200) {
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
                    SetDashboardLoader(false)
                    SetupdateStates(!updateStates)
                    SetModalState({ ...modalState, Active: false, Access: false, id: null })
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
            }
            deletDatefromServer()
        }

    }, [modalState.Access])

    return (
        <div className=" w-[48%] text-gray-50 p-3 mb-8">
            <Modal SetModalState={SetModalState} modalState={modalState} target={data?.title} />
            <div className="flex md:contents">
                <div className=" border-y-2 pb-8 dark:border-DarkPurple w-full  p-4 rounded-xl  mr-auto ">
                    <div className='flex flex-col mb-4'>
                        <label>Title</label>
                        <input value={data?.title} disabled={editeing ? false : true} type="text" className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black lg:w-[60%] h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label>Date</label>
                        <input disabled={editeing ? false : true} type="date" className=' text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black lg:w-[60%] h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]' name="" id="" />
                        <p className='font-IranLight'>{data?.dateTime}</p>
                    </div>
                    <div className='flex flex-col  mb-5'>
                        <label>Date</label>
                        <textarea defaultValue={data?.description} disabled={editeing ? false : true} className='outline-none p-3 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black rounded-xl' id="" rows="5"></textarea>
                    </div>
                    <div className='flex flex-row '>
                        {HandleEditing()}
                        <button onClick={() => handleDeletDate(data?.id)} className='text-sm mx-3 w-max bg-red-500 font-IranLight rounded-lg p-2'>{t("RemoveBtn")}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
