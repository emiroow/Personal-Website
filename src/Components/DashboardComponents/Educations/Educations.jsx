import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardContext } from "../../../ContextApi/DashboardContext";
import { fetchGetAdminEducations } from "../../../Reducers/DashboardSlices/EducationsSlice";
import Preloader from "../../Preloader";
import Layout from "../TabLayout/Layout";
import ContentEn from "./Components/ContentEn";
import ContentFa from "./Components/ContentFa";

export default function Certificates() {
  const { TabsInfo, SetTabState, TabState } = useContext(DashboardContext);
  const dispatch = useDispatch();
  const educationsServerData = useSelector(
    (state) => state.educations.allEducations
  );
  const LoaderStatus = useSelector((state) => state.educations.status);

  useEffect(() => {
    const GetFromServer = () => {
      dispatch(fetchGetAdminEducations());
    };
    GetFromServer();
  }, []);

  return (
    <>
      {LoaderStatus === "pending" ? <Preloader /> : null}
      <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
        {TabState === 1 ? (
          <ContentFa
            TabState={TabState}
            educationsServerData={educationsServerData}
          />
        ) : (
          <ContentEn
            TabState={TabState}
            educationsServerData={educationsServerData}
          />
        )}
      </Layout>
    </>
  );
}
