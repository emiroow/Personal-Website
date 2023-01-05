import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi"
import { MdOutlineCategory } from "react-icons/md"
import { MdHomeRepairService } from "react-icons/md"
import { MdTextsms } from "react-icons/md"
import { BiLogOut } from "react-icons/bi"
import Toggle from '../SideMenuComponents/toggle'
import Language from '../SideMenuComponents/language'
import { AllContext } from "../../ContextApi/AllContext"
export default function DashboardMenu() {
    const { Setauthorizing } = useContext(AllContext)
    const LogOut = () => {
        localStorage.removeItem("TK");
        Setauthorizing(false)
    }
    return (
        <div>
            <div className="w-[5%] relative h-[96vh] lg:block hidden ">
                <div className="w-[5%] h-[97vh] fixed items-center justify-center flex dark:bg-BackColor bg-LightMaincolor shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-md border-b-2 border-LightYellow dark:border-DarkPurple">

                    <div className='w-full flex-col h-[97vh] justify-center relative flex  items-center '>
                        <div className='lg:space-y-16 2xl:space-y-20 mb-24 '>
                            <div>
                                <Language />
                            </div>
                            <div>
                                <Toggle />
                            </div>
                        </div>

                        <div className='lg:space-y-14 overflow-auto  2xl:space-y-20 text-[27px] lg:text-[20px] xl:text-[28px] 2xl:text-[32px]'>
                            <NavLink className='rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
                                <HiOutlineHome className='text-white ' />
                            </NavLink>
                            <NavLink className='rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
                                <MdOutlineCategory className='text-white ' />
                            </NavLink>
                            <NavLink className='rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
                                <MdHomeRepairService className='text-white ' />
                            </NavLink>
                            <NavLink className='rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
                                <MdTextsms className='text-white ' />
                            </NavLink>
                            <NavLink onClick={LogOut} className='rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
                                <BiLogOut className='text-white ' />
                            </NavLink>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
