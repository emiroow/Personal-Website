import i18next from "i18next";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import { BiCopyAlt } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const UploadsTable = () => {
  const { t } = useTranslation();
  const uploadFiles = useSelector((state) => state.uploads.uploadFiles);
  const dirRtl = {
    direction: "rtl",
  };

  return (
    <div className="inline-block min-w-full rounded-b-xl mt-5">
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
                    <td className=" px-6 py-4 truncate">
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
                      <button className="mx-2">
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
