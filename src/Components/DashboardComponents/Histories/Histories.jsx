import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardContext } from "../../../ContextApi/DashboardContext";
import { fetchGetHistoriesData } from "../../../Reducers/DashboardSlices/HistoriesSlice";
import Preloader from "../../Preloader";
import Layout from "../TabLayout/Layout";
import ContentEn from "./Components/ContentEn";
import ContentFa from "./Components/ContentFa";
export default function Histories() {
  const dispatch = useDispatch();
  const serverData = useSelector((state) => state.histories.allHistories);
  const loaderStatus = useSelector((state) => state.histories.status);
  const { TabsInfo, SetTabState, TabState } = useContext(DashboardContext);

  useEffect(() => {
    const GetFromServer = () => {
      dispatch(fetchGetHistoriesData());
    };
    GetFromServer();
  }, []);

  return (
    <>
      <Layout SetTabState={SetTabState} TabsInfo={TabsInfo} TabState={TabState}>
        {loaderStatus === "pending" ? <Preloader /> : null}
        {TabState === 1 ? (
          <ContentFa serverData={serverData} TabState={TabState} />
        ) : (
          <ContentEn serverData={serverData} TabState={TabState} />
        )}
      </Layout>
    </>
  );
}
