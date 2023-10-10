import { t } from "i18next";
import React, { useContext, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { DashboardContext } from "../../../../ContextApi/DashboardContext";
import AddPortfolio from "./AddPortfolio";
import PortfolioShow from "./PortfolioShow";

export default function Portfolio() {
  const { TabState } = useContext(DashboardContext);
  const Portfolios = useSelector((state) =>
    state.portfolio.portfolios.filter((item) => item.lang === TabState)
  );
  const [newServerState, setNewServerState] = useState(false);

  return (
    <div className="w-full mt-16">
      <h1 className="text-xl">{t("PortfoliosMenu")} :</h1>
      <div className="w-full mt-5">
        {!newServerState ? (
          <button
            onClick={() => setNewServerState(true)}
            className="border-2 text-gray-50 flex justify-center rounded-lg items-center p-3 mb-3"
          >
            <span className="mx-2 text-sm">{t("addbtn")}</span>
            <AiFillPlusCircle className="dark:text-white text-lg text-emerald-400" />
          </button>
        ) : null}
      </div>
      <div className="mt-5 w-full flex flex-row flex-wrap justify-around">
        {newServerState ? (
          <AddPortfolio setNewServerState={setNewServerState} />
        ) : null}
        {Portfolios.map((item) => {
          return <PortfolioShow data={item} />;
        })}
      </div>
    </div>
  );
}
