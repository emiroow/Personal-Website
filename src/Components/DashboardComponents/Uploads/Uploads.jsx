import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsPlusCircleDotted } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { fetchGetUploads } from "../../../Reducers/DashboardSlices/UploadsSlice";
import UploadModal from "./components/UploadModal";
import { useUploads } from "./hooks/useUploads";
const Uploads = () => {
  const { setUploadModalState, uploadModalState } = useUploads();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetUploads());
  }, []);
  return (
    <div>
      <button
        onClick={() => setUploadModalState(true)}
        className=" bg-DarkPurple font-IranBold rounded-lg text-md flex justify-between items-center px-5 p-3 "
      >
        <span>{t("UploadTitle")}</span>
        <BsPlusCircleDotted className="mr-2 text-xl" />
      </button>
      <UploadModal
        SetModalState={setUploadModalState}
        modalState={uploadModalState}
      />
    </div>
  );
};

export default Uploads;
