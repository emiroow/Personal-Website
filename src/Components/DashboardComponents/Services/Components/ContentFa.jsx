import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetAdminServices } from '../../../../Reducers/DashboardSlices/ServiceSlice'
import { AiFillPlusCircle } from "react-icons/ai"
import { useTranslation } from 'react-i18next'
import Service from './Service'
export default function ContentFa() {
  const dispatch = useDispatch()
  const services = useSelector((state) => state.services.allServices)
  const { t } = useTranslation()
  useEffect(() => {
    dispatch(fetchGetAdminServices())
  }, [])

  return (
    <div className='w-full p-5 dark:bg-DarkPurple bg-LightYellow flex flex-wrap justify-center lg:justify-start  items-center rounded-b-xl'>
      <div className='w-full'>
        <button className='border-2 text-gray-50 flex justify-center rounded-lg items-center p-3 mb-3'>
          <span className='mx-2 text-sm'>{t("addbtn")}</span>
          <AiFillPlusCircle className='dark:text-white text-lg text-emerald-400' />
        </button>
      </div>
      <div className='w-full flex flex-wrap flex-row'>
        {
          services.map((item)=>{
            if(item.lang === 1){
             return  <Service data={item} />
            }
          })
        }
      </div>
    </div>
  )
}
