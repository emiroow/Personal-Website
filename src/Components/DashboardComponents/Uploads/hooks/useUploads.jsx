import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

export const useUploads = () => {
  const [uploadModalState, setUploadModalState] = useState(true);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  const UploadFormik = useFormik({
    initialValues: { formData: "", title: "", imageUrl: "" },
    validationSchema: yup.object().shape({
      title: yup.string().required("err"),
      imageUrl: yup.string().required("err"),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return { UploadFormik, uploadModalState, setUploadModalState, parent };
};
