import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export default function LineProgress({Progress , Skill}) {
  return (
    <div className='w-full rounded-2xl font-IranBold mb-8'>
      <div className='w-full flex justify-between'>
          <span>{Skill}</span>
          <span>{Progress}%</span>
      </div>
      <ProgressBar
        completed={Progress}
        bgColor="#5505ff"
        borderRadius="0px"
        height='8px'
        isLabelVisible={false}
        labelColor="#e80909"
      />
    </div>
  )
}

