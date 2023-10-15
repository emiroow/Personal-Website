import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddAnalysBox from "./AddAnalysBox";
import AnalysShowBox from "./AnalysShowBox";
export default function ContentFa({ TabState }) {
  const [AddNewAnalisArr, SetAddNewAnalisArr] = useState([]);
  const analysFa = useSelector((state) => state.analysis.allAnalysis);

  return (
    <div className="w-full p-5 dark:bg-DarkPurple bg-LightYellow flex flex-wrap justify-center lg:justify-start  items-center rounded-b-xl">
      {analysFa?.map((item) => {
        return item.lang === 1 ? (
          <AnalysShowBox
            analysisData={analysFa}
            TabState={TabState}
            key={item.id}
            title={item.title}
            value={item.value}
            id={item.id}
          />
        ) : null;
      })}
      <AddAnalysBox
        TabState={TabState}
        AddNewAnalisArr={AddNewAnalisArr}
        SetAddNewAnalisArr={SetAddNewAnalisArr}
      />
      {AddNewAnalisArr}
    </div>
  );
}
