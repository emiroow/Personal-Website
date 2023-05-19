import { t } from 'i18next'
import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchSetAdminAddCertificate } from '../../../../Reducers/DashboardSlices/CertificateSlice';
export default function AddCertificate({ setNewServerState, TabState }) {
    const dispatch = useDispatch()

    const subject = useRef()
    const dateTime = useRef()
    const message = useRef()
    const fromImgUrl = useRef()

    const handleAddNewService = async () => {
        let subjectVal = subject.current.value
        let dateTimeVal = dateTime.current.value
        let messageVal = message.current.value
        let fromImgUrlVal = fromImgUrl.current.value

        if (subjectVal &&
            dateTimeVal &&
            messageVal &&
            fromImgUrlVal) {
            const response = await dispatch(fetchSetAdminAddCertificate({
                id: 0,
                title: subjectVal,
                description: messageVal,
                link: fromImgUrlVal,
                dateTime: dateTimeVal,
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
        <div className=" bg-BackColorWhiter shadow-[0px_0px_10px_0px_rgba(0,0,0,0.30)] rounded-xl w-[100%] lg:w-[48%] h-max text-gray-50 p-1 mb-8">
            <div className="flex md:contents">
                <div className=" border-y-2 pb-8 dark:border-DarkPurple w-full  p-4 rounded-xl  mr-auto ">
                    <div className='flex justify-between  max-lg:flex-col'>
                        <div className='flex flex-col lg:w-[49%] mb-4'>
                            <label>{t("subject")} :</label>
                            <input ref={subject} type="text" className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                        </div>
                        <div className='flex flex-col lg:w-[49%] mb-4'>
                            <label>{t("dateLable")} :</label>
                            <input type="date" ref={dateTime} className=' text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]' name="" id="" />
                        </div>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label>{t("ImageUrl")} :</label>
                        <input ref={fromImgUrl} type="text" className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                    </div>
                    <div className='flex flex-col  mb-5'>
                        <label>{t("descriptionLable")} :</label>
                        <textarea ref={message} className='outline-none p-3 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black rounded-xl mt-2' id="" rows="5"></textarea>
                    </div>
                    <div className='flex flex-row '>
                        <button onClick={handleAddNewService} className='text-sm ml-3 bg-green-500 font-IranLight rounded-lg p-2'>{t("SaveBtn")}</button>
                        <button onClick={() => setNewServerState(false)} className='text-sm bg-orange-400 font-IranLight rounded-lg p-2'>{t("CancelLocation")}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}