import React from 'react'
import { BsCheck2 } from "react-icons/bs"
export default function Skill({ skill }) {
    return (
        <div className='text-2xl mt-1 flex flex-row items-center dark:text-DarkPurple text-LightYellowDark'>
            <BsCheck2 />
            <span className='text-white mr-2 w-full break-words text-sm md:text-md 2xl:text-lg font-IranExtraLight'>
                {skill}
            </span>
        </div>
    )
}
