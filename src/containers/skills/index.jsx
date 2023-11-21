import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './style.scss'

const personalDetails = [
    { label: "", value: "Junior Flutter and Dart front-end developer" },
    { label: "", value: "Junior Java developer" },
    { label: "", value: "Basic HTML and CSS" },
    { label: "", value: "Firebase and MySQL database" },
    { label: "", value: "Git/GitHub" },
    { label: "", value: "Microsoft 365" },
    { label: "", value: "IT Essentials" },
    { label: "", value: "Network troubleshooting" },
    { label: "", value: "IT support" },

]

const Skills = () => {

    return (
        <section id='skill' className='skill'>
            <PageHeaderContent
                headerText="My skills"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className='skill_content'>
            
                <div className='skill_content_serviceWrapper'>
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
                        <h3 className='personalInformationHeader'>Professional Skills</h3>

                        <ul>

                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                
                                    <span className='value'>
                                        {item.value}
                                    </span>
                                </li>
                            ))}

                        </ul>

                    </Animate>

                </div>

            </div>
    
        </section>


    )
}
export default Skills;