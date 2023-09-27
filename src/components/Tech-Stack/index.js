import React from "react";
import "./index.scss";
import HTML from "../../assets/logos/html.svg";
import Javascript from "../../assets/logos/javascript.svg";
import CSS from "../../assets/logos/css.svg";
import SASS from "../../assets/logos/sass.svg";
import REACT from "../../assets/logos/react.svg";
import NODE from "../../assets/logos/nodejs.svg";
import EXPRESS from "../../assets/logos/expressjs.svg";
import MONGODB from "../../assets/logos/mongodb.svg";
import GIT from "../../assets/logos/git.svg";
import GITHUB from "../../assets/logos/github.svg";
import FIGMA from "../../assets/logos/figma.svg";

export default function TechStack() {

    const DATA = [
        {
            name: "HTML",
            logo: HTML
        },
        {
            name: "CSS",
            logo: CSS
        },
        {
            name: "JavaScript",
            logo: Javascript
        },
        {
            name: "SASS",
            logo: SASS
        },
        {
            name: "React",
            logo: REACT
        },
        {
            name: "Node",
            logo: NODE
        },
        {
            name: "Express",
            logo: EXPRESS
        },
        {
            name: "MongoDB",
            logo: MONGODB
        },
        {
            name: "Git",
            logo: GIT
        },
    {
            name: "Github",
            logo: GITHUB
    }, {
            name: "Figma",
            logo: FIGMA
    }]

    return (
        <>
            <div className="tech-stack-page">
                <h1 className="section-name" id="tech-stack">Tech Stack</h1>
                <ul className="stack-container">
                    {DATA.map(tech => {
                        return (
                            <li>
                                <img src={tech.logo} alt={tech.name} className="tech-image" />
                                <span className="tech-text">{tech.name}</span>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>


        </>
    )
}