import React, { useContext, useEffect, useState } from 'react'
import { AllContext } from "../../ContextApi/AllContext"
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsTelegram } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
export default function Socials() {
    const { GetPersonal } = useContext(AllContext)
    const [GetAbout, SetAbout] = useState(undefined)

    useEffect(() => {
        if (GetPersonal !== undefined) {
            SetAbout(GetPersonal.socials)
        }
    }, [GetPersonal])

    return (
        <>
            {
                GetAbout?.map((item, index) => {
                    return (
                        item.iconName === "Instagram" ? <a key={index} href={item.link}><BsInstagram /></a> :
                            item.iconName === "Linkedin" ? <a key={index} href={item.link}><BsLinkedin /></a> :
                                item.iconName === "Telegram" ? <a key={index} href={item.link}><BsTelegram /></a> :
                                    item.iconName === "Github" ? <a key={index} href={item.link}><BsGithub /></a> :
                                        <a key={index} href={item.link}><BsWhatsapp /></a>)
                })
            }
        </>
    )
}
