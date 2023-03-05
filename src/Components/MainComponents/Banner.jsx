import React, { useContext, useEffect, useState } from 'react'
import { AllContext } from "../../ContextApi/AllContext"
import { useTranslation } from "react-i18next"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import i18n from '../../i18n';
export default function Banner() {
    const { t } = useTranslation()
    const { GetPersonal } = useContext(AllContext)
    const [GetAbout, SetAbout] = useState(undefined)

    useEffect(() => {
        if (GetPersonal !== undefined) {
            SetAbout(GetPersonal.about)
        }
    }, [GetPersonal])

    return (
        <div id='home' className='dark:bg-BackColor max-lg:mt-[65px] bg-LightMaincolor flex-col md:flex-row w-full flex shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] rounded-md border-b-[3px] border-LightYellow dark:border-DarkPurple'>
            <div className=' md:w-[60%] md:my-10 my-3 mx-3 md:mx-10' >
                <div className='w-full'>
                    <h1 className=' text-shadow-dark mb-3 md:mb-5 font-IranBold text-[25px] md:text-[35px] 2xl:text-[45px]'>{i18n.language === "fa" ? " من " + GetAbout?.name + " هستم " : " Im " + GetAbout?.name}</h1>
                    <span className=' text-shadow-dark font-IranBold dark:text-DarkPurple text-LightYellow text-[25px] md:text-[35px] 2xl:text-[45px]'>{GetAbout?.position}<span className='text-white'>.</span></span>
                </div>
                <div className="w-full md:mt-5 mt-3">
                    <span className='font-IranLight'>
                    {GetAbout?.description}
                    </span>
                </div>
                <div className='w-full md:mt-5 mt-3'>
                    <a href='#contact'>
                        <button className='md:p-3 p-2 flex text-sm md:text-md font-IranBold justify-center items-center dark:text-white text-LightBackcolor dark:bg-DarkPurple bg-LightYellow rounded-md'>
                            {t('BannerBtn')}
                            {
                                i18n.language === "fa" ? <FiArrowLeft className=' mx-1 text-xl' /> : <FiArrowRight className=' mx-1 text-xl' />
                            }
                        </button>
                    </a>
                </div>
            </div>
            <div className='md:w-[40%] hidden md:block '>
                IMG
            </div>
        </div>
    )
}
