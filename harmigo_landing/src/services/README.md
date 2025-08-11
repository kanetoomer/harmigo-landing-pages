# Harmigo Services Documentation

## 1. Google Sheets Email Signup Integration

This service allows you to collect email signups from the landing page and store them in a Google Sheet.

When users submit their email through either the Hero or CTA forms on your landing page, their information will be sent to a Google Sheet. This is implemented using:

1. React form submissions in the Hero and CTA components
2. A service for handling API requests (`sheetsService.js`)
3. A Google Apps Script that processes the data and updates your Google Sheet

## Setup Instructions

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Rename the first sheet to "Email Signups" (or update the `SHEET_NAME` constant in `googleSheetsScript.js` to match your preferred name)
3. Add the following headers to the first row:
   - Email
   - Source
   - Date

### 2. Deploy the Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Delete any code in the default `Code.gs` file
4. Copy and paste the entire contents of `googleSheetsScript.js` into the editor
5. Click on the disk icon to save the project (give it a name like "Email Signup Handler")
6. **Important**: Connect your script to the spreadsheet:
   - Click on "Project Settings" (gear icon)
   - Under "Script Properties" click "Add script property"
   - Add a property with Name: "SPREADSHEET_ID" and Value: YOUR_SPREADSHEET_ID (from the URL of your Google Sheet)
   - Alternatively, make sure the script is bound to the spreadsheet by creating it from the spreadsheet itself (Extensions > Apps Script)
7. Deploy the web app:
   - Click "Deploy" > "New deployment"
   - Select type: "Web app"
   - Description: "Email Signup Handler"
   - Execute as: "Me"
   - Who has access: "Anyone" (for production) or "Anyone with Google account" (more secure)
   - Click "Deploy"
8. Copy the web app URL provided after deployment

### 3. Update the Service URL

1. Open `sheetsService.js`
2. Replace the `sheetApiUrl` value with your deployed web app URL
3. Make sure it ends with `/exec` (e.g., `https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec`)

## Testing

1. After deployment, open the web app URL directly in a browser with parameters to test:
   - `https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec?email=test@example.com&source=test`
   - If working correctly, you should see a JSON response and the email should appear in your spreadsheet

## Troubleshooting

### Email Not Appearing in Spreadsheet

1. **Check Script Access**: Make sure the script has permission to access and modify your spreadsheet
2. **Check Script Logs**: In the Google Apps Script editor, go to "Executions" to see detailed logs
3. **Test Direct Access**: Try accessing the web app URL directly with parameters as shown in the Testing section
4. **Script Binding**: The most reliable approach is to create the Apps Script from within your spreadsheet (Extensions > Apps Script)

### CORS Issues

The current implementation uses a "fire and forget" approach with `no-cors` mode. This means:
- The request will be sent to the Google Apps Script
- We can't read the actual response due to CORS limitations
- Success is assumed if no error occurs during the fetch

For production use, consider:
1. Using a proxy server to handle CORS
2. Setting up proper authentication
3. Implementing rate limiting to prevent abuse
- Check the browser console for any errors during form submission

## Additional Notes

- For production, consider implementing a more secure solution using server-side authentication
- The current implementation is intended for demonstration/beta purposes
- All submissions include a source tag ('hero' or 'cta') to track which form was used
