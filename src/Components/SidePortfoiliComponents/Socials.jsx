import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsTelegram } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { useSelector } from 'react-redux'
export default function Socials() {
    const aboutData = useSelector((store) => store.client.clientState.socials)

    return (
        <div className='w-full max-lg:hidden text-2xl h-[5vh] dark:text-DarkPurple text-LightYellow flex items-center dark:bg-BackColor bg-LightMaincolor shadow-[-1px_-12px_10px_-9px_rgba(0,0,0,0.25)] justify-evenly '>
            {
                aboutData?.map((item, index) => {
                    return (
                        item.iconName === "Instagram" ? <a key={index} href={item.link}><BsInstagram /></a> :
                            item.iconName === "Linkedin" ? <a key={index} href={item.link}><BsLinkedin /></a> :
                                item.iconName === "Telegram" ? <a key={index} href={item.link}><BsTelegram /></a> :
                                    item.iconName === "Github" ? <a key={index} href={item.link}><BsGithub /></a> :
                                        <a key={index} href={item.link}><BsWhatsapp /></a>)
                })
            }
        </div>
    )
}
