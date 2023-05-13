import React from 'react'
import Layout from '../TabLayout/Layout'
import { DashboardContext } from '../../../ContextApi/DashboardContext'
import { useDispatch, useSelector } from 'react-redux'
import PreLoader from "../../Preloader"
import { useContext } from 'react'
import ContentsFa from "./Components/ContentsFa"
import ContentsEn from "./Components/ContentsEn"
import { useEffect } from 'react'
import { fetchgetAdminComments } from '../../../Reducers/DashboardSlices/CommentsSlice'

export default function Comments() {
  const { TabsInfo, SetTabState, TabState } = useContext(DashboardContext)
  const loader = useSelector((state) => state.comments.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchgetAdminComments())
  }, [])

  return (
    <>
      <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
        {
          loader === "pending" ? <PreLoader /> : null
        }
        {
          TabState === 1 ? <ContentsFa TabState={TabState} /> : <ContentsEn TabState={TabState} />
        }
      </Layout>
    </>
  )
}
