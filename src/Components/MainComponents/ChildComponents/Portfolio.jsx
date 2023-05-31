import React from 'react'

function Portfolio({ data }) {
    return (
        <div key={data.portfolioId} className=" shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] h-max mb-4 rounded-lg dark:border-DarkPurple border-LightMaincolor border-[2.5px] md:mx-4 2xl:mx-5 ">
            <img data-src={data.imageUrl} data-fancybox="gallery1" className='w-[300px] md:w-[250px] 2xl:w-[350px] cursor-pointer rounded-t-lg  drop-shadow-xl  bg-cover bg-no-repeat' src={data.imageUrl} alt="portfolioImage" />
            <div className='w-[300px] md:w-[250px] 2xl:w-[350px] break-words flex flex-col flex-wrap transition-all duration-700 h-max z-20 dark:bg-DarkPurple/60 p-2 bg-LightMaincolor/60 rounded-b-lg'>
                <span className='font-IranBold text-sm mt-1'>{data.title}</span>
                <span className='font-IranLight text-sm mt-1'>{data.description}</span>
            </div>
        </div>
    )
}

export default Portfolio