import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { DashboardContext } from '../../../ContextApi/DashboardContext';
import Layout from '../TabLayout/Layout';
import Preloader from '../../Preloader';
import ContentsFa from "./Components/ContentsFa"
import ContentsEn from "./Components/ContentEn"
import Social from './Components/Social';

export default function Socials() {
  const { TabsInfo, SetTabState, TabState } = useContext(DashboardContext)
  const loader = useSelector((state) => state.services.status)

  return (
    <div className='w-full'>
      {
        loader === "pending" ? <Preloader /> : null
      }
      <Social />
      <div>
        <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
          {
            TabState === 1 ? <ContentsFa /> : <ContentsEn />
          }
        </Layout>
      </div>
    </div>
  )
}