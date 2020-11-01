const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 8080;

const app = express();

var db = require("./models");

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// let routes = require("./routes/api-routes");

// app.use(routes);

require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
