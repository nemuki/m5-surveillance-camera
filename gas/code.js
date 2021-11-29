function myFunction() {

}

function doPost(e) {
  const data = Utilities.base64Decode(e.parameters.data);
  const nombreArchivo = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyyMMdd_HHmmss') + ".jpg";
  const blob = Utilities.newBlob(data, e.parameters.mimetype, nombreArchivo);

  // Save the photo to Google Drive
  const folders = DriveApp.getFoldersByName("ESP32");
  let folder
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder("ESP32");
  }
  folder.createFile(blob);
  return ContentService.createTextOutput('Complete')
}
