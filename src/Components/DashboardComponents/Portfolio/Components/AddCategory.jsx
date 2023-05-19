import React, { useRef } from 'react'
import { t } from 'i18next'
import { useDispatch } from 'react-redux'
import { fetchSetAdminPortfoliosCatagories } from '../../../../Reducers/DashboardSlices/PortfolioSlice'
import { toast } from 'react-toastify';

export default function AddCategory() {
    const Title = useRef()
    const dispatch = useDispatch()
    const handleAddCatefory = async () => {
        const titleVal = Title.current.value
        if (titleVal) {
            const response = await dispatch(fetchSetAdminPortfoliosCatagories({
                id: "0",
                title: titleVal,
                lang: 0
            }))
            console.log(response.payload)
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
        <>
            <p className='text-xl my-5'>{t("Category")} :</p>
            <div className='w-full flex justify-center items-center'>
                <div className='flex w-full lg:w-[40%] justify-between flex-wrap flex-row m-auto items-center'>
                    <div className=' lg:w-[80%] m-auto'>
                        <label htmlFor="">{t("TitleLabel")} :</label>
                        <input type="text" ref={Title} placeholder={t("TitleLabel")} className='w-full my-3 p-2 rounded-lg dark:border-DarkPurple border-2 text-black text-center font-IranBold' />
                    </div>
                    <div className='lg:w-[10%] m-auto'>
                        <button onClick={() => handleAddCatefory()} className='px-5 py-3 mt-6  dark:bg-green-500 bg-LightYellow w-max rounded-xl'>{t("Add")}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
