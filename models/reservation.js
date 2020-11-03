module.exports = function(sequelize, DataTypes) { 
  let Reservation = sequelize.define("Reservation", {
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    parkCode: DataTypes.STRING,
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    vehicleMake: DataTypes.STRING,
    vehicleModel: DataTypes.STRING,
    vehicleYear: DataTypes.INTEGER,
    totalOccupants: DataTypes.INTEGER,
    pet: DataTypes.STRING
  });

  Reservation.associate = function(models) {
    Reservation.belongsTo(models.Camp, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Reservation;
};