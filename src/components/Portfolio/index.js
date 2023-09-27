import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AfricaTalks from '../../assets/images/Labor of Love.png';
import Blonde from '../../assets/images/Blonde.png';
import Bookshelf from '../../assets/images/Bookshelf API.png';
import LandingPage from '../../assets/images/Once - Landing Page.png';
import Calculator from '../../assets/images/Calculator.png';
import Checkmate from '../../assets/images/Checkmate.png';

const DATA = [{
    name: "Labor of Love",
    description: "Digital Career Institute Final Project, a website to empower African voices. It was created using React and Strapi.",
    pic: AfricaTalks
},
{
    name: "Bookshelf API",
    description: "Backend project to create a bookshelf API using Node.js, Express and MongoDB. Users can register, login, add, update and delete books.",
    pic: Bookshelf
},
{
    name: "Checkmate",
    description: "A todo-list app created using React and Sass. Users can add, update and delete tasks very easily.",
    pic: Checkmate
},
{
    name: "Command Line Calculator",
    description: "This code is a command-line calculator written in JavaScript that allows the user to perform various mathematical operations.",
    pic: Calculator
},
{
    name: "Landing Page",
    description: "A landing for my music project using Figma and developed it using HTML, CSS and JavaScript. This was my final React project at DCI.",
    pic: LandingPage
},
{
    name: "Blonde",
    description: "I developed this project using only raw HTML and CSS. It is a website to showcase the film BLONDE and Marilyn Monroe's life.",
    pic: Blonde
}
];

function Portfolio() {

    return (
        <>

            <div className='portfolio-page'>
                <h1 className='section-name' id="portfolio">Projects</h1>
                <div className='cards-container'>
                    {DATA.map(project => {
                        return (
                            <div className='card'>
                                <img src={project.pic} alt='' className="portfolio_images" />
                                <h2>{project.name}</h2>
                                <span>
                                    {project.description}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <a className= "button" href="#tech-stack" >
                TECH STACK
            </a>
        </>
    )
}
export default Portfolio;