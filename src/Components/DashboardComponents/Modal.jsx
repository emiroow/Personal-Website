import React from "react";
import { useTranslation } from "react-i18next";
export default function Modal({ target, modalState, SetModalState, func }) {
  const { t } = useTranslation();

  const handleAccess = () => {
    SetModalState({ ...modalState, Active: false, Access: true });
    func && func();
  };

  const handleClose = () => {
    SetModalState({ ...modalState, Active: false });
  };

  return (
    <>
      {modalState.Active ? (
        <div className="w-full bg-black/50 fixed top-0 left-0 justify-center flex items-center h-[100vh]">
          <div
            className="w-full h-full absolute top-0 left-0 z-10"
            onClick={() => SetModalState({ ...modalState, Active: false })}
          ></div>
          <div className="w-[95%] lg:w-[40%] border-y-2 border-LightYellowDark dark:border-DarkPurple bg-BackColorWhiter text-white p-10 rounded-xl z-50">
            <div className="w-full text-center flex mb-4 justify-center items-center flex-col space-y-3">
              <span className="text-center">{t("DeletAlert")}</span>
              {target ? <span className="mb-5">"{target}" </span> : null}
            </div>
            <div className="w-full flex justify-center items-center mt-4 ">
              <button
                onClick={handleClose}
                className="p-2 bg-blue-500 mx-3 text-xs rounded-lg"
              >
                {t("CancelLocation")}
              </button>
              <button
                onClick={handleAccess}
                className="p-2 bg-red-600 mx-3 text-xs rounded-lg"
              >
                {t("RemoveBtn")}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
