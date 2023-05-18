import React from 'react'
import Layout from '../TabLayout/Layout'
import { DashboardContext } from '../../../ContextApi/DashboardContext'
import { useSelector } from 'react-redux'
import PreLoader from "../../Preloader"
import { useContext } from 'react'
import ContentsFa from "./ContentsFa"
import ContentsEn from "./ContentsEn"
export default function ContactUsMessages() {
  const { TabsInfo, SetTabState, TabState } = useContext(DashboardContext)
  const loader = useSelector((state) => state.ContactUsMessages.status)
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
