import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faHtml5,
//     faJsSquare,
//     faCss3,
//     faReact,
//     faGitAlt,
//     faAngular
// } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const myFunctionSetTimeOut = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    };

    useEffect(() => {
        myFunctionSetTimeOut();
    }, []);

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
                            idx={15} />
                    </h1>
                    <p>
                        Fueled by an unquenchable thirst for knowledge and innovation, I embrace challenges as stepping stones to growth.
                    </p>
                    <p>
                        With each project, I strive to push boundaries and craft solutions that transcend expectations.
                    </p>
                    <p>
                        My journey as a web developer is marked by relentless determination, and I find purpose in creating digital experiences that leave a lasting impact on users and the industry alike.
                    </p>
                </div>


            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;