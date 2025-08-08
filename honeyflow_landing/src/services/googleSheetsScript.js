const SHEET_NAME = "Email Signups";
const HEADERS = ["Email", "Source", "Date", "IP Address"];

function doGet(e) {
  try {
    if (!e || !e.parameter || !e.parameter.email) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "Missing required parameters"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const email = e.parameter.email;
    const source = e.parameter.source || "unknown";
    const date = e.parameter.date || new Date().toISOString();
    const ipAddress = e.parameter.userAgent || "unknown";

    if (!validateEmail(email)) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "Invalid email address"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const result = addEmailToSheet(email, source, date, ipAddress);

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Email added successfully",
      data: result
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Error: " + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function addEmailToSheet(email, source, date, ipAddress) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet(); // ✅ using active sheet
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
    }

    const firstCellValue = sheet.getRange(1, 1).getValue();
    if (firstCellValue !== HEADERS[0]) {
      sheet.insertRowBefore(1);
      sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    }

    const rowData = [email, source, date, ipAddress];
    sheet.appendRow(rowData);

    return {
      email,
      source,
      date,
      ipAddress,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    throw new Error('Failed to add email to sheet: ' + error.toString());
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
