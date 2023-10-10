import { t } from "i18next";
import moment from "jalali-moment";
import React, { useRef, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { fetchSetAdminAddComment } from "../../../../Reducers/DashboardSlices/CommentsSlice";
import i18n from "../../../../i18n";
export default function AddComment({ setNewServerState, TabState }) {
  const [dateTime, setDateTime] = useState();

  const subject = useRef();
  const message = useRef();
  const fromName = useRef();
  const fromPosition = useRef();
  const starCount = useRef();
  const fromImgUrl = useRef();
  const websiteUrl = useRef();

  const dispatch = useDispatch();

  const handleAddNewService = async () => {
    let subjectVal = subject.current.value;
    let dateTimeVal = dateTime;
    let messageVal = message.current.value;
    let fromNameVal = fromName.current.value;
    let fromPositionVal = fromPosition.current.value;
    let starCountVal = starCount.current.value;
    let fromImgUrlVal = fromImgUrl.current.value;
    let websiteUrlVal = websiteUrl.current.value;

    if (
      subjectVal &&
      dateTimeVal &&
      messageVal &&
      fromNameVal &&
      fromPositionVal &&
      starCountVal &&
      fromImgUrlVal &&
      websiteUrlVal
    ) {
      if (starCountVal <= 5 && starCountVal >= 1) {
        const response = await dispatch(
          fetchSetAdminAddComment({
            id: 0,
            fromName: fromNameVal,
            fromPosition: fromPositionVal,
            fromImgUrl: fromImgUrlVal,
            subject: subjectVal,
            message: messageVal,
            starCount: starCountVal,
            dateTime: dateTimeVal,
            lang: TabState,
            isActive: true,
            websiteUrl: websiteUrlVal,
          })
        );
        if (response.payload.status === 200) {
          toast.success(t("SuccessToAdd"), {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setNewServerState(false);
        } else {
          toast.error(t("Problem"), {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setNewServerState(false);
        }
      } else {
        toast.warning(t("warningStartCount"), {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.warning(t("PleaseFill"), {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const convertToGregorian = (date) => {
    function convertPersianDigitsToEnglish(input) {
      var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
      return input.replace(/[۰-۹]/g, function (match) {
        return persianDigits.indexOf(match);
      });
    }
    if (i18n.language === "fa") {
      return moment
        .from(convertPersianDigitsToEnglish(date), "fa", "YYYY-MM-DD HH:mm")
        .locale("en")
        .format("YYYY-MM-DDTHH:mm");
    } else {
      return moment
        .from(date, "en", "YYYY-MM-DD HH:mm")
        .locale("en")
        .format("YYYY-MM-DDTHH:mm");
    }
  };

  return (
    <div className=" bg-BackColorWhiter shadow-[0px_0px_10px_0px_rgba(0,0,0,0.30)] h-max rounded-xl w-[100%] lg:w-[48%] text-gray-50 p-1 mb-8">
      <div className="flex md:contents">
        <div className=" border-y-2 pb-8 dark:border-DarkPurple w-full  p-4 rounded-xl  mr-auto ">
          <div className="flex justify-between">
            <div className="flex flex-col w-[49%] mb-4">
              <label>{t("fromName")} :</label>
              <input
                ref={fromName}
                type="text"
                className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
              />
            </div>
            <div className="flex flex-col w-[49%] mb-4">
              <label>{t("subject")} :</label>
              <input
                ref={subject}
                type="text"
                className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col w-[49%] mb-4">
              <label>{t("fromPosition")} :</label>
              <input
                ref={fromPosition}
                type="text"
                className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
              />
            </div>
            <div className="flex flex-col w-[49%] mb-4">
              <label>{t("starCount")} :</label>
              <input
                ref={starCount}
                type="number"
                className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col w-[49%] mb-4">
              <label>{t("fromImgUrl")} :</label>
              <input
                ref={fromImgUrl}
                type="text"
                className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
              />
            </div>
            <div className="flex flex-col w-[49%] mb-4">
              <label>{t("dateLable")} :</label>
              <DatePicker
                onChange={(value) => {
                  setDateTime(convertToGregorian(value.format()));
                }}
                format="YYYY-MM-DD HH:mm"
                calendar={i18n.language === "fa" && persian}
                locale={i18n.language === "fa" && persian_fa}
                arrow={true}
                editable={false}
                inputClass=" text-center w-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"
                calendarPosition={
                  i18n.language === "fa" ? "bottom-right" : "bottom-left"
                }
                plugins={[
                  <TimePicker
                    style={{ color: "black" }}
                    hideSeconds
                    position="bottom"
                  />,
                ]}
              />
            </div>
          </div>
          <div className="flex justify-between  max-lg:flex-col">
            <div className="flex flex-col lg:w-[100%] mb-4">
              <label>{t("webSiteUrl")} :</label>
              <input
                ref={websiteUrl}
                type="text"
                className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
              />
            </div>
          </div>
          <div className="flex flex-col  mb-5">
            <label>{t("descriptionLable")} :</label>
            <textarea
              ref={message}
              className="outline-none p-3 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black rounded-xl mt-2"
              id=""
              rows="5"
            ></textarea>
          </div>
          <div className="flex flex-row ">
            <button
              onClick={handleAddNewService}
              className="text-sm ml-3 bg-green-500 font-IranLight rounded-lg p-2"
            >
              {t("SaveBtn")}
            </button>
            <button
              onClick={() => setNewServerState(false)}
              className="text-sm bg-orange-400 font-IranLight rounded-lg p-2"
            >
              {t("CancelLocation")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
