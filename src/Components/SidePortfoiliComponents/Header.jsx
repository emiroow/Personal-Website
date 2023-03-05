import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
    const aboutData = useSelector((store) => store.client.clientState.about)
    const [profileimg, Setprofileimg] = useState(require("../../assets/images/ProfileImg.png"))

    useEffect(() => {
        if (aboutData !== undefined) {
            Setprofileimg(aboutData.avatarUrl)
        }
    }, [aboutData])

    return (
        <div className='w-full h-[35vh] flex justify-center items-center p-10 border-b-2 dark:border-DarkPurple shadow-[1px_12px_10px_-5px_rgba(0,0,0,0.25)] border-LightYellow'>
            <div className=' space-y-2 w-[80%] flex-col flex justify-center items-center'>
                <img className=' mb-2 max-w-[60%] min-w-[60%] rounded-full border-4 dark:border-DarkPurple border-LightBackcolor' src={profileimg} alt="" />
                <p className='text-center text-lg md:text-lg 2xl:text-xl  font-IranBold'>{aboutData?.name}</p>
                <span className='text-center text-sm font-IranLight'>{aboutData?.position}</span>
            </div>
        </div>
    )
}
