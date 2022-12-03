import React from 'react'
import { useTranslation } from "react-i18next"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import i18n from '../../i18n';
export default function Banner() {
    const { t } = useTranslation()
    return (
        <div className='bg-BackColor w-full flex shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-md border-b-[3px] border-DarkPurple'>
            <div className='w-[60%] mt-10 mb-10 mx-10' >
                <div className='w-full'>
                    <h1 className=' text-shadow-dark mb-5 font-IranBold text-[45px]'>{t('BannerTitleSelfDis')}</h1>
                    <span className=' text-shadow-dark font-IranBold text-DarkPurple text-[45px]'>{t('BannerTitleSelfField')}<span className='text-white'>.</span></span>
                </div>
                <div className="w-full mt-5">
                    <span className='font-IranLight'>
                        {t('BannerDisSelf')}
                    </span>
                </div>
                <div className='w-full mt-5'>
                    <button className='p-3 flex text-md font-IranLight justify-center items-center bg-DarkPurple rounded-md'>
                        {t('BannerBtn')}
                        {
                           i18n.language === "fa" ? <FiArrowLeft className=' mx-1 text-xl' /> : <FiArrowRight className=' mx-1 text-xl' />
                        }
                    </button>
                </div>
            </div>
            <div className='w-[40%] '>s</div>
        </div>
    )
}
