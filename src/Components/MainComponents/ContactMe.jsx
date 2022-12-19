import React from 'react'
import { BiMapAlt } from "react-icons/bi"
import { AiOutlineMessage } from "react-icons/ai"
import { useTranslation } from 'react-i18next'
export default function ContactMe() {
    const { t } = useTranslation()
    return (
        <div id='contact'>
            <div className=' m-auto w-[98%] md:w-[95%] 2xl:w-[93%] mt-20'>
                <h1 className='text-shadow-dark mb-3 max-md:mt-10 font-IranBold text-xl md:text-2xl  2xl:text-3xl'>{t("Cuntact")}</h1>
            </div>
            <div className=' w-[98%] md:w-[95%] 2xl:w-[93%] m-auto flex justify-between flex-row flex-wrap'>
                <div className='w-full lg:w-[69.5%] dark:bg-BackColorWhiter rounded-md p-5 border-y-2 dark:border-DarkPurple border-LightYellow bg-LightMaincolor h-max'>
                    <form className='w-full'>
                        <div className='w-full'>
                            <label htmlFor="" className='font-IranBold text-sm'>{t("Fullname")}</label>
                            <input type="text" required className='w-full p-2 font-IranLight mt-1 rounded-md dark:bg-DarkPurple/40 bg-[#293462]/50 outline-none px-2 ' />
                        </div>
                        <div className='w-full mt-5'>
                            <label htmlFor="" className='font-IranBold text-sm'>{t("Email")}</label>
                            <input type="email" required className='w-full p-2 font-IranLight mt-1 rounded-md dark:bg-DarkPurple/40 bg-[#293462]/50 outline-none px-2 ' />
                        </div>
                        <div className='w-full mt-5'>
                            <label htmlFor="" className='font-IranBold text-sm'>{t("Subject")}</label>
                            <input type="text" required className='w-full p-2 font-IranLight mt-1 rounded-md dark:bg-DarkPurple/40 bg-[#293462]/50 outline-none px-2 ' />
                        </div>
                        <div className='w-full mt-5'>
                            <label htmlFor="" className='font-IranBold text-sm'>{t("Description")}</label>
                            <textarea name="" required className='w-full p-2 font-IranLight mt-1 rounded-md dark:bg-DarkPurple/40 bg-[#293462]/50 outline-none px-2 ' id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className='w-full mt-3'>
                            <button className=" flex items-center justify-center  dark:bg-DarkPurple bg-LightYellowDark rounded-md text-center p-2 font-IranBold">
                                <span className='dark:text-white text-sm  2xl:text-md text-LightBackcolor'>{t("Sendmessage")}</span>
                            </button>
                        </div>
                    </form>
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
                                <span className='font-IranBold'>sada</span>
                                <span className='font-IranLight'>sada</span>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <span className='font-IranBold'>sada</span>
                                <span className='font-IranLight'>sada</span>
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
                                <span className='font-IranBold'>sada</span>
                                <span className='font-IranLight'>sada</span>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <span className='font-IranBold'>sada</span>
                                <span className='font-IranLight'>sada</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
