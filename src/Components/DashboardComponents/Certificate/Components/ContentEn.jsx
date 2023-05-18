import React from 'react'
import { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import AddCertificate from './AddCertificate'
import CertificateShow from './CertificateShow'
import { t } from 'i18next'

export default function ContentEn({ TabState }) {
  const certificates = useSelector((state) => state.certificate.certificates.filter((item) => item.lang === TabState))
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
          newServerState ? <AddCertificate TabState={TabState} newServerState={newServerState} setNewServerState={setNewServerState} /> : null
        }
        {
          certificates?.map((item) => {
            return (<CertificateShow key={item.id} TabState={TabState} data={item} />)
          })
        }
      </div>
    </div>)
}
