import {axios} from 'axios';

/*
* This function is used to connect to emailJS.com and send emails from this device
* */
async function sendEmail({
  name,
  email,
  subject,
  message
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
          user_message: `Profile website-${message} : This is from your profile website`,
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

// Example usage:
const emailData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  subject: 'Feedback',
  message: 'I really enjoyed the course. Thank you!',
};

sendEmail(emailData);
