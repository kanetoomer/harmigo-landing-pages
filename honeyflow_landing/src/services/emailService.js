/**
 * Service for sending contact form submissions via email
 * 
 * This service uses EmailJS to send form submissions to info@harmigo.com
 * 
 * IMPORTANT SETUP:
 * 1. In your EmailJS dashboard, make sure the template has {{to_email}} in the To field
 * 2. In your EmailJS template, include variables like {{subject}}, {{from_name}}, etc.
 * 3. The recipient email address is controlled by the to_email parameter
 */

/**
 * Send contact form data to info@harmigo.com
 * @param {Object} formData - The contact form data
 * @returns {Promise<{success: boolean}>} - A promise resolving to the success status
 */
export const sendContactForm = async (formData) => {
  try {
    console.log('Sending contact form data:', formData);
    
    // Try multiple approaches to ensure email delivery
    
    // APPROACH 1: EmailJS with explicit configuration
    const PUBLIC_KEY = "npr23FayT7rJpdJ0g";
    const SERVICE_ID = "service_5ntwiqg";
    const TEMPLATE_ID = "template_w4h37f8";
    
    // Include EmailJS library if not already loaded
    if (typeof emailjs === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.async = true;
      document.body.appendChild(script);
      
      // Initialize with public key
      await new Promise((resolve) => {
        script.onload = () => {
          window.emailjs.init(PUBLIC_KEY);
          resolve();
        };
      });
    } else if (window.emailjs && !window.emailjs.initialized) {
      window.emailjs.init(PUBLIC_KEY);
    }
    
    // Prepare a detailed message
    const messageText = `
      Name: ${formData.firstName || ''} ${formData.lastName || ''}
      Email: ${formData.email}
      Company: ${formData.company || 'Not provided'}
      Phone: ${formData.phone || 'Not provided'}
      Message: ${formData.message}
    `;
    
    // Send email using the EmailJS SDK with all possible parameters
    const result = await window.emailjs.send(
      SERVICE_ID, 
      TEMPLATE_ID,
      {
        // Standard EmailJS template variables
        to_name: "Harmigo Team",
        to_email: "info@harmigo.com",
        from_name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
        from_email: formData.email,
        reply_to: formData.email,
        message_html: messageText.replace(/\n/g, '<br>'),
        message: messageText,
        subject: `Contact form submission from ${formData.firstName || ''} ${formData.lastName || ''}`,
        
        // Include all form fields separately as well
        firstName: formData.firstName || '',
        lastName: formData.lastName || '',
        name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
        email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided'
      }
    );
      
    // APPROACH 2: Also send via backup service as redundancy
    try {
      // Send a backup notification to ensure delivery
      await fetch('https://formsubmit.co/info@harmigo.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
          email: formData.email,
          company: formData.company || 'Not provided',
          phone: formData.phone || 'Not provided',
          message: formData.message
        })
      });
    } catch (backupError) {
      console.log('Backup notification failed, but primary may have succeeded:', backupError);
    }
    
    console.log('Email sent successfully:', result);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message || 'Failed to send email' };
  }
};
