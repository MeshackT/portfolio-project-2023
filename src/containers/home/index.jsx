import React from 'react';
import "./style.scss";
import { useNavigate } from 'react-router-dom';
import {Animate} from 'react-simple-animate';


const Home = () => {

    const navigate = useNavigate();
    const handleNavigatToContactMePage = () => {
        console.log(navigate);

        navigate("/contact");

    }

    return (
        <div >
            <section id="home" className='home'>
                <div className='home_text-wrapper'>
                    <h1>Hello, My name is Meshack Nkosi,
                        <br />
                        I am a junior software developer
                    </h1>
                </div>
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
                <div className='home_contact-me'>
                    <button onClick={handleNavigatToContactMePage}> Get in touch</button>

                </div>
                </Animate>
            </section>

        </div>
    )
}
export default Home;