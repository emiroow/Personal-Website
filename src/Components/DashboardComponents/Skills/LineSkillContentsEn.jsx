import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchDeleteAdminSkill } from "../../../Reducers/DashboardSlices/SkillsSlice";
import Preloader from "../../Preloader";
import Modal from "../Modal";

export default function LineSkillContentsEn() {
  const loader = useSelector((state) =>
    state.socials.status === "pending" ? true : false
  );
  const CircleSkills = useSelector((state) =>
    state.skills.LineSkills.filter((item) => item.lang === 0)
  );
  const [modalState, SetModalState] = useState({
    Active: false,
    Access: false,
    id: null,
  });
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleDelete = async (id) => {
    const response = await dispatch(fetchDeleteAdminSkill(id));
    if (response.payload.status === 200) {
      toast.success(t("SuccessTopdelete"), {
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
  };
  return (
    <>
      <Modal
        SetModalState={SetModalState}
        modalState={modalState}
        func={() => handleDelete(modalState.id)}
      />
      {loader ? <Preloader /> : null}
      <div className="flex flex-col">
        <div className=" w-full dark:bg-DarkPurple bg-LightYellow flex flex-wrap justify-center lg:justify-start  items-center rounded-b-xl">
          <div className="inline-block min-w-full rounded-b-xl">
            <div className="overflow-auto  rounded-b-xl">
              <table className="min-w-full text-left text-sm font-light  rounded-b-xl">
                <thead className="border-b  font-medium border-neutral-500 bg-black ">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      {t("TitleLabel")}
                    </th>
                    <th scope="col" className="px-6 py-4">
                      {t("ProgresValue")}
                    </th>
                    <th scope="col" className="px-6 py-4">
                      {t("Action")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CircleSkills.length ? (
                    CircleSkills.map((item, index) => {
                      return (
                        <tr
                          key={item.id}
                          className="border-b border-neutral-500 bg-neutral-700"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.title}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            % {item.value}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 flex justify-end ">
                            <button
                              onClick={() =>
                                SetModalState({
                                  ...modalState,
                                  Active: true,
                                  Access: false,
                                  id: item.id,
                                })
                              }
                            >
                              <BsTrashFill className="text-xl text-red-500 cursor-pointer" />
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
        </div>
      </div>
    </>
  );
}
