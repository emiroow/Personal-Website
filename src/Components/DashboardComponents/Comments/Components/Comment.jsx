import React, { useState, useRef } from 'react'
import { useTranslation } from "react-i18next";
import Modal from '../../Modal';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { fetchDeleteAdminDeleteComment, fetchEditAdminComment } from '../../../../Reducers/DashboardSlices/CommentsSlice';
import DatePicker from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import i18n from '../../../../i18n';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import moment from 'jalali-moment';
export default function Comment({ data, TabState }) {
    const [dateTime, setDateTime] = useState(data.dateTime)
    const [editeing, setEditing] = useState(false)
    const [modalState, SetModalState] = useState({ Active: false, Access: false, id: null })
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const subject = useRef()
    const message = useRef()
    const fromName = useRef()
    const fromPosition = useRef()
    const starCount = useRef()
    const fromImgUrl = useRef()
    const websiteUrl = useRef()

    const HandleEditing = () => {
        if (!editeing) {
            return (<button onClick={() => setEditing(true)} className='text-sm bg-orange-500 font-IranLight rounded-lg p-2'>{t("EditBtn")}</button>)
        } else {
            return (
                <>
                    <button onClick={HandleSaveEditing} className='text-sm mx-3 bg-green-500 font-IranLight rounded-lg p-2'>{t("SaveBtn")}</button>
                    <button onClick={() => {
                        setEditing(false)
                    }} className='text-sm mx-3 bg-amber-500 font-IranLight rounded-lg p-2'>{t("CancelLocation")}</button>
                </>
            )
        }
    }

    const HandleSaveEditing = async () => {
        let subjectVal = subject.current.value
        let dateTimeVal = dateTime
        let messageVal = message.current.value
        let fromNameVal = fromName.current.value
        let fromPositionVal = fromPosition.current.value
        let starCountVal = starCount.current.value
        let fromImgUrlVal = fromImgUrl.current.value
        let websiteUrlVal = websiteUrl.current.value
        if (subjectVal &&
            dateTimeVal &&
            messageVal &&
            fromNameVal &&
            fromPositionVal &&
            starCountVal &&
            fromImgUrlVal &&
            websiteUrlVal) {
            const response = await dispatch(fetchEditAdminComment({
                id: data.id,
                fromName: fromNameVal,
                fromPosition: fromPositionVal,
                fromImgUrl: fromImgUrlVal,
                subject: subjectVal,
                message: messageVal,
                starCount: parseInt(starCountVal),
                dateTime: dateTimeVal,
                lang: TabState,
                isActive: true,
                websiteUrl: websiteUrlVal
            }))
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

    const handleDeletDate = (id) => {
        SetModalState({ ...modalState, Active: true, Access: false, id: id })
    }

    useEffect(() => {
        const setServer = async () => {
            if (modalState.Access) {
                const response = await dispatch(fetchDeleteAdminDeleteComment(modalState?.id))
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

    const convertToGregorian = (date) => {
        function convertPersianDigitsToEnglish(input) {
            var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
            return input.replace(/[۰-۹]/g, function (match) {
                return persianDigits.indexOf(match);
            });
        }
        return moment.from(i18n.language === "fa" ? convertPersianDigitsToEnglish(date) : date, 'fa', 'YYYY-MM-DD HH:mm').locale('fa').format('YYYY-MM-DDTHH:mm')
    };

    return (
        <div className=" bg-BackColorWhiter shadow-[0px_0px_10px_0px_rgba(0,0,0,0.30)] rounded-xl w-[100%] lg:w-[48%] text-gray-50 p-1 mb-8">
            <Modal SetModalState={SetModalState} modalState={modalState} target={data?.subject} />
            <div className="flex md:contents">
                <div className=" border-y-2 pb-8 dark:border-DarkPurple w-full  p-4 rounded-xl  mr-auto ">
                    <div className='flex justify-between  max-lg:flex-col'>
                        <div className='flex flex-col lg:w-[49%] mb-4'>
                            <label>{t("fromName")} :</label>
                            <input defaultValue={data?.fromName} ref={fromName} disabled={editeing ? false : true} type="text" className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                        </div>
                        <div className='flex flex-col lg:w-[49%] mb-4'>
                            <label>{t("subject")} :</label>
                            <input defaultValue={data?.subject} ref={subject} disabled={editeing ? false : true} type="text" className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                        </div>
                    </div>
                    <div className='flex justify-between  max-lg:flex-col'>
                        <div className='flex flex-col lg:w-[49%] mb-4'>
                            <label>{t("fromPosition")} :</label>
                            <input defaultValue={data?.fromPosition} ref={fromPosition} disabled={editeing ? false : true} type="text" className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                        </div>
                        <div className='flex flex-col lg:w-[49%] mb-4'>
                            <label>{t("starCount")} :</label>
                            <input defaultValue={data?.starCount} ref={starCount} disabled={editeing ? false : true} type="number" className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                        </div>
                    </div>
                    <div className='flex justify-between  max-lg:flex-col'>
                        <div className='flex flex-col lg:w-[49%] mb-4'>
                            <label>{t("fromImgUrl")} :</label>
                            <input defaultValue={data?.fromImgUrl} ref={fromImgUrl} disabled={editeing ? false : true} type="text" className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                        </div>
                        <div className='flex flex-col lg:w-[49%] mb-4'>
                            <label>{t("dateLable")} :</label>
                            <DatePicker
                                onChange={(value) => {
                                    setDateTime(convertToGregorian(value.format()))
                                }}
                                format="YYYY-MM-DD HH:mm"
                                value={data.dateTime.split("T").join(" ")}
                                calendar={i18n.language === "fa" && persian}
                                locale={i18n.language === "fa" && persian_fa}
                                arrow={true}
                                disabled={editeing ? false : true}
                                editable={false}
                                inputClass=' text-center w-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]'
                                calendarPosition={i18n.language === "fa" ? "bottom-right" : "bottom-left"}
                                plugins={[
                                    <TimePicker style={{ color: "black" }} hideSeconds position="bottom" />
                                ]}
                            />
                        </div>
                    </div>
                    <div className='flex justify-between  max-lg:flex-col'>
                        <div className='flex flex-col lg:w-[100%] mb-4'>
                            <label>{t("webSiteUrl")} :</label>
                            <input defaultValue={data?.websiteUrl} ref={websiteUrl} disabled={editeing ? false : true} type="text" className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                        </div>
                    </div>
                    <div className='flex flex-col  mb-5'>
                        <label>{t("descriptionLable")} :</label>
                        <textarea defaultValue={data?.message} ref={message} disabled={editeing ? false : true} className='outline-none p-3 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black rounded-xl mt-2' id="" rows="5"></textarea>
                    </div>
                    <div className='flex flex-row '>
                        <HandleEditing />
                        <button onClick={() => handleDeletDate(data?.id)} className='text-sm mx-3 w-max bg-red-500 font-IranLight rounded-lg p-2'>{t("RemoveBtn")}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
