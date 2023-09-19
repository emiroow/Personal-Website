import React, { useEffect, useState, useContext } from 'react'
import Layout from '../TabLayout/Layout'
import { DashboardContext } from "../../../ContextApi/DashboardContext"
import ContentEn from './Components/ContentEn';
import ContentFa from './Components/ContentFa';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminAnalysis } from '../../../Reducers/DashboardSlices/AnalysisSlice';
import PreLoader from "../../Preloader"
export default function Analysis() {
  const { TabsInfo, SetTabState, TabState } = useContext(DashboardContext)
  const dispatch = useDispatch()
  const LoaderStatus = useSelector((state) => state.analysis.status)

  useEffect(() => {
    dispatch(fetchAdminAnalysis())
  }, [])

  return (
    <>
      {LoaderStatus === "pending" ? <PreLoader /> : null}
      <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
        {
          TabState === 1 ? <ContentFa TabState={TabState} /> : <ContentEn TabState={TabState} />
        }
      </Layout>
    </>
  )
}
