const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

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
  _id: { type: String, default: uuidv4() },
});

const Links = mongoose.model("Links", LinkSchema);

module.exports = Links;