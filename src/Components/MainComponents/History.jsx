import React from 'react'
import Date from './ChildComponents/Date'
export default function History() {
    return (
        <div className='w-full mt-16 ' id='date'>
            <div className='justify-between flex flex-row flex-wrap  w-[98%] md:w-[95%] 2xl:w-[85%] m-auto'>
                <div className='w-[100%] max-md:mt-3 lg:w-[49.5%] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] px-5 dark:bg-BackColorWhiter bg-LightMaincolor border-b-2 dark:border-DarkPurple border-LightYellow rounded-md h-max'>
                    <div className='mt-8 md:mx-2'>
                        <h1 className='text-shadow-dark font-IranBold text-xl md:text-2xl 2xl:text-3xl'>تحصیلات</h1>
                    </div>
                    <div class="py-4 mt-5">
                        <Date />
                        <Date />
                    </div>
                </div>
                <div className='w-[100%] max-md:mt-3 lg:w-[49.5%] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] px-5 dark:bg-BackColorWhiter bg-LightMaincolor border-b-2 dark:border-DarkPurple border-LightYellow rounded-md h-max'>
                    <div className='mt-8 md:mx-2'>
                        <h1 className='text-shadow-dark font-IranBold text-xl md:text-2xl 2xl:text-3xl'>تاریخچه کار</h1>
                    </div>
                    <div class="py-4 mt-5">
                        <Date />
                    </div>
                </div>
            </div>
        </div>
    )
}
