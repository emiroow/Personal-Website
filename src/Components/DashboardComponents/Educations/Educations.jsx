import React, { useEffect, useState, useContext } from 'react'
import Layout from '../TabLayout/Layout'
import { AllContext } from "../../../ContextApi/AllContext"
import { DashboardContext } from "../../../ContextApi/DashboardContext"
import { useTranslation } from "react-i18next";
import ContentFa from "./Components/ContentFa"
import ContentEn from "./Components/ContentEn"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetAdminEducations } from "../../../Service/PersonalServices"
export default function Certificates() {
  const { t } = useTranslation()
  const [educationsServerData, setEducationsServerData] = useState()
  const [TabState, SetTabState] = useState(1)
  const { SetDashboardLoader } = useContext(AllContext)
  const [updateStates, SetupdateStates] = useState(false)
  const { TabsInfo } = useContext(DashboardContext)


  useEffect(() => {
    const GetFromServer = async () => {
      try {
        SetDashboardLoader(true)
        const { data } = await GetAdminEducations()
        if (data) {
          setEducationsServerData(data)
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
        console.log(error)
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
          TabState === 1 ? <ContentFa TabState={TabState} SetupdateStates={SetupdateStates} updateStates={updateStates} educationsServerData={educationsServerData} /> : <ContentEn TabState={TabState} SetupdateStates={SetupdateStates} updateStates={updateStates} educationsServerData={educationsServerData} />
        }
      </Layout>
    </>
  )
}
