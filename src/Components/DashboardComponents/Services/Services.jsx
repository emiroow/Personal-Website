import React, { useContext } from 'react'
import Layout from '../TabLayout/Layout'
import { DashboardContext } from '../../../ContextApi/DashboardContext'
import ContentFa from './Components/ContentFa'
import ContentEn from './Components/ContentEn'
import { useSelector } from 'react-redux'
import PreLoader from "../../Preloader"
export default function Services() {
  const { TabsInfo, SetTabState, TabState } = useContext(DashboardContext)
  const loader = useSelector((state) => state.services.status)
  return (
    <>
      <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
        {
          loader === "pending" ? <PreLoader /> : null
        }
        {
          TabState === 1 ? <ContentFa /> : <ContentEn />
        }
      </Layout>
    </>
  )
}
