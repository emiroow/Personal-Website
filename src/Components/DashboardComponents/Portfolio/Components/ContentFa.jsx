import React from 'react'
import AddCategory from './AddCategory'
import CategoryTable from './CategoryTable'
import Portfolio from './Portfolio'
export default function ContentFa() {

    return (
        <div className='rounded-b-xl dark:bg-DarkPurple bg-LightYellow justify-between lg:p-5 p-3 flex flex-row flex-wrap'>
            <AddCategory />
            <CategoryTable />
            {/* <Portfolio /> */}
        </div>
    )
}
