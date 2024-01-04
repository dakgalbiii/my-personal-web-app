import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
    return (
        <div id={"contacts"} className={"font-thin py-[3rem] sm:py-[6rem] text-[#fff] w-[90%] max-w-[80vh] xl:max-w-[60vh] flex flex-col space-y-[1rem]"}>
            <div className={"flex flex-col justify-center items-center space-y-[1rem]"}>
                <h1 className={"text-[30px] whitespace-nowrap text-center"}>Get in touch</h1>
                <p className="text-center">I'm constantly searching for new opportunities, feel free to reach out!</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-[1.5rem]">
                <Link href="mailto:ashin7kr@gmail.com" className="text-[2.5rem] transition-ease-in-out duration-200 hover:text-[#ffc117]"><FontAwesomeIcon icon={faEnvelope} /></Link>
                <Link href="https://github.com/dakgalbibi" className="text-[2.5rem] transition-ease-in-out duration-200 hover:text-[#ffc117]"><FontAwesomeIcon icon={faGithub} /></Link>
                <Link href="https://www.linkedin.com/in/alvin-shin-103006233/" className="text-[2.5rem] transition-ease-in-out duration-200 hover:text-[#ffc117]"><FontAwesomeIcon icon={faLinkedin} /></Link>
                <Link href="https://www.instagram.com/dak.galbiii/" className="text-[2.5rem] transition-ease-in-out duration-200 hover:text-[#ffc117]"><FontAwesomeIcon icon={faInstagram} /></Link>
            </div>
        </div>
    );
}

export default Contacts;