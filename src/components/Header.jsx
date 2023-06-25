// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import Logo from "./../assets/Images/logo.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
 
  const {theme,setTheme} = useContext(ThemeContext)

  useEffect(()=>{
    console.log("Theme :",theme)
  },[])
  return (
    <div className="flex items-center p-3">
      <img src={Logo} alt="logo" width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Films"
          className="bg-transparent outline-none"
        />
      </div>
      <div>
        {theme=="light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer"
            onClick={() =>  {setTheme('dark');localStorage.setItem('theme', 'dark')}}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer"
            onClick={() => {setTheme('light');localStorage.setItem('theme', 'light')}}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
