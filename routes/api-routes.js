// Dependencies
let db = require("../models")
const { Op } = require("sequelize");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function (req, res){
    res.sendFile('home.html', { root: __dirname }); 
  })
  // Add sequelize code to get all parks and return them as JSON
  app.get("/api/all", function(req, res) {
    db.Park.findAll({}).then(function(results){
      res.json(results);
    })
  });

  // Add sequelize code to get a specific park and return it as JSON
  app.get("/api/park/:park", function(req, res) {
    db.Park.findAll({
      where: {
        parkCode: req.params.park
      }
    }).then(function(results){
      res.json(results);
    });
  });

  // Add sequelize code to get a specific camp and return it as JSON
  app.get("/api/camp/:camp", function(req, res) {
    db.Camp.findAll({
      where: {
        parkCode: req.params.camp
      }
    }).then(function(results){
      res.json(results);
    });
  });

  // Add sequelize code to create a reservation
  app.post("/api/reservations/new", function(req, res) {
    db.Reservation.create(req.body
    ).then(function(results){
      res.end();
    })
  });

    // Add sequelize code to get all reservations for a specific email address and return it as JSON
    app.get("/api/reservations/:email", function(req, res) {
      db.Reservation.findAll({
        where: {
          email: req.params.email
        }
      }).then(function(results){
        res.json(results);
      });
    });
};
