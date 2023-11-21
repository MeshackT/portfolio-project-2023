import React from 'react';
import "./style.scss";
import { useNavigate } from 'react-router-dom';
import {Animate} from 'react-simple-animate';
import{ FaAppStore, FaLinkedin} from 'react-icons/fa';

const Home = () => {

    // buttons start
    const navigate = useNavigate();
    const handleNavigatToContactMePage = () => {
        console.log(navigate);

        navigate("/contact");

    }
    const handleNavigatResume= () => {
        const resumeProfileUrl = 'https://github.com/MeshackT/Resume/blob/main/Meshack_Nkosi_Resume.docx';
        window.open(resumeProfileUrl, '_blank');        
    }
    
    const goToLinkedIn = () => {
        const linkedInProfileUrl = 'https://www.linkedin.com/in/templeton-meshack-9b288b1a0/';
        // window.location.href = 'https://www.linkedin.com/in/templeton-meshack-9b288b1a0/';
        window.open(linkedInProfileUrl, '_blank');
    };
    const goToAppStore = () => {
        const appStoreProfileUrl = 'https://play.google.com/store/apps/dev?id=4937714583345032304';
        // window.location.href = 'https://www.linkedin.com/in/templeton-meshack-9b288b1a0/';
        window.open(appStoreProfileUrl, '_blank');
    };
    // buttons end

    return (
        <div >
            <section id="home" className='home'>
                <div className='home_text-wrapper'>
                    <h1>Hello, My name is Meshack Nkosi,
                        <br />
                        I am a junior software developer
                    </h1>
                </div>
                {/* <div className='home_text-wrapper'>
                    <h3>and this is my personal website.</h3>

                </div> */}
                <Animate
                    play
                    duration={1.1}
                    delay={.8}
                    start={{
                        transform : 'translateY(550px)'

                    }}
                    end={{
                        transform : 'translatex(0px)'
                        
                    }}
                >
                    <div className='home_contactLink'>
                        <FaLinkedin size={30} color= '#0000FF' onClick={goToLinkedIn}/>
                        <FaAppStore size={30} color= '#0000FF' onClick={goToAppStore}/>
                    </div>
                <div className='home_contact-me'>
                    <button onClick={handleNavigatToContactMePage}> Get in touch</button>
                    <button onClick={handleNavigatResume}>My Resume</button>

                </div>
                </Animate>
            </section>

        </div>
    )
}
export default Home;