import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TbArrowBarToLeft, TbArrowBarToRight } from "react-icons/tb";
import i18n from "../../../i18n/index";
function Pagnation({ curentPage, setCurentPage, maxPage }) {
  const handleClickPage = (Page) => {
    setCurentPage(Page);
  };

  const NumberItem = () => {
    let items = [];
    if (maxPage <= 10) {
      for (let i = 1; i <= maxPage; i++) {
        items.push(
          <div
            onClick={() => handleClickPage(i)}
            id={i}
            className={`${i <= 9 ? "px-4" : "px-3"} ${
              i === curentPage
                ? "bg-red-600 text-white"
                : "bg-white text-purple-600"
            } px-3 py-2 pt-3  border-2 cursor-pointer border-purple-600 text-center flex justify-center items-center rounded-full mx-1`}
          >
            <span>{i}</span>
          </div>
        );
      }
    } else {
      for (let i = 4; i >= 1; i--) {
        if (curentPage - i >= 1) {
          items.push(
            <div
              onClick={() => handleClickPage(curentPage - i)}
              id={i}
              className={`${
                curentPage - i <= 9 ? "px-4" : "px-3"
              } py-2 pt-3 bg-white cursor-pointer text-purple-600 border-2 border-purple-600 text-center flex justify-center items-center rounded-full mx-1`}
            >
              <span>{curentPage - i}</span>
            </div>
          );
        }
      }
      items.push(
        <div
          id={curentPage}
          className={`${
            curentPage <= 9 ? "px-4" : "px-3"
          } px-3 py-2 pt-3 bg-red-600 text-white cursor-pointer border-2 border-purple-600 text-center flex justify-center items-center rounded-full mx-1`}
        >
          <span>{curentPage}</span>
        </div>
      );
      for (let i = 1; i <= 4; i++) {
        if (curentPage + i <= maxPage) {
          items.push(
            <div
              onClick={() => handleClickPage(curentPage + i)}
              id={i}
              className={`${
                curentPage + i <= 9 ? "px-4" : "px-3"
              } px-3 py-2 pt-3 bg-white cursor-pointer text-purple-600 border-2 border-purple-600 text-center flex justify-center items-center rounded-full mx-1`}
            >
              <span>{curentPage + i}</span>
            </div>
          );
        }
      }
    }

    return items;
  };

  return (
    <div className="w-full overflow-auto my-6">
      <div
        className={`m-auto flex flex-row flex-center justify-center ${
          i18n.language === "en" ? "flex-row-reverse" : "flex-row"
        } items-center`}
      >
        <div
          className={` ${
            i18n.language === "en" && "flex-row-reverse"
          } flex text-3xl items-center space-x-5`}
        >
          {curentPage !== maxPage ? (
            <TbArrowBarToRight
              onClick={() => handleClickPage(maxPage)}
              className="mx-5 text-4xl cursor-pointer"
            />
          ) : null}
          {curentPage !== maxPage ? (
            <MdArrowForwardIos
              onClick={() => handleClickPage(curentPage + 1)}
              className="mx-5 cursor-pointer"
            />
          ) : null}
        </div>
        <div
          className={`flex flex-center justify-center ${
            i18n.language === "fa" ? "flex-row-reverse" : "flex-row"
          } items-center`}
        >
          <NumberItem />
        </div>
        <div
          className={`${
            i18n.language === "en" && "flex-row-reverse"
          } flex text-3xl items-center space-x-5`}
        >
          {curentPage !== 1 ? (
            <MdArrowBackIos
              onClick={() => handleClickPage(curentPage - 1)}
              className="mx-5 cursor-pointer"
            />
          ) : null}
          {curentPage !== 1 ? (
            <TbArrowBarToLeft
              onClick={() => handleClickPage(1)}
              className="mx-5 text-4xl cursor-pointer"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Pagnation;
