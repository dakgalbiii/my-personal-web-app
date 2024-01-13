'use client'
import React from "react";
import Project from "../components/Project";

class Projects extends React.Component {
    state = {
        projs: [
            {
                id: 1,
                title: "Facial Emotion Recognition App",
                skills: "Python, TensorFlow, OpenCV",
                desc: "A machine learning algorithm via Tensorflow and OpenCV capable of accurately detecting human emotions (happiness, sadness, anger, disgust, surprise, neutral). Utilizes computer vision to recognize faces and several emotions.",
                href: "https://github.com/dakgalbiii/Facial-Emotion-Recognition"
            },
            {
                id: 2,
                title: "Blueberry",
                skills: "Java, robotics, object-oriented programming (OOP)",
                desc: "Blueberry is Team 5599's robot for the FIRST Robotics Regional Competition. Developed via Java, the robot code allows for it to shoot balls into goals, taxi autonomously and tele-operated, and climb rungs. Blueberry's code showcases object-oriented programming through coding controls, pneumatics, and motors.",
                href: "https://github.com/Team5599/Robot2022"
            },
            {
                id: 3,
                title: "Photography Portfolio Website",
                skills: "React.js, Javascript, HTML, CSS",
                desc: "Created to showcase my portfolio of photos, this website contains an intuitive, minimal, and responsive user interface. Implemented via React.js and utilizes React hooks. Demonstrates soft coding and scalability.",
                href: "https://github.com/dakgalbiii/photography"
            },
            {
                id: 4,
                title: "Tic Tac Toe",
                skills: "Java, object-oriented programming (OOP)",
                desc: "A Java program that allows for two users to play Tic Tac Toe. Demonstrates a basic understanding of two-dimensional arrays, user inputs, pre-conditions, post-conditions, exceptions thrown, and object-oriented-programming.",
                href: "https://github.com/dakgalbiii/TicTacToe-Java"
            },
        ]
    }

    render() {
        return (
            <div id={"projects"} className={"text-[#fff] font-thin w-full flex flex-col sm:flex-row justify-center items-center sm:justify-between sm:items-start space-x-0 sm:space-x-[2rem] py-[3rem] sm:py-[6rem] px-[5%]"}>
                <div className={"flex flex-col justify-center sm:justify-start items-center sm:items-start w-full sm:w-[20%] lg:w-[30%] mb-[2rem] pt-[1rem] border-[#fff] border-t-[1px] border-opacity-50"}>
                    <h1 className={"w-full text-left text-[30px] whitespace-nowrap"}>Projects</h1>
                    <p className="w-full text-left">My works of art</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-[2rem] xl:space-y-0 xl:grid xl:grid-cols-2 xl:gap-[3rem] w-full sm:w-[80%] lg:w-[60%]">
                    {this.state.projs.map(p => (
                        <div key={p.id}>
                            <Project
                                title={p.title}
                                skills={p.skills}
                                desc={p.desc}
                                href={p.href}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;