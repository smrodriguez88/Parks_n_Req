// Dependencies
let db = require("../models")
const { Op } = require("sequelize");

// Routes
// =============================================================
module.exports = function(app) {
  // Add sequelize code to get all parks and return them as JSON
  app.get("/api/all", function(req, res) {
    db.Park.findAll({}).then(function(results){
      res.json(results);
    })
  });
  // Add sequelize code to get all camps and return them as JSON
  app.get("/api/all", function(req, res) {
    db.Camp.findAll({}).then(function(results){
      res.json(results);
    })
  });


  // Add sequelize code to get a specific park and return it as JSON
  app.get("/api/park/:park", cors(corsOptions), function(req, res) {
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
    db.Reservation.create({
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    //   parkCode: req.body.parkCode, 
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      vehicleMake: req.body.vehicleMake,
      vehicleModel: req.body.vehicleModel,
      vehicleYear: req.body.vehicleYear,
      totalOccupants: req.body.totalOccupants,
      pet: req.body.pet,
    }).then(function(results){
      res.end();
    })
  });

};
