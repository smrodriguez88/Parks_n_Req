module.exports = function(sequelize, DataTypes) { 
    let Addresses = sequelize.define("addresses", {
      //Adress data
      postalCode: DataTypes.INTEGER,
      city: DataTypes.STRING,
      stateCode: DataTypes.STRING,
      line1: DataTypes.STRING,
      line2: DataTypes.STRING,
      line3: DataTypes.STRING
    });

    Addresses.associate = function(models) {
        Addresses.belongsTo(models.Camp, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return Addresses;
};