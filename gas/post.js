function myFunction() {
  const today = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'YYYY-MM-dd')

  // Save the photo to Google Drive
  let rootFolder = DriveApp.getFolderById(env())
  let targetFolder = rootFolder.getFoldersByName(today)

  while (targetFolder.hasNext()) {
    let file = targetFolder.next();
    
    let fileName = file.getName();
    console.log(fileName);
  }
}

function doPost(e) {
  // Convert base64 image to JPEG
  const imageData = Utilities.base64Decode(e.parameters.data);
  const imageName = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'YYYY/MM/dd hh-mm-ss') + ".jpg";
  const blob = Utilities.newBlob(imageData, e.parameters.mimetype, imageName);
  const today = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'YYYY/MM/dd')

  // Save the photo to Google Drive
  let saveFolder, rootFolder = DriveApp.getFolderById(env())
  if (rootFolder.getFoldersByName(today).hasNext())
    saveFolder = rootFolder.getFoldersByName(today).next()
  else
    saveFolder = rootFolder.createFolder(today)
  saveFolder.createFile(blob)

  return ContentService.createTextOutput('Complete')
}
