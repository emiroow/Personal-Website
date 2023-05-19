import React, { useContext } from 'react'
import Layout from '../TabLayout/Layout'
import { DashboardContext } from '../../../ContextApi/DashboardContext'
import Preloader from '../../Preloader'
import { useDispatch, useSelector } from 'react-redux'
import ContentFa from './Components/ContentFa'
import ContentEn from './Components/ContentEn'
import { useEffect } from 'react'
import { fetchgetAdminPortfolios, fetchgetAdminPortfoliosCatagories } from "../../../Reducers/DashboardSlices/PortfolioSlice"
export default function Portfolios() {
    const { TabsInfo, SetTabState, TabState } = useContext(DashboardContext)
    const loader = useSelector((state) => state.portfolio.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchgetAdminPortfoliosCatagories())
        dispatch(fetchgetAdminPortfolios())
    }, [])

    return (
        <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
            {
                loader === "pending" ? <Preloader /> : null
            }
            {
                TabState === 1 ? <ContentFa /> : <ContentEn />
            }
        </Layout>
    )
}