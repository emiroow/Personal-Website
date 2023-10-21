import React, { useEffect, useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import i18n from "../../i18n";
export default function Language({ sidesetstatue }) {
  const [GetLangState, SetLangState] = useState(false);
  const [GetChangeLang, SetChangeLang] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(GetChangeLang);
    SetLangState(false);
    if (sidesetstatue) sidesetstatue(false);
  }, [GetChangeLang]);

  return (
    <>
      <div className="relative">
        <div className="w-full flex justify-center items-center">
          <MdOutlineLanguage
            onClick={() => SetLangState(!GetLangState)}
            className="transition duration-700 ease-in-out  hover:-translate-y-1 hover:scale-60 text-LightYellow dark:text-DarkPurple text-[35px] lg:text-[40px] xl:text-[40px] 2xl:text-[42px] cursor-pointer"
          />
        </div>
        {GetLangState ? (
          <div className="ease-in duration-300 absolute top-6 md:top-9 right-0 flex justify-center items-center  w-full">
            <div className=" flex justify-center items-center flex-col darck:shadow-[0px_0px_8px_1px_rgba(85,5,255,0.90)]  mt-1 py-2  rounded-3xl dark:bg-DarkPurple bg-LightYellow">
              <div
                onClick={() => SetChangeLang("fa")}
                style={GetChangeLang === "fa" ? { color: "red" } : null}
                className="text-sm md:text-md font-IranBold cursor-pointer border-b-2 pb-1 px-3 w-full text-center border-[#191923]"
              >
                {i18n.language === "fa" ? "فا" : "FA"}
              </div>
              <div
                onClick={() => SetChangeLang("en")}
                style={GetChangeLang === "en" ? { color: "red" } : null}
                className="text-sm md:text-md font-IranBold pt-1 cursor-pointer"
              >
                EN
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
