import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AllContext } from "../ContextApi/AllContext"
import { Link } from "react-router-dom"
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import Language from "../Components/SideMenuComponents/language"
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import i18n from '../i18n'
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { AuthLogin } from '../Service/PersonalServices'
import Toggle from "../Components/SideMenuComponents/toggle"
import Preloader from "../Components/Preloader"
export default function Login() {
  const { authorizing, Setauthorizing, LoadingSecond, SetLoadingSecond } = useContext(AllContext)
  const [LoginInfo, SetLoginInfo] = useState()
  const Navgate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    if (authorizing) {
      Navgate(`/Admin`)
    }
  }, [authorizing])

  useEffect(() => {
    const GetFromServer = async () => {
      try {
        SetLoginInfo(null)
        const { data } = await AuthLogin(LoginInfo.user, LoginInfo.password)
        if (data.success === true) {
          localStorage.setItem("TK", data.token)
          Setauthorizing(true)
        }
        SetLoadingSecond(false)
      } catch (error) {
        if (error.response) {
          toast.error(t("InvalidPass"), {
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

    }
    GetFromServer()
  }, [LoginInfo])

  // Creating schema
  const schema = Yup.object().shape({
    user: Yup.string()
      .required(t("UserRequired")),
    password: Yup.string()
      .required(t("Passwordrequired"))
      .min(5, t("min")),
  });


  return (
    <>
      {LoadingSecond ? <Preloader /> : null}
      <div className='w-full h-[97vh] flex-col font-IranBold flex justify-center items-center m-auto'>
        <ToastContainer />
        <div className='absolute top-2 left-4 lg:left-0'>
          <Language />
        </div>
        <div className='absolute top-2 left-16 lg:left-14'>
          <Toggle />
        </div>
        <Link to={"/"} className='absolute top-2 right-4 lg:right-0'>
          <MdOutlineArrowForwardIos className='text-[30px] text-LightYellow dark:text-DarkPurple lg:text-[35px] xl:text-[38px] 2xl:text-[42px]' />
        </Link>
        <h1 className='mb-5 text-shadow-purple text-4xl'>
          {t("Title")}
        </h1>
        <div className='w-[98%] flex-col 2xl:w-[20%] xl:w-[25%] dark:bg-BackColorWhiter shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] p-5 flex justify-center  bg-LightMaincolor rounded-md'>
          <Formik validationSchema={schema} initialValues={{ user: "", password: "" }} onSubmit={(values) => {
            SetLoginInfo(values)
            SetLoadingSecond(true)
          }}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="" className='text-left'>{t("Username")}</label>
                <input type="text" value={values.user} onChange={handleChange} onBlur={handleBlur} name='user' id='user' className='w-full h-10 rounded-md mb-3 outline-none bg-LightBackcolor/30 dark:bg-white/30 text-center dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]' />
                <p className="text-center text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2">
                  {errors.user && touched.user && errors.user}
                </p>
                <label htmlFor="" className='text-left'>{t("password")}</label>
                <input type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} name='password' id='password' className='w-full h-10 rounded-md mb-3 outline-none bg-LightBackcolor/30 dark:bg-white/30 text-center dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]' />
                <p className="text-center text-sm text-DarkPurple dark:text-red-600 font-IranLight mb-2">
                  {errors.password && touched.password && errors.password}
                </p>
                <input type="submit" value="Login" className='mt-2 cursor-pointer bg-LightYellow dark:bg-DarkPurple shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-md py-2 w-max m-auto px-8' />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}
