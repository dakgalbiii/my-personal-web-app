'use client';
import React from "react";
import Link from "next/link";

const NavBar = () => {
    const [menuToggled, setMenuToggle] = React.useState(false);

    return (
        <div className="relative w-full">
            <div className="z-10 absolute flex justify-between md:justify-around items-center select-none py-[1.5rem] w-full px-[5%] md:px-0 bg-[#102921]">
                <h1 className="text-[#fff] text-[25px] font-[300] transition-ease-in-out duration-200 hover:text-[#ffc117] cursor-pointer" onClick={() => setMenuToggle(false)}>Alvin Shin</h1>
                <div className="text-[#fff] text-[18px] flex flex-row justify-center items-center space-x-[3rem] hidden md:block">
                    <Link href={"#about"} className={"link-underline-1"}>About</Link>
                    <Link href={"#work"} className={"link-underline-1"}>Work</Link>
                    <Link href={"#projects"} className={"link-underline-1"}>Projects</Link>
                    <Link href={"#contacts"} className="rounded-[25px] py-[0.5rem] px-[1rem] whitespace-nowrap text-[#fff] border-[1px] border-[#fff] transition-ease-in-out duration-200 hover:text-[#102921] hover:bg-[#fff]">Contact</Link>
                </div>
                <div
                    className={"cursor-pointer block md:hidden space-y-[0.5rem] flex flex-col justify-between items-center transition-ease-in-out duration-200"}
                    onClick={() => setMenuToggle(!menuToggled)}
                >
                    <div className={"h-[0.15rem] w-[1.45rem] bg-[#fff] origin-right duration-200 transition-ease-in-out  " + ((menuToggled) ? "delay-200 rotate-[-45deg] " : "")} />
                    <div className={"h-[0.15rem] bg-[#fff] duration-200 transition-ease-in-out " + ((menuToggled) ? "w-0" : "delay-200 w-[1.45rem]")} />
                    <div className={"h-[0.15rem] w-[1.45rem] bg-[#fff] origin-right duration-200 transition-ease-in-out  " + ((menuToggled) ? "delay-200 rotate-[45deg] translate-y-[-0.3rem]" : "")} />
                </div>
            </div>

            <div className={"md:hidden z-[1] absolute w-full py-[1rem] bg-[#122e24] text-[#fff] text-[18px] flex flex-col justify-start items-start space-y-[1rem] px-[5%] mt-[85.5px] transition-ease-in-out duration-[500ms] " + ((menuToggled) ? "translate-y-0" : "translate-y-[-714px]")}>
                    <Link href={"#about"} className={"link-underline-1"} onClick={() => setMenuToggle(false)}>About</Link>
                    {/* <Link href={"#work"} className={"link-underline-1"} onClick={() => setMenuToggle(false)}>Work</Link> */}
                    <Link href={"#projects"} className={"link-underline-1"} onClick={() => setMenuToggle(false)}>Projects</Link>
                    <Link href={"#contacts"} className="text-center w-full rounded-[25px] py-[0.5rem] px-[1rem] whitespace-nowrap text-[#fff] border-[1px] border-[#fff] transition-ease-in-out duration-200 hover:text-[#102921] hover:bg-[#fff]" onClick={() => setMenuToggle(false)}>Contact me</Link>
            </div>
        </div>
            

    )
}

export default NavBar;