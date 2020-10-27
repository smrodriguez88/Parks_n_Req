

module.exports = function(sequelize, DataTypes) { 
    let OperatingHours = sequelize.define("operatingHours", {
        //Hours data
    });

    OperatingHours.associate = function(models) {
        OperatingHours.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return OperatingHours;
};