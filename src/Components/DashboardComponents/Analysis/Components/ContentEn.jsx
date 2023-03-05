import React, { useState } from 'react'
import AddAnalysBox from './AddAnalysBox'
import AnalysShowBox from './AnalysShowBox'
export default function ContentFa({ AnalysisServerData, SetupdateStates, updateStates, TabState }) {
  const [AddNewAnalisArr, SetAddNewAnalisArr] = useState([])

  return (
    <div className='w-full p-5 dark:bg-DarkPurple bg-LightYellow flex flex-wrap justify-center lg:justify-start  items-center rounded-b-xl'>
      {
        AnalysisServerData?.map((item, index) => {
          return (item.lang === 0 ? <AnalysShowBox TabState={TabState} SetupdateStates={SetupdateStates} updateStates={updateStates} key={index} title={item.title} value={item.value} id={item.id} /> : null)
        })
      }
      <AddAnalysBox SetupdateStates={SetupdateStates} TabState={TabState} updateStates={updateStates} AddNewAnalisArr={AddNewAnalisArr} SetAddNewAnalisArr={SetAddNewAnalisArr} />
      {AddNewAnalisArr}
    </div>
  )
}
