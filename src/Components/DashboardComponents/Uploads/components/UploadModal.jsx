import { useTranslation } from "react-i18next";
import { BiReset } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { FcDocument, FcUpload } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState } from "../../../../Reducers/DashboardSlices/UploadsSlice";
import { useUploads } from "../hooks/useUploads";
export default function UploadModal() {
  const { t } = useTranslation();
  const { UploadFormik } = useUploads();
  const modal = useSelector((state) => state.uploads.modal);
  const dispatch = useDispatch();

  return (
    <>
      {modal ? (
        <div className="w-full bg-black/50 fixed top-0 left-0 justify-center flex items-center h-[100vh] ">
          <div
            className="w-full h-full absolute top-0 left-0 z-10"
            onClick={() => dispatch(changeModalState(false))}
          ></div>
          <div className="w-[95%] lg:w-[30%] dark:bg-BackColorWhiter bg-LightBackcolor  text-white p-10 rounded-xl z-50 border-y-2 dark:border-DarkPurple border-LightYellow">
            <div className="w-full ">
              <div className="text-center">
                <h2 className="font-IranBold mt-5 text-3xl font-bold dark:text-white text-LightYellow">
                  {t("UploadTitle")}
                </h2>
              </div>
              <form
                onSubmit={UploadFormik.handleSubmit}
                className="mt-8 space-y-5"
              >
                <div className="grid grid-cols-1 space-y-2 ">
                  <label className="text-sm font-bold tracking-wide dark:text-white m-a text-LightYellow">
                    {t("TitleLabel")}
                  </label>
                  <input
                    className="p-2 dark:border-DarkPurple text-center border-LightYellow border-2 rounded-lg focus:outline-none text-black font-IranBold"
                    placeholder={t("TitleLabel")}
                    onChange={(e) => {
                      if (e.target.validity.valid) {
                        UploadFormik.setFieldValue("title", e.target.value);
                      } else {
                        UploadFormik.setFieldValue("title", "");
                      }
                    }}
                    value={UploadFormik.values.title}
                    id="title"
                  />
                  {UploadFormik.errors.title && UploadFormik.touched.title && (
                    <span className="text-red-600 text-sm p-0 mt-2">
                      {UploadFormik.errors.title}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 space-y-2 ">
                  <label className="text-sm font-bold tracking-wide dark:text-white text-LightYellow">
                    {t("AttachDocument")}
                  </label>
                  <div className="flex relative items-center justify-center w-full flex-col">
                    {UploadFormik.values.imageUrl &&
                      UploadFormik.values.fileType.split("/")[0] ===
                        "image" && (
                        <span
                          onClick={() => {
                            UploadFormik.setFieldValue("imageUrl", "");
                            UploadFormik.setFieldValue("formData", "");
                            UploadFormik.setFieldValue("fileType", "idle");
                          }}
                          className="absolute top-2 right-2 bg-red-600 p-2 rounded-full shadow-xl drop-shadow cursor-pointer"
                        >
                          <BsFillTrashFill className="drop-shadow shadow-black" />
                        </span>
                      )}

                    <label
                      className={`flex flex-col rounded-lg border-4 w-full border-dashed  ${
                        UploadFormik.values.fileType.split("/")[0] ===
                        "application"
                          ? "py-5"
                          : ""
                      } group text-center dark:border-DarkPurple border-LightYellow`}
                    >
                      {UploadFormik.values.imageUrl &&
                      UploadFormik.values.fileType.split("/")[0] === "image" ? (
                        <img
                          className="rounded-lg max-w-[500px] max-h-[500px]"
                          src={UploadFormik.values.imageUrl}
                          alt={UploadFormik.values.imageUrl}
                        />
                      ) : UploadFormik.values.fileType.split("/")[0] ===
                        "application" ? (
                        <div className="h-full w-full text-center flex flex-col items-center justify-center ">
                          <div className="flex flex-auto m-auto text-center">
                            <FcDocument className="text-[200px]" />
                          </div>
                          <p className="pointer-none text-gray-500 mt-5 ">
                            {t("DocUploadTitle")}
                          </p>
                        </div>
                      ) : (
                        <div className="p-5 cursor-pointer">
                          <div className="h-full w-full text-center flex flex-col items-center justify-center">
                            <div className="flex flex-auto m-auto text-center">
                              <FcUpload className="text-[200px]" />
                            </div>
                            <p className="pointer-none text-blue-500 mt-5 ">
                              {t("SubjectForUpload")}
                            </p>
                          </div>
                          <input
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                const fileType = e.target.files[0].type;
                                const url = URL.createObjectURL(
                                  e.target.files[0]
                                );
                                const FD = new FormData();
                                FD.append("file", e.target.files[0]);
                                UploadFormik.setFieldValue("formData", FD);
                                UploadFormik.setFieldValue("imageUrl", url);
                                UploadFormik.setFieldValue(
                                  "fileType",
                                  fileType
                                );
                                UploadFormik.validateForm();
                                UploadFormik.validateField("imageUrl");
                              }
                            }}
                            id="formData"
                            type="file"
                            className="hidden"
                          />
                        </div>
                      )}
                    </label>
                    {!UploadFormik.values.imageUrl && (
                      <span className="text-red-600 text-sm p-0 mt-2">
                        {UploadFormik.errors.imageUrl}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm font-IranLight flex items-center justify-between dark:text-white text-LightYellow">
                  <span>{t("FileType")}</span>
                  {UploadFormik.dirty && (
                    <span
                      onClick={() => {
                        UploadFormik.setFieldError("imageUrl", "");
                        UploadFormik.setFieldError("title", "");
                        UploadFormik.resetForm();
                      }}
                      className="flex items-center cursor-pointer"
                    >
                      <span className="mt-1 mx-1">{t("Cancel")}</span>
                      <BiReset className="text-white text-2xl" />
                    </span>
                  )}
                </p>
                <div>
                  <button
                    type="submit"
                    className="mt-2 w-full flex justify-center dark:bg-DarkPurple bg-LightYellow text-gray-100 p-2  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    {t("Upload")}
                  </button>

                  <input
                    type="button"
                    onClick={() => {
                      dispatch(changeModalState(false));
                      UploadFormik.resetForm();
                    }}
                    className="mt-2 w-full flex justify-center dark:bg-DarkPurple bg-LightYellow text-gray-100 p-2  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                    value={t("Cancel")}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
