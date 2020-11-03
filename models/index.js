"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
let basename = path.basename(module.filename);
let env = process.env.NODE_ENV || "development";
let config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (process.env.JAWSDB_URL) {
  // for Heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL, {});
} else {
  const env = process.env.NODE_ENV || "development";
  // const config = path.resolve(__dirname, "..", "config", "config.json")[env];
  let config = require(__dirname + "/../config/config.json")[env];
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// if (config.use_env_letiable) {
//   var sequelize = new Sequelize(process.env[config.use_env_letiable]);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);

// }

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    let model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


















