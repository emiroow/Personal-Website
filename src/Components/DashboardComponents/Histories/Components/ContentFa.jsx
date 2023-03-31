import React from 'react'
import Date from './Date'
import AddHistoriesBox from './AddHistoriesBox'
import { useState } from 'react'

export default function ContentFa({ TabState, serverData }) {
    const [HistoriesBox, SetHistoriesBox] = useState([])

    return (
        <div className='rounded-b-xl dark:bg-DarkPurple bg-LightYellow justify-between lg:p-5 p-3 flex flex-row flex-wrap'>
            <div className='w-full'>
                <AddHistoriesBox AddEducationArr={HistoriesBox} SetEducationArr={SetHistoriesBox} TabState={TabState} />
            </div>
            {HistoriesBox}
            {
                serverData?.map((item) => {
                    return (
                        item.lang === 1 ? (<Date key={item.id} data={item} TabState={TabState} />) : null
                    )
                })
            }
        </div>
    )
}
