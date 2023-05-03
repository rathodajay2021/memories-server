require("dotenv").config();
const express = require("express");
const cors = require("cors");
const language = require("i18n");
const mongoose = require("mongoose");

/*-----------------DEFINE VARIABLES && SETUP BASIC SETTINGS-----------------*/
const app = express();
const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
  "mongodb+srv://Ajay:Reset123@mongodbcluster.nmhqxil.mongodb.net/memories";
require("./Config/globals");

/*-----------------GLOBAL MIDDLEWARE-----------------*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/*-----------------MULTILINGUAL SETUP-----------------*/
language.configure({
  locales: ["en"],
  defaultLocale: "en",
  autoReload: true,
  directory: __dirname + "/Locales",
  queryParameter: "lang",
  objectNotation: true,
  syncFiles: true,
});
app.use(language.init);

/*-----------------RESPONSE HANDLER-----------------*/
app.use((req, res, next) => {
  const ResponseHandler = require("./Config/responseHandler");
  res.handler = new ResponseHandler(req, res);
  next();
});

// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     return next(err);
//   }
//   res.handler.serverError(err);
// });

/*-----------------ROUTES-----------------*/
const appRoutes = require("./Routes");
appRoutes(app);

/*-----------------MONGOOSE & APP CONNECTION-----------------*/
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server is running on \nhttp://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log("app.js mongoose connect error", error));
