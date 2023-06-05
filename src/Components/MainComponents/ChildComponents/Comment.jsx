import React from 'react'
import StarRatingComponent from './StarRatingComponent'
import { AiFillStar } from "react-icons/ai"
import i18n from '../../../i18n';
import Commentsimg from '../../../assets/images/ProfileImg.png';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function Comment({ fromName, starCount, fromImgUrl, fromPosition, message, subject, websiteUrl }) {
    const currentLanguageCode = i18n.language
    const [GetfromImgUrl, SetfromImgUrl] = useState(Commentsimg)
    useEffect(() => {
        SetfromImgUrl(fromImgUrl)
    }, [fromImgUrl])
    const { t } = useTranslation()
    const poss = () => {
        if (currentLanguageCode === "fa") {
            return "right"
        } else {
            return "left"
        }
    }

    return (
        <div >
            <div style={{ textAlign: poss() }} className='w-[95%] pb-4 pt-3 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] dark:bg-BackColorWhiter bg-LightMaincolor border-y-2 dark:border-DarkPurple border-LightYellow p-2 rounded-lg m-auto'>
                <div className='w-full mb-1 py-1 '>
                    <StarRatingComponent
                        name="rate"
                        editing={false}
                        renderStarIcon={() => <AiFillStar className='text-xl' />}
                        starCount={5}
                        value={starCount}
                    />
                </div>
                <div>
                    <h1 className='font-IranBold mb-1 text-lg md:text-[14px] 2xl:text-[18px]'>{subject}</h1>
                    <span className='font-IranLight md:text-[13px] 2xl:text-[16px]'>{message}</span>
                </div>
                <div className='w-full flex flex-row items-center mt-3'>
                    <img className='w-[18%] md:w-[15%] 2xl:w-[18%] border-2 dark:border-DarkPurple border-LightYellowDark rounded-full' src={GetfromImgUrl} alt="Comment img" />
                    <div className='flex flex-col'>
                        <a href={websiteUrl} className='font-IranBold text-[11px] 2xl:text-[13px] mb-1 mx-1 underline underline-offset-4'>{fromName}</a>
                        <span className='font-IranLight text-[9px] 2xl:text-[10px] mx-1'>{fromPosition}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
