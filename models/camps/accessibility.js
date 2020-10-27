module.exports = function(sequelize, DataTypes) {
    let Accessibility = sequelize.define("accessibility", {
      //accessibility data
      wheelchairAccess: DataTypes.TEXT,
      internetInfo: DataTypes.STRING,
      cellPhoneInfo: DataTypes.STRING,
      fireStovePolicy: DataTypes.TEXT,
      rvAllowed: DataTypes.INTEGER,
      rvInfo: DataTypes.TEXT,
      rvMaxLength: DataTypes.INTEGER,
      additionalInfo: DataTypes.TEXT,
      trailerMaxLength: DataTypes.INTEGER,
      adaInfo: DataTypes.TEXT,
      trailerAllowed: DataTypes.INTEGER,
      accessRoads: DataTypes.JSON, //can i do that?,
      classifications: DataTypes.JSON
    });

    Accessibility.associate = function(models) {
        Accessibility.belongsTo(models.Camp, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return Accessibility;
};