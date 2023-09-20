import './index.scss';
import Hero from '../../assets/images/hero-image.png';
import { Link } from 'react-router-dom';


export default function About() {

    return (

        <div className='about-page'>
            <div className='sections-container'>
                <section className="section">
                    <img src={Hero} alt="profile-pic" className='hero-image' />
                    <h1 className='section-name'>About me</h1>
                    <span className='about-me-text'>
                        I started my programming journey when I was fifteen, delving into the intricacies of coding logic even before owning a computer. Back then, I tackled school coding assignments on paper, a practice that I still enjoy for its nostalgic charm.
                        <br />
                        <br />
                        Growing up in the always-unstable environment of Havana instilled in me the adaptability of a water bear, enabling me to thrive amid challenges. Now, I find myself in Berlin, driven by a fervent desire to contribute as a Web Developer. I aspire to weave solutions, forge connections, implement innovations, and envision technologies that propel humanity forward.
                    </span>
                </section>
                <Link className="button" to="../portfolio">MY PORTFOLIO</Link>

                {/* <section className="section">
                    <h1 className='section-name'>Skills</h1>
                </section>
                <button>My working background</button>
                <section className="section">
                    <h1 className='section-name'>Experience</h1>
                </section>
                <button>References on my work</button>
                <section className='section'>
                    <h1 className='section-name'>References</h1>
                </section>
                <button>My education</button>
                <section className="section">
                    <h1 className='section-name'>Education</h1>
                </section> */}
            </div>

        </div>
    )
}