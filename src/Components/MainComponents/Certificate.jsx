import React from 'react'
import { useTranslation } from 'react-i18next'
import Fancybox from './ChildComponents/Fancybox';
import { useSelector } from 'react-redux';
export default function Certificate() {
    const { t } = useTranslation()
    const getData = useSelector((store) => store.client.clientState.certificates)

    return (
        <div id='Portfolio' className='mt-16 md:mt-20 duration-700 justify-center flex flex-col items-center transition-all'>
            <div className='w-[98%] md:w-[95%] 2xl:w-[95%] max-md:m-auto flex justify-between items-center'>
                <div>
                    <h1 className='text-shadow-dark mb-0 md:mb-3 font-IranBold text-xl md:text-2xl 2xl:text-3xl md:mx-5'>{t("Certificate")}</h1>
                </div>
            </div>
            <Fancybox options={{ infinite: true }}>
                <div className='w-full flex-wrap justify-around md:justify-center px-5 p-5 flex'>
                    {
                        getData?.map((item, index) => {
                            return <div className='group flex flex-col items-center border-[2.5px] mb-4 md:mb-5 md:mx-4 2xl:mx-5 h-max dark:border-DarkPurple border-LightMaincolor drop-shadow-xl rounded-t-lg rounded-b-lg'>
                                <div data-src={item.link} key={index} data-fancybox="Certificate" className='shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)]'>
                                    <img className='w-[300px] md:w-[250px] 2xl:w-[350px] cursor-pointer object-fill bg-cover bg-no-repeat  rounded-t-lg ' src={item.link} alt="" />
                                </div>
                                <div className='flex flex-col w-[300px] md:w-[250px] 2xl:w-[350px] h-[64px] overflow-hidden transition-all duration-700 hover:h-max md:group-hover:h-max z-20 dark:bg-DarkPurple/60 p-2 dark:border-DarkPurple border-LightMaincolor bg-LightMaincolor/60 rounded-b-lg'>
                                    <span className='font-IranBold'>{item.title}</span>
                                    <span className='font-IranLight'>{item.description}</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </Fancybox>
        </div>
    )
}