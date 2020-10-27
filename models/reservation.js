module.exports = function(sequelize, DataTypes) { 
    let Reservation = sequelize.define("reservation", {
        uuid: Sequelize.STRING,
        date: sequelize.DATE,
        parkID: Sequelize.STRING
    });

    Reservation.associate = function(models) {
        Reservation.belongsTo(models.Park, {
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