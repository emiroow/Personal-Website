import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeContext } from "../../../ContextApi/themeContext.js"

export default function CircleProgress({ percentage, LangProgress }) {
    const { theme, setTheme } = React.useContext(ThemeContext);

    const progresscolor = () => {
        if (theme === "light") {
            return "#FEB139"
        } else {
            return "#5505FF"
        }
    }

    return (
        <div className='w-[60px] md:w-[70px] mt-5 flex flex-col space-y-2 items-center mx-5 md:mx-2 xl:mx-3 2xl:mx-6 font-IranBold'>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}`}
                styles={buildStyles({
                    textColor: "white",
                    pathColor: progresscolor(),
                    textSize: "25px",
                })}
            />
            <h3>{LangProgress}</h3>
        </div>
    )
}
