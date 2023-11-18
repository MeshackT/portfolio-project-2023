import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './style.scss';
import { DiAndroid, DiApple, DiGithub, DiTrello, DiWebplatform } from 'react-icons/di';
import { FaDatabase } from 'react-icons/fa';

const personalDetails = [
    { label: "Name", value: "Meshack Nkosi" },
    { label: "Age", value: "25" },
    { label: "Address", value: "Boksburg 1459,\nJohannesburg,\nGauteng" },
    { label: "Email", value: "meshacktempleton1@gmail.com" },
    { label: "Phone number", value: "+27 60 456 4022" },
    { label: "LinkedIn", value: "https://www.linkedin.com/in/templeton-meshack-9b288b1a0/" },

]
const jobSummary = 'Hi again, previously I did an internship program for two months as an IT Administrator at PL Steel Service (PTY) Ltd, this program ran from Jun 2023 until July 2023. During that period I was able to learn and work with troubleshooting Networks and devices. It was a great experience. I was also working on telephone management systems with a third-party invovled as support whereby my daily works was to Pulling recordings, and managing users on the system. These are other duties I was entrusted with: Multi-functional authentication with Microsoft for eTrack managment system, Multi-functional printers Microsoft 365, creating and assigning licenses on Microsoft 365, creating user groups and adding users to those groups, Software installation, mornitor and create backups with Veeam, as well as Technical service Support for anyone who needed IT assistance';

const About = () => {

    const goToLinkedIn = () => {
        console.log("click");
    };

    return (
        <section id='about' className='about'>
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className='about_content'>
                <div className='about_content_personalWrapper'>

                    <Animate
                        play
                        duration={1.1}
                        delay={.8}
                        start={{
                            transform: 'translateX(-900px)'

                        }}
                        end={{
                            transform: 'translatex(0px)'

                        }}
                    >
                        <h3 className='personalInformationHeader'>My latest career journey</h3>
                        <p>{jobSummary}</p>

                    </Animate>

                </div>
                <div className='about_content_serviceWrapper'>
                    <Animate
                        play
                        duration={1.1}
                        delay={.8}
                        start={{
                            transform: 'translateX(900px)'

                        }}
                        end={{
                            transform: 'translatex(0px)'

                        }}
                    >
                        <h3 className='personalInformationHeader'>Personal Details</h3>

                        <ul>

                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className='title'>
                                        {item.label}
                                    </span>
                                    <span className='value'>
                                        {item.value}
                                    </span>
                                </li>
                            ))}

                        </ul>
                        <button href="https://www.linkedin.com/in/templeton-meshack-9b288b1a0/" onClick={goToLinkedIn}>Go to LinkedIn</button>

                    </Animate>

                </div>

            </div>
            <div className='about_icons_skils'>

                <Animate
                    play
                    duration={1.1}
                    delay={.8}
                    start={{
                        transform: 'translateY(-200px)'

                    }}
                    end={{
                        transform: 'translatex(0px)'

                    }}
                >
                    <div className='about_icons_skils_1'>


                        <div className='about_icons_skils_1_1'>
                            <DiAndroid size={60} color='var(--yellow-theme-main-color)' />
                            <h3>Android</h3>
                        </div>
                        <div className='about_icons_skils_1_1'>
                            <DiApple size={60} color='var(--yellow-theme-main-color)' />
                            <h3>Apple</h3>
                        </div>
                        <div className='about_icons_skils_1_1'>
                            <DiWebplatform size={60} color='var(--yellow-theme-main-color)' />
                            <h3>WebApp</h3>
                        </div>
                        <div className='about_icons_skils_1_1'>
                            <FaDatabase size={60} color='var(--yellow-theme-main-color)' />
                            <h3>Firebase / MySQL</h3>
                        </div>
                        <div className='about_icons_skils_1_1'>
                            <DiGithub size={60} color='var(--yellow-theme-main-color)' />
                            <h3>GitHub / Git</h3>
                        </div>

                        <div className='about_icons_skils_1_1'>
                            <DiTrello size={60} color='var(--yellow-theme-main-color)' />
                            <h3>Trello</h3>
                        </div>




                    </div>
                </Animate>

            </div>
        </section>


    )
}
export default About;