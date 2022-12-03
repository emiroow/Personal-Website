import React from 'react'
import { HiOutlineHome } from "react-icons/hi"
import { MdOutlineCategory } from "react-icons/md"
import { MdHomeRepairService } from "react-icons/md"
import { MdTextsms } from "react-icons/md"
import Toggle from './SideMenuComponents/toggle'
import Language from './SideMenuComponents/language'
export default function SideMenu() {
  return (
    <div className="w-[5%] relative h-[96vh] ">
      <div className="w-[5%] h-[97vh] fixed items-center justify-center flex bg-BackColor shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-md border-b-2 border-DarkPurple">

        <div className='w-full flex-col  flex justify-center items-center '>

          <div className='space-y-24 -mt-5 mb-28'>
            <div>
             <Language />
            </div>
            <div>
              <Toggle />
            </div>
          </div>

          <div className='space-y-28'>
            <div className='rounded-full cursor-pointer bg-DarkPurple p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
              <HiOutlineHome className='text-white  text-[32px]' />
            </div>
            <div className='rounded-full cursor-pointer bg-DarkPurple p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
              <MdOutlineCategory className='text-white  text-[32px]' />
            </div>
            <div className='rounded-full cursor-pointer bg-DarkPurple p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
              <MdHomeRepairService className='text-white  text-[32px]' />
            </div>
            <div className='rounded-full cursor-pointer bg-DarkPurple p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
              <MdTextsms className='text-white  text-[32px]' />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

