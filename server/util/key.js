const { v4: uuidv4 } = require('uuid');

function getLink(link) {
  return uuidv4(link);
}

function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

module.exports = { getLink, isValidHttpUrl}
