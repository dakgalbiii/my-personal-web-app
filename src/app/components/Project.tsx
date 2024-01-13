'use client'

import React from "react";
import Link from "next/link";

class Project extends React.Component<{
    title: string,
    skills: string,
    desc: string,
    href: string
}> {
    state = {
        title: this.props.title,
        skills: this.props.skills,
        desc: this.props.desc,
        href: this.props.href
    }
    render() {
        return (
            <div className="w-full flex flex-col justify-center items-start space-y-[1rem] p-[2rem] bg-[#122e24] drop-shadow-sm rounded-[30px]">
                <h1 className="text-[20px] tracking-[1.5px] text-[#ffc117]">{this.state.title}</h1>
                <p>{this.state.desc}</p>

                <div className="w-full flex flex-row justify-between items-center space-x-[1rem]">
                    <p>Skills: {this.state.skills}</p>
                    <Link
                        href={this.state.href}
                        className={"p-[0.75rem] bg-[#fff] text-[#102921] tracking-[1px] rounded-[25px] whitespace-nowrap transition-ease-in-out duration-200 border-[1px] border-[#fff] hover:bg-[#102921] hover:text-[#fff]"}
                    >
                        View Code
                    </Link>
                </div>

            </div>
        );
    }

}

export default Project;