import React, { useEffect, useState, useContext } from 'react'
import Layout from '../TabLayout/Layout'
import { AllContext } from "../../../ContextApi/AllContext"
import { DashboardContext } from "../../../ContextApi/DashboardContext"
import { useTranslation } from "react-i18next";
import ContentEn from './Components/ContentEn';
import ContentFa from './Components/ContentFa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminAnalysis } from '../../../Reducers/DashboardSlices/AnalysisSlice';
import PreLoader from "../../Preloader"
export default function Analysis() {
  const [TabState, SetTabState] = useState(1)
  const { TabsInfo } = useContext(DashboardContext)
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
