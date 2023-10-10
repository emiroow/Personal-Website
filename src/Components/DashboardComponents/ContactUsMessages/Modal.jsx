import { t } from "i18next";
import moment from "jalali-moment";
import React from "react";

function Modal({ SetModalState, data, modalState }) {
  const handleClick = () => {
    SetModalState(false);
  };

  const findItem = data.find((item) => item.id === modalState.id);

  function convertToJalali(gregorianDate) {
    const jalaliDate = moment(gregorianDate, "YYYY-MM-DDTHH:mm:ss.SSSSSSS");
    return jalaliDate.format("HH:mm | jYYYY-jMM-jDD");
  }

  return (
    <div className="w-full bg-black/50 fixed top-0 left-0 justify-center flex items-center h-[100vh]">
      <div className="w-[95%] lg:w-[40%] bg-BackColorWhiter text-white p-7 border-2 dark:border-DarkPurple rounded-xl">
        <div>
          <div className="flex justify-between  max-lg:flex-col">
            <div className="flex flex-col lg:w-[49%] mb-4">
              <label>{t("fromName")} :</label>
              <input
                disabled
                value={findItem?.fullName}
                type="text"
                className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)]  h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
              />
            </div>
            <div className="flex flex-col lg:w-[49%] mb-4">
              <label>{t("dateLable")} :</label>
              <input
                disabled
                value={convertToJalali(findItem?.dateTime)}
                className=" text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)]  h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="flex justify-between  max-lg:flex-col">
            <div className="flex flex-col lg:w-[49%] mb-4">
              <label>Ip :</label>
              <input
                disabled
                value={findItem?.ip}
                type="text"
                className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)]  h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
              />
            </div>
          </div>
          <span>{t("descriptionLable")}</span>
          <textarea
            disabled
            value={findItem?.message}
            className="w-full rounded-xl mt-2 p-3"
            rows="10"
          ></textarea>
        </div>
        <button
          onClick={handleClick}
          className="px-5 py-3 mt-5 bg-blue-500 text-xs rounded-lg"
        >
          {t("CancelLocation")}
        </button>
      </div>
    </div>
  );
}

export default Modal;
