import React, { useContext, useState, useEffect } from 'react'
import { DashboardContext } from "../../../ContextApi/DashboardContext"
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../TabLayout/Layout'
import Contentfa from "./Components/contentfa"
import Contenten from "./Components/contenten"
import { useDispatch, useSelector } from 'react-redux';
import { fetchGeneraltData } from '../../../Reducers/DashboardSlices/GeneralSlice';
import Preloader from '../../Preloader';
export default function About() {
  const [TabState, SetTabState] = useState(1)
  const { TabsInfo } = useContext(DashboardContext)
  
  const loader = useSelector((state) => state.general.status)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGeneraltData())
  }, [])

  return (
    <>
      <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
        {loader === "pending" ? <Preloader /> : null}
        {
          TabState === 1 ? <Contentfa /> : <Contenten />
        }
      </Layout>
    </>
  )
}
