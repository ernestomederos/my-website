import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['D','e', 'v', 'e', 'l', 'o', 'p', 'm', 'e', 'n ', 't'];
    const jobArray = ['S', 'o', 'l','u','t','i','o','n','s'];

    const myFunctionSetTimeOut = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    };

    useEffect(() => {
        myFunctionSetTimeOut();
    }, []);


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>W</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _12`}>b</span>
             
<br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22} />
                </h1>
                <h2>with Ernesto Mederos Garcia</h2>
                <h2>Web Developer / Former Linguist / Artist</h2>
                <Link to="contact" className='flat-button'> 
                CONTACT ME
                </Link>
            </div>

        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Home;