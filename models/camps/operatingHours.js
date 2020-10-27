

module.exports = function(sequelize, DataTypes) { 
    let OperatingHours = sequelize.define("operatingHours", {
      //Hours data
      exceptions: DataTypes.JSON,
      description: DataTypes.TEXT,
      standardHours: DataTypes.JSON
    });

    OperatingHours.associate = function(models) {
        OperatingHours.belongsTo(models.Camp, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return OperatingHours;
};