import i18next from "i18next";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import { BiCopyAlt } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchRemoveImage } from "../../../../Reducers/DashboardSlices/UploadsSlice";
import Modal from "../../../DashboardComponents/Modal";
import { useUploads } from "../hooks/useUploads";
const UploadsTable = () => {
  const { t } = useTranslation();
  const uploadFiles = useSelector((state) => state.uploads.uploadFiles);
  const dispatch = useDispatch();
  const dirRtl = {
    direction: "rtl",
  };

  const { removeModalState, setRemoveModalState } = useUploads();

  return (
    <div className="inline-block min-w-full rounded-b-xl mt-5">
      <Modal
        SetModalState={setRemoveModalState}
        modalState={removeModalState}
        target={removeModalState.title}
        func={async () => {
          const { payload: res } = await dispatch(
            fetchRemoveImage(removeModalState.id)
          );
          if (res.status === 200) toast.success(t("SuccessTopdelete"));
        }}
      />
      <div className="overflow-auto  rounded-b-xl">
        <table className="min-w-full text-right text-sm font-light  rounded-b-xl bg-neutral-700">
          <thead className="border-b  font-medium border-neutral-500 bg-black ">
            <tr>
              <th scope="col" className="px-6 py-4 ">
                #
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                {t("Subject")}
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                {t("link")}
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                {t("Action")}
              </th>
            </tr>
          </thead>
          <tbody>
            {uploadFiles.length ? (
              uploadFiles.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b border-neutral-500 bg-neutral-700"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-IranBold text-center">
                      {item.title}
                    </td>
                    <td className=" px-6 py-4 text-center m-auto truncate">
                      <a
                        href={item.link}
                        style={i18next.language === "fa" ? dirRtl : dirRtl}
                        className=" whitespace-pre-wrap text-center text-blue-600"
                      >
                        {item.link.length > 70
                          ? " ... " + item.link.slice(0, 70)
                          : item.link}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 flex text-center justify-center">
                      <CopyToClipboard
                        onCopy={() => toast.success(t("copied"))}
                        text={item.link}
                      >
                        <button>
                          <BiCopyAlt className="text-xl text-blue-600 cursor-pointer" />
                        </button>
                      </CopyToClipboard>
                      <button
                        onClick={() =>
                          setRemoveModalState({
                            Access: false,
                            id: item.id,
                            Active: true,
                            title: item.title,
                          })
                        }
                        className="mx-2"
                      >
                        <BsTrashFill className="text-xl text-red-600 cursor-pointer" />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="border-b border-neutral-500 bg-neutral-700 m-auto">
                <td colSpan={4} className="text-center p-5">
                  {t("noData")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadsTable;
