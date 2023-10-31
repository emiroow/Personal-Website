import { useTranslation } from "react-i18next";
import { BiReset } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { FcImageFile } from "react-icons/fc";
import { useUploads } from "../hooks/useUploads";
export default function UploadModal({ modalState, SetModalState }) {
  const { t } = useTranslation();
  const { UploadFormik, parent } = useUploads();

  return (
    <>
      {modalState ? (
        <div className="w-full bg-black/50 fixed top-0 left-0 justify-center flex items-center h-[100vh] ">
          <div
            className="w-full h-full absolute top-0 left-0 z-10"
            onClick={() => SetModalState(false)}
          ></div>
          <div className="w-[95%] lg:w-[30%] dark:bg-BackColorWhiter bg-LightBackcolor  text-white p-10 rounded-xl z-50 border-y-2 dark:border-DarkPurple border-LightYellow">
            <div className="w-full ">
              <div className="text-center">
                <h2 className="font-IranBold mt-5 text-3xl font-bold dark:text-white text-LightYellow">
                  {t("UploadTitle")}
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Lorem ipsum is placeholder text.
                </p>
              </div>
              <form
                ref={parent}
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
                    {UploadFormik.values.imageUrl && (
                      <span
                        onClick={() => {
                          UploadFormik.setFieldValue("imageUrl", "");
                          UploadFormik.setFieldValue("formData", "");
                        }}
                        className="absolute top-2 right-2 bg-red-600 p-2 rounded-full shadow-xl drop-shadow cursor-pointer"
                      >
                        <BsFillTrashFill className="drop-shadow shadow-black" />
                      </span>
                    )}

                    <label className="flex flex-col rounded-lg border-4 border-dashed w-full group text-center dark:border-DarkPurple border-LightYellow">
                      {UploadFormik.values.imageUrl ? (
                        <img
                          className="rounded-lg"
                          src={UploadFormik.values.imageUrl}
                          alt={UploadFormik.values.imageUrl}
                        />
                      ) : (
                        <div className="p-5">
                          <div className="h-full w-full text-center flex flex-col items-center justify-center">
                            <div className="flex flex-auto m-auto text-center">
                              <FcImageFile className="text-[200px]" />
                            </div>
                            <p className="pointer-none text-gray-500 mt-5 ">
                              <span className="text-sm">Drag and drop</span>{" "}
                              files here <br /> or{" "}
                              <span className="text-blue-600 hover:underline cursor-pointer">
                                select a file
                              </span>{" "}
                              from your computer
                            </p>
                          </div>
                          <input
                            onChange={(e) => {
                              if (e.target.files.length) {
                                const url = URL.createObjectURL(
                                  e.target.files[e.target.files.length - 1]
                                );
                                const FD = new FormData();
                                FD.append("fromFile", url);
                                UploadFormik.setFieldValue("formData", FD);
                                UploadFormik.setFieldValue("imageUrl", url);
                              }
                            }}
                            id="formData"
                            type="file"
                            className="hidden"
                          />
                        </div>
                      )}
                    </label>
                    {UploadFormik.errors.imageUrl &&
                      UploadFormik.touched.imageUrl && (
                        <span className="text-red-600 text-sm p-0 mt-2">
                          {UploadFormik.errors.imageUrl}
                        </span>
                      )}
                  </div>
                </div>
                <p className="text-sm font-IranLight flex items-center justify-between dark:text-white text-LightYellow">
                  <span>{t("FileType")}</span>
                  {UploadFormik.dirty && (
                    <span>
                      <BiReset
                        onClick={() => {
                          UploadFormik.setFieldError("imageUrl", "");
                          UploadFormik.setFieldError("title", "");
                          UploadFormik.resetForm();
                        }}
                        className="text-white text-2xl cursor-pointer"
                      />
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
                      SetModalState(false);
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
