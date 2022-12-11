import React from 'react'
import { BsCheck2 } from "react-icons/bs"
export default function Skill({ skill }) {
    return (
        <div className='text-2xl mt-1 flex flex-row items-center text-DarkPurple'>
            <BsCheck2 />
            <span className='text-white mr-2 w-full break-words text-lg font-IranExtraLight'>
                {skill}
            </span>
        </div>
    )
}
