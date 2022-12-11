var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
// create express app
const app = express();
app.use(cors());
// Setup server port
const port = process.env.PORT || 3001;
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// Parse requests of content-type - application/json
app.use(bodyParser.json());
//Require employee routes
const websiteRoutes = require("./route-components/routeComponent");
//Using as middleware
app.use("/", websiteRoutes);
// Listen for requests
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
