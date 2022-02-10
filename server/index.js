const express = require("express");
const { index, confirm } = require("./views/pages");

const LinkDao = require("../data/LinkDao.js");
const app = express();
const port = process.env.PORT || 5050;
const links = new LinkDao();
const mongoose = require("mongoose");
const ShortUniqueId = require('short-unique-id');
let uid = new ShortUniqueId({ length: 10 });






const URI = `mongodb+srv://tonyho:BDi3pVuMftow761Y@cluster0.dakpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
async function connect() {  
try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }
}

connect();



app.use(express.urlencoded({ extended: false }));



app.get("/", (_req, res) => {
  res.send(index());
});

app.post("/", async (req, res) => {
  let { link } = req.body;

  if (!/^https?:\/\//i.test(link)) {
    link = 'http://' + link;
  }
  
  let data = await links.create(link, uid().toString());
  return res.send(confirm(data.shorturl, true));  
 
});

app.get("/:short", async (req, res, next) => {
  const { short } = req.params;
  let link;
  try {
    link = await links.read(short);
  } catch (err) {
    return res.status(400).send({ message: "Invalid Link! " + link });
  }
  if (link != null || link != undefined) {

    return res.redirect(link.link);
  } else {
    return res.status(400).send({ message: "Invalid Link! " + link });
  }

});

app.listen(port, () => {
  console.log(`Express app listening at port: http://localhost:${port}/`);
});
