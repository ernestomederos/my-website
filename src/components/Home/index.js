import { Link } from 'react-router-dom';
import './index.scss';


import Loader from 'react-loaders';


const Home = () => {


    return (
        <>

            <div className="container home-page">
                <div className="text-zone">
                    <h1 >
                        WEB DEVELOPMENT SOLUTIONS
                    </h1>

                    <h2>Hi, there! My name is <span className='home-name'>Ernesto Mederos</span>. Take a look at some of my relevant projects, skills and work background or just feel free to send me a message.</h2>
                    <Link to="contact" className='flat-button'>
                        CONTACT ME
                    </Link>
                </div>


            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home;