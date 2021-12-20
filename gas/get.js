function getData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getActiveSheet()
  const rows = sheet.getDataRange().getValues();
  const keys = rows.splice(0, 1)[0];
  return rows.map(function (row) {
    let obj = {}
    row.map((item, index) => {
      obj[keys[index]] = item;
    });
    return obj;
  });
}

function doGet(e) {
  if (e.parameters.date) {
    const data = getData();
    return ContentService.createTextOutput(JSON.stringify(data, null, 2))
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  } else {
    return HtmlService.createHtmlOutputFromFile('index');
  }
}