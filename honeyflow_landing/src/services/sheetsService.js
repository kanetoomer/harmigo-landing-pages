/**
 * Service for submitting email addresses to a Google Sheet
 * 
 * This service uses the Google Sheets API to append email addresses to a spreadsheet
 * that tracks early signups from different form locations on the site.
 */

/**
 * Submits an email address to a Google Sheet
 * @param {string} email - The email address to submit
 * @param {string} source - The source/location of the form (e.g., 'hero', 'cta')
 * @returns {Promise<{success: boolean}>} - A promise resolving to the success status
 */
export const submitEmailToGoogleSheet = async (email, source) => {
  try {
    // Using direct fetch with no-cors mode instead of JSONP
    // This will submit the data but we won't be able to read the response due to CORS
    // Google Sheets Web App URL - replace this with your actual deployed Google Apps Script web app URL
    const sheetApiUrl = 'https://script.google.com/macros/s/AKfycbwPap6tdPH6aC-Tyg9Wr1T7iSBThcR6_IJPeTZUkScrKsVSAXnFbbxQ1dyP40FMhdAQyQ/exec';
    
    // Get current date in ISO format
    const submissionDate = new Date().toISOString();
    
    // Prepare data as URLSearchParams
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('source', source);
    params.append('date', submissionDate);
    
    console.log('Submitting to Google Sheet:', { email, source, submissionDate });
    
    // We'll use a "fire and forget" approach with no-cors mode
    // This will allow the request to be sent, but we won't be able to read the response
    // Instead, we'll assume success if no error is thrown during fetch
    await fetch(`${sheetApiUrl}?${params.toString()}`, {
      method: 'GET',
      mode: 'no-cors', // This allows the request to be sent cross-origin without CORS headers
    });
    
    console.log('Email submission request sent successfully');
    
    // Since we can't read the response with no-cors mode, we assume success if we get here
    return { success: true };
  } catch (error) {
    console.error('Error submitting to Google Sheet:', error);
    return { success: false, error: error.message };
  }
};
