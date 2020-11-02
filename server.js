const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const app = express();
var db = require("./models");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
// let routes = require("./routes/api-routes");

// app.use(routes);

require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    require("./controllers/parks_controller.js");
    app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
