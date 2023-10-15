import moment from "jalali-moment";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import i18n from "../../i18n";
import Fancybox from "./ChildComponents/Fancybox";
export default function Certificate() {
  const { t } = useTranslation();
  const getData = useSelector((store) => store.client.clientState.certificates);

  return (
    <div
      id="Portfolio"
      className=" my-5 md:my-16 duration-700 justify-center flex flex-col items-center transition-all"
    >
      <div className="w-[98%] md:w-[95%] 2xl:w-[95%] max-md:m-auto flex justify-between items-center">
        <h1 className="text-shadow-dark font-IranBold text-xl md:text-2xl 2xl:text-3xl md:mx-5">
          {t("Certificate")}
        </h1>
      </div>
      <Fancybox options={{ infinite: true }}>
        <div className="w-full flex-wrap justify-center md:justify-center px-5 mt-5 flex">
          {getData?.map((item) => {
            return (
              <div
                key={item.id}
                className=" shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] h-max max-lg:mb-4 rounded-lg dark:border-DarkPurple border-LightMaincolor border-[2.5px] md:mx-4 2xl:mx-5 "
              >
                <img
                  data-src={item.link}
                  data-fancybox="gallery1"
                  className="w-[300px] md:w-[250px] 2xl:w-[350px] cursor-pointer rounded-t-lg  drop-shadow-xl  bg-cover bg-no-repeat"
                  src={item.link}
                  alt="portfolioImage"
                />
                <div className="w-[300px] md:w-[250px] 2xl:w-[350px] break-words flex flex-col flex-wrap transition-all duration-700 h-max z-20 dark:bg-DarkPurple/60 p-2 bg-LightMaincolor/60 rounded-b-lg">
                  <span className="font-IranBold text-sm mt-1 break-all">
                    {item.title}
                  </span>
                  <span className="font-IranBold text-[11px] mt-1">
                    {i18n.language === "fa"
                      ? moment
                          .from(item.dateTime, "en", "YYYY-MM-DDTHH:mm")
                          .locale("fa")
                          .format("YYYY/MM/DD")
                      : moment
                          .from(item.dateTime, "en", "YYYY-MM-DD HH:mm")
                          .locale("en")
                          .format("YYYY/MM/DD")}
                  </span>
                  <span className="font-IranLight text-sm mt-1 break-all">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Fancybox>
    </div>
  );
}
