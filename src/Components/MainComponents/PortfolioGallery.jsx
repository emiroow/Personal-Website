import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Fancybox from './ChildComponents/Fancybox';
import { useSelector } from 'react-redux';
import i18n from '../../i18n';
import { BinerConvert } from '../../Helpers/LangConvertToBiner';
import Portfolio from './ChildComponents/Portfolio';
export default function PortfolioGallery() {
    const [GetGalleryState, SetGalleryState] = useState("all")
    const PortfolioCategories = useSelector((state) => state.client.clientState.portfolioCatagories?.filter((item) => item.lang === BinerConvert(i18n.language)))
    const Portfolios = useSelector((state) => state.client.clientState.portfolios)
    const [portfoliosState, SetPortfoliosState] = useState(Portfolios)
    const { t } = useTranslation()

    const HandelClickCat = (e) => {
        SetGalleryState(e.target.id)
    }

    const handleGangeSelect = (e) => {
        SetGalleryState(e.target.value)
    }

    useEffect(() => {
        if (GetGalleryState === "all") {
            SetPortfoliosState(Portfolios)
        } else {
            SetPortfoliosState(Portfolios?.filter((item) => item.categoriesId.includes(parseInt(GetGalleryState))))
        }
    }, [GetGalleryState, Portfolios])

    return (
        <div id='Portfolio' className=' mt-7 mb-7 duration-700 justify-center flex flex-col items-center transition-all'>
            <div className=' w-[98%] md:w-[95%] 2xl:w-[95%] max-md:m-auto flex justify-between items-center'>
                <div>
                    <h1 className='text-shadow-dark font-IranBold text-xl md:text-2xl 2xl:text-3xl md:mx-4'>{t("MyPortfoliosGalleryTitle")}</h1>
                </div>
                <div>
                    <select onChange={handleGangeSelect} className=" md:hidden font-IranBold text-[11px]  mt-5 block w-full p-1 mb-6 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            BinerConvert(i18n.language) === 0 ?
                                <option value='all' className="text-center">
                                    All
                                </option> : null
                        }
                        {
                            BinerConvert(i18n.language) === 1 ?
                                <option value='all' className="text-center">
                                    همه
                                </option> : null
                        }
                        {
                            PortfolioCategories?.map((item, i) => {
                                return (<option key={i} value={String(item.catagoryId)} className="text-center">{item.title}</option>)
                            })
                        }
                    </select>
                    <ul className='hidden md:flex font-IranBold'>
                        {
                            BinerConvert(i18n.language) === 0 ?
                                <li id='all' onClick={HandelClickCat} className={GetGalleryState === "all" ? "md:text-sm 2xl:text-[17px] mx-5 cursor-pointer dark:text-DarkPurple text-LightYellow" : " md:text-sm 2xl:text-[17px] mx-5 cursor-pointer"}>All</li> : null
                        }
                        {
                            PortfolioCategories?.map((item) => {
                                return <li id={String(item.catagoryId)} key={item.catagoryId} onClick={HandelClickCat} className={GetGalleryState === String(item.catagoryId) ? "md:text-sm 2xl:text-[17px] mx-5 cursor-pointer dark:text-DarkPurple text-LightYellow" : " md:text-sm 2xl:text-[17px] mx-5 cursor-pointer"}>{item.title}</li>
                            })
                        }
                        {
                            BinerConvert(i18n.language) === 1 ?
                                <li id='all' onClick={HandelClickCat} className={GetGalleryState === "all" ? "md:text-sm 2xl:text-[17px] mx-5 cursor-pointer dark:text-DarkPurple text-LightYellow" : " md:text-sm 2xl:text-[17px] mx-5 cursor-pointer"}>همه</li> : null
                        }
                    </ul>
                </div>
            </div>
            <div className='w-full flex-wrap justify-center md:justify-center px-5 md:pt-4 flex'>
                <Fancybox options={{ infinite: true }}>
                    {
                        portfoliosState?.map((item) => {
                            return (
                                <Portfolio key={item.portfolioId} data={item} />
                            )
                        })
                    }
                </Fancybox>
            </div>
        </div>
    )
}
