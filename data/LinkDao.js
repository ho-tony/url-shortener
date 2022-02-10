const Links = require("../model/Links");
const ApiError = require("../model/ApiError");
require("dotenv").config();


class LinkDao {
  constructor() {
    this.clients = [];
  }
  

  async create(link, shorturl) {
    if (link === undefined) {
      throw new ApiError(400, "Link cannot be empty!");
    }
    let linkObject = await Links.create({link, shorturl});
    return linkObject;
  
  }

  async read(code) {
    let linkObject = await Links.findOne({
      code
  })
    return linkObject;
  }
  
}

module.exports = LinkDao;
