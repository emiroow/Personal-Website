import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  GetAdminStatistics,
  getAdminContactUsMessages,
} from "../../../Service";
import Preloader from "../../Preloader";
import Report from "./Components/Report";
import Settings from "./Components/Settings";
import Wellcom from "./Components/Wellcom";
export default function DashboardIndex() {
  const Loader = useSelector((store) => store.setting.loader);
  const [reportState, setReportState] = useState();
  const [commentsArr, setCommentsArr] = useState([]);

  useEffect(() => {
    const getFromServer = async () => {
      const data = { countOfPage: 16 };
      try {
        const response = await getAdminContactUsMessages(data);
        const responseReport = await GetAdminStatistics();
        setReportState(responseReport.data);
        setCommentsArr(response.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFromServer();
  }, []);

  return (
    <div className="w-full">
      <Wellcom />
      <div className="w-full flex justify-between max-lg:flex-col-reverse mt-5">
        {!Loader && !reportState && commentsArr.length === 0 ? (
          <Preloader />
        ) : null}
        <Settings />
        <Report reportState={reportState} commentsArr={commentsArr} />
      </div>
    </div>
  );
}
