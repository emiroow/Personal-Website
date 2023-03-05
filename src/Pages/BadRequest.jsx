import React from 'react'
import NotFoundImg from "../assets/images/404.jpg"

export default function BadRequest() {
  return (
    <div style={{backgroundImage : `url(${NotFoundImg})`}} className="w-full rounded-2xl bg-no-repeat bg-cover bg-center bg-black/25 flex justify-center items-center z-50 h-[97vh]">
    <div className="w-[98%] space-y-4 md:space-y-0 md:w-[85%] items-center flex flex-col-reverse md:flex-row justify-center md:justify-between ">
      <div><h2 className="md:text-7xl text-3xl md:-mt-72 font-extrabold text-white font-lato"> Bad Requist </h2></div>
      <div><h2 className="md:text-[180px] text-9xl font-extrabold text-white font-lato">500</h2></div>
    </div>
  </div>
  )
}
