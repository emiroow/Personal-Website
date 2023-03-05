import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { ThemeContext } from "../../../ContextApi/themeContext.js"
export default function LineProgress({ Progress, Skill }) {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const progresscolor = () => {
    if (theme === "light") {
      return "#FEB139"
    } else {
      return "#5505FF"
    }
  }

  return (
    <div className='w-full rounded-2xl font-IranBold mb-8'>
      <div className='w-full text-sm md:text-md 2xl:text-lg flex justify-between'>
        <span className='dark:text-white text-LightYellow'>{Skill}</span>
        <span className=''>{Progress}%</span>
      </div>
      <ProgressBar
        completed={Progress}
        bgColor={progresscolor()}
        borderRadius="0px"
        height='8px'
        isLabelVisible={false}
        labelColor="#e80909"
      />
    </div>
  )
}

