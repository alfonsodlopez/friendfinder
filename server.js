// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.static(path.join(__dirname, './app/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


/*app.get("/", (req, res) => {
  Sends a string to the client
  res.send("<h1>Working!</h1>");
});*/

var htmlRoute = require("./app/routing/htmlRoutes.js");
var apiRoute = require("./app/routing/apiRoutes.js")

app.get("/", htmlRoute.home);
app.get("/survey", htmlRoute.survey);
app.get("/api/friends", apiRoute.getFriends);
app.post("/api/friends", apiRoute.postFriends);

/*Starting server listening*/

app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});