'use client'

import React from "react";

class Experience extends React.Component<{
    title: string,
    position: string,
    date: string,
    desc: string
}> {
    state = {
        title: this.props.title,
        position: this.props.position,
        date: this.props.date,
        desc: this.props.desc
    }

    render() {
        return (
            <div className="flex h-full flex-row justify-start items-start space-x-[1rem]">

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center space-x-[1rem]">
                        <p className="whitespace-nowrap">{this.state.date}</p>
                        <div className="w-[2.5rem] aspect-[1/1] rounded-full border-[1px] border-[#fff]" />
                    </div>

                    <div className="w-[1px] h-[5rem] bg-[#fff]" />
                </div>

                <div>
                    <h1 className="text-[30px]">{this.state.title}</h1>
                    <p>{this.state.position}</p>
                </div>
                <p>{this.state.desc}</p>

            </div>
        );
    }
}

export default Experience;