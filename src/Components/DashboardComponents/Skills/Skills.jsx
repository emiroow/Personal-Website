import React, { useContext } from 'react'
import AddSkill from './AddSkill'
import { useSelector } from 'react-redux'
import { DashboardContext } from '../../../ContextApi/DashboardContext'
import Preloader from '../../Preloader'
import Layout from '../TabLayout/Layout'
import LineSkillContentsFa from "./LineSkillContentsFa"
import LineSkillContentsEn from "./LineSkillContentsEn"
import CircelProgresContentsEn from "./CircelProgresContentsEn"
import CircelProgresContentsFa from "./CircelProgresContentsFa"
import NoneProgresContentsEn from "./NoneProgresContentsEn"
import NoneProgresContentsFa from "./NoneProgresContentsFa"
import { useTranslation } from 'react-i18next'
export default function Skills() {
  const { TabsInfo, SetTabState, TabState } = useContext(DashboardContext)
  const loader = useSelector((state) => state.services.status)
  const { t } = useTranslation()
  return (
    <>
      {
        loader === "pending" ? <Preloader /> : null
      }
      <AddSkill />
      <div className='mt-16'>
        <p htmlFor="" className='mb-5 font-IranBold text-xl'>{t("lineProgres")}</p>
        <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
          {
            TabState === 1 ? <LineSkillContentsFa /> : <LineSkillContentsEn />
          }
        </Layout>
      </div>
      <div className='mt-16'>
        <p htmlFor="" className='mb-5 font-IranBold text-xl'>{t("circelProgress")}</p>
        <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
          {
            TabState === 1 ? <CircelProgresContentsFa /> : <CircelProgresContentsEn />
          }
        </Layout>
      </div>
      <div className='mt-16'>
        <p htmlFor="" className='mb-5 font-IranBold text-xl'>{t("noneProgres")}</p>
        <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
          {
            TabState === 1 ? <NoneProgresContentsFa /> : <NoneProgresContentsEn />
          }
        </Layout>
      </div>
    </>
  )
}
