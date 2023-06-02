import React from 'react'
import "react-toggle/style.css"
import Toggle from 'react-toggle'
import { useDispatch } from 'react-redux'
import { fetchSetAdminSetting } from '../../../../Reducers/settingSlice'
import { toast } from 'react-toastify';
import { t } from 'i18next'

export default function SettingTableItem({ name, value, index }) {
    const dispatch = useDispatch()

    const handleChangeAcctivity = async (state) => {
        const response = await dispatch(fetchSetAdminSetting({
            key: name,
            val: state
        }))
        if (response.payload.status === 200) {
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
    }
    return (
        <tr className="border-b border-neutral-500 bg-neutral-700">
            <td className="whitespace-nowrap px-6 py-4 font-medium  max-sm:hidden">{index + 1}</td>
            <td className="whitespace-nowrap px-6 py-4">{t(name)}</td>
            <td className="whitespace-nowrap px-6 py-4"><span className={`${value ? "bg-green-600/50" : "bg-red-600/50"} px-3 rounded-md py-1`}>{value ? t("Active") : t("NotActive")}</span></td>
            <td className="whitespace-nowrap px-6  py-4 flex justify-center ">
                <button>
                    <Toggle
                        id='cheese-status'
                        defaultChecked={value}
                        onChange={(value) => {
                            handleChangeAcctivity(value.target.checked)
                        }} />
                </button>
            </td>
        </tr>
    )
}
