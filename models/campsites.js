module.exports = function(sequelize, DataTypes) { 
    let Campsites = sequelize.define("campsites", {
        //campsite data
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