import React from "react";
import Link from "next/link";

const AboutMe = () => {
    return (
        <div id={"about"} className={"text-[#fff] font-thin w-full flex flex-col sm:flex-row justify-center items-center sm:justify-between sm:items-start space-x-0 sm:space-x-[2rem] py-[3rem] sm:py-[6rem] px-[5%]"}>
            <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start w-full sm:w-[20%] lg:w-[30%] mb-[2rem] pt-[1rem] border-[#fff] border-t-[1px] border-opacity-50">
                <h1 className={"w-full text-left text-[30px] whitespace-nowrap"}>About me</h1>
                <p className={"w-full text-left text-[16px]"}>Get to know me</p>
            </div>

            <div className="flex flex-col justifty-start items-start w-full sm:w-[80%] lg:w-[60%] space-y-0 sm:space-y-[1.5rem]">
                <h1 className="w-full text-[#ffc117] text-[27px] sm:text-[40px] md:text-[50px] font-thin tracking-[1.5px] uppercase text-left sm:text-left mb-[1rem] sm:mb-0">A Flame Before the Wick</h1>

                <p className={"w-full text-[16px] sm:text-[20px]"}>
                    My obsession started before recognition. Growing up, I enjoyed solving puzzles and playing
                    with Legos. Starting with scraps of bricks and puzzle pieces to complete stuctures and pictures would
                    ignite a flame.

                    <br /><br />
                    Although finding my wick was difficult in the realm of problem-solving, I soon discovered computer science.

                    <br /><br />
                    Now delved for over four years, I have programmed robots, developed beautiful and responsive
                    websites, and excelled in the <Link href="https://www.cardozohigh.com/m/pages/index.jsp?uREC_ID=114050&type=d&termREC_ID=&pREC_ID=916986" className="link-underline-1" target="_blank">B.N.C.H.S. Computer Science Program</Link>. My current interests are AI/ML and
                    software development.

                    <br /><br />
                    The wick is found. The rest is history as the flame ever so grows.
                </p>
            </div>

        </div>
    )
}

export default AboutMe;