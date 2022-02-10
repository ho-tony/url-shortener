const Links = require("../model/Links");
const ApiError = require("../model/ApiError");

class LinkDao {
  constructor() {
    this.clients = [];
  }
  

  async create({ link, shortened }) {
    if (link === undefined || shortened === "") {
      throw new ApiError(400, "Link cannot be empty!");
    }
    
    const linkObject = await Links.create({ link, shortened });
    return linkObject;
  }

  async read(id) {
    const linkObject = Links.findById(id);
    return linkObject;
  }
  
}

module.exports = LinkDao;
