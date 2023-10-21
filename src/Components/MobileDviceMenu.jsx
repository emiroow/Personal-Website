import React, { useState } from "react";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import i18n from "../i18n";
import MobileSideMenu from "./MobileMenuComponents/MobileSideMenu";
import MobileSidePortfolio from "./MobileMenuComponents/MobileSidePortfolio";
export default function MobileDviceMenu() {
  const [GetPortfolioShowing, SetPortfolioShowing] = useState(false);
  const [GetMenuShoing, SetMenuShoing] = useState(false);

  const HandlePortfolioShowing = () => {
    SetPortfolioShowing(true);
  };

  const HandleMenuShoing = () => {
    SetMenuShoing(true);
  };

  return (
    <div
      className={`lg:hidden fixed ${
        i18n.language === "en" ? "flex-row-reverse" : "flex-row"
      } e z-40 top-0 left-1 w-[98%] m-auto dark:bg-BackColor bg-LightMaincolor text-3xl flex justify-between py-5 px-3 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-b-md border-b-[3px] dark:border-DarkPurple border-LightYellow mb-[5px] items-center`}
    >
      {/* portfolio side */}
      <HiMenuAlt3 onClick={HandlePortfolioShowing} />

      {/* Menu side */}
      <HiMenuAlt2 onClick={HandleMenuShoing} />

      {/* for portfolio side */}
      <MobileSideMenu
        sidestatus={GetMenuShoing}
        sidesetstatue={SetMenuShoing}
      />

      {/* for portfolio side */}
      <MobileSidePortfolio
        sidestatus={GetPortfolioShowing}
        sidesetstatue={SetPortfolioShowing}
      />
    </div>
  );
}
