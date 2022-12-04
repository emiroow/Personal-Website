import React from 'react'
import Header from './SidePortfoiliComponents/Header'
import Info from './SidePortfoiliComponents/Info'
export default function SidePortfolio() {
  return (
    <div className="w-[25%] relative h-[96vh] ">
      <div className="w-[24.4%] h-[97vh] fixed bg-BackColor shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-md border-b-2 border-DarkPurple">
        <Header />
        <div className=' h-[57vh] overflow-auto' >
          <Info />
        </div>
      </div>
    </div>
  )
}
