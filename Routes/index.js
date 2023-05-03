const pathUrl = require("../Helpers/path");

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.status(STATUS_CODES.SUCCESS).send("working just fine");
    //testing routes
  });

  app.use(pathUrl.BASE_URL, require("./Posts"));
};
