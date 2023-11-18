import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import {
  changeModalState,
  fetchGetUploads,
  fetchUploadImage,
} from "../../../../Reducers/DashboardSlices/UploadsSlice";

export const useUploads = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [removeModalState, setRemoveModalState] = useState({
    Access: false,
    Active: false,
    id: undefined,
    title: "",
  });

  const UploadFormik = useFormik({
    initialValues: { formData: "", title: "", imageUrl: "", fileType: "idle" },
    validationSchema: yup.object().shape({
      title: yup.string().required(t("Requirement")),
      imageUrl: yup.string().required(t("Requirement")),
    }),
    onSubmit: async (value) => {
      const res = await dispatch(fetchUploadImage(value));
      if (res.payload.status === 200) {
        dispatch(fetchGetUploads());
        dispatch(changeModalState(false));
        toast.success(t("successUpload"));
        UploadFormik.resetForm();
      } else {
        toast.error(t("errorUpload"));
        UploadFormik.resetForm();
      }
    },
  });

  return { UploadFormik, removeModalState, setRemoveModalState };
};
