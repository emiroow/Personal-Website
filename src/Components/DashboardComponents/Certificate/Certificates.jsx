import React, { useEffect, useState, useContext } from 'react'
import Layout from '../TabLayout/Layout'
import { AllContext } from "../../../ContextApi/AllContext"
import { DashboardContext } from "../../../ContextApi/DashboardContext"
import { useTranslation } from "react-i18next";
import ContentFa from "./Components/ContentFa"
import ContentEn from "./Components/ContentEn"
export default function Certificates() {
  const { t } = useTranslation()
  const [certficateServerDate, setCertficateServerDate] = useState()
  const [TabState, SetTabState] = useState(1)
  const { SetDashboardLoader } = useContext(AllContext)
  const [updateStates, SetupdateStates] = useState(false)
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
