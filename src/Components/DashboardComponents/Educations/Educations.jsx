import React, { useEffect, useState, useContext } from 'react'
import Layout from '../TabLayout/Layout'
import { DashboardContext } from "../../../ContextApi/DashboardContext"
import ContentFa from "./Components/ContentFa"
import ContentEn from "./Components/ContentEn"
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAdminEducations } from '../../../Reducers/DashboardSlices/EducationsSlice';
import Preloader from '../../Preloader'

export default function Certificates() {
  const [TabState, SetTabState] = useState(1)
  const { TabsInfo } = useContext(DashboardContext)
  const dispatch = useDispatch()
  const educationsServerData = useSelector((state) => state.educations.allEducations)
  const LoaderStatus = useSelector((state) => state.educations.status)
  useEffect(() => {
    const GetFromServer = () => {
      dispatch(fetchGetAdminEducations())
    }
    GetFromServer()
  }, [])

  return (
    <>
      {LoaderStatus === "pending" ? <Preloader /> : null}
      <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
        {
          TabState === 1 ? <ContentFa TabState={TabState} educationsServerData={educationsServerData} /> : <ContentEn TabState={TabState} educationsServerData={educationsServerData} />
        }
      </Layout>
    </>
  )
}