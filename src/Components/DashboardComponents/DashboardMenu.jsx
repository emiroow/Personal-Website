import React from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FaIconDynamic } from "../../Helpers/ReturnIconCommponent";
import { logOutUser } from "../../Reducers/authenticationSlice";
import i18n from "../../i18n";
import Language from "../SideMenuComponents/language";
import Toggle from "../SideMenuComponents/toggle";
export default function DashboardMenu() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch(logOutUser());
  };

  const Menus = [
    {
      id: "Admin",
      LocalizLang: "DashboardMenu",
      Icon: "AiFillDashboard",
      Route: "/Admin",
    },
    {
      id: "About",
      LocalizLang: "AboutMenu",
      Icon: "HiOutlineHome",
      Route: "/Admin/About",
    },
    {
      id: "Analyze",
      LocalizLang: "AnalyzeMenu",
      Icon: "BsBarChartLineFill",
      Route: "/Admin/Analyze",
    },
    {
      id: "Certificate",
      LocalizLang: "CertificateMenu",
      Icon: "FaCertificate",
      Route: "/Admin/Certificate",
    },
    {
      id: "Comments",
      LocalizLang: "CommentsMenu",
      Icon: "MdComment",
      Route: "/Admin/Comments",
    },
    {
      id: "ContactUsMessages",
      LocalizLang: "ContactUsMessagesMenu",
      Icon: "MdContactMail",
      Route: "/Admin/ContactUsMessages",
    },
    {
      id: "Educations",
      LocalizLang: "EducationsMenu",
      Icon: "FaUniversity",
      Route: "/Admin/Educations",
    },
    {
      id: "Histories",
      LocalizLang: "HistoriesMenu",
      Icon: "RiFolderHistoryFill",
      Route: "/Admin/Histories",
    },
    {
      id: "Servicess",
      LocalizLang: "ServicesMenu",
      Icon: "MdHomeRepairService",
      Route: "/Admin/Services",
    },
    {
      id: "Skills",
      LocalizLang: "SkillsMenu",
      Icon: "GiSkills",
      Route: "/Admin/Skills",
    },
    {
      id: "Socials",
      LocalizLang: "SocialsMenu",
      Icon: "IoShareSocialSharp",
      Route: "/Admin/Socials",
    },
    {
      id: "Portfolios",
      LocalizLang: "PortfoliosMenu",
      Icon: "IoDocumentAttach",
      Route: "/Admin/Portfolios",
    },
    {
      id: "Uploads",
      LocalizLang: "UploadsMenu",
      Icon: "BsUpload",
      Route: "/Admin/Uploads",
    },
  ];

  return (
    <div>
      <div className="w-[5%] relative h-[96vh] lg:block hidden ">
        <div className="w-[5%] h-[97vh] fixed items-center justify-center flex dark:bg-BackColor bg-LightMaincolor shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-md border-y-2 border-LightYellow dark:border-DarkPurple">
          <div className="w-full flex-col h-[97vh] justify-center relative flex  items-center ">
            <div className="lg:space-y-10 2xl:space-y-16 lg:mb-6 lg:mt-6 2xl:mb-10 2xl:mt-10 ">
              <div>
                <Language />
              </div>
              <div>
                <Toggle />
              </div>
            </div>

            <div className="lg:space-y-8 RemoveScroll overflow-auto border-t-2 pt-8 pb-8 w-full dark:border-DarkPurple border-LightYellow 2xl:space-y-14 text-[27px] lg:text-[20px] xl:text-[28px] 2xl:text-[32px]">
              {Menus.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    id={item.id}
                    data-event="click focus"
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive ? "#b80c00" : "",
                        transition: "all 1s",
                      };
                    }}
                    to={item.Route}
                    className="rounded-full w-max m-auto cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]"
                  >
                    <FaIconDynamic type={item.Icon} />
                    <ReactTooltip
                      className="flex justify-center items-center text-center font-IranBold custom-color-no-arrow"
                      place={i18n.language === "fa" ? "right" : "left"}
                      type="warning"
                      arrowColor="red"
                      backgroundColor="#E69A8DFF"
                      effect="solid"
                      anchorId={item.id}
                    >
                      <span className="text-lg dark:text-DarkPurple text-LightMaincolor">
                        {t(item.LocalizLang)}
                      </span>
                    </ReactTooltip>
                  </NavLink>
                );
              })}
              <NavLink
                id="LogOut"
                data-event="click focus"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#b80c00" : "",
                    transition: "all 1s",
                  };
                }}
                onClick={() => LogOut()}
                to="/"
                className="rounded-full w-max m-auto cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]"
              >
                <MdOutlineLogout className="text-white " />
                <ReactTooltip
                  className="flex justify-center items-center text-center font-IranBold custom-color-no-arrow"
                  place={i18n.language === "fa" ? "right" : "left"}
                  type="warning"
                  arrowColor="red"
                  backgroundColor="#E69A8DFF"
                  effect="solid"
                  anchorId="LogOut"
                >
                  <span className="text-lg dark:text-DarkPurple text-LightMaincolor">
                    {t("logout")}
                  </span>
                </ReactTooltip>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
