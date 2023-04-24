import React, { useContext, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGetAdminSocials, fetchSetAdminSocials } from '../../../../Reducers/DashboardSlices/SocialsSlice'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify';
import { DashboardContext } from '../../../../ContextApi/DashboardContext';
export default function Social() {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const lang = useRef()
    const socialsApp = useRef()
    const link = useRef()
    const { TabState } = useContext(DashboardContext)

    useEffect(() => {
        dispatch(fetchGetAdminSocials())
    }, [])

    const handleAddSocials = async () => {
        let langVal = lang.current.value
        let linkVal = link.current.value
        let socialAppVal = socialsApp.current.value
        if (langVal && linkVal && socialAppVal) {
            const response = await dispatch(fetchSetAdminSocials({
                id: 0,
                title: "string",
                iconName: socialAppVal,
                link: linkVal,
                lang: parseInt(langVal),
                isActive: true
            }))
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
    }

    return (
        <div className='w-full flex justify-center flex-col'>
            <div className='flex w-[50%] flex-row m-auto'>
                <div className='w-[77%] m-auto'>
                    <label htmlFor="">{t("socialTitle")} :</label>
                    <select ref={socialsApp} defaultValue={"Linkedin"} className='w-full my-3 p-2 rounded-lg dark:border-DarkPurple border-2 text-black text-center font-IranBold' placeholder='test' name="" id="">
                        <option value="Instagram">Instagram</option>
                        <option value="Linkedin">Linkedin</option>
                        <option value="Telegram">Telegram</option>
                        <option value="Github">Github</option>
                        <option value="WhatsApp">WhatsApp</option>
                    </select>
                </div>
                <div className='w-[20%] m-auto'>
                    <label htmlFor="">{t("lang")} :</label>
                    <select ref={lang} defaultValue={TabState} className='w-full my-3 p-2 rounded-lg dark:border-DarkPurple border-2 text-black text-center font-IranBold' placeholder='test' name="" id="">
                        <option value="0">EN</option>
                        <option value="1">FA</option>
                    </select>
                </div>
            </div>
            <div className='w-[35%] m-auto mt-3'>
                <label htmlFor="">{t("socialLink")} :</label>
                <input ref={link} placeholder={t("socialLink")} className='w-full p-2 mt-3 rounded-lg dark:border-DarkPurple border-2 text-black text-center font-IranBold' type="text" />
            </div>
            <button onClick={() => handleAddSocials()} className='px-5 py-3 mt-3 dark:bg-DarkPurple bg-LightYellow m-auto w-max rounded-xl'>{t("Add")}</button>
        </div>
    )
}
