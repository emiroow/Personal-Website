import { t } from "i18next";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { DashboardContext } from "../../../../ContextApi/DashboardContext";
import {
  fetchDeleteAdminPortfolio,
  fetchEditAdminPortfolio,
} from "../../../../Reducers/DashboardSlices/PortfolioSlice";
import Modal from "../../Modal";

export default function PortfolioShow({ data }) {
  const [editeing, setEditing] = useState(false);
  const { TabState } = useContext(DashboardContext);
  const Categories = useSelector((state) =>
    state.portfolio.portfoliosCatagories.filter(
      (item) => item.lang === TabState
    )
  );
  const dispatch = useDispatch();
  const title = useRef();
  const description = useRef();
  const imageUrl = useRef();
  const link = useRef();
  const [modalState, SetModalState] = useState({
    Active: false,
    Access: false,
    id: null,
  });
  const [editeState, setEditeState] = useState(data?.categoriesId);

  const HandleEditing = () => {
    if (!editeing) {
      return (
        <button
          onClick={() => setEditing(true)}
          className="text-sm bg-orange-500 font-IranLight rounded-lg p-2"
        >
          {t("EditBtn")}
        </button>
      );
    } else {
      return (
        <>
          <button
            onClick={HandleSaveEditing}
            className="text-sm mx-3 bg-green-500 font-IranLight rounded-lg p-2"
          >
            {t("SaveBtn")}
          </button>
          <button
            onClick={() => {
              setEditing(false);
            }}
            className="text-sm mx-3 bg-amber-500 font-IranLight rounded-lg p-2"
          >
            {t("CancelLocation")}
          </button>
        </>
      );
    }
  };

  const handleDeletDate = (id) => {
    SetModalState({ ...modalState, Active: true, Access: false, id: id });
  };

  useEffect(() => {
    if (modalState.Access && modalState.id) {
      const deletDatefromServer = async () => {
        try {
          const response = await dispatch(
            fetchDeleteAdminPortfolio(modalState?.id)
          );
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
          SetModalState({
            ...modalState,
            Active: false,
            Access: false,
            id: null,
          });
        } catch (error) {
          console.log(error);
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
      deletDatefromServer();
    }
  }, [modalState.Access]);

  const HandleSaveEditing = async () => {
    if (
      title.current.value &&
      imageUrl.current.value &&
      link.current.value &&
      editeState.length !== 0
    ) {
      const response = await dispatch(
        fetchEditAdminPortfolio({
          portfolioId: data.portfolioId,
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
        setEditing(false);
        toast.success(t("SuccessEdited"), {
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

  const HandleSelectedCategory = (id) => {
    return data?.categoriesId?.includes(id);
  };

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

  return (
    <div className="w-[95%] mt-5 lg:w-[40%] bg-BackColorWhiter text-white p-7 border-2 dark:border-DarkPurple rounded-xl">
      <Modal
        SetModalState={SetModalState}
        modalState={modalState}
        target={data?.title}
      />
      <div>
        <div className="flex justify-between  max-lg:flex-col">
          <div className="flex flex-col lg:w-[49%] mb-4">
            <label>{t("TitleLabel")} :</label>
            <input
              ref={title}
              disabled={editeing ? false : true}
              defaultValue={data?.title}
              type="text"
              className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
            />
          </div>
          <div className="flex flex-col lg:w-[49%] mb-4">
            <label>{t("link")} :</label>
            <input
              ref={link}
              disabled={editeing ? false : true}
              defaultValue={data?.link}
              className=" text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
        <div className="flex justify-between max-lg:flex-col">
          <div className="flex flex-col lg:w-[49%] mb-4">
            <label>{t("ImageUrl")} :</label>
            <input
              ref={imageUrl}
              disabled={editeing ? false : true}
              defaultValue={data?.imageUrl}
              type="text"
              className={` text-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)] text-black h-10 mt-1 rounded-md mb-2 outline-none  dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]`}
            />
          </div>
        </div>
        <span>{t("descriptionLable")} :</span>
        <textarea
          ref={description}
          disabled={editeing ? false : true}
          defaultValue={data?.description}
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
                  <th scope="col" className="px-6 py-4 text-center"></th>
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
                            onChange={() =>
                              handleChangeCategory(item.catagoryId)
                            }
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
      </div>
      <div className="flex flex-row mt-5">
        {HandleEditing()}
        <button
          onClick={() => handleDeletDate(data?.portfolioId)}
          className="text-sm mx-3 w-max bg-red-500 font-IranLight rounded-lg p-2"
        >
          {t("RemoveBtn")}
        </button>
      </div>
    </div>
  );
}
