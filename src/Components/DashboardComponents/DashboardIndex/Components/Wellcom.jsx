import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Wellcom() {
    const quickAccessMenu = [
        { id: "ContactUsMessages", LocalizLang: "ContactUsMessagesMenu", Icon: "MdContactMail", Route: "/Admin/ContactUsMessages" },
        { id: "Portfolios", LocalizLang: "PortfoliosMenu", Icon: "IoDocumentAttach", Route: "/Admin/Portfolios" },
        { id: "Certificate", LocalizLang: "CertificateMenu", Icon: "FaCertificate", Route: "/Admin/Certificate" },
        { id: "Analyze", LocalizLang: "AnalyzeMenu", Icon: "BsBarChartLineFill", Route: "/Admin/Analyze" },
        { id: "Socials", LocalizLang: "SocialsMenu", Icon: "IoShareSocialSharp", Route: "/Admin/Socials" },

    ]
    return (
        <div className='w-full bg-LightYellow/50 dark:bg-DarkPurple/30 items-center border-x-2 mb-8 rounded-md max-lg:flex-col max-lg:space-y-3 flex justify-between text-lg p-5'>
            <div className='md:text-lg text-sm'>
                {t("WellcomBox")}
            </div>

            <div className='break-normal md:text-xl items-center flex max-lg:hidden text-sm'>
                <span className='font-semibold text-lg '>{t("quickAccess")} :</span>
                {
                    quickAccessMenu.map((item) => {
                        return (
                            <Link className='text-sm hover:text-blue-600 mx-3 md:underline underline-offset-8 transition-all' to={item.Route}>
                                <span className='mt-5'> {t(item.LocalizLang)} </span>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
