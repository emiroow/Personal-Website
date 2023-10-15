import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
export default function Info() {
  const { t } = useTranslation();

  const aboutData = useSelector((store) => store.client.clientState.about);

  const GetAge = (Age) => {
    let SpitedAge = Age?.split("T")[0].split("-")[0];
    var today = new Date().getFullYear().toString().split("/")[0];
    if (SpitedAge && today !== undefined) {
      if (SpitedAge >= today) {
        return t("AgeFrontError");
      } else {
        return today - SpitedAge;
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-5">
      <div className="w-[85%] text-sm md:text-md 2xl:text-lg border-b-2 pb-8 dark:border-DarkPurple border-LightYellow">
        <div className="flex justify-between mt-5">
          <span className="font-IranBold">{t("HeadInfoCountry")} : </span>
          <span className="font-IranLight">{aboutData?.country}</span>
        </div>
        <div className="flex justify-between mt-5">
          <span className="font-IranBold">{t("HeadInfoState")} : </span>
          <span className="font-IranLight">{aboutData?.city}</span>
        </div>
        <div className="flex justify-between mt-5">
          <span className="font-IranBold">{t("HeadInfoYearsOld")} : </span>
          <span className="font-IranLight">{GetAge(aboutData?.birthday)}</span>
        </div>
      </div>
    </div>
  );
}
