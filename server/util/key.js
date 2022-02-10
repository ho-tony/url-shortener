const ShortUniqueId = require('short-unique-id');


function getLink() {
  const uid = new ShortUniqueId({ length: 10 });
  uid();
  return uid();
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
