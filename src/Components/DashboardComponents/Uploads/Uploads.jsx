import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsPlusCircleDotted } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  changeModalState,
  fetchGetUploads,
} from "../../../Reducers/DashboardSlices/UploadsSlice";
import Preloader from "../../Preloader";
import UploadModal from "./components/UploadModal";
import UploadsTable from "./components/UploadsTable";
import { useUploads } from "./hooks/useUploads";

const Uploads = () => {
  const {
    setUploadModalState,
    uploadModalState,
    UploadFormik,
    removeModalState,
    setRemoveModalState,
  } = useUploads();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.uploads.loader);

  useEffect(() => {
    dispatch(fetchGetUploads());
  }, []);

  return (
    <div>
      {loader ? <Preloader /> : null}

      <button
        onClick={() => dispatch(changeModalState(true))}
        className=" bg-DarkPurple font-IranBold rounded-lg text-md flex justify-between items-center px-5 p-3 "
      >
        <span>{t("UploadTitle")}</span>
        <BsPlusCircleDotted className="mr-2 text-xl" />
      </button>
      <UploadsTable />
      <UploadModal />
    </div>
  );
};

export default Uploads;
