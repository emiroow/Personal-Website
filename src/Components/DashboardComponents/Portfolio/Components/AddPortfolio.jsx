import { t } from "i18next";
import React, { useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { DashboardContext } from "../../../../ContextApi/DashboardContext";
import { fetchSetAdminPortfolio } from "../../../../Reducers/DashboardSlices/PortfolioSlice";

export default function AddPortfolio({ setNewServerState }) {
  const title = useRef();
  const description = useRef();
  const imageUrl = useRef();
  const link = useRef();
  const dispatch = useDispatch();
  const [editeState, setEditeState] = useState([]);
  const { TabState } = useContext(DashboardContext);
  const Categories = useSelector((state) =>
    state.portfolio.portfoliosCatagories.filter(
      (item) => item.lang === TabState
    )
  );

  const handleChangeCategory = (id) => {
    if (editeState?.includes(id)) {
      let arr = [...editeState];
      let index = arr.indexOf(id);
      if (index !== -1) {
        arr.splice(index, 1);
        setEditeState(arr);
      }
    } else {
      setEditeState((oldArray) => [...oldArray, id]);
    }
  };

  const handleAddPortfolio = async () => {
    if (
      link.current.value &&
      imageUrl.current.value &&
      description.current.value &&
      title.current.value &&
      editeState.length !== 0
    ) {
      const response = await dispatch(
        fetchSetAdminPortfolio({
          portfolioId: 0,
          title: title?.current?.value,
          description: description?.current?.value,
          imageUrl: imageUrl?.current?.value,
          link: link?.current?.value,
          lang: TabState,
          isActive: true,
          categoriesId: editeState,
        })
      );
      if (response.payload.status === 200) {
        toast.success(t("SuccessToAdd"), {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setNewServerState(false);
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
        setNewServerState(false);
      }
    } else {
      toast.warning(t("PleaseFill"), {
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
    <div className="w-[95%] mt-5 lg:w-[40%] bg-BackColorWhiter text-white p-7 border-2 dark:border-DarkPurple rounded-xl">
      <div className="flex justify-between  max-lg:flex-col">
        <div className="flex flex-col lg:w-[49%] mb-4">
          <label>{t("TitleLabel")} :</label>
          <input
            ref={title}
            type="text"
            className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
          />
        </div>
        <div className="flex flex-col lg:w-[49%] mb-4">
          <label>{t("link")} :</label>
          <input
            ref={link}
            className=" text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
      <div className="flex justify-between max-lg:flex-col">
        <div className="flex flex-col lg:w-[49%] mb-4">
          <label>{t("ImageUrl")} :</label>
          <input
            ref={imageUrl}
            type="text"
            className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
          />
        </div>
      </div>
      <span>{t("descriptionLable")} :</span>
      <textarea
        ref={description}
        className="w-full rounded-xl mt-2 p-3 text-black"
        rows="5"
      ></textarea>
      <div className="w-full mt-5">
        <div className="overflow-auto  rounded-xl">
          <table className="min-w-full text-right text-sm font-light  rounded-xl">
            <thead className="border-b  font-medium border-neutral-500 bg-black ">
              <tr>
                <th scope="col" className="px-6 py-4">
                  #
                </th>
                <th scope="col" className="px-6 py-4">
                  {t("TitleLabel")}
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
                      key={item.portfolioId}
                      className="border-b border-neutral-500 bg-neutral-700"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 flex text-center justify-center ">
                        <input
                          type="checkbox"
                          onChange={() => handleChangeCategory(item.catagoryId)}
                          className="text-2xl cursor-pointer accent-pink-500"
                        />
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
      <div className="w-full mt-3 flex">
        <div className="w-full mt-1 flex p-1">
          <button
            onClick={handleAddPortfolio}
            className="text-sm ml-5 bg-green-500 font-IranLight rounded-lg p-2"
          >
            {t("SaveBtn")}
          </button>
          <button
            onClick={() => setNewServerState(false)}
            className="text-sm bg-orange-400 font-IranLight rounded-lg p-2"
          >
            {t("CancelLocation")}
          </button>
        </div>
      </div>
    </div>
  );
}
