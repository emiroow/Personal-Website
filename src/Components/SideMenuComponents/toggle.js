import React from 'react';
import { ThemeContext } from '../../ContextApi/themeContext';
import { MdOutlineLightMode } from "react-icons/md"
import { HiOutlineMoon } from "react-icons/hi"

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);
    return (
        <div>
            {theme === 'dark' ? (
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className=" shadow-none focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
                >
                    <MdOutlineLightMode className='text-LightYellow dark:text-DarkPurple text-center text-[35px] lg:text-[40px] xl:text-[40px] 2xl:text-[42px] cursor-pointer' />
                </button>
            ) : (
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className=" focus:outline-none shadow-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
                >
                    <HiOutlineMoon className=' text-LightYellow dark:text-DarkPurple text-center text-[35px] lg:text-[40px] xl:text-[40px] 2xl:text-[42px] cursor-pointer' />
                </button>
            )}
        </div>
    );
};

export default Toggle;
