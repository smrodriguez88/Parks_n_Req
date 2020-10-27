module.exports = function(sequelize, DataTypes) { 
    let Addresses = sequelize.define("addresses", {
        //Adress data
    });

    Addresses.associate = function(models) {
        Addresses.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return Addresses;
};