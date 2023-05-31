import React from 'react'
import { useSelector } from 'react-redux'

export default function Settings() {
    const getSetting = useSelector((store) => store.setting.setting)
    console.log(getSetting)
    return (
        <div className='lg:w-[50%] overflow-auto'>
            <h1 className='font-IranBold'>تنظیمات نمایش هر بخش :</h1>
            <div className="inline-block min-w-full mt-3 rounded-b-xl">
                <div className="overflow-auto rounded-sm">
                    <table className="min-w-full text-left text-sm font-light  rounded-b-xl">
                        <thead className="border-b  font-medium border-neutral-500 bg-black ">
                            <tr>
                                <th scope="col" className="px-6 py-4">#</th>
                                <th scope="col" className="px-6 py-4">Title</th>
                                <th scope="col" className="px-6 py-4">مقدار فعلی</th>
                                <th scope="col" className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getSetting?.map((item, index) => {
                                    return (
                                        <tr className="border-b border-neutral-500 bg-neutral-700">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4"></td>
                                            <td className="whitespace-nowrap px-6 py-4 flex justify-end ">
                                                <button>
                                                    asdas
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
