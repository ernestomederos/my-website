import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

export default function About() {
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
                        « I started my programming journey when I was fifteen, delving into the intricacies of coding logic even before owning a computer. Back then, I tackled school coding assignments on paper, a practice that I still enjoy for its nostalgic charm.»

                    </p>
                    <p>
                        « Growing up in the always-unstable environment of Havana instilled in me the adaptability of a water bear, enabling me to thrive amid challenges. Now, I find myself in Berlin, driven by a fervent desire to contribute as a Web Developer. I aspire to weave solutions, forge connections, implement innovations, and envision technologies that propel humanity forward. »
                    </p>
                    <ul>
                        <li>
                            <a
                                target="_blank"
                                rel='noreferrer'
                                href='https://www.linkedin.com/in/ernestomederosdev/'
                            >
                                <FontAwesomeIcon icon={faLinkedin} color="#fff" />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel='noreferrer'
                                href='https://github.com/ernestomederos'
                            >
                                <FontAwesomeIcon icon={faGithub} color="#fff" />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel='noreferrer'
                                href='skype:live:.cid.68502857057a1a31'
                            >
                                <FontAwesomeIcon icon={faSkype} color="#fff" />
                            </a>
                        </li>
                    </ul>
                </div>


            </div>
            <Loader type="pacman" />
        </>
    )
}