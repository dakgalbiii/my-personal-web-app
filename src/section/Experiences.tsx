'use client'

import React from "react";
import Experience from "@/components/Experience";

class Experiences extends React.Component {
    state = {
        exps: [
            {
                id: 1,
                title: "Internship on Demand | Practical AI for All Majors: Career Accelerator",
                position: "Pre-intern",
                date: "Jan. 2024",
                desc: ""
            }
        ]
    }

    render() {
        return (
            <div id={"work"} className={"pt-[7rem] text-[#fff] w-[90%] max-w-[80vh] xl:max-w-[60vh] flex flex-col space-y-[1rem]"}>
                <div className={"flex flex-col justify-center items-center space-y-[1rem]"}>
                    <h1 className={"text-[30px] tracking-[2px] whitespace-nowrap italic"}>experience</h1>
                    <p>Ways I've leveled up</p>
                </div>
                {this.state.exps.map(e => (
                    <Experience
                        key={e.id}
                        title={e.title}
                        position={e.position}
                        date={e.date}
                        desc={e.desc}
                    />
                ))}
            </div>
        );
    }
}

export default Experiences;