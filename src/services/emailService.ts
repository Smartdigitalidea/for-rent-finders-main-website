
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID_CONTACT = 'your_contact_template_id'; // Replace with your contact form template ID
const EMAILJS_TEMPLATE_ID_SURVEY = 'your_survey_template_id'; // Replace with your survey form template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface SurveyFormData {
  name: string;
  email: string;
  phone?: string;
  city: string;
  budget: string;
  moveInDate: string;
  bedrooms: string;
  amenities?: string[];
  additionalNotes?: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message,
      to_email: 'your-email@gmail.com', // Replace with your Gmail address
      reply_to: formData.email,
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    console.log('Contact email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
};

export const sendSurveyEmail = async (formData: SurveyFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      city: formData.city,
      budget: formData.budget,
      move_in_date: formData.moveInDate,
      bedrooms: formData.bedrooms,
      amenities: formData.amenities?.join(', ') || 'None specified',
      additional_notes: formData.additionalNotes || 'None',
      to_email: 'your-email@gmail.com', // Replace with your Gmail address
      reply_to: formData.email,
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_SURVEY,
      templateParams
    );

    console.log('Survey email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Failed to send survey email:', error);
    return false;
  }
};

// Email template suggestions for EmailJS dashboard:

/*
CONTACT FORM TEMPLATE:
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

Best regards,
Your Website Contact Form

---

SURVEY FORM TEMPLATE:
Subject: New Apartment Search Survey from {{from_name}}

Hello,

You have received a new apartment search survey:

Personal Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}

Apartment Preferences:
- City: {{city}}
- Budget: {{budget}}
- Move-in Date: {{move_in_date}}
- Bedrooms: {{bedrooms}}
- Desired Amenities: {{amenities}}

Additional Notes:
{{additional_notes}}

Best regards,
Your Apartment Search Form
*/
