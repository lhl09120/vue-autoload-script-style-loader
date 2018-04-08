var fs = require('fs');

function getFilePathByRequest(request) {
  return request.split('vue-autoload-tag-loader/index.js!')[1];
}

function getFileNameByPath(path) {
  return path.split('/').reverse()[0];
}

function hasScriptTag(fileSource) {
  return /<script/.test(fileSource) && /<\/script>/.test(fileSource);
}

function hasStyleTag(fileSource) {
  return /<style/.test(fileSource) && /<\/style>/.test(fileSource);
}

function addScriptTagToSource(fileSource, filePath, fileName) {
  if (fs.existsSync(filePath.replace('\.vue', '.js'))) {
    return fileSource + '<script src="./' + fileName.replace('\.vue', '.js') + '"></script>';
  }
  return fileSource;
}

function addStyleTagToSource(fileSource, filePath, fileName) {
  if (fs.existsSync(filePath.replace('\.vue', '.less'))) {
    return fileSource + '<style rel="stylesheet" lang="less">@import "./' + fileName.replace('\.vue', '.less') +'";</style>';
  }
  if (fs.existsSync(filePath.replace('\.vue', '.sass'))) {
    return fileSource + '<style rel="stylesheet" lang="sass">@import "./' + fileName.replace('\.vue', '.sass') +'";</style>';
  }
  if (fs.existsSync(filePath.replace('\.vue', '.css'))) {
    return fileSource + '<style rel="stylesheet">@import "./' + fileName.replace('\.vue', '.css') + '";</style>';
  }
  return fileSource;
}

module.exports = function(source) {
  var filePath = getFilePathByRequest(this.request);
  var fileName = getFileNameByPath(filePath);
  if (!hasScriptTag(source)) {
    source = addScriptTagToSource(source, filePath, fileName);
  }
  if (!hasStyleTag(source)) {
    source = addStyleTagToSource(source, filePath, fileName);
  }
  return source;
}
