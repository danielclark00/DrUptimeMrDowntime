require("dotenv").config(); // Use dotenv to load .env file

// Global variables
global.__basedir = __dirname;
global.__scriptsDir = __dirname + "/scripts";
global.__serverUrl = process.env.serverUrl;
global.__env = process.env;

// Process some .env paramaters
require(`./scripts/setupParams.js`);

// Imports
const express = require("express");
const app = express();
const path = require("path");
var session = require("express-session");
const initRoutes = require("./scripts/router");

// Serve /apidocs if .env enables it
if (process.env.serveDocs == "true") { const swaggerUi = require('swagger-ui-express'); swaggerDocument = require("./swagger.json"); app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); console.log(`API Docs are being served: ${__serverUrl}/apidocs`); }
app.use(
  session({ resave: false, saveUninitialized: false, secret: "superfuntest", cookie: { maxAge: 3600000, secure: false } })
); // Configure Express to use sessions, used for tracking user logins
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "views/static"))); // Create static route (for stylesheets and assets)
initRoutes(app); // Initialize routes
app.set("view engine", "ejs"); // Use ejs for templating

// Start server
app.listen(process.env.port, () => {
  console.log(`Webserver is running @ ${__serverUrl}`);
});
