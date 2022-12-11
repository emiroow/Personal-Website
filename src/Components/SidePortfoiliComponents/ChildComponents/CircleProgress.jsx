import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircleProgress({ percentage ,LangProgress }) {
    return (
        <div className='w-[80px] mt-5 flex flex-col space-y-2 items-center mx-5 font-IranBold'>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}`}
                styles={buildStyles({
                    textColor: "white",
                    pathColor: "#5505FF",
                    textSize: "25px",
                })}
            />
            <h3>{LangProgress}</h3>
        </div>
    )
}
