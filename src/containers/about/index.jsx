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
const jobSummary = "In a recent career milestone, I completed a two-month internship as an IT Administrator at PL Steel Service (PTY) Ltd, spanning from June to July 2023. This experience provided me with valuable insights and hands-on expertise in troubleshooting networks and devices. During this period, I actively engaged in telephone management systems, collaborating with a third-party support provider. My responsibilities included daily tasks such as extracting and managing recorded data, and overseeing user administration on the system. In addition to these core duties, I was entrusted with various responsibilities, including: Implementation of multi-functional authentication through Microsoft for the eTrack management system. Proficient management of multi-functional printers and Microsoft 365. Creation and assignment of licenses on Microsoft 365. Formation of user groups and the addition of users to these groups. Expertise in software installation. Monitoring and creation of backups utilizing Veeam. Providing technical service support internally for individuals requiring IT assistance. This internship not only expanded my technical skills but also fostered a comprehensive understanding of IT administration in a corporate environment. I am eager to leverage this experience to contribute effectively to future endeavors in the field.";
const meSummary = "Greetings, and welcome to my portfolio! I'm Meshack, a recent graduate with a qualification in Information Technology. I bring confidence and a strong commitment to delivering exceptional results in the ever-evolving field of technology. Eager to contribute and learn, I am a reliable, commercially aware, and self-motivated professional. My journey is characterized by resilience and a perpetual pursuit of improvement, reflecting my belief in continuous growth. I am well-versed in the following software tools: Android Studio and Visual Studio for Flutter and Dart: Proficient in mobile app development using cutting-edge technologies. Java Programming: Skilled in Java, a language integral to robust software development. Figma and Illustrator: Experienced in leveraging these tools for the creation of captivating and user-friendly mobile and web application designs. My commitment to excellence and adaptability positions me as a valuable asset ready to contribute effectively to any technological endeavor. I invite you to explore my portfolio to gain deeper insights into my skills and accomplishments. Let's embark on this journey of innovation and advancement together.";
const About = () => {
    const linkedInProfileUrl = 'https://www.linkedin.com/in/templeton-meshack-9b288b1a0/';
    const goToLinkedIn = () => {
        // window.location.href = 'https://www.linkedin.com/in/templeton-meshack-9b288b1a0/';
        window.open(linkedInProfileUrl, '_blank');
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
                        transform: 'translateX(-1900px)'

                    }}
                    end={{
                        transform: 'translatex(0px)'

                    }}
                >
                    <h3 className='personalInformationHeader'>About Me</h3>
                    <p>{meSummary}</p>

                </Animate>


                <Animate
                    play
                    duration={1.1}
                    delay={1.5}
                    start={{
                        transform: 'translateX(-1900px)'

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
                        transform: 'translateX(1900px)'

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