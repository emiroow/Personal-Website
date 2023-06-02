import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { BsTrashFill } from "react-icons/bs"
import { toast } from 'react-toastify';
import Preloader from '../../Preloader';
import { fetchDeleteAdminSkill } from '../../../Reducers/DashboardSlices/SkillsSlice';

export default function NoneProgresContentsEn() {
    const loader = useSelector((state) => state.socials.status === "pending" ? true : false)
    const CircleSkills = useSelector((state) => state.skills.NoneSkills.filter((item) => item.lang === 0))
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const handleDelete = async (id) => {
        const response = await dispatch(fetchDeleteAdminSkill(id))
        if (response.payload.status === 200) {
            toast.success(t("SuccessTopdelete"), {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error(t("Problem"), {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <>
            {loader ? <Preloader /> : null}
            <div className="flex flex-col">
                <div className=" w-full dark:bg-DarkPurple bg-LightYellow flex flex-wrap justify-center lg:justify-start  items-center rounded-b-xl">
                    <div className="inline-block min-w-full rounded-b-xl">
                        <div className="overflow-auto  rounded-b-xl">
                            <table className="min-w-full text-left text-sm font-light  rounded-b-xl">
                                <thead className="border-b  font-medium border-neutral-500 bg-black ">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">#</th>
                                        <th scope="col" className="px-6 py-4">{t("TitleLabel")}</th>
                                        <th scope="col" className="px-6 py-4">{t("Action")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        CircleSkills.map((item, index) => {
                                            return (
                                                <tr key={item.id} className="border-b border-neutral-500 bg-neutral-700">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{item.title}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 flex justify-end ">
                                                        <button onClick={() => handleDelete(item.id)}>
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
                </div>
            </div>
        </>
    )
}
