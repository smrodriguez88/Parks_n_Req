module.exports = function(sequelize, DataTypes) { 
    let Campsites = sequelize.define("campsites", {
      //campsite data
      totalSites: DataTypes.INTEGER,
      group: DataTypes.INTEGER,
      horse: DataTypes.INTEGER,
      tentOnly: DataTypes.INTEGER,
      electricalHookups: DataTypes.INTEGER,
      rvOnly: DataTypes.INTEGER,
      walkBoatTo: DataTypes.INTEGER,
      other: DataTypes.INTEGER
    });

    Campsites.associate = function(models) {
        Campsites.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return Campsites;
};