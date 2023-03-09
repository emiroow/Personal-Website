import React, { useContext, useState, useEffect } from 'react'
import { GetAdminAbout } from "../../../Service/index"
import { AllContext } from "../../../ContextApi/AllContext"
import { DashboardContext } from "../../../ContextApi/DashboardContext"
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../TabLayout/Layout'
import Contentfa from "./Components/contentfa"
import Contenten from "./Components/contenten"
export default function About() {
  const { t } = useTranslation()
  const [TabState, SetTabState] = useState(1)
  const [AdminAboutFa, SetAdminAboutFa] = useState()
  const [AdminAboutEn, SetAdminAboutEn] = useState()
  const [updateStates, SetupdateStates] = useState(false)
  const { SetDashboardLoader } = useContext(AllContext)
  const { TabsInfo } = useContext(DashboardContext)

  useEffect(() => {
    const GetFromServer = async () => {
      try {
        SetDashboardLoader(true)
        const { data } = await GetAdminAbout()
        if (data.length === 2) {
          SetAdminAboutFa(data?.filter((item) => item.lang === 1))
          SetAdminAboutEn(data?.filter((item) => item.lang === 0))
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
          TabState === 1 ? <Contentfa AdminAboutFa={AdminAboutFa} SetupdateState={SetupdateStates} updateStates={updateStates} /> : <Contenten AdminAboutEn={AdminAboutEn} SetupdateState={SetupdateStates} updateStates={updateStates} />
        }
      </Layout>
    </>
  )
}
