module.exports = function(sequelize, DataTypes) { 
  let Reservation = sequelize.define("reservation", {
    uuid: DataTypes.UUID,
    date: DataTypes.DATE,
    parkID: DataTypes.STRING
  });

  Reservation.associate = function(models) {
    Reservation.belongsTo(models.camp, {
      foreignKey: {
        allowNull: false
      }
    });

    Reservation.hasMany(models.userInfo, {
      foreignKey: {
        onDelete: "cascade"
      }
    });
  };

  return Reservation;
};