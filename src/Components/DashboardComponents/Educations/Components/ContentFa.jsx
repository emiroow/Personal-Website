import React, { useState } from 'react'
import Date from './Date'
import AddEducationBox from './AddEducationBox'
export default function ContentFa({ TabState, SetupdateStates, updateStates, educationsServerData }) {
  const [AddEducationArr, SetEducationArr] = useState([])

  return (
    <div className='rounded-b-xl justify-between p-5 flex flex-row flex-wrap'>
      {
        educationsServerData?.map((item, index) => {
          return (
            item.lang === 1 ? (<Date key={index} data={item} updateStates={updateStates} SetupdateStates={SetupdateStates} />) : null
          )
        })
      }
      <AddEducationBox AddEducationArr={AddEducationArr} SetEducationArr={SetEducationArr} SetupdateStates={SetupdateStates} updateStates={updateStates} TabState={TabState} />
      {AddEducationArr}
    </div>
  )
}
