import React from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import i18n from "../../../i18n"
export default function Tab({ TabsInfo, SetTabState, TabState }) {

    const GetIcon = (Icon) => {
        if (Icon === "ir") {
            return "fi fi-ir"
        } else {
            return "fi fi-us"
        }
    }

    const AddTabState = (e) => {
        SetTabState(parseInt(e.target.id))
    }

    return (
        <>
            {
                TabsInfo.map((item) => {
                    return (
                        <li key={item.index} id={item.index} onClick={AddTabState} className={`${i18n.language === `fa` ? `ml-1` : `mr-1`} cursor-pointer`}>
                            <span id={item.index} className={`${TabState !== item.index ? `bg-black` : `dark:bg-DarkPurple bg-LightYellow`} inline-flex p-4 text-white border-b-2 felx items-center border-LightYellowDark rounded-t-lg dark:text-white dark:border-DarkPurple group`} aria-current="page">
                                <span id={item.index} className='mx-2'>{item.Title}</span>
                                <span id={item.index} className={GetIcon(item.Icon) + ""}></span>
                            </span>
                        </li>
                    )
                })
            }
        </>
    )
}
