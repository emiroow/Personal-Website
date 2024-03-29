import React from 'react'
import { useSelector } from 'react-redux'

export default function Analyze() {
    const getData = useSelector((store) => store.client.clientState.analyses)

    return (
        <div className='w-[98%] md:w-[100%] my-5 md:my-16 2xl:w-[100%] m-auto flex-wrap justify-center md:justify-between px-5 flex items-center flex-row'>
            {
                getData?.map((item, index) => {
                    return (
                        <div key={index} className='max-md:my-5 md:w-[25%] w-[100%] flex md:justify-evenly justify-between items-center'>
                            <span className='font-Yekan text-xl md:text-3xl 2xl:text-4xl dark:text-DarkPurple text-LightMaincolor'>{item.value}</span>
                            <span className='font-IranBold md:mt-2 text-[14px] md:text-md  2xl:text-xl' >{item.title}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
