import React, { useContext, useEffect } from 'react'
import Layout from '../TabLayout/Layout'
import { DashboardContext } from "../../../ContextApi/DashboardContext"
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetHistoriesData } from "../../../Reducers/DashboardSlices/HistoriesSlice"
import ContentFa from './Components/ContentFa'
import ContentEn from './Components/ContentEn'
import Preloader from "../../Preloader"
import { useState } from 'react'
export default function Histories() {
  const dispatch = useDispatch()
  const serverData = useSelector((state) => state.histories.allHistories)
  const loaderStatus = useSelector((state) => state.histories.status)
  const { TabsInfo } = useContext(DashboardContext)
  const [TabState, SetTabState] = useState(1)

  useEffect(() => {
    const GetFromServer = () => {
      dispatch(fetchGetHistoriesData())
    }
    GetFromServer()
  }, [])

  return (
    <>
      <Layout SetTabState={SetTabState} TabsInfo={TabsInfo} TabState={TabState}>
        {loaderStatus === "pending" ? <Preloader /> : null}
        {
          TabState === 1 ? <ContentFa serverData={serverData} TabState={TabState} /> : <ContentEn serverData={serverData} TabState={TabState} />
        }
      </Layout>
    </>
  )
}
