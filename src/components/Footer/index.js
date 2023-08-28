import './index.scss';
import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer () {
    return (
        <>
         <div className='footer'>
            <section className='footer-media-container'>

            <ul>
                        <li>
                            <a
                                target="_blank"
                                rel='noreferrer'
                                href='https://www.linkedin.com/in/ernestomederosdev/'
                            >
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel='noreferrer'
                                href='https://github.com/ernestomederos'
                            >
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel='noreferrer'
                                href='skype:live:.cid.68502857057a1a31'
                            >
                                <FontAwesomeIcon icon={faSkype}/>
                            </a>
                        </li>
                    </ul>


            </section>
                
                </div>
        </>
    )
} 