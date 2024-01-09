function setDocumentTitle (title, templateEngine) {
    templateEngine.file.rename(title)
    return title;
}
module.exports = setDocumentTitle;