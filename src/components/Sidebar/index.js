import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='home-link' to='/'>
            <span>HOME</span>
        </Link>
        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color= '#fff'/>
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#fff" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            </NavLink>
        </nav>
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
)

export default Sidebar;