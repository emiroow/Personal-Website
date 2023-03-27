import React, { useState } from 'react'
import AddEducationBox from './AddEducationBox'
import Date from './Date'

export default function ContentEn({ educationsServerData, TabState }) {
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
            item.lang === 0 ? (<Date key={item.id} data={item} TabState={TabState} />) : null
          )
        })
      }
    </div>
  )
}
