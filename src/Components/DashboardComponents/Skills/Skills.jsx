import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { DashboardContext } from "../../../ContextApi/DashboardContext";
import {
  fetchGetAdminCircleSkills,
  fetchGetAdminSkills,
} from "../../../Reducers/DashboardSlices/SkillsSlice";
import Preloader from "../../Preloader";
import Layout from "../TabLayout/Layout";
import AddSkill from "./AddSkill";
import CircelProgresContentsEn from "./CircelProgresContentsEn";
import CircelProgresContentsFa from "./CircelProgresContentsFa";
import LineSkillContentsEn from "./LineSkillContentsEn";
import LineSkillContentsFa from "./LineSkillContentsFa";
import NoneProgresContentsEn from "./NoneProgresContentsEn";
import NoneProgresContentsFa from "./NoneProgresContentsFa";
export default function Skills() {
  const { TabsInfo } = useContext(DashboardContext);
  const [TabStateCircleProgres, SetTabStateCircleProgres] = useState(1);
  const [TabStateLineProgres, SetTabStateLineProgres] = useState(1);
  const [TabStateNoneProgres, SetTabStateNoneProgres] = useState(1);
  const loader = useSelector((state) => state.skills.status);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetAdminCircleSkills());
    dispatch(fetchGetAdminSkills());
  }, []);

  return (
    <>
      {loader === "pending" ? <Preloader /> : null}
      <AddSkill />
      <div className="mt-16">
        <p htmlFor="" className="mb-5 font-IranBold text-xl">
          {t("lineProgres")}
        </p>
        <Layout
          TabsInfo={TabsInfo}
          SetTabState={SetTabStateLineProgres}
          TabState={TabStateLineProgres}
        >
          {TabStateLineProgres === 1 ? (
            <LineSkillContentsFa />
          ) : (
            <LineSkillContentsEn />
          )}
        </Layout>
      </div>
      <div className="mt-16">
        <p htmlFor="" className="mb-5 font-IranBold text-xl">
          {t("circelProgress")}
        </p>
        <Layout
          TabsInfo={TabsInfo}
          SetTabState={SetTabStateCircleProgres}
          TabState={TabStateCircleProgres}
        >
          {TabStateCircleProgres === 1 ? (
            <CircelProgresContentsFa />
          ) : (
            <CircelProgresContentsEn />
          )}
        </Layout>
      </div>
      <div className="mt-16">
        <p htmlFor="" className="mb-5 font-IranBold text-xl">
          {t("noneProgres")}
        </p>
        <Layout
          TabsInfo={TabsInfo}
          SetTabState={SetTabStateNoneProgres}
          TabState={TabStateNoneProgres}
        >
          {TabStateNoneProgres === 1 ? (
            <NoneProgresContentsFa />
          ) : (
            <NoneProgresContentsEn />
          )}
        </Layout>
      </div>
    </>
  );
}
