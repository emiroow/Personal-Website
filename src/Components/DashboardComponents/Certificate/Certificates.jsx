import React, { useState, useContext } from 'react'
import Layout from '../TabLayout/Layout'
import { DashboardContext } from "../../../ContextApi/DashboardContext"
import ContentFa from "./Components/ContentFa"
import ContentEn from "./Components/ContentEn"
export default function Certificates() {
  const [TabState, SetTabState] = useState(1)
  const { TabsInfo } = useContext(DashboardContext)

  return (
    <>
      <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
        {
          TabState === 1 ? <ContentFa /> : <ContentEn />
        }
      </Layout>
    </>
  )
}
