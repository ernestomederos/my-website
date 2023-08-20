import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact () {const [letterClass, setLetterClass] = useState('text-animate');

useEffect(() => {
    setTimeout(() => {
        return setLetterClass('text-animate-hover')
    }, 3000)
}, []);

const form = useRef();
const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3r3nvib', 'template_dedef65', form.current, 'K_VeQlgImGMsyn-RK')
        .then((result) => {
            console.log(result.text);
            return (
                alert("Your message has been sent!")
            )
        }, (error) => {
            console.log(error.text);
        });

    setFormData({
        user_name: "",
        user_email: "",
        message: "",
    })
};
return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
                        idx={15} />
                </h1>
                <h2 className='subtitle'>
                    I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </h2>

                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <div className='name-and-email-container'>
                            <li className='half a'>
                                <input type='text' name='user_name' placeholder='Name' required value={formData.user_name} onChange={handleChange} />
                            </li>
                            <li className='half b'>
                                <input type='email' name='user_email' placeholder='Email' required value={formData.user_email} onChange={handleChange} />
                            </li>
                                
                            </div>
                            <li>
                                <textarea className='c' placeholder='Message' name="message" required value={formData.message} onChange={handleChange}></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button d' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        </div>
        <Loader type='pacman' />
    </>
);

}