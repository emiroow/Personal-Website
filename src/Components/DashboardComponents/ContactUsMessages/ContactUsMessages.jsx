import React from 'react'
import Layout from '../TabLayout/Layout'
import { DashboardContext } from '../../../ContextApi/DashboardContext'
import { useDispatch, useSelector } from 'react-redux'
import PreLoader from "../../Preloader"
import { useContext } from 'react'
import ContentsFa from "./ContentsFa"
import ContentsEn from "./ContentsEn"
import { useEffect } from 'react'
import { fetchgetAdminContactUsMessages } from '../../../Reducers/DashboardSlices/ContactUsMessagesSlice'
export default function ContactUsMessages() {
  const { TabsInfo, SetTabState, TabState } = useContext(DashboardContext)
  const loader = useSelector((state) => state.ContactUsMessages.status)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchgetAdminContactUsMessages())
  }, [])
  return (
    <>
      <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
        {
          loader === "pending" ? <PreLoader /> : null
        }
        {
          TabState === 1 ? <ContentsFa /> : <ContentsEn />
        }
      </Layout>
    </>
  )
}
