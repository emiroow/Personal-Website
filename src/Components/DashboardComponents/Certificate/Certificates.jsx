import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardContext } from "../../../ContextApi/DashboardContext";
import { fetchgetAdminCertificate } from "../../../Reducers/DashboardSlices/CertificateSlice";
import Preloader from "../../Preloader";
import Layout from "../TabLayout/Layout";
import ContentEn from "./Components/ContentEn";
import ContentFa from "./Components/ContentFa";
export default function Certificates() {
  const { TabsInfo, TabState, SetTabState } = useContext(DashboardContext);
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.certificate.status);

  useEffect(() => {
    dispatch(fetchgetAdminCertificate());
  }, []);

  return (
    <>
      <Layout TabsInfo={TabsInfo} SetTabState={SetTabState} TabState={TabState}>
        {loader === "pending" ? <Preloader /> : null}
        {TabState === 1 ? (
          <ContentFa TabState={TabState} />
        ) : (
          <ContentEn TabState={TabState} />
        )}
      </Layout>
    </>
  );
}
