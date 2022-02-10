// Do NOT make any changes to this file!

const page = (title, body) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
  </head>
  <body>
    ${body}
  </body>
  </html>
  `;
};

const index = () => {
  const title = "URL Shortener";
  const body = `  <h3>Please enter your link: </h3>
  <form method="post">
    <label for="Link">Link</label>
    <input type="link" name="link" id="link"/>
    <input type="submit"/>
  </form>`;

  return page(title, body);
};


const confirm = (link, successfull) => {
  const title = "Confirmation";
  const body = successfull
    ? `  <h3>Successful registration! 🎉</h3>
  <h4>Your Link is https://tho19-url-shorten.herokuapp.com/${link}</h4>
  `
    : `
  <h3>Sorry! Something went wrong!!</h3>
  <h4>Please try again later, ${link}!</h4>
  `;
  return page(title, body);
};

module.exports = { index, confirm };
