import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { useState } from 'react';
import {Animate} from 'react-simple-animate';
import axios from 'axios';

import './style.scss';
const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    describtion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      email: formData.email,
      subject: 'Feedback', // Adjust the subject as needed
      describtion: formData.describtion, // Assuming your message is in formData.message
    };

    sendEmail(emailData);

    // Optionally, you can reset the form after submission
    setFormData({
      name: '',
      email: '',
      describtion: '',
    });
  };

  // 
  
  async function sendEmail({
  name,
  email,
  subject,
  describtion
}) {
  const serviceId = "service_afkab4j";
  const templateId = "template_luf2qpl";
  const userId = "J3i5Zxm_DHgjT4AfS";

  const url = 'https://api.emailjs.com/api/v1.0/email/send';

  try {
    const response = await axios.post(
      url,
      {
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params: {
          user_name: name,
          user_email: email,
          user_subject: `Profile website-${subject} : This is from your profile website`,
          user_message: `Profile website-${describtion} : This is from your profile website`,
        },
      },
      {
        headers: {
          'origin': 'http://localhost',
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
}

  return (
    <section id='contact' className='contact'>
      <PageHeaderContent
        headerText="Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='contact_content'>
        
        <Animate
          play
          duration={1.1}
          delay={.8}
        
          start={{
            transform: 'translateX(-200px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
        >
          <h3 className='contact_content_header-text'>
            Let's Talk
          </h3>


        </Animate>


        <Animate
          play
          duration={1.1}
          delay={1.2}
        
          start={{
            transform: 'translateX(-1900px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
        >
          <div className='contact_content_form'>
            <div className='contact_content_form_controlsWrapper'>
              <div className='contact_content_form_controlsWrapper_labelInput'>
                <label htmlFor='name' className='nameLabel'>Name</label>
                <input required name="name" className='inputName' type={"text"} value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor='email' className='emailLabel'>Email</label>
                <input required name="email" className='inputEmail' type={"email"} value={formData.email} onChange={handleChange} />

              </div>
              <div>
                <label htmlFor='description' className='descriptionLabel'>Description</label>
                <input 
                required desc="description" 
                className='inputDescription' 
                type={"text"} 
                value={formData.desc} 
                onChange={handleChange} 
                col= "30"/>

              </div>

            </div>
            <Animate
          play
          duration={1.1}
          delay={1.8}
        
          start={{
            transform: 'translateX(-200px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
          
        >  
        <button onClick={handleSubmit}>Submit</button>
        </Animate>
          </div>

        </Animate>
        

      </div>


    </section>
  )
}
export default Contact;