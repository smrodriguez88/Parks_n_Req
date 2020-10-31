module.exports = function(sequelize, DataTypes) { 
  let Reservation = sequelize.define("Reservation", {
    uuid: DataTypes.UUID,
    date: DataTypes.DATE,
    parkID: DataTypes.STRING
  });

  Reservation.associate = function(models) {
    Reservation.belongsTo(models.Camp, {
      foreignKey: {
        allowNull: false
      }
    });

    Reservation.hasMany(models.UserInfo, {
      foreignKey: {
        onDelete: "cascade"
      }
    });
  };

  return Reservation;
};