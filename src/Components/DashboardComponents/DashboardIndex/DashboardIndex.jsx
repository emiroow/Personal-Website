import React from 'react'
import Settings from "./Components/Settings"
import Wellcom from './Components/Wellcom'
import Report from './Components/Report'
export default function DashboardIndex() {
  return (
    <div className='w-full'>
      <Wellcom />
      <div className='w-full flex justify-between max-lg:flex-col-reverse mt-5'>
        <Settings />
        <Report />
      </div>
    </div>
  )
}
