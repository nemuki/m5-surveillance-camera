function myFunction() {
  const today = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'YYYY-MM-dd')

  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getActiveSheet()

  // Save the photo to Google Drive
  let saveFolder, rootFolder = DriveApp.getFolderById(env())
  let folders = rootFolder.getFolders();
  for (key in folders) {
    Logger.log()
  }
  if (rootFolder.getFoldersByName(today).hasNext())
    saveFolder = rootFolder.getFoldersByName(today).next()
  else
    saveFolder = rootFolder.createFolder(today)
  sheet.appendRow([new Date(), saveFolder.getId()])
}

function doPost(e) {
  // Convert base64 image to JPEG
  const imageData = Utilities.base64Decode(e.parameters.data);
  const imageName = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'YYYY/MM/dd hh-mm-ss') + ".jpg";
  const blob = Utilities.newBlob(imageData, e.parameters.mimetype, imageName);

  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getActiveSheet()

  // Save the photo to Google Drive
  const today = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'YYYY/MM/dd')
  let saveFolder, rootFolder = DriveApp.getFolderById(env())
  if (rootFolder.getFoldersByName(today).hasNext())
    saveFolder = rootFolder.getFoldersByName(today).next()
  else
    saveFolder = rootFolder.createFolder(today)
  let saveFile = saveFolder.createFile(blob)

  sheet.appendRow([new Date(), saveFolder.getId(), saveFile.getUrl()])

  return ContentService.createTextOutput('Complete')
}
