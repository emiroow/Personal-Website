import React, { useEffect, useState, useContext } from 'react'
import Layout from '../TabLayout/Layout'
import { AllContext } from "../../../ContextApi/AllContext"
import { DashboardContext } from "../../../ContextApi/DashboardContext"
import { useTranslation } from "react-i18next";
import ContentEn from './Components/ContentEn';
import ContentFa from './Components/ContentFa';
import { GetAdminAnalysis } from "../../../Service/index"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Analysis() {
  const { t } = useTranslation()
  const [AnalysisServerData, SetAnalysisServerData] = useState()
  const [TabState, SetTabState] = useState(1)
  const { SetDashboardLoader } = useContext(AllContext)
  const [updateStates, SetupdateStates] = useState(false)
  const { TabsInfo } = useContext(DashboardContext)

  useEffect(() => {
    const GetFromServer = async () => {
      try {
        SetDashboardLoader(true)
        const { data } = await GetAdminAnalysis()
        if (data) {
          SetAnalysisServerData(data)
        } else {
          toast.error(t("Problem"), {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } catch (error) {
        console.log(error);
        toast.error(t("Problem"), {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      SetDashboardLoader(false)
    }
    GetFromServer()
  }, [updateStates])

  return (
    <>
      <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
        {
          TabState === 1 ? <ContentFa TabState={TabState} AnalysisServerData={AnalysisServerData} SetupdateStates={SetupdateStates} updateStates={updateStates} /> : <ContentEn TabState={TabState} updateStates={updateStates} AnalysisServerData={AnalysisServerData} SetupdateStates={SetupdateStates} />
        }
      </Layout>
    </>
  )
}
