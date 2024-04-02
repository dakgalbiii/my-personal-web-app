'use client';

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";

const Welcome = () => {
    // bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-50 
    return (
        <div className="flex md:justify-center items-start md:items-center h-fit md:h-[calc(100vh-69.5px)] px-[5%] w-full text-[#fff] mt-[85.5px] transition-ease-in-out duration-200">
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end">
                <div className="flex flex-col tracking-[0.5px] font-thin justify-center items-center md:items-start">
                    <p className="text-[16px] hidden md:block">Alvin Shin</p>
                    <TypeAnimation
                        preRenderFirstString={false}
                        sequence={[
                            1000, 'AI/ML Specialist',
                            1000, 'Web Developer',
                            1000, 'Programmer', 5000
                        ]}
                        speed={25}
                        className={"text-[#ffc117] text-[35px] sm:text-[50px] md:text-[42px] lg:text-[65px] xl:text-[70px]"}
                        repeat={Infinity}
                    />
                    <p className={"mt-[2rem] text-[16px] lg:text-[20px] max-w-[90%] md:max-w-[380px] xl:max-w-[600px]"}>I'm Alvin, a Computer Science and Applied Mathematics & Statistics Major with a Digital Arts Minor at <Link href="https://www.cs.stonybrook.edu/" target="_blank" className="link-underline-1">Stony Brook University</Link>. Welcome to my personal website!</p>

                    <div className="flex flex-row justify-start items-center space-x-[2rem] mt-[1rem] md:mt-[2rem]">
                        <Link href="https://github.com/dakgalbiii" className="text-[2rem] transition-ease-in-out duration-200 hover:text-[gray]"><FontAwesomeIcon icon={faGithub} /></Link>
                        <Link href="https://www.linkedin.com/in/alvin-shin/" className="text-[2rem] transition-ease-in-out duration-200 hover:text-[gray]"><FontAwesomeIcon icon={faLinkedin} /></Link>
                        <Link href="/blog" className="whitespace-nowrap flex flex-row justify-center items-center transition-ease-in-out duration-200 hover:text-[gray]"> {/* TAKE OUT pointer-events-none WHEN BLOG PAGE IS COMPLETE!*/}
                            <p className="text-[20px]">Blog&nbsp;
                                <span><FontAwesomeIcon icon={faExternalLinkSquare} /></span>
                                <span className="text-[13px]">{" (coming soon)"}</span>
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="aspect-[1/1] bg-no-repeat bg-cover bg-[url('/icon.png')] w-[90%] md:w-[20rem] lg:w-[25rem] xl:w-[40rem] mt-[1rem] md:mt-0" />
            </div>


        </div>
        // 안녕!

    )
}
export default Welcome;