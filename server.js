var express = require("express");
var PORT = process.env.PORT || 8085;
var app = express();
var db = require("./app_api/models");
// var burger = require("/../models/Burger.js");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var indexRoutes = require("./app_api/routes/index.routes")
var burgerRoutes = require("./app_api/routes/burger.routes");
// app.use(indexRoutes);  
app.use(burgerRoutes);
// app.use("/", routes);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: true }).then(function () {
  
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
  // return db.sequelize.createSchema({name: "real burger", devoured: "false"});

});



