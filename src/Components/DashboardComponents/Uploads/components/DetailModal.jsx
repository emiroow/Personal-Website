import React from "react";
import { useTranslation } from "react-i18next";
import { BsTrashFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
const DetailModal = ({
  modalState,
  SetModalState,
  setRemoveModalState,
  removeModalState,
}) => {
  const { t } = useTranslation();

  const handleAccess = () => {
    SetModalState({ ...modalState, isOpen: false });
  };

  const handleClose = () => {
    SetModalState({ ...modalState, isOpen: false });
  };

  return (
    <>
      {modalState.isOpen ? (
        <div className="w-full bg-black/50 fixed top-0 left-0 justify-center flex items-center h-[100vh]">
          <div
            className="w-full h-full absolute top-0 left-0 z-10"
            onClick={() => SetModalState({ ...modalState, isOpen: false })}
          ></div>
          <div className="w-[95%] lg:w-[30%] md:w-[60%] space-y-8 border-y-2 flex flex-col text-center justify-center border-LightYellowDark dark:border-DarkPurple bg-BackColorWhiter text-white px-10 py-7 rounded-xl z-50">
            <div>{modalState.title}</div>
            <LazyLoadImage
              alt={modalState.title}
              src={modalState.Link}
              className="rounded-xl"
              loading="lazy"
              effect="opacity"
            />
            <div className="w-full flex justify-center">
              <button
                onClick={() => {
                  handleClose();
                }}
                className="mx-3 bg-white drop-shadow-lg shadow-black shadow-md p-3 rounded-full"
              >
                <IoClose className="text-xl text-DarkPurple cursor-pointer" />
              </button>
              <button
                onClick={() => {
                  handleClose();
                  setRemoveModalState({
                    Access: false,
                    id: modalState.id,
                    Active: true,
                    title: modalState.title,
                  });
                }}
                className=" bg-white drop-shadow-lg shadow-black shadow-md p-3 rounded-full"
              >
                <BsTrashFill className="text-xl text-red-600 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
      ;
    </>
  );
};

export default DetailModal;
