import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Fancybox from './ChildComponents/Fancybox';

export default function PortfolioGallery() {
    const [GetGalleryState, SetGalleryState] = useState("All")
    const cat = [
        { tag: "All", titleFa: "همه دسته بندی ها", id: "5da5s4d" },
        { tag: "Web", titleFa: "طراحی سایت", id: "5sd4f54" },
        { tag: "Ui/Ux", titleFa: "Ui/Ux", id: "521asdd" },
    ]
    const [GetCats, SetCats] = useState(cat)

    const imgs = [{ author: "The Lazy Artist Gallery", tag: "Web", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/1.jpg?raw=true", dis: "lorem lorem lorem lorem lorem lorem lorem lorem lorem", title: "Title" },
    { author: "Dominika Roseclay", tag: "Web", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true", dis: "lorem lorem lorem lorem lorem lorem lorem lorem lorem", title: "Title" },
    { author: "Jeffrey Czum", tag: "Ui/Ux", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true", dis: "lorem lorem lorem lorem lorem lorem lorem lorem lorem", title: "Title" },
    ];
    const [GetImgs, SetImgs] = useState(imgs)

    const HandelClickCat = (e) => {
        SetGalleryState(e.target.dataset.tag)
    }
    const handleGangeSelect = (e) => {
        SetGalleryState(e.target.value)
    }

    useEffect(() => {
        SetImgs(imgs)
        if (GetGalleryState === "All") {
            SetImgs(imgs)
        } else {
            let filteredPortfolio = imgs.filter((item) => {
                return item.tag.toLowerCase().includes(GetGalleryState.toLowerCase())
            })
            SetImgs(filteredPortfolio)
        }
    }, [GetGalleryState])

    const { t } = useTranslation()

    return (
        <div id='Portfolio' className='mt-16 md:mt-20 duration-700 justify-center flex flex-col items-center transition-all'>
            <div className='w-[98%] md:w-[95%] 2xl:w-[95%] max-md:m-auto flex justify-between items-center'>
                <div>
                    <h1 className='text-shadow-dark mb-0 md:mb-3 font-IranBold text-xl md:text-2xl 2xl:text-3xl md:mx-5'>{t("MyPortfoliosGalleryTitle")}</h1>
                </div>
                <div>
                    <select id="small" onChange={handleGangeSelect} className=" md:hidden font-IranBold text-[11px]  mt-5 block w-full p-1 mb-6 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            GetCats.map((item, i) => {
                                return (<option key={i} value={item.tag} className="text-center">{item.titleFa}</option>)
                            })
                        }
                    </select>
                    <ul className='hidden md:flex font-IranBold'>
                        {
                            GetCats.map((item, i) => {
                                return <li key={i} onClick={HandelClickCat} data-tag={item.tag} className={GetGalleryState === item.tag ? "md:text-sm 2xl:text-[17px] mx-5 cursor-pointer dark:text-DarkPurple text-LightYellow" : " md:text-sm 2xl:text-[17px] mx-5 cursor-pointer"}>{item.titleFa}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='w-full flex-wrap justify-center md:justify-center px-5 md:p-5 flex'>
                <Fancybox options={{ infinite: true }}>
                    {
                        GetImgs.map((item, i) => {
                            return (
                                <div key={i} data-src={item.src} data-fancybox="gallery1" className="relative shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] mb-4 group md:mx-4 2xl:mx-5 ">
                                    <div className='flex flex-col absolute transition-all opacity-0 duration-700 md:group-hover:opacity-100 group-active:opacity-100 left-0 bottom-0 h-max w-full z-20 dark:bg-DarkPurple/60 p-2 border-t-[2.5px] dark:border-DarkPurple border-LightMaincolor bg-LightMaincolor/60 rounded-b-lg'>
                                        <span className='font-IranBold'>{item.title}</span>
                                        <span className='font-IranLight'>{item.dis}</span>
                                    </div>
                                    <img className='w-[300px] md:w-[250px] 2xl:w-[350px] cursor-pointer rounded-lg dark:border-DarkPurple border-LightMaincolor drop-shadow-xl border-[2.5px] bg-cover bg-no-repeat' src={item.src} alt="" />
                                </div>
                            )
                        })
                    }
                </Fancybox>
            </div>
        </div>
    )
}
