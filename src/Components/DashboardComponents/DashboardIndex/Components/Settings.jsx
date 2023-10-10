import { t } from "i18next";
import React from "react";
import { useSelector } from "react-redux";
import SettingTableItem from "./SettingTableItem";
export default function Settings() {
  const getSetting = useSelector((store) => store.setting.setting);
  return (
    <div className="lg:w-[49.5%] overflow-auto">
      <h1 className="font-IranBold text-xl">{t("partSetting")}:</h1>
      <div className="inline-block min-w-full mt-5 rounded-b-xl">
        <div className="overflow-auto rounded-sm">
          <table className="min-w-full text-center text-sm font-light  rounded-b-xl">
            <thead className="border-b  font-medium border-neutral-500 bg-black ">
              <tr>
                <th scope="col" className="px-6 py-4 max-sm:hidden">
                  #
                </th>
                <th scope="col" className="px-6 py-4">
                  {t("TitleLabel")}
                </th>
                <th scope="col" className="px-6 py-4">
                  {t("nowValue")}
                </th>
                <th scope="col" className="px-6 py-4">
                  {t("Action")}
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(getSetting).map(([name, value], index) => {
                return (
                  <SettingTableItem
                    key={name + String(value)}
                    name={name}
                    index={index}
                    value={value}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
