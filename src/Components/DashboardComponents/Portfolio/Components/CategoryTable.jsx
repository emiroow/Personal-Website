import React, { useEffect } from 'react'
import { BsTrashFill } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { fetchDeleteAdminCatagory, fetchgetAdminPortfoliosCatagories } from '../../../../Reducers/DashboardSlices/PortfolioSlice'

export default function CategoryTable() {
    const dispatch = useDispatch()

    const Categories = useSelector((state) => state.portfolio.portfoliosCatagories)

    useEffect(() => {
        dispatch(fetchgetAdminPortfoliosCatagories())
    }, [])

    const handleDelete = (id) => {
        dispatch(fetchDeleteAdminCatagory(id))
    }

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
                        {
                            Categories.map((item, index) => {
                                return (
                                    <tr key={item.id} className="border-b border-neutral-500 bg-neutral-700">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.title}</td>
                                        <td className="whitespace-nowrap px-6 py-4 flex text-center justify-center ">
                                            <button onClick={() => handleDelete(item.catagoryId)} >
                                                <BsTrashFill className='text-xl text-red-500 cursor-pointer' />
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
    )
}
