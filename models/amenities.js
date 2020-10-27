module.exports = function(sequelize, DataTypes) { 
    let Amenities = sequelize.define("amenities", {
      //amenities data
      trashRecyclingCollection: DataTypes.STRING,
      toilets: DataTypes.JSON,
      internetConnectivity: DataTypes.STRING,
      Showers: DataTypes.JSON,
      cellPhoneReception: DataTypes.STRING,
      laundry: DataTypes.STRING,
      amphitheater: DataTypes.STRING,
      dumpStation: DataTypes.STRING,
      campStore: DataTypes.STRING,
      staffOrVolunteerHostOnsite: DataTypes.STRING,
      potableWater: DataTypes.JSON,
      iceAvailableForSale: DataTypes.STRING,
      firewoodForSale: DataTypes.STRING,
      foodStorageLockers: DataTypes.STRING
    });

    Amenities.associate = function(models) {
        Amenities.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return Amenities;
};