import React from 'react'
import Comment from './Comment'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { t } from 'i18next'
import AddComment from "../Components/AddComment"
export default function ContentsFa({ TabState }) {
    const Comments = useSelector((state) => state.comments.comments.filter((item) => item.lang === TabState))
    const [newServerState, setNewServerState] = useState(false)

    return (
        <div className='rounded-b-xl dark:bg-DarkPurple bg-LightYellow justify-between lg:p-5 p-3 flex flex-row flex-wrap'>
            <div className='w-full'>
                {
                    !newServerState ? <button onClick={() => setNewServerState(true)} className='border-2 text-gray-50 flex justify-center rounded-lg items-center p-3 mb-3'>
                        <span className='mx-2 text-sm'>{t("addbtn")}</span>
                        <AiFillPlusCircle className='dark:text-white text-lg text-emerald-400' />
                    </button> : null
                }
            </div>
            <div className="w-full flex justify-between flex-row flex-wrap">
                {
                    newServerState ? <AddComment TabState={TabState} newServerState={newServerState} setNewServerState={setNewServerState} /> : null
                }
                {
                    Comments?.map((item) => {
                        return (<Comment key={item.id} TabState={TabState} data={item} />)
                    })
                }
            </div>
        </div>
    )
}
