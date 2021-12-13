function doGet() {
  return HtmlService.createTemplateFromFile('index.html').evaluate();
}