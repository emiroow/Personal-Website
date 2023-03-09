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
                            return <div data-src={item.link} key={index} data-fancybox="gallery2" className="relative shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] mb-4 md:mb-5 group md:mx-4 2xl:mx-5 ">
                                <div className='flex flex-col absolute transition-all opacity-0 duration-700 md:group-hover:opacity-100 group-active:opacity-100 left-0 bottom-0 h-max w-full z-20 dark:bg-DarkPurple/60 p-2 border-t-[2.5px] dark:border-DarkPurple border-LightMaincolor bg-LightMaincolor/60 rounded-b-lg'>
                                    <span className='font-IranBold'>test</span>
                                    <span className='font-IranLight'>test</span>
                                </div>
                                <img className='w-[300px] md:w-[250px] 2xl:w-[350px] cursor-pointer object-fill rounded-lg dark:border-DarkPurple border-LightMaincolor drop-shadow-xl border-[2.5px] bg-cover bg-no-repeat' src={item.link} alt="" />
                            </div>
                        })
                    }
                </div>
            </Fancybox>
        </div>
    )
}
