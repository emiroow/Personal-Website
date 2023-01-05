import React , {useContext} from 'react'
import { HiOutlineHome } from "react-icons/hi"
import { MdOutlineCategory } from "react-icons/md"
import { MdHomeRepairService } from "react-icons/md"
import { MdTextsms } from "react-icons/md"
import { BiLogOut } from "react-icons/bi"
import Toggle from '../SideMenuComponents/toggle'
import { NavLink } from "react-router-dom";
import Language from '../SideMenuComponents/language'
import { AllContext } from "../../ContextApi/AllContext"
export default function DashboardMobileMenu({ sidestatus, sidesetstatue }) {
    const { Setauthorizing } = useContext(AllContext)
    const LogOut = () => {
        localStorage.removeItem("TK");
        Setauthorizing(false)
    }
    return (
        <>
            <div className={sidestatus ? "fixed dark:bg-BackColor bg-LightMaincolor border-r-2 dark:border-DarkPurple mt- border-LightYellow shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] w-[23%] h-full z-50 top-0 duration-700 left-0" : "fixed  bg-BackColor shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] w-[23%] h-full z-50 top-0 -left-[100%]"}>

                <div className='w-full flex-col relative flex mt-10 items-center '>
                    <div className='space-y-14 mb-24 '>
                        <div>
                            <Language />
                        </div>
                        <div>
                            <Toggle />
                        </div>
                    </div>

                    <div className='space-y-16 text-[27px] lg:text-[20px] xl:text-[28px] 2xl:text-[32px]'>
                        <NavLink className='rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
                            <HiOutlineHome className='text-white ' />
                        </NavLink>
                        <NavLink href='#Portfolio' className='rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
                            <MdOutlineCategory className='text-white ' />
                        </NavLink>
                        <NavLink href='#date' className='rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
                            <MdHomeRepairService className='text-white ' />
                        </NavLink>
                        <NavLink href='#contact' className='rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
                            <MdTextsms className='text-white ' />
                        </NavLink>
                        <NavLink onClick={LogOut} className='rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
                                <BiLogOut className='text-white ' />
                            </NavLink>
                    </div>

                </div>

            </div>
            <div onClick={e => sidesetstatue(false)} className={sidestatus ? "w-full  z-10 bg-black/40 h-[100vh] fixed top-0 duration-700 right-0" : "w-full z-10 bg-black/40 h-[100vh] fixed top-0 duration-100 -right-[100%]"}>
            </div>
        </>
    )
}
