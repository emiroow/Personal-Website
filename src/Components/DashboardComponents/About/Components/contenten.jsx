import { Formik } from "formik";
import moment from "jalali-moment";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useTranslation } from "react-i18next";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  SetGeneraltDataEn,
  fetchSetGeneralData,
} from "../../../../Reducers/DashboardSlices/GeneralSlice";
import i18n from "../../../../i18n";
import AddLocation from "./AddLocation";
export default function Contentfa() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const AdminAboutEn = useSelector((state) => state.general.generalEn);

  const schema = Yup.object().shape({
    avatarUrl: Yup.string().required(t("avatarUrl")),
    birthday: Yup.string().required(t("birthday")),
    city: Yup.string().required(t("city")),
    country: Yup.string().required(t("country")),
    cvUrl: Yup.string().required(t("cvUrl")),
    description: Yup.string().required(t("description")),
    email: Yup.string().email().required(t("email")),
    locationAddress: Yup.string().required(t("locationAddress")),
    name: Yup.string().required(t("name")),
    phoneNumber: Yup.number().required(t("phoneNumber")).min(11, t("min")),
    position: Yup.string().required(t("position")),
    secondAvatarUrl: Yup.string().required(t("secondAvatarUrl")),
  });

  const HandleUpdateFaChanges = async (data) => {
    if (data) {
      dispatch(SetGeneraltDataEn(data));
      const respons = await dispatch(fetchSetGeneralData(data));
      if (respons.payload.status === 200) {
        toast.success(t("SuccessEdited"), {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
      }
    } else {
      toast.error(t("PleaseFill"), {
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
    <div className="dark:bg-DarkPurple bg-LightYellow rounded-b-xl ">
      {AdminAboutEn !== undefined ? (
        <Formik
          validationSchema={schema}
          onSubmit={(value) => {
            HandleUpdateFaChanges(value);
          }}
          initialValues={{
            avatarUrl: AdminAboutEn.avatarUrl,
            birthday: AdminAboutEn.birthday,
            city: AdminAboutEn.city,
            country: AdminAboutEn.country,
            cvUrl: AdminAboutEn.cvUrl,
            description: AdminAboutEn.description,
            email: AdminAboutEn.email,
            locationAddress: AdminAboutEn.locationAddress,
            name: AdminAboutEn.name,
            phoneNumber: AdminAboutEn.phoneNumber,
            position: AdminAboutEn.position,
            secondAvatarUrl: AdminAboutEn.secondAvatarUrl,
            lang: "en",
          }}
          enableReinitialize
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
            handleSubmit,
            dirty,
          }) => (
            <form
              onSubmit={(e) => e.preventDefault()}
              className=" w-full flex flex-wrap justify-around flex-row"
            >
              <div className=" w-full lg:w-[47%] p-2">
                <div className="my-4">
                  <label className=" dark:text-white text-LightMaincolor">
                    {t("avatarUrlLable")}
                  </label>
                  <input
                    type="text"
                    value={values.avatarUrl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="avatarUrl"
                    id="avatarUrl"
                    className={`${
                      i18n.language === "fa"
                        ? "text-right pr-2"
                        : "text-left pl-2"
                    } shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black w-full h-10 mt-1 rounded-md mb-2 outline-none  bg-white/90 dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
                  />
                  <p
                    className={` ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    } text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
                  >
                    {errors.avatarUrl &&
                      touched.avatarUrl &&
                      errors.avatarUrl + " *"}
                  </p>
                </div>
                <hr className="border-black border-[1px] rounded-full" />
                <div className="my-4 flex flex-col">
                  <label className=" dark:text-white mb-1 text-LightMaincolor">
                    {t("birthdayLable")}
                  </label>
                  <DatePicker
                    onChange={(value) => {
                      if (value) {
                        setFieldValue(
                          "birthday",
                          convertToGregorian(value.format())
                        );
                      } else setFieldValue("birthday", "");
                    }}
                    format="YYYY-MM-DD HH:mm"
                    value={
                      i18n.language === "fa"
                        ? AdminAboutEn.birthday &&
                          moment
                            .from(
                              AdminAboutEn.birthday,
                              "en",
                              "YYYY-MM-DDTHH:mm"
                            )
                            .locale("fa")
                            .format("YYYY-MM-DD HH:mm")
                        : values.birthday?.split("T").join(" ")
                    }
                    calendar={i18n.language === "fa" && persian}
                    locale={i18n.language === "fa" && persian_fa}
                    arrow={true}
                    editable={true}
                    inputClass="shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black w-[100%] text-center h-10 mt-1 mb-2 rounded-md outline-none  bg-white/90 dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"
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
                  <p
                    className={`${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    } text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
                  >
                    {errors.birthday &&
                      touched.birthday &&
                      errors.birthday + "*"}
                  </p>
                </div>
                <hr className="border-black border-[1px] rounded-full" />
                <div className="my-4">
                  <label
                    htmlFor=""
                    className=" dark:text-white text-LightMaincolor"
                  >
                    {t("countryLable")}
                  </label>
                  <input
                    type="text"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="country"
                    id="country"
                    className={`${
                      i18n.language === "fa"
                        ? "text-right pr-2"
                        : "text-left pl-2"
                    } shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black w-full h-10 mt-1 rounded-md mb-2 outline-none  bg-white/90 dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
                  />
                  <p
                    className={` ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    } text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
                  >
                    {errors.country && touched.country && errors.country + " *"}
                  </p>
                </div>
                <hr className="border-black border-[1px] rounded-full" />
                <div className="my-4">
                  <label className=" dark:text-white text-LightMaincolor">
                    {t("cityLable")}
                  </label>
                  <input
                    type="text"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="city"
                    id="city"
                    className={`${
                      i18n.language === "fa"
                        ? "text-right pr-2"
                        : "text-left pl-2"
                    } shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black w-full h-10 mt-1 rounded-md mb-2 outline-none  bg-white/90 dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
                  />
                  <p
                    className={` ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    } text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
                  >
                    {errors.city && touched.city && errors.city + " *"}
                  </p>
                </div>
                <hr className="border-black border-[1px] rounded-full" />
                <div className="my-4">
                  <label
                    htmlFor=""
                    className=" dark:text-white text-LightMaincolor"
                  >
                    {t("cvUrlLable")}
                  </label>
                  <input
                    type="text"
                    value={values.cvUrl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="cvUrl"
                    id="cvUrl"
                    className={`${
                      i18n.language === "fa"
                        ? "text-right pr-2"
                        : "text-left pl-2"
                    } text-black w-full h-10 mt-1 rounded-md mb-2 outline-none shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)]  bg-white/90 dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
                  />
                  <p
                    className={` ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    } text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
                  >
                    {errors.cvUrl && touched.cvUrl && errors.cvUrl + " *"}
                  </p>
                </div>
                <hr className="border-black border-[1px] rounded-full" />
                <div className="my-4">
                  <label className=" dark:text-white text-LightMaincolor">
                    {t("descriptionLable")}
                  </label>
                  <textarea
                    rows="8"
                    type="text"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="description"
                    id="description"
                    className={`${
                      i18n.language === "fa"
                        ? "text-right pr-2"
                        : "text-left pl-2"
                    } text-black w-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] p-2  mt-1 rounded-md mb-2 outline-none  bg-white/90 dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
                  />
                  <p
                    className={` ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    } text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
                  >
                    {errors.description &&
                      touched.description &&
                      errors.description + " *"}
                  </p>
                </div>
              </div>
              {/* Second Container */}
              <div className=" w-full lg:w-[47%] p-2">
                <div className="my-4">
                  <label className=" dark:text-white text-LightMaincolor">
                    {t("emailLable")}
                  </label>
                  <input
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    id="email"
                    className={`${
                      i18n.language === "fa"
                        ? "text-right pr-2"
                        : "text-left pl-2"
                    } text-black w-full h-10 mt-1 rounded-md mb-2 outline-none shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)]  bg-white/90 dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
                  />
                  <p
                    className={` ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    } text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
                  >
                    {errors.email && touched.email && errors.email + " *"}
                  </p>
                </div>
                <hr className="border-black border-[1px] rounded-full" />
                <div className="my-4 flex flex-col">
                  <label className=" dark:text-white text-LightMaincolor">
                    {t("locationAddressLable")}
                  </label>
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={values.locationAddress}
                      disabled
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="locationAddress"
                      id="locationAddress"
                      className={`text-black text-xs text-center w-[70%] h-10 mt-1 rounded-md mb-1 outline-none shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] bg-white/90 dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
                    />
                    <AddLocation
                      locationAddress={values.locationAddress}
                      setFieldValue={setFieldValue}
                    />
                  </div>
                  <p
                    className={` ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    } text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
                  >
                    {errors.locationAddress &&
                      touched.locationAddress &&
                      errors.locationAddress + " *"}
                  </p>
                </div>
                <hr className="border-black border-[1px] rounded-full" />
                <div className="my-4">
                  <label className=" dark:text-white text-LightMaincolor">
                    {t("nameLable")}
                  </label>
                  <input
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    id="name"
                    className={`${
                      i18n.language === "fa"
                        ? "text-right pr-2"
                        : "text-left pl-2"
                    } text-black w-full h-10 mt-1 rounded-md mb-2 outline-none shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)]  bg-white/90 dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
                  />
                  <p
                    className={` ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    } text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
                  >
                    {errors.name && touched.name && errors.name + " *"}
                  </p>
                </div>
                <hr className="border-black border-[1px] rounded-full" />
                <div className="my-4">
                  <label className=" dark:text-white text-LightMaincolor">
                    {t("phoneNumberLable")}
                  </label>
                  <input
                    type="text"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="phoneNumber"
                    id="phoneNumber"
                    className={`${
                      i18n.language === "fa"
                        ? "text-right pr-2"
                        : "text-left pl-2"
                    } text-black w-full h-10 mt-1 rounded-md mb-2 outline-none shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)]  bg-white/90 dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
                  />
                  <p
                    className={` ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    } text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
                  >
                    {errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber + " *"}
                  </p>
                </div>
                <hr className="border-black border-[1px] rounded-full" />
                <div className="my-4">
                  <label className=" dark:text-white text-LightMaincolor">
                    {t("positionLable")}
                  </label>
                  <input
                    type="text"
                    value={values.position}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="position"
                    id="position"
                    className={`${
                      i18n.language === "fa"
                        ? "text-right pr-2"
                        : "text-left pl-2"
                    } text-black w-full h-10 mt-1 rounded-md mb-2 outline-none shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)]  bg-white/90 dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
                  />
                  <p
                    className={` ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    } text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
                  >
                    {errors.position &&
                      touched.position &&
                      errors.position + " *"}
                  </p>
                </div>
                <hr className="border-black border-[1px] rounded-full" />
                <div className="my-4">
                  <label className=" dark:text-white text-LightMaincolor">
                    {t("secondAvatarUrlLable")}
                  </label>
                  <input
                    type="text"
                    value={values.secondAvatarUrl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="secondAvatarUrl"
                    id="secondAvatarUrl"
                    className={`${
                      i18n.language === "fa"
                        ? "text-right pr-2"
                        : "text-left pl-2"
                    } text-black w-full h-10 mt-1 rounded-md mb-2 outline-none shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)]  bg-white/90 dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
                  />
                  <p
                    className={` ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    } text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
                  >
                    {errors.secondAvatarUrl &&
                      touched.secondAvatarUrl &&
                      errors.secondAvatarUrl + " *"}
                  </p>
                </div>
              </div>
              <br />
              <div className="w-full flex justify-items-start lg:px-8">
                <button
                  disabled={!dirty}
                  onClick={() => handleSubmit()}
                  value={t("SaveChanges")}
                  className={`${
                    dirty ? "bg-green-500" : "bg-red-700"
                  } cursor-pointer p-3 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] max-lg:text-sm   mx-2 mb-10 rounded-lg`}
                >
                  {!dirty
                    ? "You must make a change to save the changes"
                    : "Save changes"}
                </button>
              </div>
            </form>
          )}
        </Formik>
      ) : (
        <div className="w-full text-center p-16">{t("Problem")}</div>
      )}
    </div>
  );
}
