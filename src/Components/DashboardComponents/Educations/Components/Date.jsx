import React, { useState, useRef } from 'react'
import { useTranslation } from "react-i18next";
import Modal from '../../Modal';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import i18n from '../../../../i18n';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import moment from 'jalali-moment'
import { fetchDeleteAdminEducation, fetchEditAdminEducation } from '../../../../Reducers/DashboardSlices/EducationsSlice';


export default function Date({ data, TabState }) {
    const [editeing, setEditing] = useState(false)
    const [modalState, SetModalState] = useState({ Active: false, Access: false, id: null })
    const [dateTime, setDateTime] = useState(data.dateTime)
    const [endDateTime, setEndDateTime] = useState(data.endDateTime)
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const title = useRef()
    const description = useRef()

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
        if (title.current.value && dateTime && endDateTime && description.current.value) {
            const response = await dispatch(fetchEditAdminEducation({
                id: data.id,
                title: title.current.value,
                dateTime: dateTime,
                endDateTime: endDateTime,
                description: description.current.value,
                lang: TabState,
                isActive: true
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
        if (modalState.Access && modalState.id) {
            const deletDatefromServer = async () => {
                try {
                    const response = await dispatch(fetchDeleteAdminEducation(modalState?.id))
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

    const convertToGregorian = (date) => {
        function convertPersianDigitsToEnglish(input) {
            var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
            return input.replace(/[۰-۹]/g, function (match) {
                return persianDigits.indexOf(match);
            });
        }
        // console.log(moment.from(i18n.language === "fa" ? convertPersianDigitsToEnglish(date) : date, 'fa', 'YYYY-MM-DD HH:mm').locale('fa').format('YYYY-MM-DDTHH:mm'))
        return moment.from(i18n.language === "fa" ? convertPersianDigitsToEnglish(date) : date, 'fa', 'YYYY-MM-DD HH:mm').locale('fa').format('YYYY-MM-DDTHH:mm')
    };


    return (
        <div className=" bg-BackColorWhiter shadow-[0px_0px_10px_0px_rgba(0,0,0,0.30)] rounded-xl w-[100%] lg:w-[48%] text-gray-50 p-1 mb-8">
            <Modal SetModalState={SetModalState} modalState={modalState} target={data?.title} />
            <div className="flex md:contents">
                <div className=" border-y-2 pb-8 dark:border-DarkPurple w-full  p-4 rounded-xl  mr-auto ">
                    <div className='flex flex-col mb-4'>
                        <label>{t("TitleLabel")} :</label>
                        <input defaultValue={data?.title} ref={title} disabled={editeing ? false : true} type="text" className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black lg:w-[60%] h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label>{t("startDateTime")} :</label>
                        <DatePicker
                            onChange={(value) => {
                                setDateTime(convertToGregorian(value.format()))
                            }}
                            disabled={editeing ? false : true}
                            value={data?.dateTime.split("T").join(" ")}
                            format="YYYY-MM-DD HH:mm"
                            calendar={i18n.language === "fa" && persian}
                            locale={i18n.language === "fa" && persian_fa}
                            arrow={true}
                            inputClass="text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black lg:w-[60%] h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"
                            calendarPosition={i18n.language === "fa" ? "bottom-right" : "bottom-left"}
                            plugins={[
                                <TimePicker style={{ color: "black" }} hideSeconds position="bottom" />
                            ]}
                        />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label>{t("endDateTime")} :</label>
                        <DatePicker
                            onChange={(value) => {
                                setEndDateTime(convertToGregorian(value.format()))
                            }}
                            disabled={editeing ? false : true}
                            value={data?.endDateTime.split("T").join(" ")}
                            format="YYYY-MM-DD HH:mm"
                            calendar={i18n.language === "fa" && persian}
                            locale={i18n.language === "fa" && persian_fa}
                            arrow={true}
                            editable={false}
                            inputClass="text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black lg:w-[60%] h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"
                            calendarPosition={i18n.language === "fa" ? "bottom-right" : "bottom-left"}
                            plugins={[
                                <TimePicker style={{ color: "black" }} hideSeconds position="bottom" />
                            ]}
                        />
                    </div>
                    <div className='flex flex-col  mb-5'>
                        <label>{t("descriptionLable")} :</label>
                        <textarea defaultValue={data?.description} ref={description} disabled={editeing ? false : true} className='outline-none p-3 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black rounded-xl' id="" rows="5"></textarea>
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
