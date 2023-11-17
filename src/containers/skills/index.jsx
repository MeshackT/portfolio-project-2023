import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
const Skills = () => {
    return (
        <section id='skills' className='skills'>
            <PageHeaderContent
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />}
            />
        </section>
    )
}
export default Skills;