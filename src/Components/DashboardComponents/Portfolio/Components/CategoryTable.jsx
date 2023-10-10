import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { DashboardContext } from "../../../../ContextApi/DashboardContext";
import {
  fetchDeleteAdminCatagory,
  fetchgetAdminPortfoliosCatagories,
} from "../../../../Reducers/DashboardSlices/PortfolioSlice";

export default function CategoryTable() {
  const dispatch = useDispatch();
  const { TabState } = useContext(DashboardContext);
  const { t } = useTranslation();
  const Categories = useSelector((state) =>
    state.portfolio.portfoliosCatagories.filter(
      (item) => item.lang === TabState
    )
  );

  useEffect(() => {
    dispatch(fetchgetAdminPortfoliosCatagories());
  }, []);

  const handleDelete = async (id) => {
    const response = await dispatch(fetchDeleteAdminCatagory(id));
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
      toast.warning(t("usedCategory"), {
        position: "top-center",
        autoClose: 4000,
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
    <div className="inline-block min-w-full rounded-b-xl mt-5">
      <div className="overflow-auto  rounded-b-xl">
        <table className="min-w-full text-right text-sm font-light  rounded-b-xl bg-neutral-700">
          <thead className="border-b  font-medium border-neutral-500 bg-black ">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                {t("Subject")}
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                {t("Action")}
              </th>
            </tr>
          </thead>
          <tbody>
            {Categories.length ? (
              Categories.map((item, index) => {
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
                    <td className="whitespace-nowrap px-6 py-4 flex text-center justify-center ">
                      <button onClick={() => handleDelete(item.catagoryId)}>
                        <BsTrashFill className="text-xl text-red-500 cursor-pointer" />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="border-b border-neutral-500 bg-neutral-700 m-auto">
                <td colSpan={3} className="text-center p-5">
                  {t("noData")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
