const mongoose = require("mongoose");
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 10 });


const URI = `mongodb+srv://tonyho:BDi3pVuMftow761Y@cluster0.dakpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const LinkSchema = new mongoose.Schema({
  link: { type: String, required: true },
  id: { type: String, default: uid() },
});

const Links = mongoose.model("Links", LinkSchema);

module.exports = Links;