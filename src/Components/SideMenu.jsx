import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import {
  MdHomeRepairService,
  MdOutlineCategory,
  MdTextsms,
} from "react-icons/md";
import Language from "./SideMenuComponents/language";
import Toggle from "./SideMenuComponents/toggle";
export default function SideMenu() {
  const gotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-[5%] relative h-[96vh] lg:block hidden ">
      <div className="w-[5%] h-[97vh] fixed items-center justify-center flex dark:bg-BackColor bg-LightMaincolor shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-md border-b-2 border-LightYellow dark:border-DarkPurple">
        <div className="w-full flex-col h-[97vh] justify-center relative flex  items-center ">
          <div className="lg:space-y-14 2xl:space-y-24 mb-24 ">
            <div>
              <Language />
            </div>
            <div>
              <Toggle />
            </div>
          </div>

          <div className="lg:space-y-16  2xl:space-y-24 text-[27px] lg:text-[20px] xl:text-[28px] 2xl:text-[32px]">
            <a
              onClick={gotop}
              className="rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]"
            >
              <HiOutlineHome className="text-white " />
            </a>
            <a
              href="#Portfolio"
              className="rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]"
            >
              <MdOutlineCategory className="text-white " />
            </a>
            <a
              href="#date"
              className="rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]"
            >
              <MdHomeRepairService className="text-white " />
            </a>
            <a
              href="#contact"
              className="rounded-full cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]"
            >
              <MdTextsms className="text-white " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// I Not Trying To Be Programmer
// I Just Trying To Be Fucking Weapon :)
