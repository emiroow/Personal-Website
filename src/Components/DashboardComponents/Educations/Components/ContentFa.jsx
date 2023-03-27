import React, { useState } from 'react'
import Date from './Date'
import AddEducationBox from './AddEducationBox'
export default function ContentFa({ TabState, educationsServerData }) {
  const [AddEducationArr, SetEducationArr] = useState([])

  return (
    <div className='rounded-b-xl dark:bg-DarkPurple bg-LightYellow justify-between lg:p-5 p-3 flex flex-row flex-wrap'>
      <div className='w-full'>
        <AddEducationBox AddEducationArr={AddEducationArr} SetEducationArr={SetEducationArr} TabState={TabState} />
      </div>
      {AddEducationArr}
      {
        educationsServerData?.map((item) => {
          return (
            item.lang === 1 ? (<Date key={item.id} data={item} TabState={TabState} />) : null
          )
        })
      }
    </div>
  )
}