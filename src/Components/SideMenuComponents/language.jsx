import React, { useState, useEffect ,useContext } from 'react'
import { MdOutlineLanguage } from "react-icons/md"
import { PreloaderContext } from '../../ContextApi/loaderContext'
import i18n from "../../i18n"
export default function Language() {
  const [GetLangState, SetLangState] = useState(false)
  const [GetChangeLang, SetChangeLang] = useState(i18n.language)
  const {SetLoading} = useContext(PreloaderContext)

  useEffect(() => {
    SetLoading(true)
    i18n.changeLanguage(GetChangeLang)
    SetLangState(false)
    // test
    setTimeout(() => {
      SetLoading(false)
    }, 2000);
  }, [GetChangeLang])

  
  return (
    <>
      <div>
        <MdOutlineLanguage onClick={() => SetLangState(!GetLangState)} className='transition duration-700 ease-in-out  hover:-translate-y-1 hover:scale-60   text-DarkPurple text-[42px] cursor-pointer' />
        {GetLangState ? (
          <div className='ease-in duration-300 absolute top-[88px] right-0 flex justify-center items-center  w-full'>
            <div className=' flex justify-center items-center flex-col shadow-[0px_0px_8px_1px_rgba(85,5,255,0.90)]  mt-2 py-2  rounded-3xl bg-DarkPurple'>
              <div onClick={() => SetChangeLang("fa")} style={GetChangeLang === "fa" ? { color: "red" } : null} className=' cursor-pointer border-b-2 pb-1 px-3 w-full text-center border-[#191923]'>فا</div>
              <div onClick={() => SetChangeLang("en")} style={GetChangeLang === "en" ? { color: "red" } : null} className='pt-1 cursor-pointer'>EN</div>
            </div>
          </div>
        ) :
          null
        }
      </div>
    </>
  )
}
