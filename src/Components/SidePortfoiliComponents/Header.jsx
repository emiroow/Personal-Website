import React, { useContext, useEffect, useState } from 'react'
import { AllContext } from "../../ContextApi/AllContext"
export default function Header() {
    const { GetPersonal } = useContext(AllContext)
    const [GetAbout, SetAbout] = useState(undefined)
    const [profileimg, Setprofileimg] = useState(require("../../assets/images/ProfileImg.png"))

    useEffect(() => {
        if (GetPersonal !== undefined) {
            SetAbout(GetPersonal.about)
            Setprofileimg(GetPersonal.about.avatarUrl)
        }
    }, [GetPersonal])

    return (
        <div className='w-full h-[35vh] flex justify-center items-center p-10 border-b-2 dark:border-DarkPurple shadow-[1px_12px_10px_-5px_rgba(0,0,0,0.25)] border-LightYellow'>
            <div className=' space-y-2 w-[80%] flex-col flex justify-center items-center'>
                <img className=' mb-2 max-w-[60%] min-w-[60%] rounded-full border-4 dark:border-DarkPurple border-LightBackcolor' src={profileimg} alt="" />
                <p className='text-center text-lg md:text-lg 2xl:text-xl  font-IranBold'>{GetAbout?.name}</p>
                <span className='text-center text-sm font-IranLight'>{GetAbout?.position}</span>
            </div>
        </div>
    )
}
