import React, { useState, useEffect, useRef } from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { fetchSetAdminEducation } from '../../../../Reducers/DashboardSlices/EducationsSlice';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import DatePicker from 'react-multi-date-picker';
import i18n from '../../../../i18n';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import moment from 'jalali-moment';
export default function AddEducationBox({ AddEducationArr, SetEducationArr, TabState }) {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const NewAnalys = () => {
        const [dateTime, setDateTime] = useState()
        const [endDateTime, setEndDateTime] = useState()
        const title = useRef()
        const description = useRef()


        const handelAddNewHistories = async () => {
            console.log(title.current.value, dateTime, description.current.value, endDateTime)
            if (title.current.value && dateTime && description.current.value && endDateTime) {
                const response = await dispatch(fetchSetAdminEducation({
                    id: 0,
                    title: title.current.value,
                    dateTime: dateTime,
                    endDateTime: endDateTime,
                    description: description.current.value,
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
            <>
                <div className=" w-full bg-BackColorWhiter rounded-xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.30)] lg:w-[48%] h-max flex items-center justify-center text-gray-50 p-1 mb-8">
                    <div className="flex md:contents">
                        <div className=" border-y-2 pb-8 dark:border-DarkPurple w-full  p-4 rounded-xl  mr-auto ">
                            <div className='flex flex-col mb-4'>
                                <label>{t("TitleLabel")} :</label>
                                <input type="text" name='title' ref={title} className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black lg:w-[60%] h-10 mt-1 rounded-md mb-2 outline-none dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`} />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label>{t("startDateTime")} :</label>
                                <DatePicker
                                    onChange={(value) => {
                                        setDateTime(convertToGregorian(value.format()))
                                    }}
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
                            <div className='flex flex-col mb-5'>
                                <label>{t("descriptionLable")} :</label>
                                <textarea name='description' ref={description} className='outline-none p-3 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black rounded-xl' id="" rows="5"></textarea>
                            </div>
                            <div className='flex flex-row '>
                                <button onClick={() => handelAddNewHistories()} className='text-sm bg-green-500 font-IranLight rounded-lg p-2'>{t("SaveBtn")}</button>
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
