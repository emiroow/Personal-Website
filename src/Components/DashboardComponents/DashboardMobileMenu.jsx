import React from 'react'
import Toggle from '../SideMenuComponents/toggle'
import { NavLink } from "react-router-dom";
import Language from '../SideMenuComponents/language'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { MdOutlineLogout } from "react-icons/md"
import { FaIconDynamic } from '../../Helpers/ReturnIconCommponent';
import { useDispatch } from 'react-redux';
import { logOutUser } from "../../Reducers/authenticationSlice"
export default function DashboardMobileMenu({ sidestatus, sidesetstatue }) {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const LogOut = () => {
        dispatch(logOutUser())
    }

    const Menus = [
        { id: "Admin", LocalizLang: "DashboardMenu", Icon: "AiFillDashboard", Route: "/Admin" },
        { id: "About", LocalizLang: "AboutMenu", Icon: "HiOutlineHome", Route: "/Admin/About" },
        { id: "Analyze", LocalizLang: "AnalyzeMenu", Icon: "BsBarChartLineFill", Route: "/Admin/Analyze" },
        { id: "Certificate", LocalizLang: "CertificateMenu", Icon: "FaCertificate", Route: "/Admin/Certificate" },
        { id: "Comments", LocalizLang: "CommentsMenu", Icon: "MdComment", Route: "/Admin/Comments" },
        { id: "ContactUsMessages", LocalizLang: "ContactUsMessagesMenu", Icon: "MdContactMail", Route: "/Admin/ContactUsMessages" },
        { id: "Educations", LocalizLang: "EducationsMenu", Icon: "FaUniversity", Route: "/Admin/Educations" },
        { id: "Histories", LocalizLang: "HistoriesMenu", Icon: "RiFolderHistoryFill", Route: "/Admin/Histories" },
        { id: "Servicess", LocalizLang: "ServicesMenu", Icon: "MdHomeRepairService", Route: "/Admin/Services" },
        { id: "Skills", LocalizLang: "SkillsMenu", Icon: "GiSkills", Route: "/Admin/Skills" },
        { id: "Socials", LocalizLang: "SocialsMenu", Icon: "IoShareSocialSharp", Route: "/Admin/Socials" },
        { id: "Portfolios", LocalizLang: "PortfoliosMenu", Icon: "IoDocumentAttach", Route: "/Admin/Portfolios" },
    ]


    return (
        <>
            <div className={sidestatus ? "fixed dark:bg-BackColor bg-LightMaincolor border-r-2 dark:border-DarkPurple border-LightYellow shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] w-[23%] h-full z-50 top-0 duration-700 left-0" : "fixed  bg-BackColor shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] w-[23%] h-full z-50 top-0 -left-[100%]"}>

                <div className='w-full flex-col h-[100vh] justify-center relative flex  items-center '>

                    <div className='space-y-10 lg:space-y-10 2xl:space-y-16 lg:mb-6 lg:mt-6 mb-5 mt-5 2xl:mb-10 2xl:mt-10 '>
                        <div>
                            <Language />
                        </div>
                        <div>
                            <Toggle />
                        </div>
                    </div>

                    <div className=' space-y-8 lg:space-y-8 overflow-auto border-t-2 pt-8 pb-24 w-full dark:border-DarkPurple border-LightYellow  2xl:space-y-14 text-[27px] lg:text-[20px] xl:text-[28px] 2xl:text-[32px]'>
                        {
                            Menus.map((item, index) => {
                                return (
                                    <NavLink onClick={e => sidesetstatue(false)} key={index} id={item.id} data-event='click focus' style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#b80c00" : "",
                                            transition: 'all 1s',
                                        }
                                    }} to={item.Route} className='rounded-full w-max m-auto cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
                                        <FaIconDynamic type={item.Icon} />
                                        <ReactTooltip className='flex justify-center items-center text-center font-IranBold custom-color-no-arrow' place={i18n.language === "fa" ? "right" : "left"} type="warning" arrowColor='red' backgroundColor='#E69A8DFF' effect="solid" anchorId={item.id}>
                                            <span className='text-lg dark:text-DarkPurple text-LightMaincolor'>
                                                {t(item.LocalizLang)}
                                            </span>
                                        </ReactTooltip>
                                    </NavLink>
                                )
                            })
                        }
                        <NavLink id="LogOut" data-event='click focus' style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? "#b80c00" : "",
                                transition: 'all 1s',
                            }
                        }} onClick={() => LogOut()} to="/" className='rounded-full w-max m-auto cursor-pointer dark:bg-DarkPurple bg-LightYellow p-2 flex items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.50)]'>
                            <MdOutlineLogout className='text-white ' />
                            <ReactTooltip className='flex justify-center items-center text-center font-IranBold custom-color-no-arrow' place={i18n.language === "fa" ? "right" : "left"} type="warning" arrowColor='red' backgroundColor='#E69A8DFF' effect="solid" anchorId="LogOut">
                                <span className='text-lg dark:text-DarkPurple text-LightMaincolor'>
                                    LogOut
                                </span>
                            </ReactTooltip>
                        </NavLink>
                    </div>

                </div>

            </div>
            <div onClick={e => sidesetstatue(false)} className={sidestatus ? "w-full  z-10 bg-black/40 h-[100vh] fixed top-0 duration-700 right-0" : "w-full z-10 bg-black/40 h-[100vh] fixed top-0 duration-100 -right-[100%]"}>
            </div>
        </>
    )
}
