function doPost(e) {
  var data = Utilities.base64Decode(e.parameters.data);
  var nombreArchivo = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyyMMdd_HHmmss') + ".jpg";
  var blob = Utilities.newBlob(data, e.parameters.mimetype, nombreArchivo);

  // Save the photo to Google Drive
  var folder, folders = DriveApp.getFoldersByName("ESP32");
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder("ESP32");
  }
  var file = folder.createFile(blob);
  return ContentService.createTextOutput('Completo')
}