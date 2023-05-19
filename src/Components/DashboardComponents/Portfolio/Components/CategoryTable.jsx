import React, { useEffect } from 'react'
import { BsTrashFill } from "react-icons/bs"

export default function CategoryTable() {

    useEffect(() => {

    }, [])

    return (
        <div className="inline-block min-w-full rounded-b-xl mt-5">
            <div className="overflow-auto  rounded-b-xl">
                <table className="min-w-full text-right text-sm font-light  rounded-b-xl">
                    <thead className="border-b  font-medium border-neutral-500 bg-black ">
                        <tr>
                            <th scope="col" className="px-6 py-4">#</th>
                            <th scope="col" className="px-6 py-4">Title</th>
                            <th scope="col" className="px-6 py-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-neutral-500 bg-neutral-700">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">test</td>
                            <td className="whitespace-nowrap px-6 py-4">test</td>
                            <td className="whitespace-nowrap px-6 py-4 flex text-center justify-center ">
                                <button >
                                    <BsTrashFill className='text-xl text-red-500 cursor-pointer' />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
