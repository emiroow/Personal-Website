import React from 'react'
import { BiMapAlt } from "react-icons/bi"
import { AiOutlineMessage } from "react-icons/ai"
import { useTranslation } from 'react-i18next'
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactMessage } from '../../Reducers/contactSlice';
export default function ContactMe() {
    const { t } = useTranslation()
    const getAboutData = useSelector((store) => store.client.clientState.about)
    const getContactMssgStatus = useSelector((store) => store.contact.status)
    const dispatch = useDispatch();

    const handleSendContact = async (values, resetForm) => {
        await dispatch(fetchContactMessage(values))
        if (getContactMssgStatus === "done") {
            resetForm(); toast.success(t("AddContactSuccess"), {
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

    const schema = Yup.object().shape({
        fullName: Yup.string().required(t("ContactUsername")),
        email: Yup.string().email().required(t("ContactEmail")),
        subject: Yup.string().required(t("ContactSubject")),
        message: Yup.string().min(10, t("minCharacter")).required(t("ContactMessage")),
    });

    return (
        <div id='contact' className='my-5 md:my-16'>
            <ToastContainer />
            <div className=' m-auto w-[98%] md:w-[95%] 2xl:w-[93%]'>
                <h1 className='text-shadow-dark mb-5 max-md:mt-10 font-IranBold text-xl md:text-2xl  2xl:text-3xl'>{t("Cuntact")}</h1>
            </div>
            <div className=' w-[98%] md:w-[95%] 2xl:w-[93%] m-auto flex justify-between flex-row flex-wrap'>
                <div className='w-full lg:w-[69.5%] dark:bg-BackColorWhiter rounded-md p-5 border-y-2 dark:border-DarkPurple border-LightYellow bg-LightMaincolor h-max'>
                    <Formik validationSchema={schema} initialValues={{ fullName: "", email: "", subject: "", message: "" }} onSubmit={(values, { resetForm }) => { handleSendContact(values, resetForm) }} className='w-full'>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='w-full'>
                                    <label htmlFor="" className='font-IranBold text-sm'>{t("Fullname")}</label>
                                    <input type="text" name='fullName' id="fullName" onChange={handleChange} onBlur={handleBlur} value={values.fullName} className='w-full p-2 font-IranLight mt-1 rounded-md dark:bg-DarkPurple/40 bg-[#293462]/50 outline-none px-2 ' />
                                    <p className=" text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-1 mt-2">
                                        {errors.fullName && touched.fullName && errors.fullName}
                                    </p>
                                </div>
                                <div className='w-full mt-5'>
                                    <label htmlFor="" className='font-IranBold text-sm'>{t("Email")}</label>
                                    <input type="email" name='email' id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className='w-full p-2 font-IranLight mt-1 rounded-md dark:bg-DarkPurple/40 bg-[#293462]/50 outline-none px-2 ' />
                                    <p className=" text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-1 mt-2">
                                        {errors.email && touched.email && errors.email}
                                    </p>
                                </div>
                                <div className='w-full mt-5'>
                                    <label htmlFor="" className='font-IranBold text-sm'>{t("Subject")}</label>
                                    <input type="text" name='subject' id="subject" onChange={handleChange} onBlur={handleBlur} value={values.subject} className='w-full p-2 font-IranLight mt-1 rounded-md dark:bg-DarkPurple/40 bg-[#293462]/50 outline-none px-2 ' />
                                    <p className=" text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-1 mt-2">
                                        {errors.subject && touched.subject && errors.subject}
                                    </p>
                                </div>
                                <div className='w-full mt-5'>
                                    <label htmlFor="" className='font-IranBold text-sm'>{t("Description")}</label>
                                    <textarea name='message' id="message" onChange={handleChange} onBlur={handleBlur} value={values.message} className='w-full p-2 font-IranLight mt-1 rounded-md dark:bg-DarkPurple/40 bg-[#293462]/50 outline-none px-2 ' cols="30" rows="10"></textarea>
                                    <p className=" text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-1 mt-2">
                                        {errors.message && touched.message && errors.message}
                                    </p>
                                </div>
                                <div className='w-full mt-3'>
                                    <input className='flex items-center cursor-pointer justify-center dark:text-white text-sm  2xl:text-md text-LightBackcolor dark:bg-DarkPurple bg-LightYellowDark rounded-md text-center p-2 font-IranBold' type="submit" value={t("Sendmessage")} />
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
                <div className='w-full lg:w-[30%] max-lg:mt-3'>
                    <div className='w-full dark:bg-BackColorWhiter rounded-md p-5 border-y-2 dark:border-DarkPurple border-LightYellow bg-LightMaincolor '>

                        <div className='w-full flex justify-center items-center '>
                            <div className='w-8 h-8 dark:bg-DarkPurple rounded-full dark:text-white flex items-center justify-center text-LightYellowDark bg-white'>
                                <BiMapAlt className='text-xl' />
                            </div>
                        </div>

                        <div className='w-full text-sm md:text-md 2xl:text-lg '>
                            <div className='flex justify-between mt-5'>
                                <span className='font-IranBold text-[14px] md:text-[18px] lg:text-[14px]'>{t("HeadInfoCountry")} :</span>
                                <span className='font-IranLight text-[13px] md:text-[18px] xl:text-[11px] 2xl:text-[15px]'>{getAboutData?.country}</span>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <span className='font-IranBold text-[14px] md:text-[18px] lg:text-[14px]'>{t("HeadInfoState")} :</span>
                                <span className='font-IranLight text-[13px] md:text-[18px] xl:text-[11px] 2xl:text-[15px]'>{getAboutData?.city}</span>
                            </div>
                        </div>

                    </div>
                    <div className='w-full dark:bg-BackColorWhiter rounded-md p-5 border-y-2 dark:border-DarkPurple border-LightYellow bg-LightMaincolor  mt-[6px]'>

                        <div className='w-full flex justify-center items-center '>
                            <div className='w-8 h-8 dark:bg-DarkPurple rounded-full dark:text-white flex items-center justify-center text-LightYellowDark bg-white'>
                                <AiOutlineMessage className='text-xl' />
                            </div>
                        </div>

                        <div className='w-full text-sm md:text-md 2xl:text-lg '>
                            <div className='flex justify-between mt-5'>
                                <span className='font-IranBold text-[14px] md:text-[18px] lg:text-[14px]'>{t("ContactShowEmail")} :</span>
                                <span className='font-IranLight text-[13px] xl:text-[11px] 2xl:text-[15px] break-all'>{getAboutData?.email}</span>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <span className='font-IranBold text-[14px] md:text-[18px] lg:text-[14px]'>{t("ContactShowPhoneNumber")} :</span>
                                <span className='font-IranLight text-[13px] md:text-[18px] xl:text-[11px] 2xl:text-[15px]'>{getAboutData?.phoneNumber}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
